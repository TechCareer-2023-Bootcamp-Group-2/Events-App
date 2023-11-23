using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;
using shopapp.data.Abstract;

namespace eventsapp.dal.Abstract
{
    public class GenericRepository<T, IdType> : IRepository<T, IdType>
    where T : BaseEntity
    where IdType : struct
    {
        protected readonly EventsDBContext _context;
        private readonly DbSet<T> _dbSet;
        public GenericRepository(EventsDBContext context)
        {
            this._context = context;
            this._dbSet = _context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(IdType id)
        {
            var entity = await this.GetAsync(id);
            if (entity != null)
            {
                _context.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteAsync(T entity)
        {
            _context.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAsync()
        {
            return await _dbSet.ToListAsync();
        }
        public async Task<T> GetAsync(IdType id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity != null)
                return entity;

            throw new NotImplementedException();
        }
        public async Task<T> UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }
    }
}