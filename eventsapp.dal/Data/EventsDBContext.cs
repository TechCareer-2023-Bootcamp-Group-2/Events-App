using eventsapp.dal.Configurations;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.dal.Data
{
    public class EventsDBContext:DbContext
    {
        public EventsDBContext(){}
        public EventsDBContext(DbContextOptions<EventsDBContext> options) : base(options)
        {

        }
        public DbSet<Events> Events{get; set;}
        public DbSet<EventImages> EventImages {get;set;}
        public DbSet<EventTypes> EventTypes {get;set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}