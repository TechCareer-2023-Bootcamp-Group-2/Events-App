using System;
using System.Collections.Generic;

namespace eventsapp.entity
{
    public class Events : BaseEntity
    {
        public string EventName { get; set; }
        public string? Detail { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string? Place { get; set; }
        public string? City { get; set; }
        public string? Adress { get; set; }
        public string? GoogleMapsLink { get; set; }
        public float? TicketPrice { get; set; }
        public bool? isPopular {get;set;}
        public virtual ICollection<EventImages>? Images { get; set; }
        public virtual EventTypes? EventType
        {
            get;
            set;
        }
    }
}


