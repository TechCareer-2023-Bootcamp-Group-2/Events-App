using System.Linq.Expressions;
using eventsapp.bll.Abstract;
using eventsapp.dal.Abstract;
using eventsapp.entity;

namespace eventsapp.bll.Concrete
{
    public class EventTypesService : IEventTypesService
    {
        private IUnitOfWork _unitofWork;
        public EventTypesService(IUnitOfWork unitOfWork)=>_unitofWork=unitOfWork;
        public string ErrorMessage{ get; set;}

        public async Task<bool> AddAsync(EventTypes entity)
        {
            await _unitofWork.EventTypesRepo.AddAsync(entity);
            return Validation(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitofWork.EventTypesRepo.DeleteAsync(id);
            return true;
        }

        public async Task<bool> DeleteAsync(EventTypes entity)
        {
            await _unitofWork.EventTypesRepo.DeleteAsync(entity);
            return Validation(entity);
        }

        public async Task<IEnumerable<EventTypes>> GetAsync()
        {
            return await _unitofWork.EventTypesRepo.GetAsync();
        }


        public async Task<EventTypes> GetAsync(int id)
        {
            return await _unitofWork.EventTypesRepo.GetAsync(id);
        }

        public async Task<EventTypes> GetAsync(string EventTypeName)
        {
            return await _unitofWork.EventTypesRepo.GetByEventTypeNameAsync(EventTypeName);
        }

        public async Task<bool> UpdateAsync(EventTypes entity)
        {
            await _unitofWork.EventTypesRepo.UpdateAsync(entity);
            return Validation(entity);
        }

        public bool Validation(EventTypes entity)
        {
            var isValid=true;
            return isValid;
        }

    }
}