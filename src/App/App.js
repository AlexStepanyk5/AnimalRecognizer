import React from 'react';
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
  return (
    <div className="content">
        <Header />
           <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/our-pets" element={<OurPetsPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/authorization" element={<Authorization/>}/>
                <Route path="/signup" element={<SignUp/>}/>
              </Routes>
            </Router>
        
        <Footer />
    </div>
  );
}

export default App;
