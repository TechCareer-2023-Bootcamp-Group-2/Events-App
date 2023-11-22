using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.dal.Concrete
{
    public class EventTypesRepository : GenericRepository<EventTypes,int>,IEventTypesRepitory
    {
        public EventTypesRepository(EventsDBContext ctx) : base(ctx)
        {
        }
    }
}