// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/Model";
import InterventionPage from "./pages/InterventionPage";
import SafetyNet from "./pages/SafetyNet";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/intervention" element={<InterventionPage />} />
          <Route path="/safety-net" element={<SafetyNet />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;