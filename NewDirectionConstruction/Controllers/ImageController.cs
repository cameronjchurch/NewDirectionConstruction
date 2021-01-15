using System;
using System.Collections.Generic;
using System.IO;
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

        [HttpPost]
        public async Task<IActionResult> Post([FromForm]ImageInfoViewModel imageViewModel)
        {
            var file = imageViewModel.File;

            try
            {
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    imageViewModel.Contents = memoryStream.ToArray();
                }

                _context.Images.Add(new ImageInfo
                {
                    Title = imageViewModel.Title,
                    Contents = imageViewModel.Contents
                });
                await _context.SaveChangesAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed saving image");
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var imageInfo = new ImageInfo { Id = id };

            try
            {
                _context.Images.Attach(imageInfo);
                _context.Images.Remove(imageInfo);
                await _context.SaveChangesAsync();
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Failed deleting image");
            }

            return Ok();
        }
    }
}
