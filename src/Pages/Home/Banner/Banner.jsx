import React from 'react'
import img from "../../../assets/images/girl.png"

export const Banner = () => {
  return (
   <>
   <div className='lg:flex justify-around'>
    <div>
        <h1 className='uppercase text-4xl font-bold mt-20'>Beauty salon <br></br><span className=''> for every women</span></h1>
        <p className='mt-6'>Lorem ipsum dolor sit<br></br> amet consectetur adipisicing elit. <br></br>Voluptate deleniti vel unde! Fuga, <br></br>animi expedita.</p>
    <button className='btn btn-lg bg-pink-600 text-white mt-6'>Get an Appointment</button>
    </div>
    <div>
   <img src={img} alt="" />
    </div>
    </div></>
  )
}
