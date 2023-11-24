using AutoMapper;
using eventsapp.bll.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
            
            return Ok("Category");
            //return Ok(_mapper.Map<List<EventsModel>>(await _eventsService.GetAsync()));
        }
    }
}