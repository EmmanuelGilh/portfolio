import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Landing from './Components/Landing/Landing';
import Loader from './Components/Landing/Loader';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio'
import { Route, Routes } from "react-router-dom";



function App() {

  const [loading, setLoading] = useState(false)
  const contacto = useRef(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [setLoading])



  return (
    <div className="App">

      {loading ? <Loader /> : <div >
        <Navbar contacto={contacto} />
        <Routes>
          <Route exact path="/" element={<Landing contacto={contacto} />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </div>
      }
    </div>
  );
}

export default App;
