
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Windows from '../components/Windowsm/Windows';
import Partners from '../components/Partners/Partners';
import LogoWall from '../components/LogoWall/LogoWall';
import Waves from '../components/Waves/Waves';


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


<Waves
  lineColor="#fff"
  backgroundColor="rgba(255, 255, 255, 0.2)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>


    </>
  );
};

export default Home;
