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

        public Task<bool> AddAsync(Events entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Events entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Events>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Events>> GetAsync(Expression<Func<Events, bool>> exp)
        {
            throw new NotImplementedException();
        }

        public Task<Events> GetAsync(Events id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(Events entity)
        {
            throw new NotImplementedException();
        }

        public bool Validation(Events entity)
        {
            var isValid=true;
            return isValid;
        }
    }
}