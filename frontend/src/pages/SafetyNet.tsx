import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const SafetyNet: React.FC = () => {
  const tiers = [
    {
      id: 1,
      icon: "diversity_3",
      title: "Tier 1: Aletheia Guides",
      description: "Our frontline mentors are trained to provide direct, identity-focused support and build trusted relationships with youth in residential care."
    },
    {
      id: 2,
      icon: "verified_user",
      title: "Tier 2: Clinical Supervisors",
      description: "Licensed professionals provide weekly case reviews, skill development, and ensure adherence to our trauma-informed protocols."
    },
    {
      id: 3,
      icon: "lan",
      title: "Tier 3: Professional Networks",
      description: "A dedicated network of psychiatrists and specialists are on-call for immediate consultation on complex cases and crisis intervention."
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      
      
      <main className="flex-grow">
        <HeroSection 
          title="Our Safety Net: The Clinical Supervision Model"
          subtitle="Ensuring the highest standard of care and support for every individual through a robust, multi-tiered framework designed for safety, accountability, and excellence."
          backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB6j0XyQiRZLf7ChqEWjW8PoFz2LvKnn9opdFYRd2mgHgiZxLpbyXIhjLtMMAjo8aZefqEB18p1gl8llzqVyE469em-auB_ZNMJExgslUsD5pNn3HKmI0TYgKyGDbVrEpNmAWb0Ifhn3N-gF2il4DXbHSe_-ukfSriZRkPogU5sWak7Ypg7P_7u0vdtmavgZpFAHFQseMyfpZclz3b-LqtVrpEcNrEFp8ohv2N6QAe859-P_vI0u_HSuo8bXY-oxr4ask_OTo34c55N"
        />
        
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h4 className="text-text-muted-light dark:text-text-muted-dark text-sm font-bold tracking-[0.015em] uppercase mb-2">
                A Three-Tiered Approach to Quality Care
              </h4>
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold">
                Our Comprehensive Support Structure
              </h2>
            </div>
            
            <FeatureSection 
              title=""
              features={tiers}
              columns={3}
            />
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default SafetyNet;
