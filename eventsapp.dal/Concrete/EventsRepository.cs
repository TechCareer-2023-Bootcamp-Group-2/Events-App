using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.dal.Concrete
{
    public class EventsRepository : GenericRepository<Events>,IEventsRepository
    {
        public EventsRepository(EventsDBContext ctx) : base(ctx)
        {
        }
    }
}