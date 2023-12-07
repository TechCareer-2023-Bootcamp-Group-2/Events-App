namespace eventsapp.entity
{
    public class CompanySocialMedia : BaseEntity
    {
        public virtual Companies Company{get;set;}
        public string? Name { get; set; }
        public string? Link { get; set; }
    }
}