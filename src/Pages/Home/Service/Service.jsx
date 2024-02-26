import React from 'react'
import serimg1 from '../../../assets/icons/service1.png'
import serimg2 from '../../../assets/icons/service2.png'
import serimg3 from '../../../assets/icons/service3.png'

export const Service = () => {
  return (
    <div>
    <h1 className='text-3xl font-bold text-center mt-16 mb-16'>Our Awesome <span className='text-pink-600'>Services</span></h1>
    <div className='lg:flex justify-between'>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={serimg1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Anti Age Face Treatment</h2>
    <p className='text-pink-600 font-semibold'>$199</p>
    <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={serimg2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Hair Color & Styling</h2>
    <p className='text-pink-600 font-semibold'>$99</p>
    <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={serimg3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Skin care Treatment</h2>
    <p className='text-pink-600 font-semibold'>$299</p>
    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
  </div>
</div>
    </div>
    <div className='text-center mt-12'>

    <button className='btn bg-pink-600 text-white'>Explore More</button>
    </div>
    </div>
  )
}
