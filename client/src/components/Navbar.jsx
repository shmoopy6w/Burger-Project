import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  // let location = useLocation();
  // console.log(location)
  // const [hide, setHide] = useState(false)
  // if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') {
  //   setHide(true)
  // } else {
  //   setHide(false)
  // }

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-screen text-white flex justify-between lg:px-20 px-5 py-5 items-center bg-black'>
      {/* {hide && <img
          className='w-10 xs:w-10 sm:w-10 md:w-10 lg:w-20 xl:w-20'
          src={logo}
          alt=''
        />} */}
      {/* {!hide && */}
        <img
          className='w-10 xs:w-10 sm:w-10 md:w-10 lg:w-20 xl:w-20'
          src={logo}
          alt=''
        />
        {/* } */}
      {/* {hide &&  */}
      <div
        className={`font-bold lg:flex xl:flex ${
          menuOpen
            ? "flex flex-col absolute top-20 bg-black bg-opacity-50 [&>*]:py-10 text-center justify-center w-full h-screen z-10"
            : "hidden "
        } flex-shrink-1 w-full lg:w-auto lg:justify-end [&>*]:px-5 `}
      >
        <Link to="/home"> <h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Home
        </h2></Link>

        <Link to="/product"><h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Product
        </h2> </Link>
          

        <Link to="/promo"><h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Promo
        </h2> </Link>


        <Link to="/order"><h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Order
        </h2> </Link>
          

        <Link to="/about"> <h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          About
        </h2> </Link> 

        <Link to="/"> <h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Login
        </h2> </Link>  

      <Link to="/contact"> <h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Feedback
        </h2>
        </Link> 

        <Link to="/updates"> <h2 className='text-lg hover:opacity-80 xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl'>
          Subscribe
        </h2> </Link> 
      </div>
      {/* } */}
      

      <div className='lg:hidden xl:hidden xs:flex sm:flex md:flex w-10 xs:w-10 sm:w-10 md:w-10 '>
        <HiMenuAlt1
          size={"2rem"}
          onClick={toggleMenu}
          className='z-1000'
        />
      </div>
    </div>
  );
}

export default Navbar;
