import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaHeart, FaBook, FaUser, FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <FaHeart className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Aletheia</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-primary-600 transition">
              <FaHome /> <span>Home</span>
            </Link>
            <Link to="/programs" className="flex items-center space-x-1 hover:text-primary-600 transition">
              <FaHeart /> <span>Programs</span>
            </Link>
            <Link to="/resources" className="flex items-center space-x-1 hover:text-primary-600 transition">
              <FaBook /> <span>Resources</span>
            </Link>
            {user && (
              <Link to="/dashboard" className="flex items-center space-x-1 hover:text-primary-600 transition">
                <FaUser /> <span>Dashboard</span>
              </Link>
            )}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-600">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
                <FaSignInAlt /> <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
