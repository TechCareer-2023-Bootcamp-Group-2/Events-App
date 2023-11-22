namespace eventsapp.entity{
    public class EventTypes:BaseEntity{

        public virtual ICollection<Events> Events{get;set;}
        public string EventType { get; set; }
    }
}