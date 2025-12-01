import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionStatement from '../components/home/MissionStatement';
import StatsCounter from '../components/home/StatsCounter';

const HomePage = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <MissionStatement />
      <StatsCounter />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Restored Hope</h3>
              <p>Youth report 80% increase in hopefulness about their future after 8 weeks in the program.</p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Reduced Anxiety</h3>
              <p>Measurable decrease in anxiety and depression symptoms among participants.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Identity Growth</h3>
              <p>Youth develop stronger self-identity and clarity about personal values.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;