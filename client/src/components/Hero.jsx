import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className='bg-hero h-screen bg-cover bg-no-repeat bg-center relative'>
    
      <div className='text-white w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/5 h-full ml-4 sm:ml-20 flex flex-col justify-center items-start text-left px-4 sm:px-0'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>
          Get CashBack Upto 50%
        </h1>
        <h2 className='text-base sm:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 leading-tight'>
        Experience South Africa's iconic burgers, where the Rand is your passport to delectable flavors. 
        Indulge in a taste that's worth every cent satisfaction just a bite away!
        </h2>
       <Link to="/order"><button className=' bg-orange-600 px-14 py-2 hover:opacity-80 texnpt-lg sm:text-xl rounded-full mt-6 w'>
          ORDER NOW
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
