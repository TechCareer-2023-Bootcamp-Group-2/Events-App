using eventsapp.webapi.Models;
using eventsapp.webapi.Repository.Abstract;

namespace eventsapp.webapi.Repository.Concrete
{
    public class EventsRepository : IEventsRepository
    {
        List<Events> _events = new List<Events>();
        public EventsRepository()
        {
            SeedData();
        }

        public void Create(Events events)
        {
            _events.Add(events);
        }

        public void Delete(Events events)
        {
            _events.Remove(events);
        }

        public List<Events> GetAll()
        {
            return _events;
        }

        public Events GetById(int id)
        {
            foreach (var item in _events)
            {
                if (item.Id == id) return item;
            }
            return null;
        }

        public void Update(Events updatedEvent)
        {
            //Update is probably broken !!!
            Events oldEvent = new Events();
            foreach (var item in _events)
            {
                if (item.Id == updatedEvent.Id)
                {
                    oldEvent = item;
                    break;
                }
            }
            if (oldEvent.Adress == null) return;
            _events.Remove(oldEvent);
            _events.Add(updatedEvent);
        }

        private void SeedData()
        {
             Create(new Events{
                Id=1,
                EventName="Hamlet",
                Category= "tiyatro",
                Detail= "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
                StartTime=new DateTime(2023,12,01),
                EndTime= new DateTime(2023,12,15),
                Place= "Şehir Tiyatrosu",
                City= "İstanbul",
                Adress= "İstiklal Caddesi No:123, Beyoğlu",
                GoogleMapsLink= "https://maps.google.com/?q=41.034,28.985",
                TicketPrice= 50.00f,
                //PicturesUrl=new List<string>{ "https://example.com/hamlet1.jpg", "https://example.com/hamlet2.jpg"}
            });
            Create(new Events{
                Id=2,
                EventName="Osman Hamdi Bey Sergisi",
                Category= "resim",
                Detail= "Osman Hamdi Bey'in eserlerini içeren sergi.",
                StartTime=new DateTime(2023,11,20),
                EndTime= new DateTime(2023,12,10),
                Place= "Sanat Galerisi",
                City= "Ankara",
                Adress= "Sanat Sokak No:45, Çankaya",
                GoogleMapsLink= "https://maps.google.com/?q=39.933,32.866",
                TicketPrice= 20.00f,
                //PicturesUrl=new List<string>{ "https://example.com/osman_hamdi1.jpg", "https://example.com/osman_hamdi2.jpg"}
            });
            Create(new Events{
                Id=3,
                EventName="Rock Festivali",
                Category= "konser",
                Detail= "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
                StartTime=new DateTime(2023,11,25),
                EndTime= new DateTime(2023,12,26),
                Place= "Açık Hava Konser Alanı",
                City= "İzmir",
                Adress= "Kordon Boyu,Alsancak",
                GoogleMapsLink= "https://maps.google.com/?q=38.418,27.128",
                TicketPrice= 80.00f,
                //PicturesUrl=new List<string>{ "https://example.com/rock_festival1.jpg","https://example.com/rock_festival2.jpg"}
            });
        }


    }


}