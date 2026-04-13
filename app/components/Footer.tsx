"use client";

import Link from "next/link";
import { Share2, Camera, Send, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#39DB4A] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>F</span>
              </div>
              <span
                className="text-xl font-extrabold text-gray-900"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                OODI
              </span>
            </Link>
            <p
              className="text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Savor the artistry where
              every dish is a culinary
              masterpiece
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Share2, href: "#", label: "Facebook" },
                { Icon: Camera, href: "#", label: "Instagram" },
                { Icon: Send, href: "#", label: "Twitter" },
                { Icon: Play, href: "#", label: "Youtube" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-[#39DB4A] flex items-center justify-center text-white hover:bg-[#2ecc40] transition-colors shadow-md shadow-green-100"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4
              className="text-base font-extrabold text-gray-900 mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Useful links
            </h4>
            <ul className="space-y-3">
              {["About us", "Events", "Blogs", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-500 hover:text-[#39DB4A] transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h4
              className="text-base font-extrabold text-gray-900 mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Main Menu
            </h4>
            <ul className="space-y-3">
              {["Home", "Offers", "Menus", "Reservation"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-[#39DB4A] transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4
              className="text-base font-extrabold text-gray-900 mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              {[
                "example@email.com",
                "+64 958 248 966",
                "Social media",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#39DB4A] transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p
            className="text-sm text-gray-400 text-center"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Copyright © 2023 Dscode | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}