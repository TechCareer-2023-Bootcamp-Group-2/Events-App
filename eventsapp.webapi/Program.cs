using eventsapp.webapi.Extension;

namespace eventsapp.webapi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("App Running");
            CreateHostBuilder(args).Build().MigrateDatabase().Run();

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
