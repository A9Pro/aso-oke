"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
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
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-6 relative overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1280px] mx-auto mb-12 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/10 to-rose-500/10 backdrop-blur-sm rounded-full border border-purple-200 mb-4"
        >
          <span className="text-xs md:text-sm font-medium text-purple-900">Get In Touch</span>
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-900 via-rose-900 to-amber-900 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-base md:text-sm text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[1280px] mx-auto mb-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition-all border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-2 shadow-md`}
              >
                <info.icon className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-base font-bold text-gray-900 mb-1">{info.title}</h3>
              <p className="text-sm text-gray-700 font-medium mb-0.5">{info.details}</p>
              <p className="text-xs text-gray-500">{info.subDetails}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-rose-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+234 123 456 7890"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-lg font-medium shadow hover:shadow-md transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl shadow overflow-hidden border border-gray-100">
              <div className="h-56 bg-gradient-to-br from-purple-100 to-rose-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center shadow"
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Our Showroom</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Experience our fabrics in person. Our showroom is open Monday to Saturday, 9 AM to 6 PM.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-lg font-medium shadow hover:shadow-md text-sm"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-purple-600 to-rose-600 rounded-2xl shadow p-4 text-white">
              <h3 className="text-lg font-bold mb-2">Quick Questions?</h3>
              <p className="mb-4 text-white/90 text-sm">
                Check out our FAQ section for instant answers to common questions about our products and services.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg font-medium shadow hover:shadow-md text-sm"
              >
                View FAQs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-[1280px] mx-auto mt-12 relative z-10"
      >
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">We're Here to Help</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-4">
            Our customer service team is dedicated to providing you with the best shopping experience. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center text-xs md:text-sm">
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-1">
                24hrs
              </div>
              <div>Response Time</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-1">
                98%
              </div>
              <div>Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-1">
                5000+
              </div>
              <div>Happy Customers</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}