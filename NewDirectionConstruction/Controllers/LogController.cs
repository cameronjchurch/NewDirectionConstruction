using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NewDirectionConstruction.Data;
using NewDirectionConstruction.Models;

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

        [HttpGet]
        public async Task<IEnumerable<Ndclog>> Get()
        {
            /*
             * TODO 
             * Get top x number and paging             
             */

            IEnumerable<Ndclog> logEntries = null;

            try
            {
                logEntries = await _context.Ndclogs.ToListAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed reading NDCLog");
            }

            return logEntries;
        }
    }
}
