import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Video from "./Assets/video.mp4"
import TopHeader from "./components/TopHeader";
import Education from "./components/Education";

function App() {
  return (
    <div className="my-container">
      <div className="container mx-auto my-content" >
        <Router>
          <TopHeader />
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Router>
      </div>
      <video className="-z-50" autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <Footer />
    </div>
  );
}

export default App;

