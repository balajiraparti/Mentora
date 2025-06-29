import React from "react";
import { Mic, BookOpen, BarChart3 } from "lucide-react";
import { motion, useInView, easeInOut } from "framer-motion";

const steps = [
  {
    icon: <Mic className="w-8 h-8 text-accent-600" />,
    title: "Ask your question via voice",
    desc: "Speak your question and let Mentora listen."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-accent-600" />,
    title: "Mentora explains + quizzes you",
    desc: "Get clear explanations and instant quizzes tailored to your needs."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent-600" />,
    title: "Track your mastery progress",
    desc: "See your learning progress and stay motivated."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeInOut } }
};

const HowItWorksSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-dark mb-12 animate-fade-in-up">How It Works</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={item}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-full md:w-1/3 text-center border border-primary-100"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">{step.title}</h3>
            <p className="text-dark/70 font-medium">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorksSection; 