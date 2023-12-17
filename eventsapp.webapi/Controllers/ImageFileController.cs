using System.Net;
using eventsapp.bll.Abstract;
using eventsapp.entity;
using eventsapp.webapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;


namespace eventsapp.webapi.Controllers
{
    [Route("api/EventImages")]
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    public class ImageFileController : ControllerBase
    {
        IEventImagesService _eventImagesService;
        IEventsService _eventsService;

        EventImages img = new EventImages();
        public ImageFileController(IEventImagesService eventImagesService, IEventsService eventsService)
        {
            _eventImagesService = eventImagesService;
            _eventsService = eventsService;
        }
        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var dbData = await _eventImagesService.GetAsync(id);
            if (dbData == null) return Ok(HttpStatusCode.BadRequest);
            Console.WriteLine(dbData.Image.Length);
            return File(dbData.Image, dbData.ImageType);
        }
        [HttpPost("Upload")]
        [Authorize]
        public async Task<IActionResult> Post([FromForm] ImageModel model)
        {
            var file=model.file;
            var eventData=await _eventsService.GetAsync(model.eventId);
            if (!ModelState.IsValid || file == null || file.Length == 0 || eventData == null) return Ok(HttpStatusCode.BadRequest);


            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                var img = new EventImages
                {
                    Event = eventData,
                    ImageName = file.FileName,
                    Image = stream.ToArray(),
                    ImageType = file.ContentType,
                };
                await _eventImagesService.AddAsync(img);
            }

            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteImage(int id){
            var deleteImage=await _eventImagesService.GetAsync(id);
            if(deleteImage==null)return Ok(HttpStatusCode.BadRequest);
            await _eventImagesService.DeleteAsync(deleteImage);
            return Ok();
        }
    }
}