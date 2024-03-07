import React from 'react'
import Glogo from '../../assets/icons/Google.png'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div>
     <div className=' flex justify-center mt-32'>
        <img src="https://i.ibb.co/KyDVTmD/logo.png" alt="" className=' w-52' />
     </div>
     <div className='mt-28 text-center'>
        <h2 className='text-2xl mb-6 font-bold'>Login With</h2>
        <div className="flex justify-center gap-12 w-96 ml-[442px] btn bg-pink-50"
>
            <img src={Glogo} alt="" className='w-8' />
            <h3 className='text-lg'>Continue With Google</h3>
        </div>
      <p className='text-center mt-3 font-semibold'>Don't have an account? <Link to='/createaccount'><span className='link link-secondary'>Create an account</span></Link></p>
     </div>
    </div>
  )
}
