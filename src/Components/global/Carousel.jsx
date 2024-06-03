import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css"
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import autoprefixer from "autoprefixer";

const Carousel = () => {
  const [data, setData] = useState([]);
  const {setCategory}=useContext(UserContext)
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
      slidesPerView={7}

      // autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      // pagination={{ clickable: true }}
    >
      {data?.map((item) => (
        <SwiperSlide onClick={()=>setCategory(item.category)} className=" lg:w-[150px] w-[200px] flex sm:text-xl items-center gap-10 bg-gray-200 rounded-2xl p-2 justify-center" key={item.id}>
          <img className="w-5 h-5 mx-auto" src={item.icon} alt="" />
          <h1 className=" text-center w-full inline-block  text-[15px] text-black  font-bold  ">{item.name}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
}

export default Carousel;
