"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+234 123 456 7890",
      subDetails: "Mon-Sat, 9AM-6PM",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@asooke.com",
      subDetails: "We reply within 24 hours",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Lagos, Nigeria",
      subDetails: "Visit our showroom",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9AM - 6PM",
      subDetails: "Sunday: Closed",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.12]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fabric-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30h60M30 0v60" stroke="#9333ea" strokeWidth="1.5" opacity="0.9"/>
              <circle cx="0" cy="30" r="3" fill="#ec4899" opacity="0.8"/>
              <circle cx="30" cy="0" r="3" fill="#ec4899" opacity="0.8"/>
              <circle cx="60" cy="30" r="3" fill="#ec4899" opacity="0.8"/>
              <circle cx="30" cy="60" r="3" fill="#ec4899" opacity="0.8"/>
              <circle cx="30" cy="30" r="4" fill="#9333ea" opacity="0.9"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fabric-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-rose-500/10 backdrop-blur-sm rounded-full border border-purple-200 mb-6"
        >
          <span className="text-sm font-medium text-purple-900">Get In Touch</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-900 via-rose-900 to-amber-900 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto mb-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-md`}
              >
                <info.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.subDetails}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Form and Sidebar */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-rose-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you</p>
                </div>
              </div>

              <div className="space-y-6">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)} {field === "phone" ? "Number" : ""}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field as keyof FormData)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-rose-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Showroom</h3>
                <p className="text-gray-600 mb-4">
                  Experience our fabrics in person. Our showroom is open Monday to Saturday, 9 AM to 6 PM.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-purple-600 to-rose-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Questions?</h3>
              <p className="mb-6 text-white/90">
                Check out our FAQ section for instant answers to common questions about our products and services.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                View FAQs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-16 relative z-10"
      >
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We're Here to Help</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our customer service team is dedicated to providing you with the best shopping experience. 
            We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "24hrs", label: "Response Time" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "5000+", label: "Happy Customers" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
