import React from 'react';
import homeImg from '../assets/homeImg2.webp';
import backgroundImg from '../assets/backgroundImg.png';

const Home = () => {
  return (
    <div className='max-w-[1240px] px-16 w-full h-screen absolute'>
      <img className='absolute top-0 left-0 w-full h-full object-cover opacity-10' src={backgroundImg} alt="/" />
      <div className='absolute top-0 left-0 w-full h-full bg-[#ADF802]/80'></div>
      <div className='absolute grid sm:grid-cols-2 top-52 mr-16 h-[50%] gap-4 sm-gap-8'>
        <div className='flex flex-col sm:pt-24 gap-8'>
          <h1 className='text-black'>Get all you need in one click... <span>Faast</span></h1>
          <button className='py-2 px-4 rounded-3xl bg-[#FF6D00] w-auto h-11'>See all our apps here</button>
        </div>
        <img className='rounded-sm sm:rounded-lg object-cover w-full h-full' src={homeImg} alt="/" />
      </div>
    </div>
  )
}

export default Home