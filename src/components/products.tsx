"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";

/**
 * Drop this file into: src/app/products/page.tsx
 * Save, then restart dev server: Ctrl+C -> npm run dev
 * Then hard refresh the browser (Ctrl+F5).
 */

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
    <div className="min-h-screen bg-white pt-28 pb-20 px-6 relative overflow-hidden">

      {/* ******************************
          Textile Pattern Background
         - more visible opacity so you can confirm it worked
         - SVG only (fast), tailor colors to match brand
         ****************************** */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern
              id="woven-textile"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
            >
              <rect width="90" height="90" fill="#fffafc" />
              <path
                d="M0 0 L90 90 M-30 30 L60 120 M30 -30 L120 60"
                stroke="#9b5cf6"
                strokeWidth="0.9"
                opacity="0.28"
              />
              <path
                d="M90 0 L0 90 M120 30 L30 120 M60 -30 L-30 60"
                stroke="#fb7185"
                strokeWidth="0.9"
                opacity="0.22"
              />
              <circle cx="45" cy="45" r="2" fill="#fbbf24" opacity="0.18" />
            </pattern>

            {/* complementary geometric motif for richness */}
            <pattern
              id="geom-motif"
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
              <rect width="180" height="180" fill="transparent" />
              <polygon
                points="90,10 170,90 90,170 10,90"
                stroke="#7c3aed"
                strokeWidth="1.1"
                fill="none"
                opacity="0.10"
              />
              <circle cx="90" cy="90" r="6" fill="#ec4899" opacity="0.08" />
            </pattern>
          </defs>

          {/* layered fill: base woven + larger motif */}
          <rect width="100%" height="100%" fill="url(#woven-textile)" />
          <rect width="100%" height="100%" fill="url(#geom-motif)" opacity="0.7" />
        </svg>

        {/* slight vignette to keep product cards readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>
      </div>

      {/* -------------- HERO -------------- */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-10 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-200 rounded-full mb-4">
          <span className="text-sm font-medium text-purple-900">
            Premium Collection
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900">
          Discover Luxury Aso-Oke — Sci-Fi Elegance
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Handcrafted fabrics from Ojodu-Berger combining tradition and futuristic polish.
        </p>
      </motion.div>

      {/* -------------- SEARCH & FILTER -------------- */}
      <div className="max-w-7xl mx-auto mb-6 relative z-10">
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow p-4 md:p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search fabrics, colors, tags..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-full border border-gray-200 focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-full ${view === "grid" ? "bg-white shadow text-purple-600" : "text-gray-500"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-full ${view === "list" ? "bg-white shadow text-purple-600" : "text-gray-500"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full shadow">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- CATEGORIES -------------- */}
      <div className="max-w-7xl mx-auto mb-8 relative z-10 overflow-x-auto flex gap-3 pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg"
                : "bg-white border border-gray-200 text-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* -------------- PRODUCTS GRID -------------- */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}>
          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* tag */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-xs font-bold rounded-full">
                  {product.tag}
                </div>
              </div>

              {/* wishlist */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow hover:bg-rose-600 hover:text-white transition">
                <Heart className="w-5 h-5" />
              </button>

              {/* image */}
              <div className="relative h-72 md:h-80 bg-gradient-to-br from-purple-50 to-rose-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* quick add CTA */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/45 flex items-end justify-center pb-6">
                    <button className="px-5 py-2 bg-white rounded-full shadow-lg flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Quick Add
                    </button>
                  </div>
                )}
              </div>

              {/* info */}
              <div className="p-5 md:p-6">
                <div className="flex gap-2 mb-3">
                  {product.colors.map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full shadow" style={{ backgroundColor: c }} />
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-1">{product.name}</h3>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{product.rating} ({product.reviews})</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                    ₦{product.price.toLocaleString()}
                  </div>

                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full text-sm font-semibold shadow">
                    View Details
                  </button>
                </div>
              </div>

              {/* glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: hoveredProduct === product.id ? "0 0 40px rgba(124,58,237,0.18), 0 0 80px rgba(236,72,153,0.12)" : "none" }}
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* LOAD MORE */}
      <div className="text-center mt-12 relative z-10">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-full shadow-lg">
          Load More Products
        </button>
      </div>
    </div>
  );
}