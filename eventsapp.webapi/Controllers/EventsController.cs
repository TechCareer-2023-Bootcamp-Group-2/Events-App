using System.Net;
using AutoMapper;
using eventsapp.bll.Abstract;
using eventsapp.entity;
using eventsapp.webapi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;


namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("OpenCORSPolicy")]

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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var eventData=await _eventsService.GetAsync(id);
            if(eventData==null)return Ok(HttpStatusCode.BadRequest);
            return Ok(_mapper.Map<EventsModel>(eventData));
        }

        [HttpGet("Popular")]
        public async Task<IActionResult> GetPopular()
        {
            return Ok(_mapper.Map<List<EventsModel>>(await _eventsService.GetPopularAsync()));
        }
        [HttpGet("Category/{CategoryName}")]
        public async Task<IActionResult> GetByEventType(string CategoryName)
        {
            return Ok(_mapper.Map<List<EventsModel>>(await _eventsService.GetByEventTypeAsync(CategoryName)));
        }
        [HttpPost("Add")]

        public async Task<IActionResult> Post(EventsCreateModel model){
            if(ModelState.IsValid){
                var newEvents=_mapper.Map<Events>(model);
                await _eventsService.AddAsync(newEvents);
                return Ok(5);
            }
            return Ok(HttpStatusCode.BadRequest);
        }
        [HttpPatch("Update/{id}")]

        public async Task<IActionResult> PatchEvents(int id,EventsCreateModel model)
        {
            Events events=await _eventsService.GetAsync(id);
            if(events==null)return Ok(HttpStatusCode.BadRequest);
            //TODO Fix mapper
            EventTypes eventType=events.EventType;
            events=_mapper.Map(model,events);
            if(model.EventType==null||model.EventType==eventType.EventType)events.EventType=eventType;
            await _eventsService.UpdateAsync(events);
            return Ok();
        }
         [HttpDelete("Delete/{id}")]

        public async Task<IActionResult> PatchDelete(int id)
        {
            Events events=await _eventsService.GetAsync(id);
            if(events==null)return Ok(HttpStatusCode.BadRequest);
            await _eventsService.DeleteAsync(events);
            return Ok();
        }

    }
   

}