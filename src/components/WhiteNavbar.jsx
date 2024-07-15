import React from 'react'
import { Link } from 'react-router-dom'

const WhiteNavbar = () => {
  return (
    <nav style={{ boxShadow: "4px 4px 100px 0px rgba(0, 0, 0, 0.15)" }} className="font-[Poppins] border-gray-200 bg-white">
      <div className=" flex flex-wrap items-center justify-between px-8 sm:px-20 lg:px-16 xl:px-36 mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./images/logo-gradient.svg" className="h-14" alt="Flowbite Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden  focus:outline-none focus:ring-2 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col py-4 md:p-0 mt-4  items-center border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-[#D67AEA] rounded md:bg-transparent text-xl md:p-0 " aria-current="page"><Link to={'/'}>Home</Link></a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  text-black opacity-60 md:border-0  md:p-0 text-xl ">About us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black opacity-60  md:border-0  md:p-0 text-xl ">Help</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black opacity-60  md:border-0  md:p-0 text-xl ">Contact</a>
            </li>
            <li>
              <button href="#" className="block py-2  bg-gradient-to-r from-[#fd4e86] to-[#d67bec] text-white px-10  md:border-0 rounded-xl  text-xl ">login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default WhiteNavbar
