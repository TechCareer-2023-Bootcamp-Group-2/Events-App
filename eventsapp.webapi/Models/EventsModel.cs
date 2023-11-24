namespace eventsapp.webapi.Models
{
    public class EventsModel
    {
        public int Id{get; set;}
        public string ?EventName { get; set; }
        public string ?EventType { get; set; }
        public string ?Detail { get; set; }
        public DateTime StartTime {get;set;}
        public DateTime EndTime{get;set;}
        public string ?Place{get;set;}
        public string ?City{get;set;}
        public string ?Adress{get;set;}
        public string ?GoogleMapsLink{get;set;}
        public bool isPopular {get;set;}
        public float TicketPrice{get;set;}
        public List<string> ImagesUrl{get;set;}

    }

   
}