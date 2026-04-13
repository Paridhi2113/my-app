"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Menu",
    href: "/menu",
    dropdown: ["Starters", "Main Dish", "Desserts", "Drinks"],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: ["Catering", "Fast Delivery", "Online Ordering", "Gift Cards"],
  },
  { label: "Offers", href: "/offers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-gray-900"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Foodi<span className="text-[#39DB4A]">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#39DB4A] transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        href={`${link.href}/${item.toLowerCase().replace(" ", "-")}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#39DB4A] hover:bg-green-50 transition-colors"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-500 hover:text-[#39DB4A] transition-colors">
              <Search size={20} />
            </button>

            <button className="relative text-gray-500 hover:text-[#39DB4A] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#39DB4A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#39DB4A] hover:bg-[#2ecc40] text-white font-bold px-5 py-2.5 rounded-full shadow-md shadow-green-200 transition-all hover:-translate-y-0.5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <Phone size={15} />
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#39DB4A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#39DB4A] py-2 border-b border-gray-50 transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 flex items-center justify-center gap-2 bg-[#39DB4A] text-white font-bold px-5 py-3 rounded-full shadow-md"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={15} />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}