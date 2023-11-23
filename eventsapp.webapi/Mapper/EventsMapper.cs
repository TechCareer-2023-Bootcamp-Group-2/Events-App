using AutoMapper;
using eventsapp.entity;
using eventsapp.webapi.Models;

namespace eventsapp.webapi.Mapper
{
    public class EventsMapper : Profile
    {
        public EventsMapper()
        {
            CreateMap<Events, EventsModel>()
            .ForMember(d => d.EventType, src => src.MapFrom(s => s.EventType.EventType))
            .AfterMap((src, dest) =>
            {
                dest.ImagesUrl = new List<string>();
                foreach (var item in src.Images)
                    dest.ImagesUrl.Add(item.imageUrl);
            }
            );
            CreateMap<EventsCreateModel, Events>()
            .ForMember(d=>d.EventType,src=>src.MapFrom(s=>new EventTypes{EventType=s.EventType}))
            .AfterMap((src, dest) =>
            {
                dest.Images = new List<EventImages>();
                foreach (var item in src.ImagesUrl)
                    dest.Images.Add(new EventImages{imageUrl="NONE"});
                    //TODO change imageUrl
            }
            );
           
        }
    }
}