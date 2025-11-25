"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CategoriesPage() {
  // Explicitly type hoveredCategory as number | null
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: "Wedding Collection",
      description: "Exquisite fabrics for your special day",
      image: "/api/placeholder/600/400",
      count: "45+ Products",
      color: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-100 to-pink-100",
    },
    {
      id: 2,
      name: "Engagement",
      description: "Celebrate your love story in style",
      image: "/api/placeholder/600/400",
      count: "32+ Products",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100 to-pink-100",
    },
    {
      id: 3,
      name: "Traditional Events",
      description: "Honor heritage with timeless elegance",
      image: "/api/placeholder/600/400",
      count: "58+ Products",
      color: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-100 to-orange-100",
    },
    {
      id: 4,
      name: "Premium Collection",
      description: "Luxury handwoven masterpieces",
      image: "/api/placeholder/600/400",
      count: "28+ Products",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-100 to-purple-100",
    },
    {
      id: 5,
      name: "Casual & Contemporary",
      description: "Modern designs for everyday elegance",
      image: "/api/placeholder/600/400",
      count: "38+ Products",
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-100 to-cyan-100",
    },
    {
      id: 6,
      name: "Festival Specials",
      description: "Vibrant fabrics for celebrations",
      image: "/api/placeholder/600/400",
      count: "41+ Products",
      color: "from-red-500 to-rose-500",
      bgGradient: "from-red-100 to-rose-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="fabric-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0L80 80M80 0L0 80" stroke="#9333ea" strokeWidth="1.5" opacity="0.9" />
              <circle cx="40" cy="40" r="5" fill="#ec4899" opacity="0.9" />
              <circle cx="0" cy="0" r="3" fill="#9333ea" opacity="0.8" />
              <circle cx="80" cy="0" r="3" fill="#9333ea" opacity="0.8" />
              <circle cx="0" cy="80" r="3" fill="#9333ea" opacity="0.8" />
              <circle cx="80" cy="80" r="3" fill="#9333ea" opacity="0.8" />
              <rect x="38" y="18" width="4" height="4" fill="#ec4899" opacity="0.7" transform="rotate(45 40 20)" />
              <rect x="38" y="58" width="4" height="4" fill="#ec4899" opacity="0.7" transform="rotate(45 40 60)" />
              <rect x="18" y="38" width="4" height="4" fill="#ec4899" opacity="0.7" transform="rotate(45 20 40)" />
              <rect x="58" y="38" width="4" height="4" fill="#ec4899" opacity="0.7" transform="rotate(45 60 40)" />
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
          <span className="text-sm font-medium text-purple-900">Explore Collections</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-900 via-rose-900 to-amber-900 bg-clip-text text-transparent">
          Browse Categories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collections of premium Aso-Oke fabrics for every occasion
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${category.bgGradient}`}>
                <motion.div
                  animate={{ scale: hoveredCategory === category.id ? 1.1 : 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ scale: hoveredCategory === category.id ? 1.1 : 1 }}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 shadow-md"
                  >
                    {category.count}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCategory === category.id ? 1 : 0,
                    y: hoveredCategory === category.id ? 0 : 20,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-full font-semibold shadow-xl`}
                  >
                    View Collection
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-rose-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {category.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCategory === category.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-4`}
                />
              </div>

              <motion.div
                animate={{ opacity: hoveredCategory === category.id ? 1 : 0 }}
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(236, 72, 153, 0.2)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20 relative z-10"
      >
        <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>

            <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              We offer custom designs tailored to your unique style and preferences. 
              Let us create something special just for you.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Request Custom Design
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-16 relative z-10"
      >
        <p className="text-gray-600 mb-4">Need help choosing? Our experts are here to assist you.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
