import React from 'react';
import backgroundImg from '../assets/backgroundImg.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <img className='absolute top-0 left-0 w-full h-full object-cover opacity-10' src={backgroundImg} alt="/" />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800/40'></div>
    <div className='max-w-[1240px] z-10 w-full h-[55%] sm:w-[70%] mx-4 my-16 grid sm:grid-cols-3 shadow-md'>
    <div className='w-full h-full flex flex-col justify-center items-center text-center rounded-t-sm sm:rounded-l-md sm:px-2 bg-[#FF6D00] text-white'>
        <h2>Have an account?</h2>
        <button onClick={() => {navigate("/login")}} className='btn-orange my-4'>Login</button>
      </div>
      <div className='row-span-2 sm:row-span-1 rounded-b-sm sm:rounded-r-md sm:col-span-2 flex flex-col justify-center items-center text-center sm:px-2 gap-4 bg-white text-[#FF6D00]'>
        <h2>Create An Account</h2>
        <form action="" className='w-full'>
          <div className='flex flex-col justify-center items-center gap-4 my-2 px-1'>
            <input type="text" placeholder='First Name' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
            <input type="text" placeholder='Last Name' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
            <input type="email" placeholder='Email' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
            <input type="password" placeholder='Pasword' className='bg-gray-400/20 w-auto text-black h-[30px] sm:h-[40px] rounded-sm sm:rounded-md font-[Poppins] px-2 focus:outline-none' />
          </div>
        </form>
        <button className='btn-white'>Sign Up</button>
      </div>
    </div>
  </div>
  )
}

export default Signup