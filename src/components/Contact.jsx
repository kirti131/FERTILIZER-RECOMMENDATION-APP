import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to a backend or display a message)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="p-8 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md border border-green-200">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-semibold text-green-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-semibold text-green-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-green-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-green-700 mb-2">
            Comment or Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
            rows="4"
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
            Submit
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold text-green-700">You can also reach us at:</h2>
        <p className="text-lg text-green-700">
          <FaEnvelope className="inline mr-2" />
          support@fertilizerrecommend.com
        </p>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-700">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
