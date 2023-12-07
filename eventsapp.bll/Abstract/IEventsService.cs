using System.Linq.Expressions;
using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface IEventsService:IValidator<Events>,IService<Events,int>
    {
        Task<IEnumerable<Events>> GetPopularAsync();
        Task<IEnumerable<Events>> GetByEventTypeAsync(string eventType);
    }
}