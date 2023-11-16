using eventsapp.webapi.Repository.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace eventsapp.webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class EventsController : ControllerBase
    {
        private IEventsRepository _eventsRepository;
        public EventsController(IEventsRepository eventsRepository)
        {
            this._eventsRepository = eventsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var _events=_eventsRepository.GetAll().ToList();
            return Ok(_events);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var _events=_eventsRepository.GetById(id);
            return _events == null ? NotFound() : Ok(_events);
        }

    }


}