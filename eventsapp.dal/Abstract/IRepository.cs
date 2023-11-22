using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using eventsapp.entity;

namespace shopapp.data.Abstract
{
    public interface IRepository<T, IdType>
    where T : BaseEntity
    where IdType : struct
    {
        Task AddAsync(T entity);
        Task DeleteAsync(IdType id);
        Task DeleteAsync(T entity);
        Task<IEnumerable<T>> GetAsync();
        Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> exp);
        Task<T> GetAsync(IdType id);
        Task<T> UpdateAsync(T entity);
    }
}