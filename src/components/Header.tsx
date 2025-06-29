import React from "react";
import { Bot } from "lucide-react";
interface ChildProps {
    flag: string | false;
    setFlag: React.Dispatch<React.SetStateAction<string | false>>;
  }
const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Try Now", href: "#try" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC <ChildProps>= ({ flag, setFlag }) => (
  <header className="w-full bg-light/80 backdrop-blur shadow-sm sticky top-0 z-30 animate-fade-in-up">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <button
        aria-label="Mentora AI logo"
        title="Mentora – AI Voice Tutor"
        className="flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-md bg-white/80 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
        tabIndex={0}
      >
        <Bot className="w-8 h-8 text-primary-600" />
      </button>
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-dark hover:text-accent-600 font-semibold px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-200"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => setFlag('login')}
          className="ml-4 px-5 py-2 rounded-full font-semibold text-accent-600 border border-accent-200 bg-white shadow hover:bg-accent-50 hover:shadow-accent-200/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-200"
        >
          Sign In
        </button>
        <button
          onClick={() => setFlag('signup')}
          className="ml-2 px-5 py-2 rounded-full font-semibold text-white bg-accent-500 shadow-lg hover:bg-accent-600 hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-300"
        >
          Sign Up
        </button>
      </nav>
      <div className="md:hidden">{/* Mobile menu button (optional) */}</div>
    </div>
  </header>
);

export default Header; 