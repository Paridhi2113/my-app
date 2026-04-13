"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Fattoush salad",
    description: "Description of the item",
    price: 24.0,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    bg: "#F0FFF1",
  },
  {
    id: 2,
    name: "Vegetable salad",
    description: "Description of the item",
    price: 26.0,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    bg: "#F5FFF0",
  },
  {
    id: 3,
    name: "Egg vegi salad",
    description: "Description of the item",
    price: 23.0,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
    bg: "#FFFDF0",
  },
];

export default function SpecialDishes() {
  const [liked, setLiked] = useState<number[]>([]);
  const toggleLike = (id: number) =>
    setLiked((prev) => prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]);

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <p style={{
              color: "#39DB4A", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: 10, fontFamily: "'Nunito', sans-serif",
            }}>
              SPECIAL DISHES
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#111", lineHeight: 1.2, fontFamily: "'Nunito', sans-serif" }}>
              Standout Dishes<br />From Our Menu
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "2px solid #e5e7eb", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#9ca3af",
            }}>
              <ChevronLeft size={20} />
            </button>
            <button style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "#39DB4A", border: "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff",
              boxShadow: "0 4px 14px rgba(57,219,74,0.4)",
            }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {dishes.map((dish) => (
            <div key={dish.id} style={{
              background: "#fff",
              borderRadius: 24,
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Heart */}
              <button
                onClick={() => toggleLike(dish.id)}
                style={{
                  position: "absolute", top: 16, right: 16, zIndex: 10,
                  width: 38, height: 38, borderRadius: 10,
                  background: "#39DB4A", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 10px rgba(57,219,74,0.35)",
                }}
              >
                <Heart size={16} color="white" fill={liked.includes(dish.id) ? "white" : "none"} />
              </button>

              {/* Image */}
              <div style={{
                background: dish.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "36px 0 24px",
              }}>
                <div style={{ width: 160, height: 160, borderRadius: "50%", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
                  <Image src={dish.image} alt={dish.name} width={160} height={160} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px 24px" }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#111", marginBottom: 6, fontFamily: "'Nunito', sans-serif" }}>
                  {dish.name}
                </h3>
                <p style={{ fontSize: 13, color: "#bbb", marginBottom: 16, fontFamily: "'Nunito', sans-serif" }}>
                  {dish.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#111", fontFamily: "'Nunito', sans-serif" }}>
                    ${dish.price.toFixed(2)}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Star size={14} color="#FBBF24" fill="#FBBF24" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#555", fontFamily: "'Nunito', sans-serif" }}>
                      {dish.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}