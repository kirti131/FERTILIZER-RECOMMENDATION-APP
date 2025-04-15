import React, { useState } from 'react';

const FertilizerForm = () => {
  const [crop, setCrop] = useState('');
  const [season, setSeason] = useState('');
  const [area, setArea] = useState('');
  const [soil, setSoil] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      cropName: crop,
      season: season,
      area: area,
      soilType: soil,
      quantity: quantity
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
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
        <input type="text" placeholder="Crop" value={crop} onChange={e => setCrop(e.target.value)} /><br/>
        <input type="text" placeholder="Season" value={season} onChange={e => setSeason(e.target.value)} /><br/>
        <input type="text" placeholder="Area" value={area} onChange={e => setArea(e.target.value)} /><br/>
        <input type="text" placeholder="Soil Type" value={soil} onChange={e => setSoil(e.target.value)} /><br/>
        <input type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} /><br/>
        <button type="submit">Get Recommendation</button>
      </form>

      {result && <p>{String(result)}</p>}
    </div>
  );
};

export default FertilizerForm;
