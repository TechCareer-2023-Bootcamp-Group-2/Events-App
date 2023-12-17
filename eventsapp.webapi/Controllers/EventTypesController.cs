using System.Net;
using AutoMapper;
using eventsapp.bll.Abstract;
using eventsapp.entity;
using eventsapp.webapi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("OpenCORSPolicy")]
    public class EventTypesController : ControllerBase
    {

        private readonly IEventTypesService _eventTypesService;
        private readonly IMapper _mapper;
        public EventTypesController(IEventTypesService eventTypesService,IMapper mapper){
            _mapper=mapper;
            _eventTypesService=eventTypesService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(_mapper.Map<List<EventTypesModel>>(await _eventTypesService.GetAsync()));
        }

        [HttpPost("Add")]
        [Authorize]

        public async Task<IActionResult> Post(EventTypesCreateModel model){
            if(ModelState.IsValid){
                var newEventType=_mapper.Map<EventTypes>(model);
                await _eventTypesService.AddAsync(newEventType);
                return Ok();
            }
            return Ok(HttpStatusCode.BadRequest);
        }
    }
}