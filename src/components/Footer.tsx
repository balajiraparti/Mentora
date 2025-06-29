import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Try Mentora", href: "#try" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
];

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-dark via-primary-900 to-dark pt-12 pb-4 px-4 text-white mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
      {/* Description */}
      <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-2xl font-extrabold text-accent-400 tracking-tight">Mentora</span>
        <p className="mt-3 text-gray-300 max-w-xs text-base">
          Mentora is your AI-powered voice tutor that helps you revise smarter by answering questions, quizzing you, and tracking your learning — all in real time.
        </p>
      </div>
      {/* Useful Links */}
      <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center text-center">
        <h4 className="text-lg font-semibold mb-3 text-accent-200">Useful Links</h4>
        <ul className="flex flex-col gap-2">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-accent-400 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent-400 rounded px-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Social Links */}
      <div className="flex-1 flex flex-col items-center text-center">
        <h4 className="text-lg font-semibold mb-3 text-accent-200">Connect</h4>
        <div className="flex gap-5 justify-center">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group text-gray-300 hover:text-accent-400 transition-colors duration-200"
            >
              <Icon className="w-7 h-7 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#2dd4bf] transition-transform duration-200" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-10 text-center text-gray-400 text-sm">
      &copy; 2025 Mentora. All rights reserved.
    </div>
  </footer>
);

export default Footer; 