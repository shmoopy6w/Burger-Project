import { useState, useEffect } from 'react';
import axios from 'axios';

const Order_now = () => {

  const [orderItems, setOrderItems] = useState([]);

  const fetchMenuData = async () => {
    try {
      const res = await axios.post('http://localhost:4000/menu');
      setOrderItems(res.data.allData);
    } catch (error) {
      console.error('Error during order:', error);
    }
  }
  useEffect(() => {
    fetchMenuData();
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    username: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    username: '',
  });
  const [bill, setBill] = useState();
  const [past, setPast] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity = quantity;
    setOrderItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const { email, username } = formData;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


    const total = calculateTotalPrice().toFixed(2);

    if (total === '0.00') {
      setErrors({ ...errors, username: 'Current Bill Value : ₹0' });
      valid = false;
    }

    if (!email || !emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Please provide a valid email address.' });
      valid = false;
    }

    if (!username || username.length < 6) {
      setErrors({ ...errors, username: 'Please provide a valid username.' });
      valid = false;
    }

    if (valid) {
      try {
        const selectedItems = [];

        for (const item of orderItems) {
          if (item.quantity > 0) {
            selectedItems.push([item.dish, item.quantity] );
          }
        }

        const res = await axios.post('http://localhost:4000/order', { email, username, total, selectedItems });
        if (res.status === 201) {
          setBill(res.data);
          console.log(res.data)
        } else if (res.data === 'email or username do not match with our records'){
          setErrors({ ...errors, email: 'email or username do not match with our records' });
        }
        
      } catch (error) {
        console.error('Error during order:', error);
      }
    }
  }

  const handlePast = (e) => {
    e.preventDefault();
    console.log(bill.pastOrdersString)
    setPast(bill.pastOrdersString)
  }


  return (
  <div className='flex flex-row-reverse items-stretch gap-6 text-white bg-black '>

    <div className="max-w-md w-full mx-auto my-8 p-4 bg-red-500 rounded">
      {orderItems.map((item, index) => (
        <div key={index} className="mb-4">
          <label className="flex flex-row justify-between">
            {item.dish} (₹{item.price}):
            <select value={item.quantity} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} className=" p-2 border rounded text-black" >
            {[...Array(11).keys()].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          </label>
          
        </div>
      ))}
      
    </div>

    <div className="max-w-md w-full h-fit mx-auto my-8 p-4 bg-red-500 rounded flex flex-col justify-center items-center text-center">
    <form onSubmit={handleSubmit} className='w-3/4'>
        
    <div className="mb-4">
        <strong>Total Price:</strong> ₹{calculateTotalPrice().toFixed(2)}
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
            className="border border-gray-300 rounded-md p-2 w-full text-black"
            required />
          {errors.email && <p className="text-white text-lg">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username:
          </label>
          <input
            type="username"
            id="username"
            name="username" value={formData.username} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full text-black" required />
          {errors.username && <p className="text-white text-lg">{errors.username}</p>}
          
        </div>
        <button onClick={handleSubmit} className="bg-white text-red-500 p-2 rounded hover:opacity-80 focus:outline-none focus:shadow-outline-blue">
          Pay Now
        </button>
      </form>
      <div className="max-w-md w-full h-fit mx-auto my-8 p-4 rounded flex flex-row justify-center items-center text-center">
      {bill && <p className='text-white flex flex-col justify-center items-center text-left text-sm bg-black max-w-md w-full h-fit mx-auto mt-2 p-2 rounded'>
        username : {bill.username}<br/> email : {bill.email}<br/>phone : {bill.phone}<br/>address : {bill.address}<br/>total : {bill.total}<br/>date : {bill.date}<br/>items : {bill.selectedItemsString}
        {/* {bill} */}
        <strong>Bill Generated</strong>
      <br/>
      <a href="/home">
      <button className="bg-white w-fit text-red-500 p-2 rounded hover:opacity-80 focus:outline-none focus:shadow-outline-blue ">
          Home
      </button>
      </a>
      <button onClick={handlePast} className="bg-white w-fit text-red-500 mt-2 p-2 rounded hover:opacity-80 focus:outline-none focus:shadow-outline-blue ">
          Past Orders
      </button>
      </p>}
      
      </div>
      {past && <span className="text-white h-full w-full overflow-scroll text-center text-sm">{bill.pastOrdersString}</span>}
    </div>
    

  </div>
  );
};

export default Order_now;
