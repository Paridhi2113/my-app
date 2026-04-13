export default function ChefSection() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "var(--dark-2, #1A1712)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image placeholder with gradient */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #2A2520 0%, #1A1712 40%, #0F0D0A 100%)",
                }}
              />
              {/* Decorative chef silhouette using CSS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ opacity: 0.15 }}>
                  <div
                    className="text-[10rem] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
                  >
                    M
                  </div>
                  <div className="text-2xl tracking-[0.5em] uppercase" style={{ color: "var(--gold)" }}>
                    Chef
                  </div>
                </div>
              </div>

              {/* Real-looking portrait overlay elements */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{
                  background: "linear-gradient(to top, rgba(15,13,10,0.8), transparent)",
                }}
              />
            </div>

            {/* Award badge */}
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 flex flex-col items-center justify-center border"
              style={{
                background: "var(--dark)",
                borderColor: "var(--gold)",
              }}
            >
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
              >
                ★★★
              </span>
              <span className="text-xs tracking-wider mt-1" style={{ color: "var(--text-muted)", fontSize: "0.55rem", letterSpacing: "0.2em" }}>
                MICHELIN
              </span>
            </div>

            {/* Gold corner accent */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2"
              style={{ borderColor: "var(--gold)", opacity: 0.4 }}
            />
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
                Meet The Chef
              </span>
            </div>

            <h2
              className="mb-2 font-normal leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Chef Michel
            </h2>
            <h3
              className="text-2xl italic mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--gold)",
                fontWeight: 300,
              }}
            >
              Beaumont-Leroux
            </h3>

            <p
              className="text-base leading-relaxed mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "rgba(248,244,237,0.75)",
              }}
            >
              With over two decades of mastery across the finest kitchens in Paris, Lyon, 
              and New York, Chef Michel brings an unparalleled depth of knowledge to every 
              creation. His cuisine is a love letter to the French tradition — elevated, 
              reimagined, and deeply personal.
            </p>

            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Trained under Joël Robuchon and Paul Bocuse, Chef Michel earned his first 
              Michelin star at 31 — the youngest recipient that year. Today, Saveur holds 
              three stars, a testament to his unwavering pursuit of perfection.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                ["2009", "First Michelin Star"],
                ["2014", "Second Michelin Star"],
                ["2018", "Third Michelin Star"],
                ["2022", "Chef of the Year"],
              ].map(([year, award]) => (
                <div
                  key={year}
                  className="p-4 border"
                  style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif" }}
                  >
                    {year}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{award}</div>
                </div>
              ))}
            </div>

            <blockquote
              className="border-l-2 pl-6"
              style={{ borderColor: "var(--gold)" }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--cream)",
                  opacity: 0.85,
                }}
              >
                "Cooking is not a job. It is a conversation between the chef, 
                the ingredients, and the guest — one that I cherish with every meal."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
