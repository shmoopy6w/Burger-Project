import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();

    let valid = true;
    const { username, email, phone, address, password } = formData;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phoneNumberRegex = /^[+]?[0-9()-.\s]{10,}$/;


    if (!username || username.trim() === '') {
      setErrors({ ...errors, username: 'Please provide a username.' });
      valid = false;
    }

    if (!email || !emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Please provide a valid email address.'});
      valid = false;
    }

    if (!password || password.length < 6) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters.'});
      valid = false;
    }
    if(!phone || !phoneNumberRegex.test(phone)) {
      setErrors({ ...errors, phone: 'Please provide a valid phone number'})
      valid = false;
    }

    if (phone.length > 10) {
      setErrors({ ...errors, phone: 'Phone Number should not exceed 10 numbers'})
      valid = false;
    }

    if (valid) {
      try {
        const response = await axios.post('http://localhost:4000/signup', { username, email, phone, address, password });
        if (response.data.message == 'details already exists') {
          setErrors({ ...errors, username: 'User already exists, Try to Login' });
        } else {
          setMessage(response.data.message);
          setTimeout(() => {
            navigate('/login');
          }, 5000)
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
  }
  }
  return (
    <div className="max-w-md mx-auto my-16 p-4 bg-light rounded-3xl bg-red-500 shadow-lg text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-1/2 text-black text-center"
            required
          />
          {errors.username && <p className="text-white text-xs">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-black-700">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black text-center"
            required
          />
          {errors.phone && <p className="text-white text-xs">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-black-700">
            Address:
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 h-16 text-black text-center"
            required
          />
          {errors.address && <p className="text-white text-xs">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black text-center"
            required
          />
          {errors.email && <p className="text-white text-xs">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-black-700">
            Create Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black text-center"
            required
          />
          {errors.password && <p className="text-white text-xs">{errors.password}</p>}
        </div>
        <div className='w-full flex flex-row-reverse items-center justify-center gap-4'>
          <button type="submit" className="bg-white text-red-500 rounded-md px-4 py-2 h-1/2 hover:opacity-80 focus:outline-none">
            Sign Up
          </button>
          {message && <p className="text-white text-xs">{message}</p>}
          <p className='flex gap-2 text-xs p-0 m-0'>Already have an account ?<Link to="/login"><button className=" bg-white text-red-500 rounded-md px-4 py-2 hover:opacity-80 pl-4 focus:outline-none">Log In</button></Link></p>
        </div>
        
        
      </form>
    </div>
  );
}
export default Signup;
