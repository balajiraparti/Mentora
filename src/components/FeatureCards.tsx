import React, { useEffect, useRef, useState } from "react";
import { Mic, ListChecks, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Real-time Voice Q&A",
    desc: "Ask questions and get instant, accurate answers using your voice.",
    icon: <Mic className="w-7 h-7 text-primary-600" />,
  },
  {
    title: "Smart Concept Quizzing",
    desc: "Test your understanding with AI-generated quizzes tailored to you.",
    icon: <ListChecks className="w-7 h-7 text-primary-600" />,
  },
  {
    title: "Mastery Tracking Dashboard",
    desc: "Visualize your progress and stay motivated with smart tracking.",
    icon: <BarChart3 className="w-7 h-7 text-primary-600" />,
  },
];

const FeatureCards: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisible((v) => {
              const copy = [...v];
              copy[idx] = true;
              return copy;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-dark mb-12 animate-fade-in-up">Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            data-idx={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-primary-100 ${visible[i] ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ background: "linear-gradient(135deg, #f5f7ff 60%, #ccfbf1 100%)" }}
          >
            <span className="inline-block bg-primary-50 p-3 rounded-full mb-4 shadow">{f.icon}</span>
            <h3 className="mt-2 text-xl font-semibold text-primary-700 mb-2">{f.title}</h3>
            <p className="text-dark/70 font-medium">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards; 