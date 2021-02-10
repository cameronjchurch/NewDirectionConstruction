using Microsoft.EntityFrameworkCore;
using NewDirectionConstruction.Models;

namespace NewDirectionConstruction.Data
{
    public partial class ContactInfoContext : DbContext
    {
        public ContactInfoContext()
        {
        }

        public ContactInfoContext(DbContextOptions<ContactInfoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ContactInfo> Contacts { get; set; }
    }
}
