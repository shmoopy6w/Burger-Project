import React from "react";

function Statistics() {
  return (
    <div id="promo" className='min-h-screen bg-red-500 text-white text-center flex flex-col justify-around items-center p-8'>
      <div className='my-10'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-10xl my-10 font-bold'>
          Statistics
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
        Our Burger Legacy - Our journey started decades ago when a small burger <br/> stand became a neighborhood 
        favorite. Since then, we've been on a relentless quest for  <br/>burger perfection, 
        blending tradition with innovation to create unforgettable flavors.
        </h2>
      </div>
      <div className='flex justify-around w-screen flex-wrap space-y-5 sm:space-y-0 sm:space-x-5'>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
            7K
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            CUSTOMERS
          </h2>
        </div>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
            109
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            OUTLETS
          </h2>
        </div>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
            35
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            COUNTRIES
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
