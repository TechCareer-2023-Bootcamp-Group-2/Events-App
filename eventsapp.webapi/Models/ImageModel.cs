namespace eventsapp.webapi.Models
{
    public class ImageModel
    {
        public int eventId{get;set;}
        public string FileName {get;set;}
        public IFormFile file {get;set;}
    }
}