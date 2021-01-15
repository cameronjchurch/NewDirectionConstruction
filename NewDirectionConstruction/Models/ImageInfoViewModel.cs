using Microsoft.AspNetCore.Http;

namespace NewDirectionConstruction.Models
{
    public class ImageInfoViewModel : ImageInfo
    {
        public IFormFile File { get; set; }
    }
}
