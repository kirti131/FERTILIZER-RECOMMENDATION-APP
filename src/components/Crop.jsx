import React, { useEffect, useState } from "react";

function Crop() {
  const [crops, setCrops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cropsPerPage = 9;

  useEffect(() => {
    fetch("/list.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCrops(data))
      .catch((error) => console.error("Error fetching crops data:", error));
  }, []);

  // Pagination Logic
  const indexOfLastCrop = currentPage * cropsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - cropsPerPage;
  const currentCrops = crops.slice(indexOfFirstCrop, indexOfLastCrop);
  const totalPages = Math.ceil(crops.length / cropsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      {/* Centered Heading */}
      <h1 className="text-2xl font-bold text-center text-green-800 mb-8">
        Crops List
      </h1>

      {/* Crop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCrops.length === 0 ? (
          <p className="text-center col-span-full">Loading crops...</p>
        ) : (
          currentCrops.map((crop) => (
            <div
              key={crop.id}
              className="bg-white p-6 rounded-xl shadow-md border border-green-200 hover:shadow-lg transition duration-300"
            >
              <h2 className="font-semibold text-lg text-green-700 mb-2">{crop.name}</h2>
              <p className="text-sm text-gray-700 mb-1">{crop.title}</p>
              <p className="text-sm">🌱 <span className="font-medium">Season:</span> {crop.season}</p>
              <p className="text-sm">🌍 <span className="font-medium">Soil Type:</span> {crop.soil}</p>
              <p className="text-sm">🧪 <span className="font-medium">Fertilizer:</span> {crop.fertilizer}</p>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition duration-200 ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-green-200 text-green-800 hover:bg-green-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Crop;


