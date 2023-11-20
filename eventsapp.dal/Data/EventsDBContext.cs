using Microsoft.EntityFrameworkCore;

namespace eventsapp.dal.Data
{
    public class EventsDBContext:DbContext
    {
        public EventsDBContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}