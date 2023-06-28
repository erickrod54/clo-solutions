import React from "react";
import HomePage from "./pages/home.page";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AboutUs, ServicesAndPricing, WorkPreview } from './pages/index.pages'
import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";
import EmailForm from "./components/contact.component";

function App() {
  return (
    <Router>
      <div className="container">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/services-and-pricing" element={<ServicesAndPricing/>}/>
        <Route path="/work-preview" element={<WorkPreview />}/> 
      </Routes>  
      <EmailForm />
      <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
