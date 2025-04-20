import React from 'react';

function About() {
  return (
    <div className="p-8 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-4">About Us</h1>

      <p className="text-lg text-center mb-8">
        Welcome to our Fertilizer Recommendation System. We provide personalized fertilizer recommendations to farmers based on the crop, season, soil type, and area. Our goal is to help improve agricultural yields, promote sustainable farming, and support farmers with the best solutions tailored to their needs.
      </p>

      {/* Our Services Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Our Services</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-600">Personalized Fertilizer Recommendations</h3>
            <p className="text-lg text-gray-700">
              Our system analyzes the crop, season, soil type, and area to provide customized fertilizer recommendations for optimal crop growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">Accurate Crop Data</h3>
            <p className="text-lg text-gray-700">
              Get the most up-to-date and accurate information about various crops, including ideal fertilizers, soil types, and seasonal requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">Sustainable Farming Practices</h3>
            <p className="text-lg text-gray-700">
              We focus on promoting environmentally-friendly practices by recommending fertilizers that are best suited for sustainable farming.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">Real-Time Support</h3>
            <p className="text-lg text-gray-700">
              Our platform offers 24/7 support to help farmers with any questions or concerns regarding fertilizer application and crop management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600">Seamless User Experience</h3>
            <p className="text-lg text-gray-700">
              Easy-to-use interface for farmers to input their crop and soil information and get accurate fertilizer recommendations in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600">
        <p>For more information, feel free to reach out to us at <a href="mailto:support@fertilizerrecommend.com" className="text-blue-600">support@fertilizerrecommend.com</a></p>
      </div>
    </div>
  );
}

export default About;
