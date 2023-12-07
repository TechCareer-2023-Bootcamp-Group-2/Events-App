﻿using AutoMapper;
using eventsapp.entity;
using eventsapp.webapi.Models;

namespace eventsapp.webapi.Mapper
{
    public class CompaniesMapper : Profile
    {
        public CompaniesMapper()
        {
            CreateMap<Companies, CompaniesModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.SocialMedia, opt => opt.MapFrom(src => src.SocialMedia.Select(sm => new SocialMediaModel { Name = sm.Name, Link = sm.Link }).ToList()));

            CreateMap<CompaniesCreateModel, Companies>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.SocialMedia, opt => opt.MapFrom(src => src.SocialMedia.Select(sm => new SocialMediaModel { Name = sm.Name, Link = sm.Link }).ToList()));
        }
    }
}