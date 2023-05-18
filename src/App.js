import React from "react";
import HomePage from "./pages/home.page";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AboutUs, ServicesAndPricing, WorkPreview } from './pages/index.pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/services-and-pricing" element={<ServicesAndPricing/>}/>
        <Route path="/work-preview" element={<WorkPreview />}/> 
      </Routes> 
    </Router>
  );
}

export default App;
