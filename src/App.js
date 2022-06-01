import './App.css';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio'
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>

    </div>
  );
}

export default App;
