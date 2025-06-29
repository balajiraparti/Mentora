import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageCircle } from "lucide-react";

const initialState = { name: "", email: "", phone: "", message: "" };

const FeedbackForm: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setForm(initialState);
    }, 1200);
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-8 px-2">
      <AnimatePresence>
        {!success ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col gap-6 border border-primary-100"
          >
            <h2 className="text-2xl font-bold text-center text-primary-700 mb-2">Feedback</h2>
            {/* Name */}
            <div className="relative flex items-center">
              <User className="absolute left-3 text-primary-400 w-5 h-5" />
              <motion.input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #818cf8" }}
                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 text-lg w-full transition-all duration-200 hover:shadow"
              />
            </div>
            {/* Email */}
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-primary-400 w-5 h-5" />
              <motion.input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #818cf8" }}
                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 text-lg w-full transition-all duration-200 hover:shadow"
              />
            </div>
            {/* Phone */}
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-primary-400 w-5 h-5" />
              <motion.input
                name="phone"
                type="tel"
                pattern="[0-9]{10,15}"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #818cf8" }}
                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 text-lg w-full transition-all duration-200 hover:shadow"
              />
            </div>
            {/* Message */}
            <div className="relative flex items-start">
              <MessageCircle className="absolute left-3 top-4 text-primary-400 w-5 h-5" />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #818cf8" }}
                className="pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 text-lg w-full transition-all duration-200 hover:shadow resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, boxShadow: "0 0 0 8px #818cf844" }}
              className="w-full py-3 bg-primary-600 text-white font-bold rounded-lg shadow-lg hover:bg-primary-700 transition-colors duration-200 text-lg focus:outline-none focus:ring-4 focus:ring-primary-300 relative"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Feedback"}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center border border-primary-100"
          >
            <div className="text-4xl mb-4 text-green-500">✓</div>
            <h3 className="text-xl font-bold mb-2 text-primary-700">Thank you for your feedback!</h3>
            <p className="text-gray-600 text-center">We appreciate your input and will use it to improve Mentora.</p>
            <button
              className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition"
              onClick={() => setSuccess(false)}
            >
              Send Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackForm; 