namespace eventsapp.entity{
    public class ExTicket:BaseEntity{

        public virtual Events Event{get;set;}
        public string TicketName { get; set; }
        public float TicketPrice { get; set; }
    }
}