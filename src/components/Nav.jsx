import React, {useState} from 'react';
import fiLogo from '../assets/fiLogo.png';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Nav = () => {

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const navigate = useNavigate()

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  }

  return (
    <div className='w-full h-16 md:mt-2 absolute top-0 left-0 flex justify-center items-center'>
      <div className='w-full py-4 px-8 md:w-[80%] rounded-xl h-auto md:py-2 sm:px-4 absolute bg-[#ADF802]/80 z-10 flex justify-between items-center'>
        <div>
          {/* <img src={fiLogo} alt="/" /> */}
          <h2 className='flogo'>FAAST</h2>
        </div>
        <ul className='hidden md:flex gap-4'>
          <li className='hover:cursor-pointer'>Home</li>
          <li className='hover:cursor-pointer'>Apps</li>
          <li className='hover:cursor-pointer'>Our Offices</li>
          <li className='hover:cursor-pointer'>FAQs</li>
          <li className='hover:cursor-pointer'>About us</li>
        </ul>
        <div className='hidden md:flex gap-4'>
          <button onClick={() => {navigate("/login")}} className='bg-[#054D1E] py-2 px-4 rounded-full text-[#FF6D00]  w-24 max-h-10'>Login</button>
          <button onClick={() => {navigate("/signup")}} className='bg-transparent py-2 px-4 rounded-full text-[#FF6D00] w-24 max-h-10'>Sign Up</button>
        </div>

          {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

          {/* Mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/80 px-8 py-8 flex flex-col' : 'absolute left-[-200%] top-0 w-full bg-gray-100/90 px-4 py-6 flex flex-col'}>
          <ul className=''>
            <h2 className='mb-8'>FAAST.</h2>
            <li className='border-b my-2 hover:cursor-pointer'>Home</li>
            <li className='border-b my-2 hover:cursor-pointer'>Apps</li>
            <li className='border-b my-2 hover:cursor-pointer'>Our Offices</li>
            <li className='border-b my-2 hover:cursor-pointer'>FAQs</li>
            <li className='border-b my-2 hover:cursor-pointer'>About us</li> 
            <div className='flex flex-col'>
              <button className='my-6 w-full rounded-full bg-[#054D1E] text-[#FF6D00] h-8 '>Search</button>
              <button className=' w-full rounded-full bg-[#054D1E] text-[#FF6D00] h-8 '>Account</button>
            </div>   
            <div className='flex justify-between my-6'>
              <FaFacebook className='icon' />
              <FaTwitter className='icon' />
              <FaInstagram className='icon' />
              <FaPinterest className='icon' />
              <FaYoutube className='icon' />
            </div>     
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav