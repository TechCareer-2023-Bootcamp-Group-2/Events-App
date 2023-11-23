using System.Linq.Expressions;
using eventsapp.bll.Abstract;
using eventsapp.dal.Abstract;
using eventsapp.entity;

namespace eventsapp.bll.Concrete
{
    public class EventsService : IEventsService
    {
        private IUnitOfWork _unitofWork;
        public EventsService(IUnitOfWork unitOfWork)=>_unitofWork=unitOfWork;
        public string ErrorMessage{ get; set;}

        public async Task<bool> AddAsync(Events entity)
        {
            await _unitofWork.EventsRepo.AddAsync(entity);
            return Validation(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitofWork.EventsRepo.DeleteAsync(id);
            return true;
        }

        public async Task<bool> DeleteAsync(Events entity)
        {
            await _unitofWork.EventsRepo.DeleteAsync(entity);
            return Validation(entity);
        }

        public async Task<IEnumerable<Events>> GetAsync()
        {
            return await _unitofWork.EventsRepo.GetAsync();
        }


        public async Task<Events> GetAsync(int id)
        {
            return await _unitofWork.EventsRepo.GetAsync(id);
        }

        public async Task<bool> UpdateAsync(Events entity)
        {
            await _unitofWork.EventsRepo.UpdateAsync(entity);
            return Validation(entity);
        }

        public bool Validation(Events entity)
        {
            var isValid=true;
            return isValid;
        }
    }
}