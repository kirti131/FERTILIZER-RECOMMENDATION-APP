import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Corrected
import Home from './home/Home';
import Cropes from './crop/Cropes';
import Signup from './components/Signup';
import FertilizerForm from './components/FertilizerForm';  // ✅ Import FertilizerForm

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop" element={<Cropes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fertilizer" element={<FertilizerForm />} /> {/* Added FertilizerForm Route */}
      </Routes>
    </>
  );
}

export default App;




