using System.Collections.Generic;
using System.Threading.Tasks;
using eventsapp.dal.Abstract;
using eventsapp.dal.Data;
using eventsapp.entity;
using shopapp.data.Abstract;

namespace eventsapp.dal.Concrete
{
    public class EventImagesRepository : GenericRepository<EventImages, int>, IEventImagesRepository
    {
        public EventImagesRepository(EventsDBContext context) : base(context)
        {
        }
    }

}