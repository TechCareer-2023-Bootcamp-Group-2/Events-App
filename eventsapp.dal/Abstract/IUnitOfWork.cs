namespace eventsapp.dal.Abstract
{
    public interface IUnitOfWork
    {
        IEventImagesRepository EventImagesRepo{get;}
        IEventsRepository EventsRepo{get;}
        IEventTypesRepitory EventTypesRepo{get;}

        ICompanyRepository CompanyRepo{get;}
     
    }
}