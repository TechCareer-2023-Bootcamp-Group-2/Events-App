using System.Net;
using AutoMapper;
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
        private IEventsRepository _eventsRepository;

        private readonly IMapper _mapper;
        public EventsController(IEventsRepository eventsRepository, IMapper mapper)
        {
            this._mapper = mapper;
            this._eventsRepository = eventsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            
         

            return Ok(_mapper.Map<List<EventsModel>>(await _eventsRepository.GetAsync()));
        }
        [HttpPost]

        public async Task<IActionResult> Post(EventsCreateModel model){
            if(ModelState.IsValid){

                var newEvents=_mapper.Map<Events>(model);
                await _eventsRepository.AddAsync(newEvents);
        
            }
            return Ok(HttpStatusCode.BadRequest);
        }

    }
   

}