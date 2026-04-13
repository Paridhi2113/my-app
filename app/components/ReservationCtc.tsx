import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--dark)" }}
    >
      {/* Background decoration */} 
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)
          `,
        }}
      />

      {/* Large decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[20vw] font-bold leading-none opacity-[0.025]"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
        >
          DINE
        </span>
      </div>

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)", opacity: 0.15 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)", opacity: 0.15 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10" style={{ background: "var(--gold)" }} />
          <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
            Join Us
          </span>
          <div className="h-px w-10" style={{ background: "var(--gold)" }} />
        </div>

        <h2
          className="mb-6 font-normal leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
        >
          Begin Your
          <br />
          <em style={{ color: "var(--gold)" }}>Culinary Journey</em>
        </h2>

        <p
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            color: "rgba(248,244,237,0.65)",
          }}
        >
          Reserve your table at Saveur and experience an evening that transcends 
          the ordinary. We look forward to welcoming you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservations"
            className="px-12 py-4 font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--gold-light), var(--gold))",
              color: "var(--dark)",
            }}
          >
            Reserve a Table
          </Link>
          <a
            href="tel:+33142600000"
            className="px-12 py-4 font-medium text-xs tracking-[0.2em] uppercase border transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--cream)" }}
          >
            Call Us
          </a>
        </div>

        <p className="mt-8 text-xs tracking-widest" style={{ color: "var(--text-muted)", fontSize: "0.65rem" }}>
          For groups of 8 or more, please contact us directly
        </p>
      </div>
    </section>
  );
}
