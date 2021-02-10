using Microsoft.EntityFrameworkCore;
using NewDirectionConstruction.Models;

namespace NewDirectionConstruction.Data
{
    public partial class ImageInfoContext : DbContext
    {
        public ImageInfoContext()
        {
        }

        public ImageInfoContext(DbContextOptions<ImageInfoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ImageInfo> Images { get; set; }
    }
}
