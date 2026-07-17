"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LEADERSHIP = [
  {
    name: "Abdul Ghaffar",
    role: "Founder & President",
    img: "/founder.jpg",
    quote: "We serve humanity without difference of religion, creed, or caste.",
    fb: "https://www.facebook.com/KWSociety/",
    phone: "tel:+923334178699",
  },
  {
    name: "Faisal Naveed",
    role: "Co-Founder",
    img: "/faisal.jpg",
    quote: "Every act of kindness, no matter how small, creates a ripple.",
    fb: "#",
    phone: "#",
  },
  {
    name: "Asad Waqas",
    role: "General Secretary",
    img: "/asad.png",
    quote: "Transparency and dedication are the backbone of every great cause.",
    fb: "#",
    phone: "tel:+923334178699",
  },
];

const TEAM = [
  { name: "Ahmad Waqas", role: "Education Lead", img: "/waqas.jpg" },
  { name: "Ali Hassan", role: "Health Coordinator", img: "" },
  { name: "Usman Tariq", role: "Water Projects Lead", img: "" },
  { name: "Bilal Raza", role: "Blood Drive Organizer", img: "" },
  { name: "Zubair Ahmed", role: "Welfare Officer", img: "" },
  { name: "Kamran Iqbal", role: "Community Outreach", img: "" },
];

const STATS = [
  { num: "12+", label: "Years of Service" },
  { num: "9", label: "Core Members" },
  { num: "50+", label: "Active Volunteers" },
  { num: "100%", label: "Volunteer-Led" },
];

function Avatar({ name, size = 80 }: { name: string; size?: number }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, var(--green), var(--pine-deep))",
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--serif)", fontWeight: 700, fontSize: size * 0.34,
      flexShrink: 0, letterSpacing: "0.02em",
    }}>
      {initials}
    </div>
  );
}

const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function TeamPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--cream-2)" }}>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="wrap">
          <div className="tb-info">
            <a href="mailto:kwsociety2014@gmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              kwsociety2014@gmail.com
            </a>
            <a href="tel:+923334178699">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +92 333 4178 699
            </a>
            <a href="#" className="ci-loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Khurram, Kasur, Pakistan
            </a>
          </div>
          <div className="tb-social">
            <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
            </a>
            <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header id="header" className={isScrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="Khurram Welfare Society home">
            <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
            <span className="brand-text">
              <span className="brand-name">Khurram Welfare Society</span>
              <span className="brand-sub">Serving Humanity Since 2012</span>
            </span>
          </Link>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/projects" className={pathname === "/projects" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/team" className={pathname === "/team" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/sports" className={pathname === "/sports" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Sports</Link>
            <Link href="/legends" className={pathname === "/legends" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Legends</Link>
            <Link href="/directory" className={pathname === "/directory" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Directory</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="nav-cta">
            <Link href="/membership" className="btn btn-amber">Apply for membership <span className="arrow">→</span></Link>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <main style={{ flexGrow: 1 }}>

        {/* ── HERO ── */}
        <div style={{
          position: "relative", overflow: "hidden", padding: "70px 0 96px",
          background: "linear-gradient(160deg, var(--cream) 0%, var(--cream-2) 60%)",
          borderBottom: "1px solid var(--line)",
        }}>
          {/* decorative orbs */}
          <div style={{ position: "absolute", top: -180, right: -120, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,175,136,.13), transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -140, left: -100, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,61,.11), transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(20,80,60,.04) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />

          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="tp-hero-grid">
              {/* Copy */}
              <div style={{ maxWidth: 560 }}>
                <span className="eyebrow">The people behind KWS</span>
                <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.6rem, 4.8vw, 3.8rem)", color: "var(--ink)", margin: "18px 0 20px", lineHeight: 1.05 }}>
                  Hearts that <em style={{ fontStyle: "italic", color: "var(--green)" }}>serve</em>,<br />
                  hands that <em style={{ fontStyle: "italic", color: "var(--green)" }}>build.</em>
                </h1>
                <p className="lead">
                  Our team is made up of passionate volunteers from Khurram Hithar and beyond — united by one mission: to serve humanity without discrimination.
                </p>
                <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href="/#contact" className="btn btn-green">Join Our Team <span className="arrow">→</span></Link>
                  <Link href="/#causes" className="btn btn-ghost">Support Our Work</Link>
                </div>
              </div>

              {/* Photo mosaic */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, alignSelf: "stretch" }}>
                {/* Tall left card */}
                <div style={{
                  gridRow: "span 2", borderRadius: 22, overflow: "hidden",
                  background: "linear-gradient(145deg, var(--leaf), var(--pine))",
                  boxShadow: "var(--shadow-lift)", position: "relative",
                  minHeight: 320,
                }}>
                  {LEADERSHIP[0].img ? (
                    <img src={LEADERSHIP[0].img} alt={LEADERSHIP[0].name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                      onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  ) : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Avatar name={LEADERSHIP[0].name} size={90} /></div>}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(transparent, rgba(14,59,44,.85))",
                    padding: "32px 16px 16px",
                  }}>
                    <div style={{ fontSize: ".68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--amber)", marginBottom: 3 }}>{LEADERSHIP[0].role}</div>
                    <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: "1.05rem", color: "#fff" }}>{LEADERSHIP[0].name}</div>
                  </div>
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    background: "var(--grad-warm)", color: "var(--pine-deep)",
                    fontSize: ".68rem", fontWeight: 700, padding: "5px 12px", borderRadius: 100,
                    letterSpacing: ".05em", textTransform: "uppercase",
                  }}>Founder</div>
                </div>
                {/* Top-right card */}
                {[1, 2].map((idx) => (
                  <div key={idx} style={{
                    borderRadius: 22, overflow: "hidden",
                    background: "linear-gradient(145deg, var(--leaf), var(--pine))",
                    boxShadow: "var(--shadow-soft)", position: "relative",
                    minHeight: 150,
                  }}>
                    {LEADERSHIP[idx].img ? (
                      <img src={LEADERSHIP[idx].img} alt={LEADERSHIP[idx].name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    ) : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Avatar name={LEADERSHIP[idx].name} size={60} /></div>}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: "linear-gradient(transparent, rgba(14,59,44,.85))",
                      padding: "22px 14px 12px",
                    }}>
                      <div style={{ fontSize: ".63rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--amber)", marginBottom: 2 }}>{LEADERSHIP[idx].role}</div>
                      <div style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: ".92rem", color: "#fff" }}>{LEADERSHIP[idx].name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div style={{ background: "var(--pine)", color: "#fff", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <div className="wrap" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "52px 26px", gap: 24, textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(2.2rem,3.5vw,3rem)", color: "var(--amber)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ marginTop: 8, color: "rgba(255,255,255,.78)", fontSize: ".94rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>


        {/* ── ABOUT US ── */}
        <div style={{ background: "var(--cream-2)", padding: "100px 0" }} id="about">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="tp-about-grid">
              {/* Photo */}
              <div style={{ borderRadius: 26, overflow: "hidden", boxShadow: "var(--shadow-lift)", background: "linear-gradient(135deg, var(--leaf), var(--pine))", aspectRatio: "5/4", position: "relative" }} className="reveal in">
                <img src="/511953349_24746508848284362_7795780151817311534_n.jpg" alt="KWS helping the community" loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <div style={{
                  position: "absolute", left: 20, bottom: 20,
                  background: "var(--cream-2)", padding: "12px 18px", borderRadius: 14,
                  fontFamily: "var(--serif)", fontWeight: 600, color: "var(--pine)",
                  boxShadow: "var(--shadow-soft)", fontSize: ".95rem",
                }}>Compassion in action</div>
              </div>
              {/* Copy */}
              <div className="reveal in">
                <span className="eyebrow">About the society</span>
                <h2 className="h-sec" style={{ margin: "15px 0 16px" }}>A community built on <em>service and hope.</em></h2>
                <p className="lead">Khurram Welfare Society is a non-profit dedicated to serving humanity through social welfare, education, and community support. We uplift underprivileged families, promote learning, provide healthcare assistance, and empower people to build a self-reliant future.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 28 }}>
                  {[
                    { icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />, title: "For everyone", desc: "No difference of religion, creed or caste." },
                    { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></>, title: "Volunteer-led", desc: "Powered by people who care." },
                    { icon: <path d="M12 2v20M2 12h20" />, title: "Local & direct", desc: "Every rupee reaches the ground." },
                    { icon: <polyline points="20 6 9 17 4 12" />, title: "Transparent", desc: "Open about where help goes." },
                  ].map((pt) => (
                    <div key={pt.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, display: "grid", placeItems: "center", background: "rgba(47,143,107,.12)", color: "var(--green)" }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{pt.icon}</svg>
                      </div>
                      <div>
                        <b style={{ display: "block", fontFamily: "var(--sans)", fontWeight: 600, fontSize: ".96rem" }}>{pt.title}</b>
                        <span style={{ fontSize: ".86rem", color: "var(--muted)" }}>{pt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOUNDER MESSAGE ── */}
        <div style={{ background: "var(--pine-deep)", color: "#fff", position: "relative", overflow: "hidden", padding: "100px 0" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.045) 1.4px, transparent 1.4px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <div className="wrap" style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 56, alignItems: "center" }} className="tp-founder-grid">
              <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1/1", background: "linear-gradient(135deg, var(--green), var(--pine))", boxShadow: "var(--shadow-lift)" }} className="reveal in">
                <img src="/founder.jpg" alt="Hafiz Abdul Ghaffar Kamboh, Founder" loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <div className="reveal in">
                <span className="eyebrow" style={{ color: "var(--amber)" }}>Message of the founder</span>
                <h2 style={{ fontFamily: "var(--serif)", color: "#fff", fontSize: "clamp(1.8rem,3.4vw,2.6rem)", margin: "14px 0 6px" }}>Hafiz Abdul Ghaffar Kamboh</h2>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 600, color: "var(--leaf)", fontSize: ".92rem", letterSpacing: ".04em", marginBottom: 22 }}>Founder, Khurram Welfare Society</div>
                <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.24rem", lineHeight: 1.55, color: "rgba(255,255,255,.9)", borderLeft: "3px solid var(--amber)", paddingLeft: 22, marginBottom: 24 }}>
                  True success lies in improving the lives of others and creating opportunity for those in need. Through education, clean water, health, and welfare, we bring positive change to our community and beyond.
                </blockquote>
                <p style={{ color: "rgba(255,255,255,.72)", marginBottom: 24 }}>I invite everyone to join hands with KWS in this noble journey of service and hope. Together, we can build a brighter, more caring future for all.</p>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--amber)" }}>— Hafiz Abdul Ghaffar</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LEADERSHIP SPOTLIGHT ── */}
        <div style={{ background: "var(--cream-2)", padding: "100px 0" }}>

          <div className="wrap">
            <div className="sec-head center reveal in">
              <span className="eyebrow" style={{ justifyContent: "center" }}>Leadership</span>
              <h2 className="h-sec">Guiding <em>hearts &amp; hands.</em></h2>
              <p className="lead" style={{ margin: "0 auto" }}>
                The founding members whose vision turned a small village initiative into a beacon of hope.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 22 }} className="tp-leaders-grid">
              {LEADERSHIP.map((leader, idx) => (
                <div key={leader.name} style={{
                  background: "#fff",
                  border: idx === 0 ? "2px solid var(--amber)" : "1px solid var(--line)",
                  borderRadius: 26, overflow: "hidden", display: "flex", flexDirection: "column",
                  boxShadow: idx === 0 ? "var(--shadow-lift)" : "none",
                  transition: "transform .35s, box-shadow .35s",
                }}>
                  {/* Photo */}
                  <div style={{
                    position: "relative", aspectRatio: "4/3",
                    background: "linear-gradient(135deg, var(--leaf), var(--pine))",
                    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
                  }}>
                    {leader.img ? (
                      <img src={leader.img} alt={leader.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    ) : <Avatar name={leader.name} size={idx === 0 ? 120 : 90} />}
                    {idx === 0 && (
                      <div style={{
                        position: "absolute", top: 16, right: 16,
                        background: "var(--grad-warm)", color: "var(--pine-deep)",
                        fontSize: ".7rem", fontWeight: 700, padding: "6px 14px",
                        borderRadius: 100, letterSpacing: ".07em", textTransform: "uppercase",
                      }}>Founder</div>
                    )}
                  </div>
                  {/* Body */}
                  <div style={{ padding: idx === 0 ? "26px 30px 30px" : "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--amber-deep)" }}>
                      {leader.role}
                    </div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: idx === 0 ? "1.8rem" : "1.45rem", color: "var(--ink)", margin: "8px 0 14px", lineHeight: 1.1 }}>
                      {leader.name}
                    </h3>
                    <blockquote style={{
                      fontFamily: "var(--serif)", fontStyle: "italic",
                      fontSize: idx === 0 ? "1.05rem" : ".97rem",
                      color: "var(--muted)", lineHeight: 1.6,
                      borderLeft: "3px solid var(--amber)", paddingLeft: 16,
                      margin: "0 0 22px", flex: 1,
                    }}>
                      &ldquo;{leader.quote}&rdquo;
                    </blockquote>
                    <div style={{ display: "flex", gap: 10 }}>
                      {[
                        { href: leader.fb, label: `${leader.name} Facebook`, icon: <FbIcon /> },
                        { href: leader.phone, label: `Call ${leader.name}`, icon: <PhoneIcon /> },
                      ].map((s) => (
                        <a key={s.label} href={s.href} aria-label={s.label} style={{
                          width: 36, height: 36, borderRadius: "50%", display: "grid",
                          placeItems: "center", background: "var(--cream)",
                          color: "var(--muted)", transition: ".25s",
                        }}>
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FULL TEAM GRID ── */}
        <div style={{ background: "var(--cream)", padding: "100px 0" }}>
          <div className="wrap">
            <div className="sec-head center reveal in">
              <span className="eyebrow" style={{ justifyContent: "center" }}>Our Team</span>
              <h2 className="h-sec">Meet our <em>volunteers.</em></h2>
              <p className="lead" style={{ margin: "0 auto" }}>
                Every member dedicates their time, energy, and skills for the betterment of our community — purely for the sake of humanity.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="tp-team-grid">
              {TEAM.map((m) => (
                <div key={m.name} className="tm" style={{ textAlign: "center" }}>
                  <div className="tm-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {m.img ? (
                      <img src={m.img} alt={m.name} loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    ) : <Avatar name={m.name} size={88} />}
                  </div>
                  <div className="tm-body">
                    <div className="tm-role">{m.role}</div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--ink)", margin: "6px 0" }}>{m.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── JOIN CTA ── */}
        <div style={{ background: "var(--cream-2)", padding: "40px 0 100px" }}>
          <div className="wrap">
            <div style={{
              background: "linear-gradient(125deg, var(--pine-deep) 0%, var(--green) 100%)",
              borderRadius: 32, padding: "72px 60px", textAlign: "center", color: "#fff",
              position: "relative", overflow: "hidden", boxShadow: "var(--shadow-lift)",
            }}>
              <div style={{
                position: "absolute", top: -100, right: -80, width: 400, height: 400,
                borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,61,.35), transparent 65%)",
                pointerEvents: "none",
              }} />
              <span className="eyebrow light" style={{ justifyContent: "center", position: "relative" }}>Be the change</span>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,3.6vw,2.9rem)", color: "#fff", margin: "14px 0 14px", position: "relative" }}>
                Ready to join our <em style={{ fontStyle: "italic", color: "var(--amber)" }}>mission?</em>
              </h2>
              <p style={{ position: "relative", color: "rgba(255,255,255,.82)", maxWidth: "50ch", margin: "0 auto 32px", fontSize: "1.06rem" }}>
                Whether you can give an hour a week or a lifetime of service, there&rsquo;s a place for you in the Khurram Welfare Society.
              </p>
              <div style={{ position: "relative", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/#contact" className="btn btn-amber">Volunteer With Us <span className="arrow">→</span></Link>
                <Link href="/#contact" className="btn btn-ghost on-dark">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <Link href="/" className="brand">
                <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
                <span className="brand-text">
                  <span className="brand-name" style={{ color: "#fff" }}>Khurram Welfare Society</span>
                  <span className="brand-sub">Serving Humanity Since 2012</span>
                </span>
              </Link>
              <p>Serving humanity without difference of religion, creed or caste.</p>
              <div className="foot-social">
                <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a>
                <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
              </div>
            </div>
            <div className="foot-col"><h4>Our Work</h4><Link href="/#focus">Clean Water</Link><Link href="/#focus">Education</Link><Link href="/#focus">Health</Link><Link href="/#focus">Welfare</Link><Link href="/#focus">Blood Donation</Link></div>
            <div className="foot-col"><h4>Get Involved</h4><Link href="/#causes">Donate Now</Link><Link href="/#contact">Volunteer</Link><Link href="/#contact">Become a Member</Link><Link href="/#contact">Contact Us</Link></div>
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: "12px" }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
          </div>
          <div className="foot-bot">
            <div>&copy; {new Date().getFullYear()} Khurram Welfare Society. All rights reserved.</div>
            <div className="fb-links"><Link href="/">Privacy Policy</Link><Link href="/">Terms of Service</Link></div>
          </div>
        </div>
      </footer>

      {/* Responsive overrides */}
      <style>{`
        @media(max-width: 900px) {
          .tp-hero-grid { grid-template-columns: 1fr !important; }
          .tp-leaders-grid { grid-template-columns: 1fr !important; }
          .tp-team-grid { grid-template-columns: 1fr 1fr !important; }
          .tp-about-grid { grid-template-columns: 1fr !important; }
          .tp-founder-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width: 560px) {
          .tp-team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
