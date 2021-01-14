using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NewDirectionConstruction.Data;
using NewDirectionConstruction.Models;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace NewDirectionConstruction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly ILogger<LogController> _logger;
        private readonly NDCContext _context;        

        public LogController(ILogger<LogController> logger, NDCContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ContactInfo contactInfo)
        {      
            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<Ndclog>> Get()
        {
            IEnumerable<Ndclog> logEntries;

            logEntries = await _context.Ndclogs.ToListAsync();

            return logEntries;
        }
    }
}
