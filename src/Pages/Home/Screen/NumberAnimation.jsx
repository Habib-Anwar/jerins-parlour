import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';


export const NumberAnimation = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className='flex justify-between mt-12'>
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
   <div className='text-pink-600 text-3xl font-bold'>
    {counterOn && <CountUp start={0} end={500} duration={2} delay={0}></CountUp>}
    +
   </div>
   <p className='text-md font-semibold mt-3'>Happy Customer</p>
   </ScrollTrigger>
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
   <div className='text-pink-600 text-3xl font-bold mr-40'>
    {counterOn && <CountUp start={0} end={16} duration={2} delay={0}></CountUp>}
    +
   </div>
   <p className='text-md font-semibold mt-3' >Total Service</p>
   </ScrollTrigger>
   </div>
  )
}
