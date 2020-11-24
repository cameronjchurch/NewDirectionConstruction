using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewDirectionConstruction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoogleDriveController : ControllerBase
    {
        private readonly ILogger<GoogleDriveController> _logger;

        public GoogleDriveController(ILogger<GoogleDriveController> logger) 
        {
            _logger = logger;
        }

        public async Task<ActionResult> Get() 
        {
            await GetFiles();
            return Ok("Some file list");
        }

        // AIzaSyCEpRZ6hbbk-Z_UMpN-G5aJ6O_2Vqf_7iA
        async Task GetFiles()
        {
            var service = new DriveService(new BaseClientService.Initializer
            {
                ApplicationName = "NDC Web",
                ApiKey = "AIzaSyCEpRZ6hbbk-Z_UMpN-G5aJ6O_2Vqf_7iA"
            });

            var result = service.Drives;
        }
    }
}
