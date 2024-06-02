import React from "react";
import burger from "../assets/burg.png";
import { Link } from "react-router-dom";

function PopularPackage() {
  return (
    <div className='min-h-screen bg-g6 bg-cover bg-center text-red-500 text-center flex flex-col items-center justify-around flex-wrap py-10 lg:py-0 xl:py-0'>
      <h1 className='text-6xl font-bold'>Popular Packages</h1>
      <div className='flex w-screen justify-evenly flex-wrap [&>*]:my-10'>
        <div className='bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg'>
          <h1 className='text-5xl font-bold'>Veg Bliss</h1>
          <img className='py-4' src={burger} alt='' />
          <h2 className=' text-3xl s    font-bold py-3'>₹159.00</h2>
          <h3>
          Veggie Overload:Enjoy burger 
          with <br/>a side salad and a smoothie.
          </h3>
          
          <a href="/order">
            <input type="button" className="border-2 border-red-600 px-12 py-4 bg-red-600 text-white text-lg
           rounded-full font-myriad pro font-semibold cursor-pointer mt-5 hover:opacity-80" value="ORDER NOW"/>
          </a>
    
        </div>
        <div className='bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg'>
          <h1 className='text-5xl font-bold'>Cheezy</h1>
          <img className='py-4' src={burger} alt='' />
          <h2 className=' text-3xl s    font-bold py-3'>₹159.00</h2>
          <h3>
          Cheezy Delite: Savor a jalapeño <br/> burger and cheezy flavor.
          
          </h3>
          <a href="/order">
            <input type="button" className="border-2 border-red-600 px-12 py-4 bg-red-600 text-white text-lg
           rounded-full font-myriad pro font-semibold cursor-pointer mt-5 hover:opacity-80" value="ORDER NOW"/>
          </a>
        </div>
        <div className='bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg'>
          <h1 className='text-5xl font-bold'> Classic</h1>
          <img className='py-4' src={burger} alt='' />
          <h2 className=' text-3xl s    font-bold py-3'>₹59.00</h2>
          <h3>
          Classic Burger: Stay Classy with<br/>
          the most basic and eye catching burger
          </h3>
          <a href="/order">
            <input type="button" className="border-2 border-red-600 px-12 py-4 bg-red-600 text-white text-lg
           rounded-full font-myriad pro font-semibold cursor-pointer mt-5 hover:opacity-80" value="ORDER NOW"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopularPackage;
