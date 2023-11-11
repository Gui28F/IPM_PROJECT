
import React, { useEffect } from 'react';
import "../components/Home.css"
import bgVideo from '../assets/library.mp4';
const Home = () => {

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <header className='w-screen h-screen relative'>
       <video
        src={bgVideo}
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
      />
      
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center'>
        <form
          action=''
          className='flex  rounded-search-bar p-1 text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto'
        >
          <input
            type='text'
            placeholder='Search for a book...'
            className='placeholder-text'
          />
          <button className='w-11 rounded-search-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Home;
