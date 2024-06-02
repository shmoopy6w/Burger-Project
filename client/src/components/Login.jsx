import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message , setMessage] = useState('')

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const { email, password } = formData;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || !emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Please provide a valid email address.' });
      valid = false;
    }

    if (!password || password.length < 6) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters.' });
      valid = false;
    }

    if (valid) {
      try {
        const res = await axios.post('http://localhost:4000/login', { email, password });
        console.log(res)
        if (res.status === 201) {
          setErrors({ email: '', password: '' })
          setMessage('Details found !')
          setTimeout(() => {
            navigate('/home')
          }, 2000);
          
        } else if (res.data.message === 'email does not exist') {
          setMessage(res.data.message)
        } else if (res.data === 'incorrect password') {
          setErrors({ ...errors, password: 'Password incorrect.' });
        }
        
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 rounded-3xl p-4 bg-light bg-red-500 shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Log In</h2>
      <form onSubmit={handleSubmit}>
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
            className="border border-gray-300 rounded-md p-2 w-full text-black"
            required />
          {errors.email && <p className="text-white text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full text-black"
            required
          />
          {errors.password && <p className="text-white text-xs">{errors.password}</p>}
        </div>
        <button type="submit" className="bg-white text-red-500 rounded-md px-4 py-2 hover:opacity-90 focus:outline-none mr-3">
          Log In
        </button>

         <Link to="/signup">
          <button className="bg-white text-red-500 rounded-md px-4 py-2 hover:opacity-80 pl-4 focus:outline-none">
            Sign up
          </button>
          {message && <p className="text-white text-xs">{message}</p>}
        </Link>
      </form>
    </div>
  );
}

export default Login;
