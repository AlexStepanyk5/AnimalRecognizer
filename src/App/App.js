import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import BlogPage from '../Pages/Blog';
import OurPetsPage from '../Pages/OurPets';
import Authorization from '../Pages/Authorization';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from '../Pages/SignUp';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const updateIsConnected = (value) => {
    setIsConnected(value);
  };

  return (
    <div className="content">
      <Header isConnected={isConnected} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-pets/:selectedType/:selectedColor/:selectedSterilized/:selectedPassport" element={<OurPetsPage />} />
          <Route path="/our-pets/" element={<OurPetsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/authorization"
            element={<Authorization updateIsConnected={updateIsConnected} />}
          />
          <Route
            path="/signup"
            element={<SignUp updateIsConnected={updateIsConnected} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
