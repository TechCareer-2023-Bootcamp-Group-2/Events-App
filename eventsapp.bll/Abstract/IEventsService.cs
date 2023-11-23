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
        Task<IEnumerable<Events>> GetAsync(Expression<Func<Events, bool>> exp);
        Task<Events> GetAsync(Events id);
        Task<bool> UpdateAsync(Events entity);
    }
}