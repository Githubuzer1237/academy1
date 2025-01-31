
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Windows from '../components/Windowsm/Windows';
import Partners from '../components/Partners/Partners';
import LogoWall from '../components/LogoWall/LogoWall';


const Home = () => {


  const logoImgs = [
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" },
    { imgUrl: '/logoacademy.jpg', altText: "React Bits Logo" }
  ];


  return (
    <>
      <Hero />

      <div style={{height: '300px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>

      <Windows />
     
       <div className="line"></div>
      <Partners />

      <div style={{height: '100px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>

    </>
  );
};

export default Home;
