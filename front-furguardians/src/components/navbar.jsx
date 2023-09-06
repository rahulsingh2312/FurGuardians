import React, { useState } from 'react';
import ApplyModal from './apply';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="sticky top-0 relative z-40 text-15xl px-4 py-4 flex justify-between items-center bg-white">
      <span>
           {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a className="text-15xl font-bold leading-none" href="google.com">
      🐺
       </a>
           </span>
           <span className='ml-4 text-1xl'>FurGuardians</span>
      <div className="lg:hidden">
        
        <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
        </button>
      </div>
     
      <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
       {/* eslint-disable jsx-a11y/anchor-is-valid */}
       
        <li><a className="text-2xl text-gray-600 hover:text-gray-500" href="hi.com">Sighted? 🐕</a></li>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
        {/* <li><a className="text-2xl text-blue-600 font-bold" href="googlr.com"></a></li> */}
       {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <li><a className="text-2xl text-gray-600 hover:text-gray-500" href="#">Events</a></li>
       {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <li><a className="text-2xl text-gray-600 hover:text-gray-500" href="#">Contribute</a></li>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <li><a className="text-2xl text-gray-600 hover:text-gray-500" href="#">Connect 🐺</a></li>
      </ul>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" onClick={toggleModal} href="#">Apply</a>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign in </a>
     {/* mobile */}
     <div className={`navbar-menu ${isMenuOpen ? '' : 'hidden'}`}>
      <div className="navbar-backdrop fixed inset-0 bg-red-800 opacity-25" onClick={toggleMenu}></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-7 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a className="mr-auto text-5xl font-bold leading-none" href="#">
           🐺
          </a>
          <button className="navbar-close"  onClick={toggleMenu}>
            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>

          <ul>
            <li className="mb-1">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a className="block p-4 text-3xl font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Sighted? 🐕</a>
            </li>
            <li className="mb-1">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a className="block p-4 text-3xl font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Events</a>
            </li>
            <li className="mb-1">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a className="block p-4 text-3xl font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contribute</a>
            </li>
            <li className="mb-1">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a className="block p-4 text-3xl font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Connect 🐺</a>
            </li>
            {/* <li className="mb-1"> */}
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              {/* <a className="block p-4 text-3xl font-semibold text-gray-470 hover:bg-blue-50 hover:text-blue-600 rounded" href='#'>Contact</a> */}
            {/* </li> */}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
{/* eslint-disable jsx-a11y/anchor-is-valid */}          
            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" onClick={toggleModal} href="#">Apply</a>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Copyright © ttt 🖤 2023  </span>
          </p>
        </div>
      </nav>
    </div>
    {/* mobile end */}
    <ApplyModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}

export default Navbar;