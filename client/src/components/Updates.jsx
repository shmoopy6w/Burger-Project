import React from "react";
import backgroundImage from "../assets/g8_bg.png";
import { useState } from "react";
import axios from "axios";

const Updates = () => {
  const [email, setEmail] = useState('')
  let [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const validationErrors = validateEmail(email);

      if (validationErrors == 0) {
        const res = await axios.post('http://localhost:4000/subscribe', {email})
        if (res.status == 201) {
          setErrors('Subscribed Successfully!')
          setEmail('')
          setTimeout(() => {
            setErrors('')
          }, 3000);
        } else if (res.data == 'Already subscribed') {
          setErrors('Already Subscribed!')
          setEmail('')
          setTimeout(() => {
            setErrors('')
          }, 4000);
        }
      }

    } catch(error) {
      console.error('Error sending feedback:', error);
      setErrors({ submit: 'Failed to send Email. Please try again.' });
    }

    function validateEmail(email) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!email.trim()) {
        setErrors('Email is required');
        return 1;
      }
      if (!email || !emailRegex.test(email)) {
        setErrors('Please provide a valid email address.' );
        return 1
      }
      return 0
      
    }

  }

  return (
    <div
      className='flex flex-col w-screen xs:p-20 sm:p-20 md:p-20 lg:p-0 xl:p-0  h-screen items-center py-10  justify-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <h1 className='text-4xl lg:text-8xl font-bold text-red-500 mb-5 lg:mb-10'>
        Don't miss out Updates
      </h1>
      <h2 className='text-lg lg:text-2xl mb-5 lg:mb-15 text-red-500'>
        Lorem Ipsum is simply dummy text of the printing and <br />
        typesetting industry. Lorem Ipsum has been the industry's
      </h2>
      <form onSubmit={handleSubmit} className='my-5 lg:my-10 w-screen flex items-center justify-center flex-wrap'>
        <input
          className='w-full lg:w-1/3 px-5 lg:px-10 py-3 text-lg lg:text-2xl xs:rounded-r-full sm:rounded-r-full md:rounded-r-full lg:rounded-r-none xl:rounded-r-none rounded-full outline-none mb-2 lg:mb-0'
          type='email'
          id="email"
          value={email}
          placeholder='Your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='w-full lg:w-auto hover:opacity-80 xs:rounded-l-full sm:rounded-l-full md:rounded-l-full lg:rounded-l-none xl:rounded-l-none rounded-full text-lg lg:text-2xl px-5 lg:px-10 py-3 bg-red-500 text-white'
          type='submit'
        >
          Subscribe
        </button>
        
      </form>
      {errors && <p className="text-red-500 flex flex-col justify-center items-center text-left text-md">{errors}</p>}
    </div>
  );
};

export default Updates;
