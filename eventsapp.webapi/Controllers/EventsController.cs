using System.Net;
using AutoMapper;
using eventsapp.bll.Abstract;
using eventsapp.dal.Abstract;
using eventsapp.entity;
using eventsapp.webapi.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class EventsController : ControllerBase
    {
        private IEventsService _eventsService;

        private readonly IMapper _mapper;
        public EventsController(IEventsService eventsService, IMapper mapper)
        {
            this._mapper = mapper;
            this._eventsService = eventsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            
            return Ok(_mapper.Map<List<EventsModel>>(await _eventsService.GetAsync()));
        }
        [HttpPost]

        public async Task<IActionResult> Post(EventsCreateModel model){
            if(ModelState.IsValid){
                Console.WriteLine(model.ImagesUrl[0]);
                var newEvents=_mapper.Map<Events>(model);
                await _eventsService.AddAsync(newEvents);
        
            }
            return Ok(HttpStatusCode.BadRequest);
        }
        [HttpPut("{id}")]

        public async Task<IActionResult> PutEvents(int id,EventsCreateModel model)
        {
            Events events;
            try{
                events=await _eventsService.GetAsync(id);
            }catch(Exception e){
                Console.WriteLine("error: "+e.Message);
                return Ok(HttpStatusCode.BadRequest);
            }
            Console.WriteLine("No error");
            events=_mapper.Map(model,events);
            await _eventsService.UpdateAsync(events);
            return Ok();
        }

    }
   

}