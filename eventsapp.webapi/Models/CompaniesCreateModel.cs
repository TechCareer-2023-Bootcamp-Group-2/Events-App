﻿namespace eventsapp.webapi.Models
{
    public class CompaniesCreateModel
    {
        public string CompanyName { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Mail { get; set; }
        public string? CompanyDetails { get; set; }
        public List<SocialMediaModel>? SocialMedia { get; set; }
    }
}