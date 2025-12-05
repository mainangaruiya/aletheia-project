import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";

const Impact: React.FC = () => {
  const impactStats = [
    {
      id: 1,
      value: "42%",
      label: "Reduction in Anxiety & Depression Symptoms"
    },
    {
      id: 2,
      value: "58%",
      label: "Increase in Self-Esteem & Personal Agency"
    },
    {
      id: 3,
      value: "75%",
      label: "Reported Clarity on Personal Values & Future Goals"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      
      
      <main className="flex-grow">
        <HeroSection 
          title="The Aletheia Project: Impact & Scalability Report"
          subtitle="A mission-driven initiative focused on restoring identity, hope, and emotional stability for vulnerable youth in residential care."
          buttonText="Download Full Report"
          backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDpErY3l0eOvMC84zAoM0nFHn2XIhUJQc1qc2MNWnx7UvyAjvNOjGTNpIJqkAtiWYf-dD8bwf2apjVzD-mnGYNEJnEgOp3i7GxetS-InEzzueqNZQ6QQb2jakNEoNsUILYFJsstE9oN10lHyGn9Oy7PUZX3bg1nY4dBOkY2DZLitOsJ5jcNvq2KSCUCP3yupyNhqtnsYItQWY3rcpT4iAgMSb8PL4Av1m8dllx648dWp5U1OxweATm-OFvxpRS03myOaPvc3QW7bDxC"
        />
        
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-text-light dark:text-text-dark text-3xl font-bold mb-8">
              Our Impact: Measurable Change & Renewed Hope
            </h2>
            
            <StatsSection stats={impactStats} />
          </div>
        </div>
      </main>
      
     
    </div>
  );
};

export default Impact;
