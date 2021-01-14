using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NewDirectionConstruction.Data;
using NewDirectionConstruction.Models;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace NewDirectionConstruction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;
        private readonly string _apiKey;
        private readonly WebProxy _webProxy;
        private readonly SendGridClient _client;
        private readonly EmailAddress _from;
        private readonly ContactInfoContext _context;

        public ContactController(ILogger<ContactController> logger, ContactInfoContext context)
        {
            _logger = logger;
            _apiKey = "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";
            _webProxy = new WebProxy("http://winproxy.server.lan:3128/", true);
            _client = new SendGridClient(_webProxy, _apiKey);
            _from = new EmailAddress("ndc.site@new-direction-construction.com");
            _context = context;

            // Uncomment for Dev testing
            if (true)
                _client = new SendGridClient(_apiKey);
        }

        [HttpGet]
        public async Task<IEnumerable<ContactInfo>> Get()
        {
            IEnumerable<ContactInfo> contacts = null;

            try
            {
                contacts = await _context.Contacts.ToListAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed reading Contacts");
            }

            return contacts;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ContactInfo contactInfo)
        {
            if (contactInfo is null)
            {
                throw new ArgumentNullException(nameof(contactInfo));
            }

            var contactName = contactInfo.CustomerName;
            var contactPhone = contactInfo.CustomerPhone;
            var contactEmail = contactInfo.CustomerEmail;
            var contactMessage = contactInfo.CustomerMessage;
            contactInfo.DateSent = DateTime.Now;

            await SaveContact(contactInfo);

            _logger.LogInformation($"Sending email from: {contactName} email: {contactEmail} phone: {contactPhone} message: {contactMessage}");                                    
            
            var subject = @"LEAD! Customer email";

            //var to = new List<EmailAddress> { new EmailAddress("4xhelp@gmail.com") };
            var to = new List<EmailAddress> { new EmailAddress("cameron.j.church@gmail.com") };

            //var to = new EmailAddress("4xhelp@gmail.com");
            //var to = new EmailAddress("cameron.j.church@gmail.com");

            var htmlContent = $@"<p>{contactMessage}</p><b>Name: {contactName}</b><br/><b>Email: {contactEmail}</b><br/><b>Phone: {contactPhone}</b>";
            var message = MailHelper.CreateSingleEmailToMultipleRecipients(_from, to, subject, contactMessage, htmlContent);

            await SendMessageAsync(message);

            await SendAck(contactName, contactEmail);            

            return Ok();
        }

        private async Task SaveContact(ContactInfo contactInfo)
        {
            try
            {
                _context.Contacts.Add(contactInfo);
                await _context.SaveChangesAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed saving contactInfo");
            }
        }

        private async Task SendAck(string contactName, string contactEmail)
        {
            _logger.LogInformation($"Sending ACK email to: {contactName} email: {contactEmail}");

            var to = new EmailAddress(contactEmail);
            var message = new SendGridMessage();

            message.AddTo(to);
            message.SetFrom(_from);
            message.SetTemplateId("d-9577827f89be48c490a3e070ef1a1fec");

            var templateData = new TemplateData { Name = contactName };
            message.SetTemplateData(templateData);

            await SendMessageAsync(message);
        }

        private async Task SendMessageAsync(SendGridMessage message)
        {
            var response = await _client.SendEmailAsync(message);

            _logger.LogInformation($"Email sent statusCode: {response.StatusCode} headers: {response.Headers} body: {await response.Body.ReadAsStringAsync()}");
        }

        private class TemplateData
        {
            [JsonProperty("name")]
            public string Name { get; set; }
        }
    }
}
