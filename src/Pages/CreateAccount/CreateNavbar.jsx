import React from 'react'
import { Link } from 'react-router-dom'

export const CreateNavbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-start">
      <a className="cursor-pointer text-xl">
        <img src='https://i.ibb.co/KyDVTmD/logo.png' className='w-1/2'></img>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex -ml-52 font-semibold">
      <ul className="menu menu-horizontal">
        <li className='hover:font-medium'><a>Home</a></li>
        <li className='hover:font-medium'>
         <a>
          About Us
         </a>
        </li>
        <li className='hover:font-medium'><a>Projects</a></li>
        <li className='hover:font-medium'><a>Contact</a></li>
        <li className='hover:font-medium'><a>Admin</a></li>
      </ul>
    </div>
    <div className='ml-64'>
      <Link to="/login" className="btn bg-pink-600 text-white">Login</Link>
    </div>
  </div>
  )
}
