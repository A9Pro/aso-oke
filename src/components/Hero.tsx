"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Aso Oke Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Decorative Textile Patterns Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Woven Fabric Pattern */}
            <pattern id="woven-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="none"/>
              <path d="M0 40h80M40 0v80" stroke="#ffffff" strokeWidth="2" opacity="0.4"/>
              <path d="M20 0v80M60 0v80" stroke="#fbbf24" strokeWidth="1.5" opacity="0.3"/>
              <path d="M0 20h80M0 60h80" stroke="#ec4899" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="20" cy="20" r="4" fill="#fbbf24" opacity="0.5"/>
              <circle cx="60" cy="20" r="4" fill="#ec4899" opacity="0.5"/>
              <circle cx="20" cy="60" r="4" fill="#ec4899" opacity="0.5"/>
              <circle cx="60" cy="60" r="4" fill="#fbbf24" opacity="0.5"/>
              <circle cx="40" cy="40" r="5" fill="#ffffff" opacity="0.4"/>
            </pattern>

            {/* Diagonal Stripe Pattern */}
            <pattern id="stripe-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="60" height="60" fill="none"/>
              <line x1="0" y1="15" x2="60" y2="15" stroke="#fbbf24" strokeWidth="3" opacity="0.3"/>
              <line x1="0" y1="30" x2="60" y2="30" stroke="#ffffff" strokeWidth="2" opacity="0.3"/>
              <line x1="0" y1="45" x2="60" y2="45" stroke="#ec4899" strokeWidth="3" opacity="0.3"/>
            </pattern>

            {/* Diamond Lattice Pattern */}
            <pattern id="diamond-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="none"/>
              <path d="M50 0L100 50L50 100L0 50Z" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M50 25L75 50L50 75L25 50Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.4"/>
              <circle cx="0" cy="50" r="4" fill="#fbbf24" opacity="0.3"/>
              <circle cx="100" cy="50" r="4" fill="#fbbf24" opacity="0.3"/>
              <circle cx="50" cy="0" r="4" fill="#ffffff" opacity="0.3"/>
              <circle cx="50" cy="100" r="4" fill="#ffffff" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Apply patterns in layers */}
          <rect width="100%" height="33.33%" fill="url(#woven-pattern)" />
          <rect y="33.33%" width="100%" height="33.33%" fill="url(#stripe-pattern)" />
          <rect y="66.66%" width="100%" height="33.34%" fill="url(#diamond-pattern)" />
        </svg>
      </div>

      {/* Animated Corner Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="corner-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0 0 L200 0 L0 200 Z" fill="url(#corner-grad-1)" />
          <circle cx="40" cy="40" r="8" fill="#ffffff" opacity="0.6" />
          <circle cx="80" cy="40" r="6" fill="#fbbf24" opacity="0.5" />
          <circle cx="40" cy="80" r="6" fill="#ec4899" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="corner-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M200 200 L0 200 L200 0 Z" fill="url(#corner-grad-2)" />
          <circle cx="160" cy="160" r="8" fill="#ffffff" opacity="0.6" />
          <circle cx="120" cy="160" r="6" fill="#ec4899" opacity="0.5" />
          <circle cx="160" cy="120" r="6" fill="#fbbf24" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Floating Textile Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#fbbf24" strokeWidth="3" />
          <circle cx="50" cy="50" r="15" fill="#ec4899" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/4 w-20 h-20 opacity-20 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#ffffff" strokeWidth="3" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="20" fill="#fbbf24" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Small badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-3 py-1.5 mb-5 bg-white/20 border border-white/30 backdrop-blur-md rounded-full text-xs text-white tracking-wide"
        >
          2025 Premium Aso-Oke Collection
        </motion.div>

        {/* Smaller heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight"
        >
          Luxury Aso-Oke, Redefined for Elegance.
        </motion.h1>

        {/* Smaller subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xs md:text-sm text-white/90 max-w-md mx-auto leading-relaxed"
        >
          Hand-woven fabrics crafted for weddings, engagements, and timeless celebrations.
        </motion.p>

        {/* Small, classy buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white text-black text-xs md:text-sm rounded-full shadow hover:bg-black hover:text-white transition-all duration-200"
          >
            Shop Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-white/40 text-white text-xs md:text-sm rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-xs tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}