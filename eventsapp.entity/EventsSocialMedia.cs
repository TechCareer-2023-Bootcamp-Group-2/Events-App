namespace eventsapp.entity
{
    public class EventsSocialMedia : BaseEntity
    {
        public virtual Events Event{get;set;}
        public string? Name { get; set; }
        public string? Link { get; set; }
    }
}