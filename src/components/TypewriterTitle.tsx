import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const messages = [
  "Your Smart Study Whisperer",
  "Ask Questions, Get Answers",
  "Learn. Quiz. Master.",
  "Voice-Powered Exam Buddy",
  "Revise Smarter"
];

const TypewriterTitle: React.FC = () => (
  <span className="inline-block text-primary-700 font-extrabold text-2xl md:text-4xl text-center">
    <Typewriter
      words={messages}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={40}
      delaySpeed={2000}
    />
  </span>
);

export default TypewriterTitle; 