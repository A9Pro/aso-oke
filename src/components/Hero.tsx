"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
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

      {/* Explore Our Collections Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white">
        {/* Textile Pattern Background - Full Coverage */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Intricate Weave Pattern */}
              <pattern id="collection-weave" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="none"/>
                <path d="M0 40h80M40 0v80" stroke="#ec4899" strokeWidth="2" opacity="0.8"/>
                <path d="M20 0v80M60 0v80" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7"/>
                <path d="M0 20h80M0 60h80" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <circle cx="20" cy="20" r="4" fill="#ec4899" opacity="0.8"/>
                <circle cx="60" cy="20" r="4" fill="#fbbf24" opacity="0.8"/>
                <circle cx="20" cy="60" r="4" fill="#9333ea" opacity="0.8"/>
                <circle cx="60" cy="60" r="4" fill="#ec4899" opacity="0.8"/>
                <circle cx="40" cy="40" r="5" fill="#fbbf24" opacity="0.9"/>
              </pattern>

              {/* Diagonal Stripe Pattern */}
              <pattern id="collection-stripe" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="60" height="60" fill="none"/>
                <line x1="0" y1="15" x2="60" y2="15" stroke="#ec4899" strokeWidth="2.5" opacity="0.6"/>
                <line x1="0" y1="30" x2="60" y2="30" stroke="#fbbf24" strokeWidth="2" opacity="0.7"/>
                <line x1="0" y1="45" x2="60" y2="45" stroke="#9333ea" strokeWidth="2.5" opacity="0.6"/>
              </pattern>

              {/* Diamond Lattice Pattern */}
              <pattern id="collection-diamond" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="none"/>
                <path d="M50 0L100 50L50 100L0 50Z" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M50 25L75 50L50 75L25 50Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <circle cx="50" cy="50" r="5" fill="#9333ea" opacity="0.6"/>
                <circle cx="0" cy="50" r="3" fill="#fbbf24" opacity="0.5"/>
                <circle cx="100" cy="50" r="3" fill="#ec4899" opacity="0.5"/>
                <circle cx="50" cy="0" r="3" fill="#ec4899" opacity="0.5"/>
                <circle cx="50" cy="100" r="3" fill="#fbbf24" opacity="0.5"/>
              </pattern>

              {/* Dotted Grid Pattern */}
              <pattern id="collection-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="#fbbf24" opacity="0.7"/>
                <circle cx="0" cy="0" r="2" fill="#ec4899" opacity="0.6"/>
                <circle cx="40" cy="0" r="2" fill="#9333ea" opacity="0.6"/>
                <circle cx="0" cy="40" r="2" fill="#9333ea" opacity="0.6"/>
                <circle cx="40" cy="40" r="2" fill="#ec4899" opacity="0.6"/>
              </pattern>
            </defs>
            
            {/* Layer all patterns for rich texture */}
            <rect width="100%" height="100%" fill="url(#collection-weave)"/>
            <rect width="100%" height="100%" fill="url(#collection-stripe)"/>
            <rect width="100%" height="100%" fill="url(#collection-diamond)"/>
            <rect width="100%" height="100%" fill="url(#collection-dots)"/>
          </svg>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 via-amber-50/30 to-purple-50/40" />
        </div>

        {/* Decorative Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 opacity-20 pointer-events-none"
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="3"/>
            <circle cx="50" cy="50" r="25" fill="#fbbf24" opacity="0.6"/>
            <circle cx="50" cy="50" r="10" fill="#9333ea" opacity="0.8"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-40 h-40 opacity-20 pointer-events-none"
        >
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 95,35 95,65 50,95 5,65 5,35" fill="none" stroke="#fbbf24" strokeWidth="3"/>
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="#ec4899" opacity="0.5"/>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-rose-200 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"/>
              <span className="text-sm font-medium text-rose-900">Our Collections</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-amber-600 to-purple-600 bg-clip-text text-transparent">
              Explore Our Collections
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Discover our curated selection of premium Aso-Oke fabrics, each telling a unique story of tradition and elegance.
            </p>
          </motion.div>

          {/* Collection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Collection",
                description: "Luxurious fabrics for your special day",
                color: "from-rose-400 to-pink-500",
                bgColor: "from-rose-50 to-pink-50"
              },
              {
                title: "Traditional Collection",
                description: "Authentic designs celebrating heritage",
                color: "from-amber-400 to-orange-500",
                bgColor: "from-amber-50 to-orange-50"
              },
              {
                title: "Modern Collection",
                description: "Contemporary styles meets tradition",
                color: "from-purple-400 to-indigo-500",
                bgColor: "from-purple-50 to-indigo-50"
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Decorative Pattern Header */}
                <div className={`relative h-32 bg-gradient-to-br ${collection.bgColor} overflow-hidden`}>
                  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`card-pattern-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="2" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.6"/>
                        <circle cx="0" cy="0" r="1.5" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.4"/>
                        <circle cx="50" cy="0" r="1.5" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.4"/>
                        <circle cx="0" cy="50" r="1.5" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.4"/>
                        <circle cx="50" cy="50" r="1.5" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.4"/>
                        <path d="M0 25h50M25 0v50" stroke={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#card-pattern-${index})`}/>
                  </svg>
                  
                  {/* Fabric Texture Overlay */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`weave-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M0 15h30M15 0v30" stroke={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} strokeWidth="1" opacity="0.2"/>
                          <circle cx="15" cy="15" r="3" fill={index === 0 ? "#ec4899" : index === 1 ? "#fbbf24" : "#9333ea"} opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#weave-${index})`}/>
                    </svg>
                  </div>

                  {/* Animated floating dots */}
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full"
                    style={{ 
                      background: `radial-gradient(circle, ${index === 0 ? '#ec4899' : index === 1 ? '#fbbf24' : '#9333ea'}40, transparent)` 
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-4 left-4 w-6 h-6 rounded-full"
                    style={{ 
                      background: `radial-gradient(circle, ${index === 0 ? '#ec4899' : index === 1 ? '#fbbf24' : '#9333ea'}30, transparent)` 
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {collection.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${collection.color} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all`}
                  >
                    View Collection
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View All Collections →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}