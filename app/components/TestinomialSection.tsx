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
    <section style={{ padding: "80px 0", background: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 80 }}>

          {/* Left — Chef */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative", minHeight: 460 }}>

            {/* Green circle */}
            <div style={{
              position: "absolute",
              width: 320, height: 320,
              borderRadius: "50%",
              background: "#39DB4A",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }} />

            {/* Chef image */}
            <div style={{ position: "relative", zIndex: 2, width: 280, height: 400 }}>
              <Image
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80"
                alt="Our Best Chef"
                fill
                style={{ objectFit: "cover", objectPosition: "top", borderRadius: "9999px 9999px 0 0" }}
              />
            </div>

            {/* Emoji badges */}
            <div style={{
              position: "absolute", top: 60, left: "10%", zIndex: 3,
              background: "#fff", borderRadius: "50%", width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: 18,
            }}>😊</div>
            <div style={{
              position: "absolute", top: 30, right: "10%", zIndex: 3,
              background: "#fff", borderRadius: "50%", width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: 18,
            }}>🍕</div>

            {/* Badge */}
            <div style={{
              position: "absolute", bottom: 10, right: "5%", zIndex: 3,
              background: "#fff", borderRadius: 16, padding: "10px 18px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              border: "1px solid #f0f0f0",
            }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#111", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" }}>
                Our Best Chef 😊
              </p>
            </div>
          </div>

          {/* Right — Text */}
          <div style={{ flex: 1, maxWidth: 520 }}>
            <p style={{
              color: "#39DB4A", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: 16, fontFamily: "'Nunito', sans-serif",
            }}>
              TESTIMONIALS
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#111", lineHeight: 1.2, marginBottom: 20, fontFamily: "'Nunito', sans-serif" }}>
              What Our Customers<br />Say About Us
            </h2>
            <p style={{ fontSize: 15, color: "#777", lineHeight: 1.8, marginBottom: 32, fontFamily: "'Nunito', sans-serif" }}>
              "I had the pleasure of dining at Foodi last night, and I'm still raving about
              the experience! The attention to detail in presentation and service was impeccable"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {reviewers.map((r, i) => (
                  <div key={r.alt} style={{
                    width: 46, height: 46, borderRadius: "50%",
                    overflow: "hidden", border: "2px solid #fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    marginLeft: i === 0 ? 0 : -12,
                  }}>
                    <Image src={r.src} alt={r.alt} width={46} height={46} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 4, fontFamily: "'Nunito', sans-serif" }}>
                  Customer Feedback
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Star size={14} color="#FBBF24" fill="#FBBF24" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#111", fontFamily: "'Nunito', sans-serif" }}>4.9</span>
                  <span style={{ fontSize: 13, color: "#aaa", fontFamily: "'Nunito', sans-serif" }}>(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}