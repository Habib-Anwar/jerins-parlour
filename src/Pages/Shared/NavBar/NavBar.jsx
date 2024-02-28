import React from 'react'

export const NavBar = () => {
  return (
    <div className='bg-pink-50'><div className="navbar">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="cursor-pointer text-xl">
        <img src='https://i.ibb.co/KyDVTmD/logo.png' className='w-1/2'></img>
      </a>
    </div>
    <div className="navbar-end hidden lg:flex -ml-32">
      <ul className="menu menu-horizontal">
        <li className='hover:font-medium'><a>Home</a></li>
        <li className='hover:font-medium'>
         <a>
          Our Portfolio
         </a>
        </li>
        <li className='hover:font-medium'><a>Our Team</a></li>
        <li className='hover:font-medium'><a>Contact Us</a></li>
      </ul>
    </div>
    <div>
      <a className="btn bg-pink-600 text-white">Login</a>
    </div>
  </div></div>
  )
}
