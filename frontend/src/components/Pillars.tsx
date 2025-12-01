import React from "react";

interface Pillar {
  title: string;
  description: string;
}

const Pillars: React.FC = () => {
  const pillars: Pillar[] = [
    { title: "Pillar 1", description: "Description 1" },
    { title: "Pillar 2", description: "Description 2" },
    { title: "Pillar 3", description: "Description 3" },
  ];

  return (
    <section className="pillars">
      <h2>Our Pillars</h2>
      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
