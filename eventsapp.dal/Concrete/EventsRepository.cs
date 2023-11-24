using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.dal.Concrete
{
    public class EventsRepository : GenericRepository<Events,int>,IEventsRepository
    {
        public EventsRepository(EventsDBContext ctx) : base(ctx)
        {
        }

        public async Task<IEnumerable<Events>> GetByEventTypeAsync(EventTypes eventTypes)
        {
            return await _dbSet.Where(e=>e.EventType==eventTypes).ToListAsync();
        }

        public async Task<IEnumerable<Events>> GetPopularAsync()
        {
            return await _dbSet.Where(e=>e.isPopular==true).ToListAsync();
        }
    }
}