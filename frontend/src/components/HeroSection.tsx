import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonOnClick?: () => void;
  variant?: "gradient" | "image" | "simple";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  showButton = true,
  buttonText = "Learn More",
  buttonOnClick = () => console.log("Hero button clicked"),
  variant = "gradient"
}) => {
  const isImage = variant === "image";
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {isImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      )}
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-8">
            Transforming Youth Mental Wellness
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
            <span className="block text-slate-900 dark:text-white">{title.split(' ').slice(0, -1).join(' ')}</span>
            <span className="block gradient-text">{title.split(' ').slice(-1).join(' ')}</span>
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {showButton && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={buttonOnClick}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <span className="mr-2">{buttonText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/90 dark:bg-gray-800/90 text-slate-800 dark:text-white font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                Watch Our Story
              </button>
            </div>
          )}
          
          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-slate-600 dark:text-slate-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">92%</div>
              <div className="text-sm font-medium">Reported Improvement</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">150+</div>
              <div className="text-sm font-medium">Youth Supported</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300 dark:bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">98%</div>
              <div className="text-sm font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-0 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
    </section>
  );
};

export default HeroSection;
