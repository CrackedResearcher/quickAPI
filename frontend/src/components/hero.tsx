import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row py-12 md:py-24 items-center font-mono">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Frontend development
          <br />
          done with <span className="text-red-500 italic">Quick</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          QuickAPI is a blazing-fast API mock tool for frontend developers.
          Build prototypes without waiting for the backend! Perfect for
          startups, teams, and individual developers.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="gradient-button text-white px-6 py-3 rounded-md font-medium"
          >
            Get Started
          </a>
          <a
            href="#"
            className="glass border-0 px-6 py-3 rounded-md hover:bg-gray-100 font-medium transition-all"
          >
            View Docs
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src="/heroAstro.svg" alt="Logo" width={650} height={400} />
      </div>
    </section>
  );
};

export default HeroSection;