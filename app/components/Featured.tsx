import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
    label: "Main Dish",
    count: "86 dishes",
  },
  {
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=80",
    label: "Break Fast",
    count: "12 break fast",
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80",
    label: "Dessert",
    count: "48 dessert",
  },
  {
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200&q=80",
    label: "Browse All",
    count: "255 Items",
  },
];

export default function PopularCategories() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            color: "#39DB4A",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 12,
            fontFamily: "'Nunito', sans-serif",
          }}>
            CUSTOMER FAVORITES
          </p>
          <h2 style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#111",
            fontFamily: "'Nunito', sans-serif",
          }}>
            Popular Catagories
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}>
          {categories.map(({ image, label, count }) => (
            <Link
              key={label}
              href={`/menu?category=${label.toLowerCase().replace(" ", "-")}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px 16px",
                background: "#fff",
                borderRadius: 20,
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <div style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: 16,
                background: "#E8F8EA",
              }}>
                <Image src={image} alt={label} width={88} height={88} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <p style={{ fontWeight: 800, fontSize: 15, color: "#111", marginBottom: 4, fontFamily: "'Nunito', sans-serif" }}>
                {label}
              </p>
              <p style={{ fontSize: 12, color: "#aaa", fontFamily: "'Nunito', sans-serif" }}>
                ({count})
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}