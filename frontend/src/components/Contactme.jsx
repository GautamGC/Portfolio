import React, { useState } from 'react';
import '/src/App.css';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(prevState => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
    setFormVisible(false);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8 z-10">
      {!formVisible && (
        <button
          className="bg-black hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none animate-pulse"
          onClick={toggleForm}
        >
          Contact Me
        </button>
      )}

      {formVisible && (
        <div className="fixed inset-0 flex justify-end items-center px-4 py-6 pointer-events-none">
          <div className="max-w-md w-full bg-slate-100 bg-opacity-40 shadow-lg rounded-lg pointer-events-auto animate-bounce-in">
            <form className="px-8 py-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">Mobile No:</label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate800 text-white font-semibold py-2 px-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit
                </button>
              </div>
              <div className="mb-2">
                <button
                  className="bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none"
                  onClick={toggleForm}
                >
                  <div className="size-3">
                    <img src="./public/close.png" alt="CloseForm" />
                  </div>
                </button>
                
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactme;
