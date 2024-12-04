import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';


const Landing = () => {
  return (
    <div className='relative max-w-[1240px]'>
      <Home />
      <Nav />
    </div>
  )
}

export default Landing