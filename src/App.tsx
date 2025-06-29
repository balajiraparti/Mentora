import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MentoraHelpSection from "./components/MentoraHelpSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeatureCards from "./components/FeatureCards";
import DemoSection from "./components/DemoSection";
import Footer from "./components/Footer";
import FloatingChatButton from "./components/FloatingChatButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FeedbackForm from "./components/FeedbackForm";
import LoginPage from "./pages/auth/Login";
import SignupPage from "./pages/auth/Signup";
import ProfileCard from "./components/ProfileCard";
import { supabase } from "./lib/supabaseClient";

const App: React.FC = () => {
  // Use string or false for modal state
  const [flag, setFlag] = useState<string | false>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkUser();
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Header flag={flag} setFlag={setFlag} />
      <main className="flex-1">
        <HeroSection />
        {isLoggedIn && <ProfileCard />}
        <MentoraHelpSection />
        <HowItWorksSection />
        <FeatureCards />
        <DemoSection />
        <FeedbackForm />
        {flag === 'login' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-full max-w-md mx-auto">
              <button onClick={() => setFlag(false)} className="absolute top-2 right-2 text-gray-400 hover:text-primary-600 text-2xl font-bold">&times;</button>
              <LoginPage />
            </div>
          </div>
        )}
        {flag === 'signup' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-full max-w-md mx-auto">
              <button onClick={() => setFlag(false)} className="absolute top-2 right-2 text-gray-400 hover:text-primary-600 text-2xl font-bold">&times;</button>
              <SignupPage />
            </div>
          </div>
        )}
      </main>
      <Footer />
      <FloatingChatButton />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
