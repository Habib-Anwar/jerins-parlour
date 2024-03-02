import React from 'react'
import { Background } from './Background'

export const Contact = () => {
  return (
    <div className='bg-pink-50'>
        <div>
          <h2 className='text-3xl font-bold text-center mb-14 mt-12'>Let us handle your <br></br>project,<span className='text-pink-600'> professionally.</span></h2>
        </div>
        <form  className='text-center'>   
        <div className='flex justify-center gap-4'>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your First Name"
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-3/2 rounded border py-3 px-[14px] text-base outline-none'
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Last Name"
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-3/2 rounded border py-3 px-[14px] text-base outline-none'
                  />
                  </div>
                  <div className='flex justify-center gap-4'>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-3/2 rounded border py-3 px-[14px] text-base outline-none mt-8'
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-3/2 rounded border py-3 px-[14px] text-base outline-none mt-8'
                  />
                  </div>
           
        
                  <textarea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                    className='mr-12 mt-8 w-96 border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary  rounded border py-3 px-[14px] text-base outline-none'
                  />
                </form>
                <div className='text-center mt-6 mb-10'>

<button className='btn bg-pink-600 text-white'>Send Message</button>
</div>
<Background></Background>
    </div>
  )
}
