"use client";
import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Star, Heart } from "lucide-react";

const categories = ["All", "Starters", "Seafood", "Mains", "Vegetarian", "Desserts", "Wine"];

const menuItems = [
  // Starters
  { category: "Starters", name: "Foie Gras Terrine", desc: "Sauternes jelly, brioche toast, Périgord truffle, fig compote", price: "€28", tags: ["Signature"], emoji: "🥩", rating: 4.9 },
  { category: "Starters", name: "Amuse Bouche Selection", desc: "Seasonal one-bite compositions, daily chef's selection", price: "€18", tags: [], emoji: "🍽️", rating: 4.7 },
  { category: "Starters", name: "Soupe à l'Oignon", desc: "Caramelised onion, Comté gratin, thyme crouton", price: "€22", tags: ["Classic"], emoji: "🍜", rating: 4.8 },
  { category: "Starters", name: "Carpaccio de Saint-Jacques", desc: "Hand-dived scallops, ponzu, micro shiso, caviar pearls", price: "€32", tags: ["Seasonal"], emoji: "🦪", rating: 4.9 },
  // Seafood
  { category: "Seafood", name: "Lobster Bisque", desc: "Cognac cream, tarragon, Oscietra caviar crouton", price: "€34", tags: ["Chef's Choice"], emoji: "🦞", rating: 4.9 },
  { category: "Seafood", name: "Turbot Rôti", desc: "Beurre blanc, capers, lemon confit, sea herbs", price: "€58", tags: [], emoji: "🐟", rating: 4.7 },
  { category: "Seafood", name: "Salmon Confit", desc: "Dill crème fraîche, compressed cucumber, caviar", price: "€46", tags: [], emoji: "🐠", rating: 4.6 },
  // Mains
  { category: "Mains", name: "Wagyu Beef Tenderloin", desc: "A5 Wagyu, truffle jus, pomme purée, seasonal vegetables", price: "€72", tags: ["Signature", "Chef's Choice"], emoji: "🥩", rating: 5.0 },
  { category: "Mains", name: "Canard à l'Orange", desc: "Duck breast, blood orange sauce, turnip gratin, jus gras", price: "€54", tags: ["Classic"], emoji: "🍖", rating: 4.8 },
  { category: "Mains", name: "Rack of Lamb", desc: "Herb croûte, Provençal jus, ratatouille, polenta", price: "€62", tags: [], emoji: "🍗", rating: 4.7 },
  { category: "Mains", name: "Pigeon Royale", desc: "Squab pigeon, cherry jus, celeriac purée, foie gras", price: "€68", tags: ["Seasonal"], emoji: "🐦", rating: 4.8 },
  // Vegetarian
  { category: "Vegetarian", name: "Garden Risotto", desc: "Parmigiano Reggiano 36 months, roasted beets, herb oil", price: "€38", tags: ["Vegetarian"], emoji: "🌾", rating: 4.7 },
  { category: "Vegetarian", name: "Artichoke Tasting", desc: "Three preparations, truffle vinaigrette, burrata, basil", price: "€34", tags: ["Vegan option"], emoji: "🌿", rating: 4.6 },
  { category: "Vegetarian", name: "Truffle Omelette", desc: "Fresh black truffle, Périgord butter, chervil", price: "€42", tags: ["Vegetarian"], emoji: "🍳", rating: 4.9 },
  // Desserts
  { category: "Desserts", name: "Soufflé au Chocolat", desc: "Valrhona 70%, vanilla crème anglaise, praline", price: "€18", tags: ["Classic"], emoji: "🍫", rating: 5.0 },
  { category: "Desserts", name: "Tarte Tatin", desc: "Caramelised Cox apple, crème fraîche, Calvados", price: "€16", tags: ["Classic"], emoji: "🥧", rating: 4.8 },
  { category: "Desserts", name: "Île Flottante", desc: "Soft meringue, crème anglaise, praline, caramel", price: "€14", tags: [], emoji: "🍮", rating: 4.6 },
  { category: "Desserts", name: "Mille-Feuille Revisité", desc: "Vanilla cream, caramelised pastry, raspberry coulis", price: "€17", tags: ["Signature"], emoji: "🍰", rating: 4.9 },
  // Wine
  { category: "Wine", name: "Sommelier Pairing — Tasting Menu", desc: "5 curated wines, 60–75ml each, with course explanations", price: "€95", tags: ["Recommended"], emoji: "🍷", rating: 5.0 },
  { category: "Wine", name: "Champagne by the Glass", desc: "Krug Grande Cuvée, Pol Roger, or Billecart-Salmon", price: "€28", tags: [], emoji: "🥂", rating: 4.9 },
  { category: "Wine", name: "Bordeaux Rouge Selection", desc: "Château Margaux, Pichon Baron, or Lynch-Bages", price: "€45+", tags: [], emoji: "🍾", rating: 4.8 },
];

const tagColors: Record<string, string> = {
  "Signature": "bg-amber-50 text-amber-600 border-amber-200",
  "Chef's Choice": "bg-green-50 text-green-600 border-green-200",
  "Classic": "bg-blue-50 text-blue-600 border-blue-200",
  "Seasonal": "bg-orange-50 text-orange-600 border-orange-200",
  "Vegetarian": "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Vegan option": "bg-teal-50 text-teal-600 border-teal-200",
  "Recommended": "bg-purple-50 text-purple-600 border-purple-200",
};

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const [liked, setLiked] = useState<string[]>([]);

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  const toggleLike = (name: string) =>
    setLiked((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-white pt-12 pb-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[#39DB4A] text-sm font-bold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            OUR MENU
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Seasonal <span className="text-[#39DB4A]">Selections</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Every dish tells a story of provenance, technique, and passion. Our menu evolves with each season.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-200"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  background: active === cat ? "#39DB4A" : "white",
                  borderColor: active === cat ? "#39DB4A" : "#e5e7eb",
                  color: active === cat ? "white" : "#6b7280",
                  boxShadow: active === cat ? "0 4px 12px rgba(57,219,74,0.25)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Section label */}
          {active !== "All" && (
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <span
                className="text-sm font-extrabold text-[#39DB4A] uppercase tracking-widest"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {active}
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          )}

          {/* Menu item cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* Emoji icon */}
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {item.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex-1">
                      <h3
                        className="font-extrabold text-gray-900 text-sm leading-tight"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className="text-base font-extrabold text-[#39DB4A]"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {item.price}
                      </span>
                      <button
                        onClick={() => toggleLike(item.name)}
                        className="w-7 h-7 rounded-lg bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors"
                      >
                        <Heart
                          size={13}
                          className={liked.includes(item.name) ? "text-red-500 fill-red-500" : "text-gray-300"}
                          fill={liked.includes(item.name) ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                  </div>

                  <p
                    className="text-xs text-gray-400 mb-2 leading-relaxed"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-xs font-bold rounded-full border ${tagColors[tag] || "bg-gray-50 text-gray-500 border-gray-200"}`}
                          style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.6rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <Star size={11} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold text-gray-600" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tasting Menu Banner */}
          <div className="mt-12 bg-white rounded-3xl border border-green-100 shadow-sm p-8 sm:p-10 text-center">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🍽️
            </div>
            <p
              className="text-[#39DB4A] text-xs font-bold tracking-widest uppercase mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              CHEF'S TABLE
            </p>
            <h3
              className="text-2xl font-extrabold text-gray-900 mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              7-Course Tasting Menu
            </h3>
            <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
              A journey through the season's finest — <span className="font-bold text-gray-700">€185 per person</span>
            </p>
            <p className="text-xs text-gray-300 mb-7" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Sommelier pairing: €95 · Prestige pairing: €145 · Soft pairing: €55
            </p>
            <a
              href="/reservations"
              className="inline-block bg-[#39DB4A] hover:bg-[#2ecc40] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-green-200 transition-all hover:-translate-y-0.5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Reserve for the Tasting Menu
            </a>
          </div>

          {/* Dietary note */}
          <p
            className="mt-8 text-center text-xs text-gray-300"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Please inform our team of any allergies or dietary requirements. All prices include VAT.
            A discretionary 12.5% service charge will be added.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}