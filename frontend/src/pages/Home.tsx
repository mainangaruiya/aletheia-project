import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Home: React.FC = () => {
  const coreComponents = [
    {
      id: 1,
      icon: "person_search",
      title: "Identity Restoration",
      description: "Guiding youth through a journey of self-discovery to build a confident and authentic personal narrative."
    },
    {
      id: 2,
      icon: "favorite",
      title: "Emotional Stability",
      description: "Providing proven tools and dedicated support to help youth understand and manage their emotions effectively."
    },
    {
      id: 3,
      icon: "health_and_safety",
      title: "Our Safety Net",
      description: "Creating a reliable and compassionate support system with our dedicated team of professionals and mentors."
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
     
      
      <main className="flex-grow">
        <HeroSection 
          title="The Aletheia Project"
          subtitle="Restoring identity and fostering emotional stability for a brighter future."
          buttonText="Explore Our Approach"
        />
        
        {/* Mission Section */}
        <div className="text-center py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              The Aletheia Project is a mental wellness initiative dedicated to helping vulnerable youth in residential care settings rediscover their identity and build emotional stability. We provide the tools and support necessary for them to create a strong foundation for their future.
            </p>
          </div>
        </div>
        
        {/* Core Components */}
        <FeatureSection 
          title="Our Core Components"
          subtitle="Our program is built on three foundational pillars designed to provide comprehensive support."
          features={coreComponents}
          columns={3}
        />
        
        {/* Impact Section */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 md:p-12 rounded-2xl">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tight mb-6">
                  <span className="gradient-text">Making a Real Impact</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                  "The Aletheia Project gave me the space to understand who I am and the tools to build a future I'm excited about. It's more than a program; it's a family."
                </p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  - Program Graduate
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full size-48 text-center shadow-xl">
                <span className="text-6xl font-black">92%</span>
                <span className="text-sm font-medium leading-tight mt-2">Reported Increase in Self-Esteem</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Preview */}
        <div className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Our compassionate and experienced team is the heart of The Aletheia Project, dedicated to guiding and supporting every young person on their journey.
            </p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap mb-12">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-40 border-4 border-white shadow-lg"
                style={{ 
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_QIuc9s2JMV2Fu6luoEkc1RpQbBC5eI_hxS-734tF_KbpxvPwY3BwZg2EpxBs5RePEkbndUvuur4DuptpqPacPXN6EFm60AIQB8k4vBtfkGbDG4yHLUrQ555653eepfj-ybLu2UR6TyiefLg5Y5jLIG4LBdbO3r8qICK8QJHej2jZoKgrUjTnJbCRqDtvFcreQuQvgnPfFtBS3oQa9sQv1OGunRjyE1fMqltinHMhEFf42iJcnFUThk0Q19NwldjOJpeVvRq291cD')` 
                }}
              />
            ))}
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-1">
            Learn More About Us
          </button>
        </div>
      </main>
      
      
    </div>
  );
};

export default Home;
