import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Accordion from "../components/Accordion";
import CTA from "../components/CTA";

const InterventionPage: React.FC = () => {
  const pillars = [
    {
      id: 1,
      icon: "favorite",
      title: "Gratitude",
      description: "Fostering appreciation and a positive outlook on personal circumstances and relationships."
    },
    {
      id: 2,
      icon: "trending_up",
      title: "Growth Mindset",
      description: "Encouraging the belief that abilities can be developed through dedication and hard work."
    },
    {
      id: 3,
      icon: "verified_user",
      title: "Value Affirmation",
      description: "Helping youth identify and connect with their core values to build a strong sense of self."
    }
  ];

  const accordionItems = [
    {
      id: 1,
      title: "Adaptation for Trauma-Informed Care",
      content: (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          The Aletheia Intervention is carefully adapted for the specific needs of youth in residential care, following strict protocols of a low-intensity, low-stigma, and highly structured intervention. Our facilitators are trained in trauma-informed principles to recognize and respond to the impacts of trauma, ensuring every session fosters trust and psychological safety.
        </p>
      ),
      isOpen: true
    },
    {
      id: 2,
      title: "Key Program Benefits",
      content: (
        <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
          <li>Reduced anxiety and depressive symptoms.</li>
          <li>Increased self-compassion and emotional regulation.</li>
          <li>Improved capacity for future goal setting.</li>
          <li>Stronger social connections within the care environment.</li>
        </ul>
      )
    },
    {
      id: 3,
      title: "Who It's For & Program Structure",
      content: (
        <>
          <p className="text-slate-600 dark:text-slate-300 mb-3">
            <strong>Target Audience:</strong> Youth aged 14-18 in residential care settings.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            <strong>Structure:</strong> 6 weekly group sessions (60 minutes each), delivered by trained support staff. Includes take-home activities for reinforcement.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="The Aletheia Intervention"
          subtitle="A path to identity restoration and emotional stability for youth in residential care."
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        {/* Introduction */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              The Aletheia Intervention is a brief, low-stigma, group-based program designed to rebuild self-efficacy and restore a stable sense of identity for vulnerable youth. It is founded on principles of positive psychology and adapted for trauma-informed care.
            </p>
          </div>
        </section>
        
        {/* Our Approach */}
        <FeatureSection 
          title="Our Approach: The Adapted Shamiri Protocol"
          subtitle="We utilize an evidence-based model adapted to meet the unique needs of youth in residential care, focusing on core pillars that build resilience and self-worth."
          features={pillars}
          columns={3}
        />
        
        <Accordion items={accordionItems} />
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-12 text-center text-white">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-black">Looking Ahead: Scalability & Vision</h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Our vision extends beyond immediate intervention. We are committed to refining our model and collaborating with partners to create a scalable, systemic change in mental wellness for youth everywhere.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3.5 bg-white text-primary-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300">
                  View Full Report
                </button>
                <button className="px-6 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Partner with Us
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default InterventionPage;
