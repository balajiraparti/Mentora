import React from "react";
import { BookOpen, Brain, BarChart3, Sparkles } from "lucide-react";
import { motion, useInView, easeInOut } from "framer-motion";

const features = [
  {
    icon: <BookOpen className="w-9 h-9" />,
    title: "Ask Anything",
    desc: "Get instant, clear answers to any study question, anytime.",
    color: "from-accent-200 to-accent-400",
    shadow: "shadow-accent-400/40"
  },
  {
    icon: <Brain className="w-9 h-9" />,
    title: "Learn Visually",
    desc: "Mentora explains with diagrams, examples, and step-by-step logic.",
    color: "from-primary-200 to-primary-400",
    shadow: "shadow-primary-400/40"
  },
  {
    icon: <BarChart3 className="w-9 h-9" />,
    title: "Track Progress",
    desc: "See your mastery and weak spots with smart dashboards.",
    color: "from-accent-100 to-primary-200",
    shadow: "shadow-primary-300/40"
  },
  {
    icon: <Sparkles className="w-9 h-9" />,
    title: "Practice Smarter",
    desc: "AI quizzes you on what matters most for real improvement.",
    color: "from-primary-100 to-accent-200",
    shadow: "shadow-accent-200/40"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.9, ease: easeInOut }
  })
};

const MentoraHelpSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Optional animated wave background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg viewBox="0 0 1440 320" className="w-full h-32 md:h-40 opacity-30 -z-10">
          <path fill="#5eead4" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-dark mb-4 animate-fade-in-up">How Mentora Helps Students</h2>
      <p className="text-center text-dark/70 mb-12 text-lg max-w-2xl mx-auto">Mentora is your smart voice tutor that guides you through revision, one question at a time.</p>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              boxShadow: `0 0 32px 0 rgba(34,211,238,0.25), 0 0 0 4px #2dd4bf33`,
              y: -8
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className={`group bg-gradient-to-br ${f.color} rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer border border-primary-100 shadow-xl ${f.shadow} transition-all duration-300`}
          >
            <motion.div
              whileHover={{ scale: 1.18 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-4 text-accent-600 drop-shadow-lg"
            >
              {f.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-primary-800 mb-2 drop-shadow-sm">{f.title}</h3>
            <p className="text-dark/80 font-medium text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MentoraHelpSection; 