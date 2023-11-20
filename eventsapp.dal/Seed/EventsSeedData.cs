using System;
using System.Collections.Generic;
using System.Linq;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace eventsapp.dal.Seed
{
    public static class EventsSeedData{
        public static void Initialize(IServiceProvider serviceProvider){
            using(var ctx=new EventsDBContext(serviceProvider.GetRequiredService<DbContextOptions<EventsDBContext>>())){
                if(ctx.Events.Any())return;
                SeedData(ctx);
            }
        }
        private static void SeedData(EventsDBContext ctx)
        {
            List<Events> events = new List<Events>();
            { events.Add(new Events{
                EventName="Hamlet",
                //Category= "tiyatro",
                Detail= "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
                StartTime=new DateTime(2023,12,01),
                EndTime= new DateTime(2023,12,15),
                Place= "Şehir Tiyatrosu",
                City= "İstanbul",
                Adress= "İstiklal Caddesi No:123, Beyoğlu",
                GoogleMapsLink= "https://maps.google.com/?q=41.034,28.985",
                TicketPrice= 50.00f,
                //PicturesUrl=new List<string>{ "https://example.com/hamlet1.jpg", "https://example.com/hamlet2.jpg"}
            });
            events.Add(new Events{
                EventName="Osman Hamdi Bey Sergisi",
                //Category= "resim",
                Detail= "Osman Hamdi Bey'in eserlerini içeren sergi.",
                StartTime=new DateTime(2023,11,20),
                EndTime= new DateTime(2023,12,10),
                Place= "Sanat Galerisi",
                City= "Ankara",
                Adress= "Sanat Sokak No:45, Çankaya",
                GoogleMapsLink= "https://maps.google.com/?q=39.933,32.866",
                TicketPrice= 20.00f,
                //PicturesUrl=new List<string>{ "https://example.com/osman_hamdi1.jpg", "https://example.com/osman_hamdi2.jpg"}
            });
            events.Add(new Events{
                EventName="Rock Festivali",
                //Category= "konser",
                Detail= "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
                StartTime=new DateTime(2023,11,25),
                EndTime= new DateTime(2023,12,26),
                Place= "Açık Hava Konser Alanı",
                City= "İzmir",
                Adress= "Kordon Boyu,Alsancak",
                GoogleMapsLink= "https://maps.google.com/?q=38.418,27.128",
                TicketPrice= 80.00f,
                //PicturesUrl=new List<string>{ "https://example.com/rock_festival1.jpg","https://example.com/rock_festival2.jpg"}
            });
            }
            foreach(var item in events)ctx.Events.Add(item);
            ctx.SaveChanges();
        }
    }
    
}