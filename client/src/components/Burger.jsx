import React from "react";
import burger from "../assets/burger.png";

function Burger() {
  return (
    <div id="product" className='bg-red-500 min-h-screen items-center flex flex-wrap justify-around text-left xs:p-20 sm:p-20 p-10'>
      <div className='flex justify-center'>
        <img
          className='w-3/5 xm:w-3/5 sm:w-3/5 md:w-4/5 lg:w-max xl:w-max'
          src={burger}
          alt=''
        />
      </div>
      <div className='w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 [&>*]:my-6 text-white  h-full p-20 text-center lg:text-start xl:text-start flex flex-col justify-evenly items-center  xs:items-center sm:items-center md:items-center lg:items-start xl:items-start'>
        <h1 className=' text-4xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-8xl font-bold'>
          Signature Burger
        </h1>
        <h2 className='text-2xl'>
        Indulge in the  <b> "Ultimate Gourmet Bliss"  </b> burger, a true masterpiece.
         Crafted with a perfectly seasoned Angus beef patty, this burger offers 
         an explosion of flavors. Caramelized onions, fresh lettuce, and ripe
          tomatoes provide a delightful contrast, while truffle aioli and
         chipotle BBQ sauce add a luxurious twist.
         It's the pinnacle of burger perfection, a culinary experience like no other.
        </h2>
        <a href="/promo">
          <button className='bg-white text-red-500 px-[6rem] py-3 text-xl rounded-full hover:opacity-75'>ORDER NOW</button>
        </a>
      </div>
    </div>
  );
}

export default Burger;
