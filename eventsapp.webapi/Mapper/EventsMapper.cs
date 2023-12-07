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
            .ForMember(d => d.Iframe, src => src.MapFrom(s => s.GoogleMapsLink))
            .AfterMap((src, dest) =>
            {
                dest.ImagesUrl = new List<string>();
                foreach (var item in src.Images)
                    dest.ImagesUrl.Add(item.Id.ToString());

            }
            )
            .ForMember(dest => dest.SocialMedia, opt => opt.MapFrom(src => src.SocialMedia.Select(sm => new SocialMediaModel { Name = sm.Name, Link = sm.Link }).ToList()))
            .ForMember(dest => dest.exTickets, opt => opt.MapFrom(src => src.ExTickets.Select(sm => new ExTicketModel { Id=sm.Id, TicketName = sm.TicketName, TicketPrice = sm.TicketPrice }).ToList()));
            CreateMap<EventsCreateModel, Events>()
            
            .ForMember(d => d.EventType, src => src.MapFrom(s => new EventTypes { EventType = s.EventType }))
            .ForMember(d => d.GoogleMapsLink, src => src.MapFrom(s => s.Iframe))
            .ForMember(dest => dest.SocialMedia, opt => opt.MapFrom(src => src.SocialMedia.Select(sm => new EventsSocialMedia { Name = sm.Name, Link = sm.Link }).ToList()))
            .ForMember(dest => dest.ExTickets, opt => opt.MapFrom(src => src.exTickets.Select(sm => new ExTicket  { TicketName = sm.TicketName, TicketPrice = sm.TicketPrice }).ToList()))
            .ForAllMembers(m => m.Condition((source, target, sourceValue, targetValue) => sourceValue != null));

        }
    }
}