import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import BlogPage from '../Pages/Blog';
import OurPets from '../components/Home/OurPets';
import OurPetsPage from '../Pages/OurPets';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="content">
        <Header />
           <Router>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/our-pets" element={<OurPetsPage />}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </Router>
        
        <Footer />
    </div>
  );
}

export default App;
