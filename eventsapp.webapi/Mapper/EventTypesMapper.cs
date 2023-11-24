using AutoMapper;
using eventsapp.entity;
using eventsapp.webapi.Models;

namespace eventsapp.webapi.Mapper
{
    public class EventTypesMapper : Profile
    {
        public EventTypesMapper(){
            CreateMap<EventTypes, EventTypesModel>();
            CreateMap<EventTypesCreateModel,EventTypes>();
        }
    }

}