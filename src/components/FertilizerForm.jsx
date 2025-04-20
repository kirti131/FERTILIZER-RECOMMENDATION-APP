import React, { useState } from 'react';

const FertilizerForm = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soilType: '',
    cropType: '',
    nitrogen: '',
    potassium: '',
    phosphorous: '',
    zipCode: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setResult(data.recommendation);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div>
      <h2>Fertilizer Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} required /><br/>
        <input type="text" name="humidity" placeholder="Humidity" value={formData.humidity} onChange={handleChange} required /><br/>
        <input type="text" name="moisture" placeholder="Moisture" value={formData.moisture} onChange={handleChange} required /><br/>
        <input type="text" name="soilType" placeholder="Soil Type" value={formData.soilType} onChange={handleChange} required /><br/>
        <input type="text" name="cropType" placeholder="Crop Type" value={formData.cropType} onChange={handleChange} required /><br/>
        <input type="text" name="nitrogen" placeholder="Nitrogen" value={formData.nitrogen} onChange={handleChange} required /><br/>
        <input type="text" name="phosphorous" placeholder="Phosphorous" value={formData.phosphorous} onChange={handleChange} required /><br/>
        <input type="text" name="potassium" placeholder="Potassium" value={formData.potassium} onChange={handleChange} required /><br/>
        <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required /><br/>
        <button type="submit">Get Recommendation</button>
      </form>

      {result && <p>{String(result)}</p>}
    </div>
  );
};

export default FertilizerForm;
