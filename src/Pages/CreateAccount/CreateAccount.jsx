import React from 'react'
import Glogo from '../../assets/icons/Google.png'
import Flogo from '../../assets/icons/facebook.png'
import { CreateNavbar } from './CreateNavbar'

export const CreateAccount = () => {
  return (
    <div><CreateNavbar></CreateNavbar>
    <div className='card w-full max-w-sm mx-auto border-2'>
   <h2 className='text-lg font-bold ml-8 mt-8'>Create an account</h2>
       <form className="card-body font-semibold">
        <div className="form-control">
          <input type="name" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="name" placeholder="Last Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Username or Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600 text-white">Create an account</button>
        </div>
        <p className='text-center'>Already have an account? <span className='link link-secondary'>Login</span></p>
      </form>
      </div>
      <div className='mt-4 mb-3'>
      <div className="divider w-96  mx-auto">Or</div>
        </div>
        <div className="flex justify-center gap-12 w-96 ml-[442px] btn mb-4">
            <img src={Flogo} alt="" className='w-8 bg-primary' />
            <h3>Continue With Facebook</h3>
        </div>
        <div className="flex justify-center gap-12 w-96 ml-[442px] btn mb-12">
            <img src={Glogo} alt="" className='w-8' />
            <h3>Continue With Google</h3>
        </div>
        </div>
  )
}
