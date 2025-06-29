import React from "react";
import { Mic, Brain, BarChart3 } from "lucide-react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const useCases = [
  {
    icon: <Mic className="w-8 h-8 text-accent-500 drop-shadow-glow animate-pulse" />,
    title: "Voice Explanation",
    content: (
      <>
        <div className="text-dark/80 font-medium mb-2">Student: <span className="italic">What is Newton's Third Law?</span></div>
        <div className="text-primary-700 font-semibold mb-2">Mentora: Every action has an equal and opposite reaction.</div>
        <div className="text-xs text-accent-600">— clear voice reply with real-time context.</div>
      </>
    )
  },
  {
    icon: <Brain className="w-8 h-8 text-primary-500 drop-shadow-glow animate-pulse" />,
    title: "Quiz Mode",
    content: (
      <>
        <div className="text-primary-700 font-semibold mb-2">Mentora: What's the formula for Force?</div>
        <div className="flex flex-col gap-1 mb-2">
          <span className="bg-primary-50 rounded px-2 py-1">A) F = m + a</span>
          <span className="bg-primary-100 rounded px-2 py-1">B) F = m × a</span>
          <span className="bg-primary-50 rounded px-2 py-1">C) F = m ÷ a</span>
        </div>
        <div className="text-xs text-accent-600">— intelligent concept-check through quiz questions.</div>
      </>
    )
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-accent-500 drop-shadow-glow animate-pulse" />,
    title: "Mastery Tracking",
    content: (
      <>
        <div className="text-primary-700 font-semibold mb-2">You've mastered 3/5 Newtonian concepts.</div>
        <div className="text-dark/80 font-medium mb-2">Next topic recommended: <span className="font-bold">Momentum</span>.</div>
        <div className="text-xs text-accent-600">— personalized revision insights updated in real-time.</div>
      </>
    )
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeInOut } },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.5, ease: easeInOut } }
};

const DemoSection: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % useCases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-dark mb-2 animate-fade-in-up">How Mentora Helps You</h2>
      <p className="text-center text-dark/70 mb-10 text-lg max-w-xl mx-auto">See Mentora in action with real examples.</p>
      <div className="relative flex items-center justify-center w-full">
        {/* Optional: animated glow/wave behind card */}
        <div className="absolute -inset-2 z-0 rounded-2xl bg-gradient-to-br from-accent-200/40 to-primary-200/30 blur-xl opacity-70" />
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 bg-white rounded-xl shadow-lg border border-primary-100 px-8 py-8 w-full max-w-md flex flex-col items-start min-h-[220px]"
          >
            <div className="flex items-center gap-3 mb-4">
              {useCases[idx].icon}
              <span className="font-bold text-lg text-primary-700">{useCases[idx].title}</span>
            </div>
            <div className="w-full">
              {useCases[idx].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DemoSection; 