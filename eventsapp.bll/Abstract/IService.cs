using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface IService<Entity, IdType>
    where Entity : BaseEntity
    where IdType : struct
    {
        Task<bool> AddAsync(Entity entity);
        Task<bool> DeleteAsync(IdType id);
        Task<bool> DeleteAsync(Entity entity);
        Task<IEnumerable<Entity>> GetAsync();
        Task<Entity> GetAsync(IdType id);
        Task<bool> UpdateAsync(Entity entity);
    }
}