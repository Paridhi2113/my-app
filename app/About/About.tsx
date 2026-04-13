
import Link from "next/link";

const timeline = [
  { year: "2008", event: "Saveur opens its doors", desc: "Chef Michel Beaumont-Leroux launches Saveur in the 8th arrondissement with a 32-seat dining room and a vision of elevated French cuisine." },
  { year: "2009", event: "First Michelin Star", desc: "Within a year of opening, Saveur receives its first Michelin star — Michel becomes the youngest single-star recipient in France." },
  { year: "2013", event: "The New Kitchen", desc: "A full renovation introduces a state-of-the-art kitchen, the private Chef's Table, and an expanded wine cellar housing 400+ labels." },
  { year: "2014", event: "Second Michelin Star", desc: "The coveted second star is awarded, cementing Saveur's place among France's top tables." },
  { year: "2018", event: "Third Michelin Star", desc: "The pinnacle of recognition — Saveur joins the elite company of three-starred establishments worldwide." },
  { year: "2022", event: "Chef of the Year", desc: "Chef Michel is named Chef of the Year by the French Culinary Academy, an honour voted by peers." },
  { year: "2025", event: "17th Year of Excellence", desc: "Saveur continues to innovate, welcoming guests from over 60 countries and training the next generation of French chefs." },
];

const team = [
  { name: "Michel Beaumont-Leroux", role: "Executive Chef & Founder", bio: "Trained under Robuchon and Bocuse, Michel's vision has defined Saveur since its founding." },
  { name: "Sophie Renard", role: "Head Pastry Chef", bio: "Former apprentice at Ladurée, Sophie's desserts have been described as 'architecture in sugar and cream'." },
  { name: "Étienne Vidal", role: "Head Sommelier", bio: "Awarded Best Sommelier of France 2019, Étienne curates our 800-label cellar with obsessive care." },
  { name: "Claire Fontaine", role: "Restaurant Director", bio: "Claire's 20 years of hospitality leadership ensure every guest experiences flawless, warm service." },
];

export default function AboutPage() {
  return (
    <>
    

      {/* Story section */}
      <section className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, #2A2018 0%, #1A1410 40%, #0F0C08 100%)",
                  }}
                />
                {/* Gold geometric overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 60px)",
                  }}
                />
                {/* Decorative text */}
                <div
                  className="absolute bottom-8 left-8 right-8"
                  style={{ borderTop: "1px solid rgba(201,168,76,0.3)", paddingTop: "20px" }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "rgba(248,244,237,0.5)",
                      fontSize: "0.95rem",
                    }}
                  >
                    "From a single table in Paris to three Michelin stars — 
                    our journey has always been guided by the same north star: 
                    to make every guest feel like the only guest."
                  </p>
                  <p
                    className="mt-3 text-xs tracking-widest"
                    style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.65rem" }}
                  >
                    — MICHEL BEAUMONT-LEROUX
                  </p>
                </div>
              </div>
              {/* Offset accent */}
              <div
                className="absolute -top-5 -right-5 w-24 h-24 border-t-2 border-r-2"
                style={{ borderColor: "var(--gold)", opacity: 0.3 }}
              />
              <div
                className="absolute -bottom-5 -left-5 w-24 h-24 border-b-2 border-l-2"
                style={{ borderColor: "var(--gold)", opacity: 0.3 }}
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ background: "var(--gold)" }} />
                <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
                  The Beginning
                </span>
              </div>

              <h2
                className="text-4xl font-normal mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Dream Born in
                <br />
                <em style={{ color: "var(--gold)" }}>a Small Kitchen</em>
              </h2>

              <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: "rgba(248,244,237,0.75)",
                  }}
                >
                  Saveur was born from a simple conviction: that dining is one of life's 
                  most profound pleasures, and that it deserves to be treated as such.
                </p>
                <p>
                  In 2008, Chef Michel Beaumont-Leroux opened our doors with a 32-seat dining room, 
                  a hand-written menu, and an unwavering belief in the power of seasonal, 
                  locally-sourced ingredients. His early mentors — Joël Robuchon and Paul Bocuse — 
                  had taught him that simplicity, executed perfectly, is the greatest luxury.
                </p>
                <p>
                  Within a year, the first Michelin star arrived. Then a second. Then the 
                  third — a milestone achieved by fewer than 150 restaurants in the world. 
                  Through all of it, our ethos has never changed: every guest is a guest in 
                  our home, and every meal is a celebration.
                </p>
                <p>
                  Today, Saveur employs a team of 60 professionals — from chefs and sommeliers 
                  to farmers and foragers — united by one shared purpose: to create moments 
                  that guests remember for the rest of their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: "var(--dark-2, #1A1712)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
                Milestones
              </span>
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2 className="text-4xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Central line */}
            <div
              className="absolute left-[80px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)", opacity: 0.2 }}
            />

            <div className="space-y-10">
              {timeline.map(({ year, event, desc }) => (
                <div key={year} className="flex gap-8 group">
                  <div
                    className="shrink-0 w-20 text-right"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--gold)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {year}
                  </div>
                  {/* Dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div
                      className="mt-1.5 w-3 h-3 border-2 shrink-0 transition-all duration-300 group-hover:scale-150"
                      style={{ borderColor: "var(--gold)", background: "var(--dark-2)" }}
                    />
                  </div>
                  <div className="flex-1 pb-2">
                    <h3
                      className="text-lg font-normal mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ background: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
                The Team
              </span>
              <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            </div>
            <h2 className="text-4xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              The People Behind Saveur
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio }) => (
              <div
                key={name}
                className="group p-8 border transition-all duration-500 hover:-translate-y-2 relative"
                style={{ borderColor: "rgba(201,168,76,0.12)", background: "rgba(255,255,255,0.015)" }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-5 h-5 border-t border-l transition-all duration-400 group-hover:w-8 group-hover:h-8"
                  style={{ borderColor: "var(--gold)" }}
                />

                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(201,168,76,0.2)",
                    background: "rgba(201,168,76,0.05)",
                  }}
                >
                  <span
                    className="text-xl"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", opacity: 0.6 }}
                  >
                    {name.charAt(0)}
                  </span>
                </div>

                <h3
                  className="text-base font-normal mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {name}
                </h3>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--gold)", fontSize: "0.6rem", letterSpacing: "0.15em" }}
                >
                  {role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24"
        style={{ background: "var(--dark-2, #1A1712)", borderTop: "1px solid rgba(201,168,76,0.08)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
              Our Commitments
            </span>
            <div className="h-px w-10" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="text-4xl font-normal mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "◇", title: "Sustainability", desc: "We work exclusively with farmers and fishmongers who share our commitment to ethical, sustainable practices." },
              { icon: "◇", title: "Community", desc: "Saveur's apprenticeship programme has trained 120+ young chefs since 2012, many now leading kitchens worldwide." },
              { icon: "◇", title: "Seasonality", desc: "Our menu changes completely four times a year, guided solely by what is exceptional at that precise moment." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="text-2xl mb-4" style={{ color: "var(--gold)", opacity: 0.7 }} aria-hidden>{icon}</div>
                <h3
                  className="text-xl font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/reservations"
              className="inline-block px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium"
              style={{
                background: "linear-gradient(135deg, var(--gold-light), var(--gold))",
                color: "var(--dark)",
              }}
            >
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
