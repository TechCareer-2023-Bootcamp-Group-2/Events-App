using eventsapp.dal.Data;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.webapi.Extension
{
public static class MigrationManager
    {
        public static IHost MigrateDatabase(this IHost host){
            using(var scope=host.Services.CreateScope()){
                using(var eventsDBContext= scope.ServiceProvider.GetRequiredService<EventsDBContext>()){
                    try{
                        eventsDBContext.Database.Migrate();
                    }catch(System.Exception){
                        throw;
                    }
                }
            }
            return host;
        }
    }
}