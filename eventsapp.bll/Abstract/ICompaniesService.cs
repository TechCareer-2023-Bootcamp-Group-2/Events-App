using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface ICompaniesService : IValidator<Companies>
    {
        Task<bool> AddAsync(Companies entity);
        Task<bool> DeleteAsync(int id);
        Task<bool> DeleteAsync(Companies entity);
        Task<IEnumerable<Companies>> GetAsync();
        Task<Companies> GetAsync(int id);
        Task<bool> UpdateAsync(Companies entity);
    }
}