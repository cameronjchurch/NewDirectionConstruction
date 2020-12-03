using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Threading;

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
        // ndctest-1606247051728-5e4e3677b40c
        // https://drive.google.com/drive/folders/1kHjmouVGEahgDuKbmUFpVLoCt8Nr8kWr?usp=sharing
        // client_secret_382421731231-4k9nmnurunbkq7lps23vh4o4pc88t5db.apps.googleusercontent.com.json
        async Task GetFiles()
        {
            //GoogleCredential credential;
            //using (var stream = new FileStream("ndctest-1606247051728-5e4e3677b40c.json", FileMode.Open, FileAccess.Read))
            //{
            //    credential = (await GoogleCredential.FromStreamAsync(stream, CancellationToken.None)).CreateScoped(new[] { DriveService.Scope.Drive, DriveService.Scope.DriveFile });
            //    //credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
            //    //    GoogleClientSecrets.Load(stream).Secrets,
            //    //    new[] { DriveService.Scope.DriveFile },
            //    //    "user", CancellationToken.None
            //    //    );
            //}

            //var service = new DriveService(new BaseClientService.Initializer
            //{
            //    ApplicationName = "NDCTest",
            //    HttpClientInitializer = credential
            //});

            UserCredential credential;
            using (var stream = new FileStream("client_secret_382421731231-4k9nmnurunbkq7lps23vh4o4pc88t5db.apps.googleusercontent.com.json", FileMode.Open, FileAccess.Read))
            {
                //credential = (await GoogleCredential.FromStreamAsync(stream, CancellationToken.None)).CreateScoped(new[] { DriveService.Scope.Drive, DriveService.Scope.DriveFile });
                credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    new[] { DriveService.Scope.Drive, DriveService.Scope.DriveFile },
                    "user", CancellationToken.None
                    );
            }

            var service = new DriveService(new BaseClientService.Initializer
            {
                ApplicationName = "NDCTest",
                HttpClientInitializer = credential
            });

            //var service = new DriveService(new BaseClientService.Initializer
            //{
            //    ApplicationName = "NDCTest",
            //    ApiKey = "AIzaSyCEpRZ6hbbk-Z_UMpN-G5aJ6O_2Vqf_7iA"
            //});

            var drives = service.Drives.List();
            

            var found = await drives.ExecuteAsync();

            var ds = service.Drives.Get("1kHjmouVGEahgDuKbmUFpVLoCt8Nr8kWr");
            //var ds = service.Drives.Get("root");
            var contents = await ds.ExecuteAsync();

            var listRequest = service.Files.Get("1kHjmouVGEahgDuKbmUFpVLoCt8Nr8kWr");
                      
            var files = await listRequest.ExecuteAsync();

            var result = service.Drives;
        }
    }
}
