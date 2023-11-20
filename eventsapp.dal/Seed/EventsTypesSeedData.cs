using System;
using System.Collections.Generic;
using System.Linq;
using eventsapp.dal.Data;
using eventsapp.entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace eventsapp.dal.Seed
{
    public static class EventsTypesSeedData{
        public static void Initialize(IServiceProvider serviceProvider){
            using(var ctx=new EventsDBContext(serviceProvider.GetRequiredService<DbContextOptions<EventsDBContext>>())){
                if(ctx.EventTypes.Any())return;
                SeedData(ctx);
            }
        }
        private static void SeedData(EventsDBContext ctx)
        {
            List<EventTypes> eventTypes = new List<EventTypes>();
            { eventTypes.Add(new EventTypes{
               EventType="Tiyatro"
            });
            eventTypes.Add(new EventTypes{
               EventType="Resim"
            });
            eventTypes.Add(new EventTypes{
               EventType="Sinema"
            });
           
            }
            foreach(var item in eventTypes)ctx.EventTypes.Add(item);
            ctx.SaveChanges();
        }
    }
    
}