"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviewers = [
  { src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=80", alt: "Customer 1" },
  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80", alt: "Customer 2" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80", alt: "Customer 3" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — Chef on green circle */}
          <div className="flex-1 flex items-end justify-center relative" style={{ minHeight: 480 }}>

            {/* Green circle */}
            <div
              className="absolute rounded-full bg-[#39DB4A]"
              style={{ width: 340, height: 340, bottom: 0, left: "50%", transform: "translateX(-50%)" }}
            />

            {/* Chef photo */}
            <div className="relative z-10" style={{ width: 300, height: 420 }}>
              <Image
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80"
                alt="Our Best Chef"
                fill
                className="object-cover object-top"
                style={{ borderRadius: "9999px 9999px 0 0" }}
              />
            </div>

            {/* Floating emojis */}
            <div className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-lg z-20" style={{ top: 60, left: "15%" }}>
              😊
            </div>
            <div className="absolute bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-lg z-20" style={{ top: 30, right: "10%" }}>
              🍕
            </div>

            {/* Our Best Chef badge */}
            <div
              className="absolute bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100 z-20"
              style={{ bottom: 10, right: "5%" }}
            >
              <p className="text-sm font-bold text-gray-800 whitespace-nowrap">Our Best Chef 😊</p>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex-1 max-w-lg">
            <p className="text-[#39DB4A] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              What Our Customers
              <br />
              Say About Us
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              "I had the pleasure of dining at Foodi last night, and I'm still raving about
              the experience! The attention to detail in presentation and service was impeccable"
            </p>

            <div className="flex items-center gap-5">
              {/* Stacked avatars */}
              <div className="flex -space-x-3">
                {reviewers.map((r) => (
                  <div
                    key={r.alt}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <Image src={r.src} alt={r.alt} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-1">Customer Feedback</p>
                <div className="flex items-center gap-1.5">
                  <Star size={15} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-base font-extrabold text-gray-900">4.9</span>
                  <span className="text-sm text-gray-400">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}