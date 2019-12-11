import React from 'react';
import './index.css';
import Homepage from '../src/views/homepage/Homepage'
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Homepage src="/Video.mp4"></Homepage>
      <Footer />
    </div>
  );
}

export default App;
