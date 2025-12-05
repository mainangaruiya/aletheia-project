import React from "react";
import { Link } from "react-router-dom";

interface Stat {
  id: number;
  value: string;
  label: string;
  description?: string;
  link?: string;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  variant?: "cards" | "grid" | "simple";
  reportButtonLink?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  stats,
  variant = "cards",
  reportButtonLink = "/impact"
}) => {
  if (variant === "simple") {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
            <p className="text-base font-medium leading-normal text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
            <p className="tracking-light text-4xl font-bold leading-tight text-slate-900 dark:text-white">
              {stat.value}
            </p>
            {stat.link && (
              <Link 
                to={stat.link}
                className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline mt-2"
              >
                Learn more
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group animate-fade-in card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-soft hover:shadow-glow border border-slate-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl md:text-6xl font-black gradient-text mb-4">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {stat.label}
                  </h3>
                  {stat.description && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {stat.description}
                    </p>
                  )}
                  {stat.link && (
                    <Link 
                      to={stat.link}
                      className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline mt-4"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-700 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Based on our latest impact assessment report
          </p>
          <Link
            to={reportButtonLink}
            className="mt-4 px-6 py-2.5 text-primary-600 dark:text-primary-400 font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors inline-block"
          >
            Download Full Report
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;