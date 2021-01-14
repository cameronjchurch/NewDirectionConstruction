using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NewDirectionConstruction.Data;
using NewDirectionConstruction.Models;
using NewDirectionConstruction.Models.Configuration;
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
        private readonly EmailAddress _to;
        private readonly EmailAddress _from;
        private readonly ContactInfoContext _context;
        private readonly SendGridConfiguration _emailConfiguration;
        private readonly string _ackTemplateId;

        public ContactController(ILogger<ContactController> logger, ContactInfoContext context, IOptions<SendGridConfiguration> emailOptions, IConfiguration configuration)
        {
            _logger = logger;                       
            _context = context;
            _emailConfiguration = emailOptions.Value;
            _apiKey = _emailConfiguration.ApiKey;
            _to = new EmailAddress(_emailConfiguration.To);
            _from = new EmailAddress(_emailConfiguration.Sender);
            _ackTemplateId = _emailConfiguration.AckTemplateId;
            _webProxy = new WebProxy(_emailConfiguration.WebProxy, true);
            _client = new SendGridClient(_webProxy, _apiKey);

            // Uncomment for Dev testing
            if (configuration["Environment"].ToLower().Equals("dev"))
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

            var htmlContent = $@"<p>{contactMessage}</p><b>Name: {contactName}</b><br/><b>Email: {contactEmail}</b><br/><b>Phone: {contactPhone}</b>";

            var message = MailHelper.CreateSingleEmail(_from, _to, subject, contactMessage, htmlContent);

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
            message.SetTemplateId(_ackTemplateId);

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
