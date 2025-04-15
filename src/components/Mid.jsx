import React from 'react';

function Mid() {
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
          <h2 className="text-2xl font-bold text-green-800 mb-4">Enter Crop Details</h2>
          <form className="space-y-4">
            
            {/* Crop Name */}
            <input type="text" placeholder="Crop Name" className="input input-bordered w-full" />
            
            {/* Season Selection */}
            <select className="select select-bordered w-full" defaultValue="">
              <option value="" disabled>Select Season</option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Monsoon</option>
            </select>
            
            {/* Area */}
            <input type="text" placeholder="Area (e.g., 10 acres)" className="input input-bordered w-full" />
            
            {/* Soil Type Selection */}
            <select className="select select-bordered w-full" defaultValue="">
              <option value="" disabled>Select Soil Type</option>
              <option>Clay</option>
              <option>Sandy</option>
              <option>Loamy</option>
            </select>
            
            {/* Quantity */}
            <input type="text" placeholder="Quantity (in kg)" className="input input-bordered w-full" />
            
            {/* Submit Button */}
            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mid;

