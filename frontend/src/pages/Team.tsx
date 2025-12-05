import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Team: React.FC = () => {
  const deliveryModel = [
    {
      id: 1,
      icon: "groups",
      title: "Increased Youth Engagement",
      description: "Youth are more likely to open up and connect with guides who share similar life experiences."
    },
    {
      id: 2,
      icon: "trending_down",
      title: "Reduced Program Costs",
      description: "Utilizing trained lay-providers makes our high-impact program more accessible and sustainable."
    },
    {
      id: 3,
      icon: "favorite",
      title: "Authentic Lived Experience",
      description: "Guides offer genuine empathy and understanding, fostering a safe and supportive space for growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
    
      
      <main className="flex-grow">
        <HeroSection 
          title="Meet the Team and Aletheia Guides"
          subtitle="Discover the dedicated individuals at the heart of The Aletheia Project, pioneering a new approach to mental wellness for vulnerable youth."
          backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDsX-eSoW9i3l8R6SLp12vErZ7pIWQnfPNVgVaLmaJ8t9n0-pqtR4xUoNeWk70eBfu9XXeq6o1GWQiCkG3_nLboKVZ-JIEfSao81qPfvIdtW6GyZA8KID25KHQRum_U4RCodfODNSV21CRpJ0j3k5RlqmWmZL4sX4sQVR2LbQC-_Vchg5827CK_g17AS63w_7agyeKbxkRdYfoGQtgEkQ9Xq4RN-nAqOwtf1bOI0VFOW1Ns091AmXkA3nMwmG_pY5ou5ipVBqmiqjek"
        />
        
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
                The Delivery: Our Near-Peer Model
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-3xl mx-auto">
                Our unique near-peer model is the cornerstone of our approach. We empower trained lay-providers—typically young adults or alumni of residential care—to deliver our program.
              </p>
            </div>
            
            <FeatureSection 
              title=""
              features={deliveryModel}
              columns={3}
            />
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default Team;
