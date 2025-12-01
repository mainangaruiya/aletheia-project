import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InterventionPage from "./pages/InterventionPage";
import SafetyNet from "./pages/SafetyNet";
import Impact from "./pages/Impact";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intervention" element={<InterventionPage />} />
          <Route path="/safety-net" element={<SafetyNet />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
