import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleConsult = () => {
    const el = document.getElementById("consult");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-gold-dim bg-background/80 backdrop-blur-md">
        <span className="font-garamond text-sm tracking-widest-xl uppercase text-gold">
          LMT
        </span>
        <span className="font-garamond text-xs tracking-widest uppercase text-cream-dim hidden md:block">
          Liam Meyersfeld Trust
        </span>
        <button
          onClick={handleConsult}
          className="text-xs tracking-widest uppercase font-inter font-medium text-gold border border-gold-dim px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-all duration-300"
        >
          Schedule Consult
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Gold line decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="font-inter text-xs tracking-widest-xl uppercase text-gold mb-8 opacity-80">
            Est. 2025 · Cape Town, South Africa
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 text-cream tracking-tight">
            Liam Meyersfeld
            <br />
            <span className="gradient-text-gold italic font-normal">Trust</span>
          </h1>
          <div className="w-24 h-px mx-auto mb-8" style={{ background: "var(--gradient-gold)" }} />
          <p className="font-garamond text-xl md:text-2xl text-cream-dim max-w-2xl mx-auto leading-relaxed italic">
            Precision capital allocation. Asymmetric returns.
            <br />A generational approach to wealth.
          </p>
          <div className="mt-14">
            <button
              onClick={handleConsult}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary-foreground font-inter font-medium text-sm tracking-widest uppercase hover:shadow-gold transition-all duration-500 hover:scale-[1.02]"
            >
              Schedule a Consult
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6" style={{ background: "var(--gradient-section)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-xs tracking-widest-xl uppercase text-gold mb-6">
                About the Founder
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Liam <br />
                <span className="italic font-normal gradient-text-gold">Meyersfeld</span>
              </h2>
              <div className="w-12 h-px mb-8" style={{ background: "var(--gradient-gold)" }} />
              <div className="space-y-5 font-garamond text-lg leading-relaxed text-cream-dim">
                <p>
                  Liam Meyersfeld founded the Liam Meyersfeld Trust at age <span className="text-gold">12</span>, 
                  driven by an early fascination with markets, capital flow, and the mathematics of risk.
                </p>
                <p>
                  A student at <span className="text-cream">Herzlia High School</span> in Cape Town, 
                  Liam approaches investing with a discipline rare at any age — identifying opportunity where others 
                  see uncertainty.
                </p>
                <p>
                  The Trust operates on a foundation of rigorous first-principles thinking, 
                  long-horizon conviction, and an unwavering belief that the best time to build wealth 
                  is always <em>now</em>.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="border border-gold-dim p-8 bg-card shadow-card">
                <div className="space-y-8">
                  {[
                    { label: "Founded", value: "2025" },
                    { label: "Founder Age", value: "12" },
                    { label: "Base of Operations", value: "Cape Town, ZA" },
                    { label: "School", value: "Herzlia High School" },
                    { label: "Portfolio Details", value: "Not Disclosed" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-gold-dim pb-4 last:border-0 last:pb-0">
                      <span className="font-inter text-xs tracking-widest uppercase text-muted-foreground">
                        {item.label}
                      </span>
                      <span className={`font-garamond text-lg ${item.label === "Portfolio Details" ? "text-muted-foreground italic text-sm" : "text-gold"}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative corner lines */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-gold opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-gold opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-inter text-xs tracking-widest-xl uppercase text-gold mb-4">
              Investment Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Principles of the <span className="italic font-normal gradient-text-gold">Trust</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                number: "I",
                title: "Conviction Over Consensus",
                body: "True alpha is never found in the crowd. The Trust seeks positions where independent analysis diverges sharply from market narrative.",
              },
              {
                number: "II",
                title: "Patience as Strategy",
                body: "Time is capital's most underrated variable. The Trust takes a generational view, allowing compounding to do what others cannot.",
              },
              {
                number: "III",
                title: "Discretion & Privacy",
                body: "Portfolio holdings, positions, and returns are never disclosed publicly. Transparency with capital is a privilege reserved for those within the Trust.",
              },
            ].map((p) => (
              <div key={p.number} className="bg-card p-10 group hover:bg-secondary transition-colors duration-500">
                <p className="font-garamond text-4xl gradient-text-gold mb-6 opacity-50 group-hover:opacity-80 transition-opacity">
                  {p.number}
                </p>
                <h3 className="font-bold text-xl text-cream mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="font-garamond text-base text-cream-dim leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULT CTA */}
      <section
        id="consult"
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: "var(--gradient-section)" }}
      >
        {/* Background decorative element */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--gold)) 0px,
              hsl(var(--gold)) 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-inter text-xs tracking-widest-xl uppercase text-gold mb-6">
            Serious Investors Only
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
            Are you ready to<br />
            <span className="italic font-normal gradient-text-gold">invest differently?</span>
          </h2>
          <div className="w-24 h-px mx-auto mb-8" style={{ background: "var(--gradient-gold)" }} />
          <p className="font-garamond text-xl text-cream-dim mb-4 leading-relaxed max-w-xl mx-auto">
            If you are a serious investor and believe in backing conviction at its earliest stage —
          </p>
          <p className="font-garamond text-lg text-cream italic mb-12">
            schedule a consultation with Liam Meyersfeld.
          </p>

          <a
            href="mailto:liam@liammeyersfeldtrust.com"
            className="group inline-flex items-center gap-4 px-12 py-5 bg-gold text-primary-foreground font-inter font-medium text-sm tracking-widest uppercase shadow-gold hover:scale-[1.03] transition-all duration-500"
          >
            <span>Schedule a Consult with Liam Meyersfeld</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <p className="mt-8 font-inter text-xs text-muted-foreground tracking-wide">
            Consultations are selective. Not all inquiries will receive a response.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-garamond text-lg text-gold">Liam Meyersfeld Trust</p>
            <p className="font-inter text-xs text-muted-foreground tracking-wide mt-1">
              Cape Town, South Africa · Herzlia High School
            </p>
          </div>
          <p className="font-inter text-xs text-muted-foreground tracking-wide text-center md:text-right">
            © 2025 Liam Meyersfeld Trust. All rights reserved.<br />
            <span className="opacity-60">Portfolio details are not disclosed to the public.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
