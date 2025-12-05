import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-glow">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-6">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <Link to="/" className="text-2xl font-black tracking-tighter gradient-text">
              The Aletheia Project
            </Link>
          </div>
          
          <nav className="hidden items-center gap-6 lg:flex">
            <Link 
              to="/" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/model" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/model") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Our Model
            </Link>
            <Link 
              to="/intervention" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/intervention") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              The Intervention
            </Link>
            <Link 
              to="/safety-net" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/safety-net") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Safety Net
            </Link>
            <Link 
              to="/impact" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/impact") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Impact
            </Link>
            <Link 
              to="/team" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/team") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                isActive("/contact") 
                  ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-500 pb-1" 
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              Contact
            </Link>
            
            <div className="flex items-center gap-4 ml-4">
              <DarkModeToggle />
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Involved
              </button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <DarkModeToggle />
            <button className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
