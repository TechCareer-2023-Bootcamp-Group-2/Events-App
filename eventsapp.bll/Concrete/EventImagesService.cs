using eventsapp.bll.Abstract;
using eventsapp.dal.Abstract;
using eventsapp.entity;

namespace eventsapp.bll.Concrete
{
    public class EventImagesService : IEventImagesService
    {
        private IUnitOfWork _unitofWork;
        public EventImagesService(IUnitOfWork unitOfWork)=>_unitofWork=unitOfWork;
        
        public string ErrorMessage { get; set; }

        public async Task<bool> AddAsync(EventImages entity)
        {
            await _unitofWork.EventImagesRepo.AddAsync(entity);
            return Validation(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitofWork.EventImagesRepo.DeleteAsync(id);
            return true;
        }

        public async Task<bool> DeleteAsync(EventImages entity)
        {
            await _unitofWork.EventImagesRepo.DeleteAsync(entity);
            return Validation(entity);
        }

        public async Task<IEnumerable<EventImages>> GetAsync()
        {
            return await _unitofWork.EventImagesRepo.GetAsync();
        }


        public async Task<EventImages> GetAsync(int id)
        {
            return await _unitofWork.EventImagesRepo.GetAsync(id);
        }

        public async Task<bool> UpdateAsync(EventImages entity)
        {
            await _unitofWork.EventImagesRepo.UpdateAsync(entity);
            return Validation(entity);
        }

        public bool Validation(EventImages entity)
        {
            var isValid=true;
            return isValid;
        }

        
    }
}