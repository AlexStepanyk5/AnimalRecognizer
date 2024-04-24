import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import BlogPage from '../Pages/Blog';
import OurPetsPage from '../Pages/OurPets';
import Authorization from '../Pages/Authorization';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';

function App() {
  const [isConnected, setIsConnected] = useState(() => {
    return localStorage.getItem('isConnected') === 'true';
  });

  const updateIsConnected = (value) => {
    setIsConnected(value);
    localStorage.setItem('isConnected', value);
  };

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  const ProtectedRoute = ({ element, ...props }) => {
    return isConnected ? element : <Navigate to="/authorization" />;
  };

  return (
    <Router>
      <div className="content">
        <Header isConnected={isConnected} updateIsConnected={updateIsConnected} userName={userName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-pets/:selectedType/:selectedColor/:selectedSterilized/:selectedPassport" element={<OurPetsPage />} />
          <Route path="/our-pets/" element={<OurPetsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/authorization" element={<Authorization updateIsConnected={updateIsConnected} updateUserName={updateUserName} />} />
          <Route path="/signup" element={<SignUp updateIsConnected={updateIsConnected} updateUserName={updateUserName} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
