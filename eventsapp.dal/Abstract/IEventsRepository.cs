using System.Collections.Generic;
using System.Threading.Tasks;
using eventsapp.entity;
using shopapp.data.Abstract;

namespace eventsapp.dal.Abstract
{
    public interface IEventsRepository : IRepository<Events, int>
    {
        Task<IEnumerable<Events>> GetPopularAsync();
        Task<IEnumerable<Events>> GetByEventTypeAsync(EventTypes eventTypes);
    }
}