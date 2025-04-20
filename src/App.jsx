import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Cropes from './crop/Cropes';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import FertilizerForm from './components/FertilizerForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Import Footer

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use flexbox for full-height layout */}
      <Navbar /> {/* Add Navbar component */}
      <main className="flex-grow"> {/* Main content section should take up remaining space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop" element={<Cropes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fertilizer" element={<FertilizerForm />} />
        </Routes>
      </main>
      <Footer /> {/* Always at the bottom */}
    </div>
  );
}

export default App;


