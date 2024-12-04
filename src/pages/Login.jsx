import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/backgroundImg.png';

const Login = () => {
  return (
    <div className='w-screen h-screen relative flex justify-center items-center'>
      <img className='absolute top-0 left-0 w-full h-full object-cover opacity-10' src={backgroundImg} alt="/" />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800/40'></div>
      <div className='max-w-[1240px] z-10 w-full h-[55%] sm:w-[70%] mx-4 my-16 grid sm:grid-cols-3 shadow-md'>
        <div className='row-span-2 rounded-t-sm sm:rounded-l-md sm:row-span-1 sm:col-span-2 flex flex-col justify-center items-center text-center sm:px-2 gap-4 bg-white text-[#FF6D00]'>
          <h2>Login to Your Account</h2>
          <form action="" className='w-full'>
            <div className='flex flex-col justify-center items-center gap-4 my-2 px-1'>
              <input type="email" placeholder='Email' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
              <input type="password" placeholder='Pasword' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
            </div>
          </form>
          <button className='btn-white'>Login</button>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center text-center rounded-b-sm sm:rounded-r-md sm:px-2 bg-[#FF6D00] text-white'>
          <h2>New Here?</h2>
          <button className='btn-orange my-4'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login