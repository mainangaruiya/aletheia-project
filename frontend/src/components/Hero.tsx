import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to Aletheia",
  subtitle = "Transforming intervention through technology",
  buttonText = "Learn More",
  buttonLink = "/model"
}) => {
  return (
    <section className="hero bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl mb-8">
          {subtitle}
        </p>
        {buttonLink ? (
          <Link
            to={buttonLink}
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </Link>
        ) : (
          <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;