import React from "react";

const Footer: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`Navigating to ${platform}`);
  };

  const handleLinkClick = (link: string) => {
    console.log(`Navigating to ${link}`);
  };

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950 border-t border-slate-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-glow">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-7">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black gradient-text">Aletheia</div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Project</div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Restoring identity and fostering emotional stability for a brighter future.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <button
                  key={social}
                  onClick={() => handleSocialClick(social)}
                  className="size-10 rounded-lg bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  aria-label={`Visit our ${social} page`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'The Intervention', 'Safety Net', 'Impact', 'Our Team'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-transparent border-none text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Research Papers', 'Case Studies', 'Annual Reports', 'Media Kit', 'FAQ'].map((resource) => (
                <li key={resource}>
                  <button
                    onClick={() => handleLinkClick(resource)}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-transparent border-none text-left"
                  >
                    {resource}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Stay Updated</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} The Aletheia Project. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => handleLinkClick('Privacy Policy')}
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-transparent border-none"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('Terms of Service')}
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-transparent border-none"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('Cookie Policy')}
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-transparent border-none"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
