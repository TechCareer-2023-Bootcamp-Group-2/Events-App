namespace eventsapp.webapi.Models
{
    public class Events
    {
        public int Id{get; set;}
        public string eventName { get; set; }
        public string category { get; set; }
        public string detail { get; set; }
        public DateTime startTime {get;set;}
        public DateTime endTime{get;set;}
        public string place{get;set;}
        public string city{get;set;}
        public string adress{get;set;}
        public string googleMapsLink{get;set;}
        public float ticketPrice{get;set;}
        public List<string> picturesUrl{get;set;}

    }
}