import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      
      
      <main className="flex-grow">
        <div className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-slide-up">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
                  Get In Touch
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
                  <span className="gradient-text">Contact Us</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Reach out to learn more about The Aletheia Project, partnership opportunities, or how you can support our mission.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-soft">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Project Lead
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                          Name
                        </h4>
                        <p className="text-lg text-slate-800 dark:text-slate-200">
                          David Kimanthi
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                          Phone
                        </h4>
                        <a 
                          href="tel:+254790926944"
                          className="text-lg text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          +254 790 926 944
                        </a>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                          Location
                        </h4>
                        <p className="text-lg text-slate-800 dark:text-slate-200">
                          Nairobi, Kenya
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-2">
                          Project Date
                        </h4>
                        <p className="text-lg text-slate-800 dark:text-slate-200">
                          21.10.2025
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-soft">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Project Overview
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-primary-600 dark:text-primary-400">The Aletheia Project</span> is a mental wellness initiative focused on identity restoration and emotional stability for vulnerable youth in residential care settings.
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Based on a structured, scientifically proven model adapted from the Shamiri Protocol for high-trauma populations.
                      </p>
                      <div className="pt-4 border-t border-slate-200 dark:border-gray-700">
                        <button className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-2 bg-transparent border-none">
                          Download Full Project Brief
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <div className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-soft">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Send a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Organization (Optional)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Your organization"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your interest in The Aletheia Project..."
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                          Send Message
                        </button>
                      </div>
                      
                      <div className="text-center pt-4 border-t border-slate-200 dark:border-gray-700">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Prefer to call? <a href="tel:+254790926944" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">+254 790 926 944</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Partnership Opportunities */}
              <div className="mt-20 pt-12 border-t border-slate-200 dark:border-gray-700">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                    Partnership Opportunities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Research Collaboration",
                        description: "Academic institutions interested in studying intervention efficacy"
                      },
                      {
                        title: "Funding Partners",
                        description: "Organizations looking to support mental wellness initiatives"
                      },
                      {
                        title: "Implementation Partners",
                        description: "Residential care homes interested in piloting the program"
                      }
                    ].map((opportunity, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                          {opportunity.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {opportunity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Contact;
