import React, { useState } from "react";
//import axios from "axios";
import Header from "../components/Header/Header";
import EventSearch from "../components/EventSearch/EventSearch";
import CustomTitle from "../components/CustomTitle/CustomTitle";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import { Carousel } from "antd";

// fetch islemleri sayfa en altında yer alıyor. Tekrar slides aktive ettim.

const slides = [
  {
    id: 1,
    eventName: "Hamlet",
    eventType: "Tiyatro",
    detail: "Ünlü Shakespeare eseri Hamlet'in sahneleneceği tiyatro gösterisi.",
    startTime: "2023-12-01T00:00:00",
    endTime: "2023-12-15T00:00:00",
    place: "Şehir Tiyatrosu",
    city: "İstanbul",
    adress: "İstiklal Caddesi No:123, Beyoğlu",
    googleMapsLink: "https://maps.google.com/?q=41.034,28.985",
    isPopular: true,
    ticketPrice: 50,
    imagesUrl: [
      "https://www.artfulliving.com.tr/image_data/content/fc3d359a383de694dd2b62b01a9d1457.jpg",
      "https://media-cdn.t24.com.tr/media/stories/2018/10/raw_hamlet-bale-eseri-olarak-mersinli-sanatseverlerle-bulusuyor_239869767.jpg",
    ],
  },
  {
    id: 2,
    eventName: "Osman Hamdi Bey Sergisi",
    eventType: "Resim",
    detail: "Osman Hamdi Bey'in eserlerini içeren sergi.",
    startTime: "2023-11-20T00:00:00",
    endTime: "2023-12-10T00:00:00",
    place: "Sanat Galerisi",
    city: "Ankara",
    adress: "Sanat Sokak No:45, Çankaya",
    googleMapsLink: "https://maps.google.com/?q=39.933,32.866",
    isPopular: true,
    ticketPrice: 20,
    imagesUrl: [
      "https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-3.jpg",
      "https://www.peramuzesi.org.tr/Repo/SliderAndBoxs/osman-hamdi-bey-sergi-1.jpg",
    ],
  },
  {
    id: 3,
    eventName: "Rock Festivali",
    eventType: "Konser",
    detail: "Birbirinden ünlü rock gruplarının sahne alacağı müzik festivali.",
    startTime: "2023-11-25T00:00:00",
    endTime: "2023-12-26T00:00:00",
    place: "Açık Hava Konser Alanı",
    city: "İzmir",
    adress: "Kordon Boyu,Alsancak",
    googleMapsLink: "https://maps.google.com/?q=38.418,27.128",
    isPopular: false,
    ticketPrice: 80,
    imagesUrl: [
      "https://static.daktilo.com/sites/302/uploads/2023/10/07/maxresdefault-1.jpg",
      "https://static.bianet.org/system/uploads/1/articles/spot_image/000/265/708/original/Zeytinli-Rock-Festivali.jpg",
    ],
  },
];

const categories = [
  {
    id: 1,
    eventType: "Tümü",
  },
  {
    id: 2,
    eventType: "Tiyatro",
  },
  {
    id: 3,
    eventType: "Resim",
  },
  {
    id: 4,
    eventType: "Konser",
  },
];

const HomePage = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div className="m-0">
      <Header />
      <div className="mt-12">
        <CustomTitle borderedTitle={"Populer Events"} />
      </div>
      <Carousel autoplay className="px-3 md:px-20 lg:px-30 rounded-lg">
        {slides.map((item) => (
          <div
            className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg bg-black"
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover rounded-lg opacity-70"
            />
          </div>
        ))}
      </Carousel>
      <div>
        <CustomTitle borderedTitle={"Events"} />
      </div>
      <EventSearch setSearch={setSearch} />
      <div className="flex justify-center">
        <CategoryButton
          categories={categories}
          setFiltered={setFiltered}
          events={slides}
        />
      </div>
      <div className="flex justify-center mb-10">
        <Events filtered={filtered} search={search} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
/*
  const url="http://localhost:5271/api/Events";

const [events, setEvents] = useState([]);

  useEffect(()=>{
    const getEvents = async () => {
      try {
        axios.get(url).then((res)=>{
          console.log(res.data);
          setEvents(res.data);
        })
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  },[]);
*/
