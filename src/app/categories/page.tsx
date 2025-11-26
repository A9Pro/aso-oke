"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CategoriesPage() {
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

      {/* STRONGER Background Pattern */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
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
              <path d="M0 0L80 80M80 0L0 80" stroke="#9333ea" strokeWidth="2.5" opacity="1" />
              <circle cx="40" cy="40" r="6" fill="#ec4899" opacity="1" />
              <circle cx="0" cy="0" r="4" fill="#9333ea" opacity="1" />
              <circle cx="80" cy="0" r="4" fill="#9333ea" opacity="1" />
              <circle cx="0" cy="80" r="4" fill="#9333ea" opacity="1" />
              <circle cx="80" cy="80" r="4" fill="#9333ea" opacity="1" />
              <rect x="38" y="18" width="6" height="6" fill="#ec4899" opacity="0.9" transform="rotate(45 40 20)" />
              <rect x="38" y="58" width="6" height="6" fill="#ec4899" opacity="0.9" transform="rotate(45 40 60)" />
              <rect x="18" y="38" width="6" height="6" fill="#ec4899" opacity="0.9" transform="rotate(45 20 40)" />
              <rect x="58" y="38" width="6" height="6" fill="#ec4899" opacity="0.9" transform="rotate(45 60 40)" />
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
        className="max-w-7xl mx-auto mb-12 text-center relative z-10"
      >
        <span className="text-xs font-medium text-purple-900 px-3 py-1 bg-purple-100 rounded-full">
          Explore Collections
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3 bg-gradient-to-r from-purple-900 via-rose-900 to-amber-900 bg-clip-text text-transparent">
          Browse Categories
        </h1>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Discover our curated Aso-Oke collections for every occasion
        </p>
      </motion.div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className={`relative h-60 bg-gradient-to-br ${category.bgGradient}`}>
                <motion.img
                  animate={{ scale: hoveredCategory === category.id ? 1.1 : 1 }}
                  transition={{ duration: 0.6 }}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />

                {/* Count */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 rounded-full text-[10px] font-semibold shadow">
                  {category.count}
                </div>

                {/* Hover Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCategory === category.id ? 1 : 0,
                    y: hoveredCategory === category.id ? 0 : 20,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <button className={`flex items-center gap-1 px-4 py-2 bg-gradient-to-r ${category.color} text-white text-xs rounded-full shadow-lg`}>
                    View Collection
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-rose-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{category.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCategory === category.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-3`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <p className="text-sm text-gray-600 mb-3">Need help choosing?</p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-sm rounded-full shadow">
          Contact Us
        </button>
      </div>
    </div>
  );
}
