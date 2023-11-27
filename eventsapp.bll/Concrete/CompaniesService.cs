using eventsapp.bll.Abstract;
using eventsapp.dal.Abstract;
using eventsapp.entity;

namespace eventsapp.bll.Concrete
{
    public class CompaniesService : ICompaniesService
    {
        private IUnitOfWork _unitOfWork;

        public CompaniesService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public string ErrorMessage { get; set; }

        public async Task<bool> AddAsync(Companies entity)
        {
            await _unitOfWork.CompanyRepo.AddAsync(entity);
            return Validation(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await _unitOfWork.CompanyRepo.DeleteAsync(id);
            return true;
        }

        public async Task<bool> DeleteAsync(Companies entity)
        {
            await _unitOfWork.CompanyRepo.DeleteAsync(entity);
            return Validation(entity);
        }

        public async Task<IEnumerable<Companies>> GetAsync()
        {
            return await _unitOfWork.CompanyRepo.GetAsync();
        }

        public async Task<Companies> GetAsync(int id)
        {
            return await _unitOfWork.CompanyRepo.GetAsync(id);
        }

        public async Task<bool> UpdateAsync(Companies entity)
        {
            await _unitOfWork.CompanyRepo.UpdateAsync(entity);
            return Validation(entity);
        }

        public bool Validation(Companies entity)
        {
            var isValid = true;
            return isValid;
        }
    }
}