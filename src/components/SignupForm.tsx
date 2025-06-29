import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const SignupForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();
    const { name, email, password } = form;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error || !data.user) {
      toast.error(error?.message || "Signup failed");
      setLoading(false);
      return;
    }
    // Insert into profiles
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: data.user.id,
        email,
        name,
        role: "student",
      },
    ]);
    if (profileError) {
      toast.error(profileError.message);
      setLoading(false);
      return;
    }
    toast.success("Signup successful! Check your email for verification.");
    setLoading(false);
    setForm({ name: "", email: "", password: "" });
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
        <h2 className="text-2xl font-bold text-center text-primary-700 mb-2">Sign Up</h2>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-200 text-lg"
        />
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
          {loading ? "Signing up..." : "Sign Up"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default SignupForm; 