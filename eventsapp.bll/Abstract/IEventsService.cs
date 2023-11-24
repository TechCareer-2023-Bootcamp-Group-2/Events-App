using System.Linq.Expressions;
using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface IEventsService:IValidator<Events>
    {
        Task<bool> AddAsync(Events entity);
        Task<bool> DeleteAsync(int id);
        Task<bool> DeleteAsync(Events entity);
        Task<IEnumerable<Events>> GetAsync();
        Task<Events> GetAsync(int id);
        Task<bool> UpdateAsync(Events entity);
        Task<IEnumerable<Events>> GetPopularAsync();
        Task<IEnumerable<Events>> GetByEventTypeAsync(string eventType);
    }
}