using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NewDirectionConstruction.Models;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace NewDirectionConstruction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
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

            var apiKey = @"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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(contactEmail, contactName);
            var subject = @"LEAD! Customer email";

            var to = new List<EmailAddress> { new EmailAddress("4xhelp@gmail.com"), new EmailAddress("cameron.j.church@gmail.com") };

            //var to = new EmailAddress("4xhelp@gmail.com");
            //var to = new EmailAddress("cameron.j.church@gmail.com");

            var htmlContent = $@"<p>{contactMessage}</p><b>Phone: {contactPhone}</b>";
            var message = MailHelper.CreateSingleEmailToMultipleRecipients(from, to, subject, contactMessage, htmlContent);

            var response = await client.SendEmailAsync(message);

            return Ok();
        }
    }
}
