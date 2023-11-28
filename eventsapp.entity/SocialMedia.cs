namespace eventsapp.entity
{
    public class SocialMedia : BaseEntity
    {
        public virtual Companies Companies { get; set; }
        public string? Name { get; set; }
        public string? Link { get; set; }
    }
}