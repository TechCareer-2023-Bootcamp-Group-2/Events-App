using System.Linq.Expressions;
using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface IEventTypesService:IValidator<EventTypes>
    {
        Task<bool> AddAsync(EventTypes entity);

        Task<bool> DeleteAsync(int id);
        Task<bool> DeleteAsync(EventTypes entity);
        Task<IEnumerable<EventTypes>> GetAsync();
        Task<EventTypes> GetAsync(int id);
        Task<EventTypes> GetAsync(string EventTypeName);
        Task<bool> UpdateAsync(EventTypes entity);
    }
}