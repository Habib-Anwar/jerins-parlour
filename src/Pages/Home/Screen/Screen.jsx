import React from 'react'
import screenImg from '../../../assets/images/unsplash 1.png'
import { NumberAnimation } from './NumberAnimation'



export const Screen = () => {
  return (
    <div className='lg:flex justify-around mt-36'>
        <div>
<img src={screenImg} alt="" />
        </div>
        <div>
        <h1 className='text-3xl font-semibold'>Let us handle your<br></br> screen <span className='text-pink-600'>Professionally</span>.</h1>
        <p className='mt-6'>With well written codes, we build amazing apps for all<br></br> platforms, mobile and web apps in general ipsum.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit. Purus commodo ipsum.</p>
       <NumberAnimation></NumberAnimation>
        </div>
    </div>
  )
}
