using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using shopapp.data.Abstract;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eventsapp.dal.Concrete
{
    public class CompanyRepository : GenericRepository<Companies, int>, ICompanyRepository
    {
        public CompanyRepository(EventsDBContext ctx) : base(ctx) { }
    }
}