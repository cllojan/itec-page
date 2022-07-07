import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import styled from "styled-components";

export default function Slider() {
  return (
   <>
    <Swiper
      modules={[Autoplay, Pagination, Navigation,EffectFade]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      navigation={true}
      
      speed={800}

      effect={'fade'}
      loop
      className="myswiper"
    >
      <SwiperSlide className='swiperslide'>
        <Image src="/151221084046.jpg" alt="1" layout='fill'/>
      </SwiperSlide>
      <SwiperSlide className='swiperslide'>
        <Image src="/IMAGEN-MURO-FINAL-1.jpg" alt="1" layout='fill'/>
      </SwiperSlide>
      
      
    </Swiper>
   </>
  );
}
