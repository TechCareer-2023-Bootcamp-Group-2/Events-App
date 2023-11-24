using System.Linq;
using System.Threading.Tasks;
using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Math.EC.Rfc7748;

namespace eventsapp.dal.Concrete
{
    public class EventTypesRepository : GenericRepository<EventTypes,int>,IEventTypesRepitory
    {
        public EventTypesRepository(EventsDBContext ctx) : base(ctx)
        {
        }

        public async Task<EventTypes> GetByEventTypeNameAsync(string eventsTypeName)
        {
            return await _dbSet.Where(et=>et.EventType==eventsTypeName).FirstOrDefaultAsync();
        }
    }
}