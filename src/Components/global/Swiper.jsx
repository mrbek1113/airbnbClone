import React, { useContext, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { UserContext } from '../../Context/UserContext';

const MySwiperComponent = () => {
    const {imgs}=useContext(UserContext)
  useEffect(() => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = Array.from(swiperWrapper.children);

    if (slides.length < 2) { // Ensure at least 2 slides for looping
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
      });
    }
    const swiper = new Swiper('.swiper-container', {
    //   loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container  flex-wrap">

            <div className="swiper-wrapper ">
       {     imgs?.map((img)=>(
                <img className='' key={img.id} src={img.img} alt="" />
            ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"> </div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default MySwiperComponent;
