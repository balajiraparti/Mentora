import React from "react";
import TypewriterTitle from "./TypewriterTitle";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 animate-fade-in-up">
    <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-2 drop-shadow-lg tracking-tight">
      Mentora
    </h1>
    <div className="mb-8">
      <TypewriterTitle />
    </div>
    <a
      href="#try"
      className="inline-block px-8 py-3 bg-accent-500 text-white font-bold rounded-full shadow-xl hover:bg-accent-600 transition-colors duration-200 text-lg focus:outline-none focus:ring-4 focus:ring-accent-300 relative
        before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[0_0_24px_8px_rgba(34,211,238,0.4)] before:opacity-0 hover:before:opacity-100 before:transition before:duration-300"
      style={{ zIndex: 1 }}
    >
      Try Mentora
    </a>
  </section>
);

export default HeroSection; 