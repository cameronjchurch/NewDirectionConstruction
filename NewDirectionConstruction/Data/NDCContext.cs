using Microsoft.EntityFrameworkCore;
using NewDirectionConstruction.Models;

namespace NewDirectionConstruction.Data
{
    public partial class NDCContext : DbContext
    {
        public NDCContext()
        {
        }

        public NDCContext(DbContextOptions<NDCContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ndclog> Ndclogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Ndclog>(entity =>
            {
                entity.ToTable("NDCLog");

                entity.Property(e => e.Exception).IsRequired();

                entity.Property(e => e.Level)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.LogTime).HasColumnType("datetime");

                entity.Property(e => e.Logger).IsRequired();

                entity.Property(e => e.Message).IsRequired();

                entity.Property(e => e.Stacktrace).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
