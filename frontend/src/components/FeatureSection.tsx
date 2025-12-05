import React from "react";
import { Link } from "react-router-dom";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  exploreButtonLink?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
  exploreButtonLink = "/model"
}) => {
  const gridCols = {
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            {title && (
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-glow border border-slate-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 group-hover:from-primary-100 group-hover:to-primary-200 dark:group-hover:from-primary-800/30 dark:group-hover:to-primary-700/30 transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary-600 dark:text-primary-400">
                      {feature.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-gray-700 w-full">
                    {feature.link ? (
                      <Link
                        to={feature.link}
                        className="text-primary-600 dark:text-primary-400 font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300"
                      >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </Link>
                    ) : (
                      <button className="text-primary-600 dark:text-primary-400 font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 bg-transparent border-none">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to={exploreButtonLink}
            className="px-8 py-3.5 bg-white dark:bg-gray-800 text-slate-800 dark:text-white font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-50 dark:hover:bg-gray-700 inline-block"
          >
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;