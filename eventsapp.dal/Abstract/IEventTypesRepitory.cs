using System.Threading.Tasks;
using eventsapp.entity;
using shopapp.data.Abstract;

namespace eventsapp.dal.Abstract{
    public interface IEventTypesRepitory:IRepository<EventTypes,int>
    {
        Task<EventTypes> GetByEventTypeNameAsync(string eventsTypeName);
    }
}