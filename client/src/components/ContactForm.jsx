import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [success, setSuccess] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form fields
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const name = formData.name
      const email = formData.email
      const message = formData.message

      const res = await axios.post('http://localhost:4000/feedback', {name, email, message});
      if (res.status == 201) {
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        setSuccess("Feedback Registed")
        setTimeout(() => {
          setSuccess('');
        }, 3000);
      }
      
    } catch (error) {
      console.error('Error sending feedback:', error);
      setErrors({ submit: 'Failed to submit feedback. Please try again.' });
    }
  };

  const validateForm = (data) => {
    // Implement your validation logic here
    // Example: Check if required fields are filled
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
      <div className="max-w-md my-16 mx-auto rounded-3xl text-center text-white bg-red-500 p-6">
        <h1 className="text-2xl font-bold mb-4">Feedback</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold px-4 py-2">Name:</label>
            <input type="text" id="name" value={formData.name} className="p-2 border border-gray-300 rounded text-black" onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            {errors.name && <span className="text-white text-sm">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold px-5 py-2">Email:</label>
            <input type="email" id="email" className="p-2 border border-gray-300 rounded text-black" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            {errors.email && <span className="text-white text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold px-4 py-4">Message:</label>
            <textarea id="message"  className="p-2 border border-gray-300 rounded text-black" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            {errors.message && <span className="text-white text-sm">{errors.message}</span>}
          </div>
          <button type="submit" className="bg-white text-red-500 p-2 rounded w-1/3  hover:opacity-80">Submit</button>
        </form>

        {success && <p className="text-white flex flex-col justify-center items-center text-left text-sm"><strong>{success}!</strong></p>}
      </div>
  );
};

export default ContactForm;