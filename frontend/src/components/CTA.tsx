import React from "react";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Make a Difference?",
  description = "Learn how you can support The Aletheia Project or partner with us to bring this vital intervention to youth who need it most.",
  primaryButtonText = "Get Involved",
  secondaryButtonText = "Contact Us",
  onPrimaryClick = () => console.log("Primary button clicked"),
  onSecondaryClick = () => console.log("Secondary button clicked")
}) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-8">
            Join Our Mission
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
            {title}
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onPrimaryClick}
              className="group px-8 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center min-w-[200px]"
            >
              <span className="mr-3">{primaryButtonText}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[200px]"
            >
              {secondaryButtonText}
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Already supporting us? <button className="text-white font-semibold hover:underline bg-transparent border-none cursor-pointer">
                Share your story
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
