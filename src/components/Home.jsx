import React from 'react';
import homeImg from '../assets/homeImg2.webp';
import backgroundImg from '../assets/backgroundImg.png';

const Home = () => {
  return (
    <div className='w-full h-screen absolute flex justify-center items-center'>
      <img className='absolute top-0 left-0 w-full h-full object-cover opacity-10' src={backgroundImg} alt="/" />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800/40'></div>
      <div className='max-w-[1240px] mx-auto md:pl-8 absolute grid md:grid-cols-2 top-52 mr-16 h-[50%] gap-4 md:gap-8'>
        <div className='flex flex-col md:pt-24 gap-8'>
          <h1 className='text-black'>Get all you need in one click... <span>Faast</span></h1>
          <button className='py-2 px-4 rounded-3xl bg-[#FF6D00] w-auto h-11'>See all our apps here</button>
        </div>
        <img className='rounded-sm md:rounded-lg object-cover w-full h-full' src={homeImg} alt="/" />
      </div>
    </div>
  )
}

export default Home