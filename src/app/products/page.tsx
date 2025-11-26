"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Grid, List, ShoppingCart, Heart, Star } from "lucide-react";

export default function ProductsPage() {
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "wedding", name: "Wedding" },
    { id: "engagement", name: "Engagement" },
    { id: "traditional", name: "Traditional" },
    { id: "premium", name: "Premium" },
  ];

  const products = [
    {
      id: 1,
      name: "Royal Gold Aso-Oke",
      category: "wedding",
      price: 45000,
      image: "https://placehold.co/800x600?text=Royal+Gold",
      rating: 4.9,
      reviews: 127,
      tag: "Bestseller",
      colors: ["#FFD700", "#FFA500", "#FF6347"],
    },
    {
      id: 2,
      name: "Emerald Elegance Set",
      category: "premium",
      price: 52000,
      image: "https://placehold.co/800x600?text=Emerald+Elegance",
      rating: 5.0,
      reviews: 89,
      tag: "New",
      colors: ["#50C878", "#2E8B57", "#006400"],
    },
    {
      id: 3,
      name: "Purple Majesty",
      category: "traditional",
      price: 38000,
      image: "https://placehold.co/800x600?text=Purple+Majesty",
      rating: 4.8,
      reviews: 156,
      tag: "Hot",
      colors: ["#9370DB", "#8B008B", "#4B0082"],
    },
    {
      id: 4,
      name: "Rose Pink Bliss",
      category: "engagement",
      price: 42000,
      image: "https://placehold.co/800x600?text=Rose+Pink+Bliss",
      rating: 4.9,
      reviews: 203,
      tag: "Trending",
      colors: ["#FF69B4", "#FFC0CB", "#FFB6C1"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-6 relative overflow-hidden">

      {/* 🔥 BOLDER BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-bg" width="70" height="70" patternUnits="userSpaceOnUse">
              <rect width="70" height="70" fill="#fff7fb" />
              <path d="M0 0 L70 70 M-20 20 L50 90 M20 -20 L90 50" 
                stroke="#9b5cf6" strokeWidth="1.4" opacity="0.55" />
              <path d="M70 0 L0 70 M90 20 L20 90 M50 -20 L-20 50" 
                stroke="#fb7185" strokeWidth="1.4" opacity="0.5" />
              <circle cx="35" cy="35" r="3" fill="#fbbf24" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-bg)" />
        </svg>
      </div>

      {/* 🌟 HERO  */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1280px] mx-auto mb-8 text-center relative z-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">
          Explore Premium Aso-Oke
        </h1>
        <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
          Handwoven fabrics with luxury, culture and elegance.
        </p>
      </motion.div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="max-w-[1280px] mx-auto mb-6 relative z-10">
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow p-3 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">

            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search fabrics..."
                className="w-full pl-10 pr-3 py-2 bg-gray-50 rounded-full border border-gray-200 text-xs focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* View & Filter */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-full ${view === "grid" ? "bg-white shadow text-purple-600" : "text-gray-500"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-full ${view === "list" ? "bg-white shadow text-purple-600" : "text-gray-500"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full text-xs shadow">
                <Filter className="w-3 h-3" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🏷️ CATEGORIES */}
      <div className="max-w-[1280px] mx-auto mb-6 relative z-10 flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🛍️ PRODUCTS GRID */}
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className={`grid ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4 md:gap-5`}>

          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition-all"
            >

              {/* Tag */}
              <div className="absolute top-3 left-3 z-10">
                <div className="px-2 py-0.5 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-[10px] font-bold rounded-full">
                  {product.tag}
                </div>
              </div>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow hover:bg-rose-600 hover:text-white transition">
                <Heart className="w-3.5 h-3.5" />
              </button>

              {/* Image */}
              <div className="relative h-52 md:h-60 bg-gradient-to-br from-purple-50 to-rose-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Add */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                    <button className="px-4 py-1 bg-white rounded-full shadow text-xs flex items-center gap-1">
                      <ShoppingCart className="w-3 h-3" /> Add to Cart
                    </button>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3 md:p-4">
                <div className="flex gap-1 mb-2">
                  {product.colors.map((c, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-full shadow" style={{ backgroundColor: c }} />
                  ))}
                </div>

                <h3 className="text-sm font-semibold mb-1">{product.name}</h3>

                <div className="flex items-center gap-2 mb-2 text-xs">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600">{product.rating} ({product.reviews})</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                    ₦{product.price.toLocaleString()}
                  </div>
                  <button className="px-3 py-1 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full text-xs shadow">
                    View Details
                  </button>
                </div>
              </div>

              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: hoveredProduct === product.id ? "0 0 30px rgba(124,58,237,0.18), 0 0 60px rgba(236,72,153,0.13)" : "none" }}
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-10 relative z-10">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full shadow text-sm md:text-base">
          Load More Products
        </button>
      </div>
    </div>
  );
}
