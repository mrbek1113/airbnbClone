import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css"
import { useLocation } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState([]);
  const location=useLocation()

  const url = 'https://1c09cdff245b1f0c.mokky.dev/carousel';
  
  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
    }, []);

  return (
   <div className={`${location.pathname==='/register' ? 'hidden' : "block"} && ${ location.pathname==='/login' ?  'hidden': "block"} w-full gap-4 mt-[200px] flex items-center justify-between h-[40px] px-[40px]`}>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={15}
      slidesPerView={5}
      // autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      // pagination={{ clickable: true }}
    >
      {data?.map((item) => (
        <SwiperSlide  className=" flex gap-10 bg-gray-200 rounded-2xl" key={item.id}>
          <h1 className="w-[200px] flex justify-center text-black text-xl font-bold px-2 py-2 ">{item.name}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
}

export default Carousel;