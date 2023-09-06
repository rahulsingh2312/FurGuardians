import React, { useState } from 'react';

function ApplyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    // Add more fields as needed
  });
  const [userLocation, setUserLocation] = useState(null); 
  const handleLocationCapture = async  () => {
    if ("geolocation" in navigator) {
     await navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        // console.log(userLocation);
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData.name);
    // Handle form submission here (e.g., send data to the server)
    // You can also close the modal after submission if needed
    const postData = {
           
           latitude: userLocation.latitude,
           longitude: userLocation.longitude,
           email: formData.email,
           name: formData.name,
 
      // Add more fields as needed
    };
    console.log(postData);

    try {
      // Send a POST request to your server or API
      const response = await fetch('/FurGuardian/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Form submitted successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error submitting form');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-4 sm:p-8 rounded shadow-lg w-full md:h-4/6 h-full sm:w-1/2">
          <span
            className="modal-close cursor-pointer text-gray-500 hover:text-gray-700 text-2xl sm:text-4xl"
            onClick={onClose}
          >
            &times;
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold my-2 sm:my-4">Apply to be a FurGuardian🐺</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 sm:mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1 sm:mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2 sm:mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 sm:mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Add more form fields as needed */}
            <button
              type="submit"   onClick={handleLocationCapture}
              className="bg-blue-500 text-white font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
