using AutoMapper;
using eventsapp.entity;
using eventsapp.webapi.Models;

namespace eventsapp.webapi.Mapper
{
    public class CompaniesMapper : Profile
    {
        public CompaniesMapper()
        {
            CreateMap<Companies, CompaniesModel>();
            CreateMap<CompaniesCreateModel, Companies>();
        }
    }
}