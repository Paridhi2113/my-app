import Link from "next/link";
import { ShoppingBag, Clock, ShoppingCart, Gift } from "lucide-react";

const services = [
  { icon: ShoppingBag, title: "CATERING", desc: "Delight your guests with our flavors and presentation" },
  { icon: Clock, title: "FAST DELIVERY", desc: "We deliver your order promptly to your door" },
  { icon: ShoppingCart, title: "ONLINE ORDERING", desc: "Explore menu & order with ease using our Online Ordering" },
  { icon: Gift, title: "GIFT CARDS", desc: "Give the gift of exceptional dining with Foodi Gift Cards" },
];

export default function StoryAndServices() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 80 }}>

          {/* Left */}
          <div style={{ flex: 1, maxWidth: 440 }}>
            <p style={{
              color: "#39DB4A", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: 16, fontFamily: "'Nunito', sans-serif",
            }}>
              OUR STORY & SERVICES
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#111", lineHeight: 1.2, marginBottom: 20, fontFamily: "'Nunito', sans-serif" }}>
              Our Culinary Journey<br />And Services
            </h2>
            <p style={{ fontSize: 15, color: "#777", lineHeight: 1.8, marginBottom: 36, fontFamily: "'Nunito', sans-serif" }}>
              Rooted in passion, we curate unforgettable dining experiences and offer
              exceptional services, blending culinary artistry with warm hospitality.
            </p>
            <Link
              href="/about"
              style={{
                display: "inline-block",
                background: "#39DB4A",
                color: "#fff",
                fontWeight: 700,
                padding: "14px 36px",
                borderRadius: 9999,
                textDecoration: "none",
                fontSize: 15,
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 4px 16px rgba(57,219,74,0.35)",
              }}
            >
              Explore
            </Link>
          </div>

          {/* Right — 2x2 grid */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: "#fff",
                borderRadius: 20,
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: "#F0FFF1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={26} color="#39DB4A" strokeWidth={1.6} />
                </div>
                <h3 style={{
                  fontSize: 11, fontWeight: 800, color: "#39DB4A",
                  letterSpacing: "0.12em", marginBottom: 8,
                  fontFamily: "'Nunito', sans-serif",
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: 12, color: "#bbb", lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}