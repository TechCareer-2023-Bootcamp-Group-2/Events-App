using eventsapp.dal.Abstract;
using eventsapp.dal.Data;

namespace eventsapp.dal.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EventsDBContext _ctx;
        public UnitOfWork(EventsDBContext ctx) => _ctx = ctx;

        private EventsRepository _eventsRepository;
        private EventTypesRepository _eventTypesRepository;
        private CompanyRepository _companyRepository;

        public IEventsRepository EventsRepo => _eventsRepository = _eventsRepository ?? new EventsRepository(_ctx);
        public IEventTypesRepitory EventTypesRepo => _eventTypesRepository = _eventTypesRepository ?? new EventTypesRepository(_ctx);

        public ICompanyRepository CompanyRepo => _companyRepository = _companyRepository ?? new CompanyRepository(_ctx);
    }
}