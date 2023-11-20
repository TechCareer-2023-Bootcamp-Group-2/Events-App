namespace eventsapp.entity
{
    public class Events : BaseEntity
    {
        public string EventName { get; set; }
        public string Category { get; set; }
        public string Detail { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public string City { get; set; }
        public string Adress { get; set; }
        public string GoogleMapsLink { get; set; }
        public float TicketPrice { get; set; }
        //public List<string> PicturesUrl{get;set;}
    }
}


