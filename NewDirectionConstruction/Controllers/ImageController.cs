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
    public class ImageController : ControllerBase
    {
        private readonly ILogger<ImageController> _logger;
        private readonly ImageInfoContext _context;        

        public ImageController(ILogger<ImageController> logger, ImageInfoContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<ImageInfo>> Get()
        {
            /*
             * TODO 
             * Get top x number and paging             
             */

            IEnumerable<ImageInfo> images = null;

            try
            {
                images = await _context.Images.ToListAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed reading NDCLog");
            }

            return images;
        }
    }
}
