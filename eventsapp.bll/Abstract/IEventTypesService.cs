using System.Linq.Expressions;
using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface IEventTypesService:IValidator<EventTypes>,IService<EventTypes,int>
    {
        Task<EventTypes> GetAsync(string EventTypeName);
    }
}