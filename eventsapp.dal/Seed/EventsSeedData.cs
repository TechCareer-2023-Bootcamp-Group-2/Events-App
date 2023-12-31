using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace eventsapp.dal.Seed
{
    public static class EventsSeedData
    {
        //TODO: Maybe this class not be clean cause of get eventstype, Check After !!!
        public static void Initialize(IServiceProvider serviceProvider,IWebHostEnvironment env)
        {
            using (var ctx = new EventsDBContext(serviceProvider.GetRequiredService<DbContextOptions<EventsDBContext>>()))
            {
                if (ctx.Events.Any()) return;
                SeedData(ctx,env);
            }
        }
        private static void SeedData(EventsDBContext ctx,IWebHostEnvironment env)
        {
            List<Events> events = new List<Events>();
            {
                List<Byte[]> bytes=new();
                {
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","1.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","2.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","3.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","4.png")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","5.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","6.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","7.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","8.jpg")));
                    bytes.Add(File.ReadAllBytes(Path.Combine(env.WebRootPath, "images","9.jpeg")));
                }
                events.Add(new Events
                {
                    EventName = "Hamlet",
                    EventType = new EventTypes { EventType = "Tiyatro" },
                    Detail = "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
                    StartTime = new DateTime(2023, 12, 01),
                    EndTime = new DateTime(2023, 12, 15),
                    Place = "Şehir Tiyatrosu",
                    City = "İstanbul",
                    Adress = "İstiklal Caddesi No:123, Beyoğlu",
                    GoogleMapsLink = "https://maps.google.com/?q=41.034,28.985",
                    TicketPrice = 50.00f,
                    isPopular = true,
                    Images = new List<EventImages>{
                        new EventImages{
                            ImageName="1.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[0]
                        },
                        new EventImages{
                            ImageName="2.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[1]
                        },
                        new EventImages{
                            ImageName="3.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[2]
                        }
                    },
                    //new EventImages{ImageName="https://www.artfulliving.com.tr/image_data/content/fc3d359a383de694dd2b62b01a9d1457.jpg"},
                    //new EventImages{ImageName="https://media-cdn.t24.com.tr/media/stories/2018/10/raw_hamlet-bale-eseri-olarak-mersinli-sanatseverlerle-bulusuyor_239869767.jpg"},
                    //PicturesUrl=new List<string>{ "https://example.com/hamlet1.jpg", "https://example.com/hamlet2.jpg"}
                });
                events.Add(new Events
                {
                    EventName = "Osman Hamdi Bey Sergisi",
                    EventType = new EventTypes { EventType = "Resim" },
                    Detail = "Osman Hamdi Bey'in eserlerini içeren sergi.",
                    StartTime = new DateTime(2023, 11, 20),
                    EndTime = new DateTime(2023, 12, 10),
                    Place = "Sanat Galerisi",
                    City = "Ankara",
                    Adress = "Sanat Sokak No:45, Çankaya",
                    GoogleMapsLink = "https://maps.google.com/?q=39.933,32.866",
                    TicketPrice = 20.00f,
                    isPopular = true,
                    Images = new List<EventImages>{
                        new EventImages{
                            ImageName="4.png",
                            ImageType="image/png",
                            Image=bytes[3]
                        },
                        new EventImages{
                            ImageName="5.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[4]
                        },
                        new EventImages{
                            ImageName="6.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[5]
                        }
                    },
                    //new EventImages{ImageName="https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-3.jpg"},
                    //new EventImages{ImageName="https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-1.jpg"},
                    //PicturesUrl=new List<string>{ "https://example.com/osman_hamdi1.jpg", "https://example.com/osman_hamdi2.jpg"}

                });
                events.Add(new Events
                {
                    EventName = "Rock Festivali",
                    EventType = new EventTypes { EventType = "Konser" },
                    Detail = "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
                    StartTime = new DateTime(2023, 11, 25),
                    EndTime = new DateTime(2023, 12, 26),
                    Place = "Açık Hava Konser Alanı",
                    City = "İzmir",
                    Adress = "Kordon Boyu,Alsancak",
                    GoogleMapsLink = "https://maps.google.com/?q=38.418,27.128",
                    TicketPrice = 80.00f,
                    isPopular = false,
                    Images = new List<EventImages>{
                        new EventImages{
                            ImageName="7.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[6]
                        },
                        new EventImages{
                            ImageName="8.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[7]
                        },
                        new EventImages{
                            ImageName="9.jpeg",
                            ImageType="image/jpeg",
                            Image=bytes[8]
                        }
                    },
                    //new EventImages{ImageName="https://static.daktilo.com/sites/302/uploads/2023/10/07/maxresdefault-1.jpg"},
                    //new EventImages{ImageName="https://static.bianet.org/system/uploads/1/articles/spot_image/000/265/708/original/Zeytinli-Rock-Festivali.jpg"},
                    //PicturesUrl=new List<string>{ "https://example.com/rock_festival1.jpg","https://example.com/rock_festival2.jpg"}
                });
            }
            foreach (var item in events) ctx.Events.Add(item);
            ctx.SaveChanges();
        }
        // private static EventTypes GetEventType(string eventName, EventsDBContext ctx)
        // {
        //     return ctx.EventTypes.Where(i => i.EventType == eventName).FirstOrDefault();
        // }
    }

}