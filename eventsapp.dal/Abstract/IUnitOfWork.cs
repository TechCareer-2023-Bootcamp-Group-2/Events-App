namespace eventsapp.dal.Abstract
{
    public interface IUnitOfWork
    {
        IEventsRepository EventsRepo{get;}
        IEventTypesRepitory EventTypesRepo{get;}
     
    }
}