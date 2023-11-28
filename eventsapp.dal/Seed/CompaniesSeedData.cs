using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace eventsapp.dal.Seed
{
    public static class CompaniesSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var ctx = new EventsDBContext(serviceProvider.GetRequiredService<DbContextOptions<EventsDBContext>>()))
            {
                if (ctx.Companies.Any())
                    return;
                SeedData(ctx);
            }
        }

        private static void SeedData(EventsDBContext ctx)
        {
            List<Companies> companies = new List<Companies>();
            {
                companies.Add(new Companies
                {
                    CompanyName = "Company Name",
                    Address = "Address",
                    Phone = "+90 (555) 555 55 55",
                    Mail = "companyname@example.com",
                    CompanyDetails = "Company details company details company details company details company details company details company details company details",
                    SocialMedia = new List<SocialMedia> { new SocialMedia { Name = "Instagram", Link = "https://www.instagram.com/companyname" }, new SocialMedia { Name = "X", Link = "https://www.twitter.com/companyname" } }
                });
            }

            foreach (var item in companies)
                ctx.Companies.Add(item);
            ctx.SaveChanges();
        }
    }
}