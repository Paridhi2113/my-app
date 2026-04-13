"use client";

import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-12 lg:py-0 gap-10">

          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-gray-700">
                Hot spicy Food 🌶️
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-gray-900 mb-5" style={{ lineHeight: 1.15 }}>
              Dive into Delights
              <br />
              Of Delectable{" "}
              <span className="text-[#39DB4A]">Food</span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Where Each Plate Weaves a Story of Culinary
              <br />
              Mastery and Passionate Craftsmanship
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/menu"
                className="bg-[#39DB4A] hover:bg-[#2ecc40] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Order Now
              </Link>
              <button className="flex items-center gap-3 text-gray-800 font-semibold hover:text-[#39DB4A] transition-colors">
                <span className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <Play size={14} fill="currentColor" className="text-[#39DB4A] ml-0.5" />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right — Hero Visual */}
          <div className="flex-1 flex items-center justify-center relative min-h-[500px] w-full">

            {/* Green circle — clipping container */}
            <div className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#39DB4A] overflow-hidden z-0">
              <Image
                src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80"
                alt="Chef with food"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Hot spicy badge */}
            <div className="absolute top-6 right-6 bg-white rounded-full shadow-lg px-4 py-2 z-20 border border-gray-100">
              <span className="text-sm font-bold text-gray-800">Hot spicy Food 🌶️</span>
            </div>

            {/* Floating spicy noodles card */}
            <div className="absolute bottom-24 left-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 border border-gray-100">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&q=80"
                  alt="Spicy noodles"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Spicy noodles</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[1,2,3].map(i => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  {[4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-gray-200 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 mt-0.5">$18.00</p>
              </div>
            </div>

            {/* Floating vegetarian salad card */}
            <div className="absolute bottom-6 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 border border-gray-100">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&q=80"
                  alt="Vegetarian salad"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Vegetarian salad</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[1,2,3,4].map(i => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-3 h-3 text-gray-200 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-900 mt-0.5">$23.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}