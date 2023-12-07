namespace eventsapp.entity
{
    public class Companies : BaseEntity
    {
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public string CompanyDetails { get; set; }
        public virtual ICollection<CompanySocialMedia>? SocialMedia { get; set; }
    }
}