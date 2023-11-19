using eventsapp.webapi.Models;
using eventsapp.webapi.Repository.Abstract;

namespace eventsapp.webapi.Repository.Concrete
{
    public class EventsRepository : IEventsRepository
    {
        List<Events> _events = new List<Events>();
        public EventsRepository()
        {
            Create(new Events{
                Id=1,
                eventName="Hamlet",
                category= "tiyatro",
                detail= "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
                startTime=new DateTime(2023,12,01),
                endTime= new DateTime(2023,12,15),
                place= "Şehir Tiyatrosu",
                city= "İstanbul",
                adress= "İstiklal Caddesi No:123, Beyoğlu",
                googleMapsLink= "https://maps.google.com/?q=41.034,28.985",
                ticketPrice= 50.00f,
                picturesUrl=new List<string>{ "https://example.com/hamlet1.jpg", "https://example.com/hamlet2.jpg"}
            });
            Create(new Events{
                Id=2,
                eventName="Osman Hamdi Bey Sergisi",
                category= "resim",
                detail= "Osman Hamdi Bey'in eserlerini içeren sergi.",
                startTime=new DateTime(2023,11,20),
                endTime= new DateTime(2023,12,10),
                place= "Sanat Galerisi",
                city= "Ankara",
                adress= "Sanat Sokak No:45, Çankaya",
                googleMapsLink= "https://maps.google.com/?q=39.933,32.866",
                ticketPrice= 20.00f,
                picturesUrl=new List<string>{ "https://example.com/osman_hamdi1.jpg", "https://example.com/osman_hamdi2.jpg"}
            });
            Create(new Events{
                Id=3,
                eventName="Rock Festivali",
                category= "konser",
                detail= "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
                startTime=new DateTime(2023,11,25),
                endTime= new DateTime(2023,12,26),
                place= "Açık Hava Konser Alanı",
                city= "İzmir",
                adress= "Kordon Boyu,Alsancak",
                googleMapsLink= "https://maps.google.com/?q=38.418,27.128",
                ticketPrice= 80.00f,
                picturesUrl=new List<string>{ "https://example.com/rock_festival1.jpg","https://example.com/rock_festival2.jpg"}
            });
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
            Events oldEvent=new Events();
            foreach (var item in _events)
            {
                if (item.Id == updatedEvent.Id)
                {
                    oldEvent=item;
                    break;
                }
            }
            if(oldEvent.adress==null)return;
            _events.Remove(oldEvent);
            _events.Add(updatedEvent);
        }

    }


}