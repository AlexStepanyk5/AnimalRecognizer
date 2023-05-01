import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import './App.scss';

function App() {
  return (
    <div className="content">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
