import React from "react";
import burger from "../assets/burger.png";

function BigBurger() {
  return (
    <div className='bg-g4 min-h-screen items-center flex flex-row-reverse flex-wrap justify-around text-left xs:p-20 sm:p-20 p-10'>
      <div className='flex justify-center'>
        <img className='w-3/5 xm:w-3/5 sm:w-3/5 md:w-4/5 lg:w-max xl:w-max'
          src={burger}
          alt=''
        />
      </div>
      <div className='[&>*]:my-6 w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 my-6 text-red-500 h-full p-20 text-center lg:text-start xl:text-start flex flex-col justify-evenly items-center xs:items-center sm:items-center md:items-center lg:items-start xl:items-start'>
        <h1 className='hover:opacity-80 text-4xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-8xl font-bold'>
        Maharaja Supreme
        </h1>
        <h2 className='text-base sm:text-3xl lg:text-xl xl:text-2xl'>
        Our Special <b> Big Burger</b> is legendary. Crafted from  meticulously sourced 
        ingredients, it boasts a  mouthwatering patty with unparalleled flavor.
         Topped with crispy lettuce, ripe tomatoes, and <br/> our signature sauce, 
         it's a symphony of flavors and textures.One bite, 
        and you'll understand why <br/>it's iconic. Try it today to be part of the legend!"
        </h2>
        <a href="/promo">
          <button className='bg-red-500 text-white px-[6rem] py-3 text-xl rounded-full hover:opacity-75'>ORDER NOW</button>
          </a>
      </div>
    </div>
  );
}

export default BigBurger;
