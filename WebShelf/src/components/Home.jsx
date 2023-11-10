import React from 'react';
import "../components/Home.css"

const Home = () => {
  return (
    <header className='w-screen h-screen relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-main'></div>
      <div>
        This is a text example
        <button>Click me</button>
      </div>
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
