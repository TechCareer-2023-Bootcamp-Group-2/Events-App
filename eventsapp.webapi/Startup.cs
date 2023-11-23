
using eventsapp.bll.Abstract;
using eventsapp.bll.Concrete;
using eventsapp.dal.Abstract;
using eventsapp.dal.Concrete;
using eventsapp.dal.Data;
using eventsapp.dal.Seed;
using Microsoft.EntityFrameworkCore;

namespace eventsapp.webapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Start with "builder." in program.cs, set here: 
            services.AddControllers();
            services.AddSwaggerGen();
            services.AddAutoMapper(typeof(Program));
            services.AddDbContext<EventsDBContext>(options =>
                                                        options.UseLazyLoadingProxies().UseMySQL(
                                                            Configuration.GetConnectionString("default")));
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IEventsService,EventsService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var services = scope.ServiceProvider;
               // EventsTypesSeedData.Initialize(services);
                EventsSeedData.Initialize(services);
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            //Start with "app." in program.cs, set here: 
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}