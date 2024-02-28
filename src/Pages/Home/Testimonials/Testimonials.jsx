import React, { useEffect, useState } from 'react'
import { TestiItem } from './TestiItem';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

export const Testimonials = () => {
  const [testi, setTesti] = useState([]);
  useEffect(() =>{
    fetch('testimonials.json')
    .then(res => res.json())
    .then(data =>{
      setTesti(data)
    })
  },[]);
  
  return (

    <div className='mb-6'>
        <h3 className='text-3xl font-bold text-center mt-16 mb-16'>Testimonials</h3>
        <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
 
{
  testi.map(item => <SwiperSlide key={item.id}
  item={item}>

<div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='flex'>
      <div>

    <img src={item.image} alt="" className='rounded-full w-1/2'/>
      </div>
      <div className='-ml-12'>

    <h2 className="card-title font-bold">{item.femaleName}</h2>
    <p className='font-semibold'>{item.designation}</p>
      </div>
    </div>
    
    <p>{item.comment}</p>
  <p className='mt-4'>{item.stars}</p>
  </div>
</div>
</div>
  </SwiperSlide>)
}
</Swiper>
        
        </div>
  )
}
