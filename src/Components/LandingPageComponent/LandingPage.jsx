import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from './NavBar';
import IT_IMAGE from '../../images/it-service.jpg';

export const LandingPage = () => {
  const [transparantNav, setTransparantNav] = useState(false)
  const [heightFromTop, setHeightFromTop] = useState(null)
  const myRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current) {
        const elementTop = Math.floor(myRef.current.getBoundingClientRect().top); // Get the element's top relative to the viewport
        setHeightFromTop(elementTop);
        if (heightFromTop <= -30) {
          setTransparantNav(true)
        } else {
          setTransparantNav(false)
        }
        console.log('HEIGHT FROM TOP (on scroll):------> ', elementTop);
      }


    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heightFromTop]);
  return (
    <>
    
      <div
        ref={myRef}
        style={{
          backgroundImage: `url(${IT_IMAGE})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          height: '100vh', // Or any height you want
          width: '100vw', // Or any width you want
        }}
      >
        <NavBar transparantNav={transparantNav } />
        <div className="trigger">
          <p className='text-white font-bold '>Some text</p>
        </div>
      </div>
      <div
        className='mt-3'
        style={{
          backgroundImage: `url(${IT_IMAGE})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          height: '100vh', // Or any height you want
          width: '100vw', // Or any width you want
          
        }}
      >
        <div className="trigger">
          <p className='text-white font-bold '>Another text</p>
        </div>
      </div>
      
    </>
  );
};
