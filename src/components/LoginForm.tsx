import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();
    const { email, password } = form;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }
    // Fetch user profile for welcome toast
    const userId = data.user?.id;
    let name = "";
    if (userId) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", userId)
        .single();
      name = profile?.name || "";
    }
    toast.success(`Welcome back, ${name || "User"}!`, { duration: 3000, position: "top-right" });
    setLoading(false);
    // Optionally redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Toaster position="top-center" />
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full flex flex-col gap-6 border border-primary-100"
      >
        <h2 className="text-2xl font-bold text-center text-primary-700 mb-2">Sign In</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-200 text-lg"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
          className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-200 text-lg"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.04, boxShadow: "0 0 0 8px #2dd4bf44" }}
          className="w-full py-3 bg-accent-500 text-white font-bold rounded-lg shadow-lg hover:bg-accent-600 transition-colors duration-200 text-lg focus:outline-none focus:ring-4 focus:ring-accent-300 relative"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default LoginForm; 