import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiPaperclip } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useNavigate } from 'react-router-dom';

const Experiences = () => {
  const navigate=useNavigate()
  const { data, imgs } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const MyModalContent = () => {
  return (
      <div className="bg-white p-[25px] relative z-10 flex items-start flex-col justify-between w-[800px] h-[550px] rounded-lg">
        <div className="w-full flex items-center gap-6">
          <img className="w-[100px] h-[100px] rounded-lg" src={imgs[0]?.img} alt="" />
          <h1 className="text-xl font-bold">Share this experience</h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[48%] flex flex-col gap-3">
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
              <span>Copy Link</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                <line x1="12" y1="11" x2="12" y2="11.01" />
                <line x1="8" y1="11" x2="8" y2="11.01" />
                <line x1="16" y1="11" x2="16" y2="11.01" />
              </svg>
              <span>Messages</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
              <span>Messenger</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
              <span>Twitter</span>
            </nav>
          </div>

          <div className="w-[48%] flex flex-col gap-3">
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Email</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>WhatsApp</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </nav>
            <nav className="w-full py-2 border-2 border-black flex items-center gap-5 px-4 rounded-lg">
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
              <span>More</span>
            </nav>
          </div>
        </div>
        <button className="absolute top-5 right-[30px] bg-red-500 px-4 py-2 rounded-lg" onClick={toggleModal}>X</button>
      </div>
    );
  };

  return (
    <div className="relative w-[98%] p-[40px]  gap-5 flex items-center  justify-center text-center flex-wrap mx-auto">
      {data?.map((product) => (
        <div className=" relative w-[280px] p-[5px] h-[330px] rounded-2xl" key={product.id}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            // loop={true}
            pagination={{ clickable: true }}
          >
            {imgs?.map((img) => (
              <SwiperSlide className="w-10" key={img.id}>
                <img className="w-full h-[320px] rounded-2xl object-cover" src={img?.img} alt="experience" />
              </SwiperSlide>
              ))}
          </Swiper>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <button onClick={()=>navigate(`/navigate/${product.id}`)} className="absolute z-20 bg-white text-2xl w-[60px] top-[20px] left-[20px] flex items-center justify-center rounded-2xl">
            Live
          </button>
          <button onClick={toggleModal} className="absolute z-20 bg-white text-2xl w-[40px] h-[40px] top-[20px] right-[20px] flex items-center justify-center rounded-2xl">
            <FiPaperclip />
          </button>
        </div>
      ))}

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60'>
          <div onClick={(e) => e.stopPropagation()} className="pointer-events-auto">
            <MyModalContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;
