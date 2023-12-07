namespace eventsapp.webapi.Models
{
    public class EventsCreateModel
    {
        public string ?EventName { get; set; }
        public string ?EventType { get; set; }
        public string ?Detail { get; set; }
        public DateTime StartTime {get;set;}
        public DateTime EndTime{get;set;}
        public string ?Place{get;set;}
        public string ?City{get;set;}
        public string ?Adress{get;set;}
        public string ?Iframe{get;set;}
        public float TicketPrice{get;set;}
        public bool isPopular {get;set;}

        public List<ExTicketCreateModel> exTickets{get;set;}
        public List<SocialMediaModel>? SocialMedia { get; set; }

    }

   
}