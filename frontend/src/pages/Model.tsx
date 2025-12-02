import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Model: React.FC = () => {
  const modelComponents = [
    {
      id: 1,
      icon: "psychology_alt",
      title: "The Intervention",
      description: "A brief, low-stigma group-based program focusing on Growth Mindset, Value Affirmations and Gratitude. Adapted to be trauma-informed for residential care settings.",
      benefits: [
        "Teaches practical skills",
        "Rebuilds self-efficacy and identity",
        "Adapted for high-trauma populations"
      ]
    },
    {
      id: 2,
      icon: "groups",
      title: "The Delivery",
      description: "Sessions are led by Aletheia Guides - trained lay-providers, typically young adults or alumni of residential care centres (near-peer model).",
      benefits: [
        "Drastically reduces cost",
        "Increases youth engagement",
        "Offers relatable role models"
      ]
    },
    {
      id: 3,
      icon: "health_and_safety",
      title: "The Safety Net",
      description: "Mandatory three-tiered clinical supervision model: Aletheia Guides → Clinical Supervisors → Professional Networks.",
      benefits: [
        "Ensures high quality care",
        "Maintains protocol fidelity",
        "Enables immediate escalation of high-risk cases"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Our Model"
          subtitle="Adaptation of the Shamiri Protocol - A scientifically proven framework for vulnerable youth"
          variant="gradient"
          buttonText="Download Whitepaper"
        />
        
        {/* Core Mission */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
                The Core Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                <span className="gradient-text">Uncovering the Truth</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  <span className="font-bold text-primary-600 dark:text-primary-400">Aletheia</span> (Ancient Greek for "un-concealment" or "truth") embodies our mission: to help youth who have lost everything (family, stability, self-worth) un-forget their intrinsic value and realize they are more than their circumstances.
                </p>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  We aim to replace despair with hope and a belief in a greater future.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Model Components */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="gradient-text">Our Three-Component Model</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                A comprehensive, evidence-based framework adapted from the globally validated Shamiri Protocol
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {modelComponents.map((component, index) => (
                <div 
                  key={component.id}
                  className="group card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-glow border border-slate-100 dark:border-gray-700">
                    <div className="flex flex-col h-full">
                      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 group-hover:from-primary-100 group-hover:to-primary-200 dark:group-hover:from-primary-800/30 dark:group-hover:to-primary-700/30 transition-all duration-300 inline-flex self-start">
                        <span className="material-symbols-outlined text-4xl text-primary-600 dark:text-primary-400">
                          {component.icon}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {component.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                        {component.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {component.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Shamiri Protocol Info */}
            <div className="mt-16 pt-12 border-t border-slate-200 dark:border-gray-700">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Built on Proven Science
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  The Aletheia Project adapts the globally validated Shamiri Protocol - a cost-effective, evidence-based framework specifically designed for youth mental wellness in resource-limited settings.
                </p>
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">Partnership Status:</span>
                  <span className="text-slate-700 dark:text-slate-300">Active Collaboration for IP/Protocols</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Phased Approach */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                <span className="gradient-text">Our Scalability Strategy</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                A rigorous, phased approach ensuring efficacy before expansion
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 md:left-1/2 md:-translate-x-1/2"></div>
              
              {[
                {
                  phase: "Phase 1",
                  title: "Conceptualization",
                  description: "Rigorous research and development of curriculum rooted in proven psychological frameworks"
                },
                {
                  phase: "Phase 2",
                  title: "Partnership with Shamiri",
                  description: "Active collaboration for intellectual property and protocol adaptation"
                },
                {
                  phase: "Phase 3",
                  title: "Pilot Implementation",
                  description: "Controlled implementation in one residential care home with data collection"
                },
                {
                  phase: "Phase 4",
                  title: "Scaling",
                  description: "Expansion to multiple homes with train-the-trainer model"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                >
                  <div className="absolute top-0 -left-2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {step.phase}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Model;
