"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Package, Grid, Mail, ShoppingCart } from "lucide-react";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled 
          ? "bg-white/90 backdrop-blur shadow-lg py-2 px-6" 
          : "bg-white/60 py-3 px-7"}
        rounded-full items-center justify-between gap-8`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold tracking-wide text-rose-600"
        >
          ASO<span className="text-yellow-600">-OKE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-rose-600 transition">Home</Link>
          <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
          <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
          <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
        </div>

        {/* Cart Icon */}
        <button className="text-xl">🛒</button>
      </nav>

      {/* Mobile Navigation - Always Visible with Icons */}
      <nav className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur shadow-lg rounded-full py-2 px-4">
        <div className="flex items-center gap-3">
          {/* Logo - Smaller for mobile */}
          <Link 
            href="/" 
            className="text-base font-bold tracking-wide text-rose-600 mr-2 whitespace-nowrap"
          >
            ASO<span className="text-yellow-600">-OKE</span>
          </Link>

          {/* Navigation Icons */}
          <Link 
            href="/" 
            className="p-2 hover:bg-rose-50 rounded-full transition"
            aria-label="Home"
          >
            <Home className="w-4 h-4 text-gray-700 hover:text-rose-600" />
          </Link>
          
          <Link 
            href="/products" 
            className="p-2 hover:bg-rose-50 rounded-full transition"
            aria-label="Products"
          >
            <Package className="w-4 h-4 text-gray-700 hover:text-rose-600" />
          </Link>
          
          <Link 
            href="/categories" 
            className="p-2 hover:bg-rose-50 rounded-full transition"
            aria-label="Categories"
          >
            <Grid className="w-4 h-4 text-gray-700 hover:text-rose-600" />
          </Link>
          
          <Link 
            href="/contact" 
            className="p-2 hover:bg-rose-50 rounded-full transition"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4 text-gray-700 hover:text-rose-600" />
          </Link>

          {/* Cart Icon */}
          <button 
            className="p-2 hover:bg-rose-50 rounded-full transition"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4 text-gray-700 hover:text-rose-600" />
          </button>
        </div>
      </nav>
    </>
  );
}