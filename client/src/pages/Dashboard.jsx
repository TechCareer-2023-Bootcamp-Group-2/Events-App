import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

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

const Dashboard = () => {
  return (
    <div className="m-0">
      <Header />
      <div className="mt-32 mx-40">
        <div className="flex gap-x-5">
          {slides.map((slide) => (
            <div className="w-[200px] h-[300px]  border border-red-500 bg-gray-500">
              <img
                src={slide.imagesUrl[0]}
                alt={slide.eventName}
                className="object-cover w-full h-[150px]"
              />
              <h1>{slide.eventName}</h1>
              <Link to={`/dashboard-detail/${slide.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
