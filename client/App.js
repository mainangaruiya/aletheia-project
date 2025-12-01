import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-hot-toast';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ResourcesPage from './pages/ResourcesPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
          <ToastContainer position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
