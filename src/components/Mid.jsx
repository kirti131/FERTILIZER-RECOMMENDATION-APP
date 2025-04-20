import React, { useState } from 'react';

function Mid() {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soilType: '',
    cropType: '',
    nitrogen: '',
    potassium: '',
    phosphorous: '',
  });

  const [recommendedFertilizer, setRecommendedFertilizer] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      // API call to Flask backend
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setRecommendedFertilizer(data.recommendation);  // Set the recommendation in state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-green-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Plant Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/vector-small-green-sprout-soil-with-bokeh-background_1284-48013.jpg?t=st=1743895885~exp=1743899485~hmac=4211b67369deef9fa55e1a93c9374deb39b0c13b0f2a5e227788b216a1ead9ad&w=826"
            alt="Plant"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        {/* Right - Input Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Enter Crop Details</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="temperature"
              placeholder="Temperature"
              value={formData.temperature}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="humidity"
              placeholder="Humidity"
              value={formData.humidity}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="moisture"
              placeholder="Moisture"
              value={formData.moisture}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            {/* Soil Type Selection */}
            <select
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>Select Soil Type</option>
              <option>Clay</option>
              <option>Sandy</option>
              <option>Loamy</option>
            </select>

            {/* Crop Type Selection */}
            <select
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>Select Crop Type</option>
              <option>Wheat</option>
              <option>Rice</option>
              <option>Corn</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="nitrogen"
              placeholder="Nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="potassium"
              placeholder="Potassium"
              value={formData.potassium}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="phosphorous"
              placeholder="Phosphorous"
              value={formData.phosphorous}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
              Submit
            </button>
          </form>

          {/* Show Recommended Fertilizer after form submission */}
          {recommendedFertilizer && (
            <div className="mt-6 p-4 bg-green-200 rounded-lg shadow-inner text-center">
              <h3 className="text-xl font-bold text-green-800">Recommended Fertilizer:</h3>
              <p className="text-green-700 text-lg mt-2">{recommendedFertilizer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mid;







