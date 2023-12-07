namespace eventsapp.entity
{
    public class EventImages : BaseEntity
    {
        //TODO: This class may save picture with Bit data type, not url !!!
        public virtual Events Event {get; set;}
        public string? ImageName{get; set;}
        public string? ImageType{get; set;}
        public byte[] Image{get; set;}
    }
}