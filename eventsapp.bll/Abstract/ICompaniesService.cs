using eventsapp.entity;

namespace eventsapp.bll.Abstract
{
    public interface ICompaniesService : IValidator<Companies>,IService<Companies,int>
    {
    }
}