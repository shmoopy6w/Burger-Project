import React, { useState} from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  // let location = useLocation();
  
  // const [hide, setHide] = useState(false)
  // if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') {
  //   setHide(true)
  //   console.log(location)
  // } else {
  //   setHide(false)
  // }

  
  return (
    <div id="contactpage" className='min-h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center text-white flex-wrap-1 text-center xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
      <div className='w-1/2 p-10 flex flex-col justify-center items-start ml-8'>
        <h1 className='text-5xl font-bold my-10'>Burger website</h1>
        <h2 className=' max-w-md text-left text-xl'>
        Savor Every Bite - Your Trusted Burger Destination
        Taste the Tradition, Bite by Bite - Since [Founding Year]
        Crafting Burgers with Love and Passion - A Century of Excellence
        Discover Flavorful Memories - One Burger at a Time
        Quality Ingredients, Unforgettable Flavors - It's Our Promise
        © 2023 Burger Brand. All Rights Reserved.
        </h2>
        <div className='my-14 flex items-center justify-center [&>*]:px-3'>
        <a className='hover:opacity-80' href="https://www.facebook.com/"> <img src={facebook} alt='' /> </a>
        <a className='hover:opacity-80' href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"> <img src={twitter} alt='' /> </a>
        <a className='hover:opacity-80' href="https://web.whatsapp.com/"> <img src={whatsapp} alt='' /> </a>
        <a className='hover:opacity-80' href="https://www.instagram.com/accounts/login/"> <img src={instagram} alt='' /> </a>  
         
        </div>
      </div>
      {/* {hide && */}
      <div className='w-1/3 max-lg:w-2/3  flex justify-evenly items-start text-left pb-56 max-lg:pb-0'>
        <div>
          <h1 className='text-2xl font-bold my-4'>About</h1>
          <ul>

         <a className='hover:opacity-80' href="/stats"><li>History</li></a>  
         <a className='hover:opacity-80' href="/about"><li>Our Team</li></a> 
         <a className='hover:opacity-80' href="/extra"><li>Brand</li></a> 
           
            
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold my-4'>Services</h1>
          <ul>
            <a className='hover:opacity-80' href ="/order"><li>Where to order</li></a>  
            <a className='hover:opacity-80' href="/product"> <li>Our Product</li></a>
            <a className='hover:opacity-80' href="/promo"><li>Promo</li></a> 
    
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold my-4'>Other</h1>
          <ul>
            <a className='hover:opacity-80' href="/contact"><li>Reach Us</li></a>
            <a className='hover:opacity-80' href = "/contact"><li>Feedback</li></a> 
            <a className='hover:opacity-80' href = "/updates"><li>Subscribe</li></a> 

          </ul>
        </div>
      </div>
      {/* } */}
    </div>
  );
}

export default Footer;
