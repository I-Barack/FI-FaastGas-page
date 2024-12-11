import React from 'react';
import homeImg from '../assets/homeImg2.webp';
import backgroundImg from '../assets/backgroundImg.png';
import appInstall from '../assets/appInstall.svg';

const Home = () => {
  return (
    <div className='w-full h-screen absolute flex justify-center items-center'>
      <img className='absolute top-0 left-0 w-full h-full object-cover opacity-10' src={backgroundImg} alt="/" />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800/40'></div>
      <div className='max-w-[1240px] absolute flex flex-col md:flex-row justify-center items-center h-full md:h-[80%] pt-28 md:pt-0 gap-4 md:gap-8 md:mx-16'>
        <div className='flex flex-col gap-8 md:min-w-80 mx-4 md:mx-0'>
          <h1 className='text-black'>Get all you need in one click... <span className='text-[#FF6D00]'>Faast</span></h1>
          <button className='py-2 px-4 rounded-3xl bg-[#FF6D00] w-auto h-11'>See all our apps here</button>
        </div>
        <img className='rounded-sm md:rounded-lg object-cover h-full w-full md:w-[60%] md:mt-16' src={appInstall} alt="/" />
      </div>
    </div>
  )
}

export default Home