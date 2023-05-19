import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Video from "./Assets/video.mp4"
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <div>
    
      <div className="container mx-auto" >
        
        <Router>
          <TopHeader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      <video className="-z-50" autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
   
  );
}

export default App;
