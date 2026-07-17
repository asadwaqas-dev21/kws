"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams, notFound } from "next/navigation";
import { services } from "../data";

function ServiceIcon({ path, size = 32, stroke = "currentColor" }: { path: string; size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export default function ServiceDetail() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const service = services.find((s) => s.id === slug);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!service) {
    notFound();
  }

  // Find adjacent services for navigation
  const currentIndex = services.findIndex((s) => s.id === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;
  const otherServices = services.filter((s) => s.id !== slug).slice(0, 4);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
            <div className={`nav-dropdown${isDropdownOpen ? " open" : ""}`}>
              <button className={`nav-dropdown-trigger${pathname?.startsWith("/services") ? " active" : ""}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Services
                <svg className="dd-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/services/clean-water" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(47,143,107,.1)",color:"#2F8F6B"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Clean Water</span><span className="nav-dd-sub">Hand pumps & filtration</span></div></Link>
                <Link href="/services/education" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(232,163,61,.1)",color:"#CE8A1F"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10L12 5 2 10l10 5 10-5z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Education</span><span className="nav-dd-sub">Scholarships & supplies</span></div></Link>
                <Link href="/services/health" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(232,93,93,.1)",color:"#E85D5D"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Health & Medical</span><span className="nav-dd-sub">Free camps & aid</span></div></Link>
                <Link href="/services/street-lights" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(206,138,31,.1)",color:"#CE8A1F"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6M12 8a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Street Lights</span><span className="nav-dd-sub">43+ lights installed</span></div></Link>
                <Link href="/services/welfare" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(20,80,60,.1)",color:"#14503C"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Social Welfare</span><span className="nav-dd-sub">Rations & relief</span></div></Link>
                <Link href="/services/blood-donation" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(192,57,43,.1)",color:"#C0392B"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Blood Donation</span><span className="nav-dd-sub">Donor network</span></div></Link>
                <Link href="/services/muqada-boxes" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(142,68,173,.1)",color:"#8E44AD"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8v13H4V8"/><path d="M2 3h20l-2 5H4z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Muqada Boxes</span><span className="nav-dd-sub">Community giving</span></div></Link>
                <Link href="/services/sports" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(41,128,185,.1)",color:"#2980B9"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Sports & Youth</span><span className="nav-dd-sub">Tournaments & events</span></div></Link>
                <div className="nav-dd-sep" />
                <Link href="/services" className="nav-dd-viewall" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}>View All Services →</Link>
              </div>
            </div>
            <Link href="/sports" className={pathname === "/sports" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Sports</Link>
            <Link href="/legends" className={pathname === "/legends" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Legends</Link>
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

      <main style={{ flexGrow: 1, background: "var(--cream)" }}>

        {/* HERO */}
        <div style={{
          position: "relative", overflow: "hidden",
          padding: "120px 0 80px",
          background: `linear-gradient(135deg, ${service.color}18 0%, var(--cream) 100%)`,
        }}>
          {/* Decorative circles */}
          <div style={{
            position: "absolute", top: "-100px", right: "-80px", width: "400px", height: "400px",
            borderRadius: "50%", background: `${service.color}08`, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-60px", left: "-40px", width: "250px", height: "250px",
            borderRadius: "50%", background: `${service.color}06`, pointerEvents: "none",
          }} />

          <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontSize: "0.88rem" }}>
              <Link href="/" style={{ color: "var(--muted)", transition: "color 0.2s" }}>Home</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              <Link href="/services" style={{ color: "var(--muted)", transition: "color 0.2s" }}>Services</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              <span style={{ color: service.color, fontWeight: 600 }}>{service.title}</span>
            </nav>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap" }}>
              <div style={{
                width: "88px", height: "88px", borderRadius: "22px",
                background: service.colorBg, color: service.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: `0 8px 24px -8px ${service.color}30`,
              }}>
                <ServiceIcon path={service.iconPath} size={40} />
              </div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <h1 style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--serif)",
                  marginBottom: "10px", fontWeight: 700, lineHeight: 1.15, color: "var(--ink)",
                }}>
                  {service.title}
                </h1>
                <p style={{ fontSize: "1.15rem", color: "var(--muted)", lineHeight: 1.6, maxWidth: "600px" }}>
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Stats Strip */}
            <div style={{
              display: "flex", gap: "16px", marginTop: "36px", flexWrap: "wrap",
            }}>
              {service.stats.map((stat) => (
                <div key={stat.label} style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "18px 28px",
                  textAlign: "center",
                  minWidth: "130px",
                  boxShadow: "0 4px 16px rgba(0,0,0,.06)",
                  border: `1px solid ${service.color}15`,
                  flex: "1 1 130px",
                  maxWidth: "200px",
                }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "var(--serif)", color: service.color }}>{stat.value}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <section style={{ padding: "60px 0 80px" }}>
          <div className="wrap">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "50px",
              alignItems: "start",
            }} className="svc-detail-layout">

              {/* LEFT COLUMN - Main Content */}
              <div>
                {/* About Section */}
                <div style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "36px 40px",
                  marginBottom: "30px",
                  boxShadow: "0 4px 20px rgba(0,0,0,.04)",
                }}>
                  <h2 style={{
                    fontSize: "1.4rem", fontFamily: "var(--serif)", marginBottom: "20px",
                    display: "flex", alignItems: "center", gap: "12px", color: "var(--ink)",
                  }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: service.colorBg, color: service.color,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    </div>
                    About This Service
                  </h2>
                  {service.longDescription.map((para, i) => (
                    <p key={i} style={{ color: "var(--muted)", lineHeight: 1.85, marginBottom: "16px", fontSize: "0.96rem" }}>{para}</p>
                  ))}
                </div>

                {/* How It Works */}
                <div style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "36px 40px",
                  marginBottom: "30px",
                  boxShadow: "0 4px 20px rgba(0,0,0,.04)",
                }}>
                  <h2 style={{
                    fontSize: "1.4rem", fontFamily: "var(--serif)", marginBottom: "24px",
                    display: "flex", alignItems: "center", gap: "12px", color: "var(--ink)",
                  }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: service.colorBg, color: service.color,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    How It Works
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {service.howItWorks.map((step, i) => (
                      <div key={i} style={{
                        display: "flex", gap: "20px", position: "relative",
                        paddingBottom: i < service.howItWorks.length - 1 ? "28px" : "0",
                      }}>
                        {/* Timeline line */}
                        {i < service.howItWorks.length - 1 && (
                          <div style={{
                            position: "absolute", left: "19px", top: "40px", bottom: "0",
                            width: "2px", background: `${service.color}20`,
                          }} />
                        )}
                        {/* Step number */}
                        <div style={{
                          width: "40px", height: "40px", borderRadius: "50%",
                          background: service.color, color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 700, fontSize: "0.95rem", flexShrink: 0,
                          boxShadow: `0 4px 12px -4px ${service.color}50`,
                          position: "relative", zIndex: 1,
                        }}>
                          {i + 1}
                        </div>
                        <div style={{ paddingTop: "4px" }}>
                          <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--serif)", marginBottom: "6px", color: "var(--ink)" }}>{step.title}</h3>
                          <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div style={{
                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}CC 100%)`,
                  borderRadius: "20px",
                  padding: "36px 40px",
                  color: "#fff",
                  boxShadow: `0 12px 32px -12px ${service.color}50`,
                }}>
                  <h2 style={{
                    fontSize: "1.4rem", fontFamily: "var(--serif)", marginBottom: "16px",
                    display: "flex", alignItems: "center", gap: "12px",
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Our Impact
                  </h2>
                  <p style={{ lineHeight: 1.85, fontSize: "1rem", opacity: 0.92 }}>{service.impact}</p>
                </div>

                {/* Photo Gallery */}
                {service.gallery && service.gallery.length > 0 && (
                  <div style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "36px 40px",
                    marginTop: "30px",
                    boxShadow: "0 4px 20px rgba(0,0,0,.04)",
                  }}>
                    <h2 style={{
                      fontSize: "1.4rem", fontFamily: "var(--serif)", marginBottom: "20px",
                      display: "flex", alignItems: "center", gap: "12px", color: "var(--ink)",
                    }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        background: service.colorBg, color: service.color,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      Photo Gallery
                    </h2>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                      gap: "16px"
                    }}>
                      {service.gallery.map((img, i) => (
                        <div key={i} style={{
                          aspectRatio: "1/1",
                          borderRadius: "12px",
                          overflow: "hidden",
                          background: "var(--cream)",
                          border: "1px solid var(--line)",
                        }}>
                          <img src={img} alt={`Gallery image ${i + 1}`} loading="lazy" style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
                          }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div>
                {/* Key Highlights */}
                <div style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "30px",
                  marginBottom: "24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,.04)",
                  border: `1px solid ${service.color}12`,
                }}>
                  <h3 style={{
                    fontSize: "1.1rem", fontFamily: "var(--serif)", marginBottom: "18px",
                    display: "flex", alignItems: "center", gap: "10px", color: "var(--ink)",
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Key Highlights
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {service.highlights.map((h, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        padding: "12px 14px",
                        background: service.colorBg,
                        borderRadius: "10px",
                        borderLeft: `3px solid ${service.color}`,
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "3px", flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ fontSize: "0.88rem", color: "var(--ink)", lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support CTA */}
                <div style={{
                  background: "var(--pine-deep)",
                  borderRadius: "20px",
                  padding: "30px",
                  marginBottom: "24px",
                  color: "#fff",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontSize: "1.2rem", fontFamily: "var(--serif)", marginBottom: "10px" }}>Support This Cause</h3>
                  <p style={{ fontSize: "0.88rem", opacity: 0.8, lineHeight: 1.6, marginBottom: "20px" }}>
                    Your contribution makes a real difference. Every rupee helps us serve more families.
                  </p>
                  <Link href="/contact" className="btn btn-amber" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "14px 28px", fontSize: "0.95rem", width: "100%", justifyContent: "center",
                  }}>
                    Get Involved
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Other Services */}
                <div style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 4px 20px rgba(0,0,0,.04)",
                }}>
                  <h3 style={{
                    fontSize: "1.1rem", fontFamily: "var(--serif)", marginBottom: "18px",
                    color: "var(--ink)",
                  }}>Other Services</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        style={{
                          display: "flex", alignItems: "center", gap: "12px",
                          padding: "12px 14px",
                          background: "var(--cream)",
                          borderRadius: "12px",
                          transition: "all 0.2s ease",
                        }}
                        className="other-svc-link"
                      >
                        <div style={{
                          width: "38px", height: "38px", borderRadius: "10px",
                          background: s.colorBg, color: s.color,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <ServiceIcon path={s.iconPath} size={18} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--ink)" }}>{s.title}</div>
                          <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{s.subtitle}</div>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <Link href="/services" style={{
                    display: "block", textAlign: "center", marginTop: "16px",
                    fontSize: "0.88rem", fontWeight: 600, color: "var(--green)",
                  }}>
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Prev / Next Navigation */}
            <div style={{
              display: "grid",
              gridTemplateColumns: prevService && nextService ? "1fr 1fr" : "1fr",
              gap: "20px",
              marginTop: "50px",
            }}>
              {prevService && (
                <Link href={`/services/${prevService.id}`} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: "#fff", borderRadius: "16px", padding: "24px 28px",
                  boxShadow: "0 4px 16px rgba(0,0,0,.05)",
                  transition: "all 0.2s ease",
                  border: "1px solid transparent",
                }} className="prev-next-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Previous Service</div>
                    <div style={{ fontSize: "1.05rem", fontFamily: "var(--serif)", fontWeight: 600, color: "var(--ink)" }}>{prevService.title}</div>
                  </div>
                </Link>
              )}
              {nextService && (
                <Link href={`/services/${nextService.id}`} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: "#fff", borderRadius: "16px", padding: "24px 28px",
                  boxShadow: "0 4px 16px rgba(0,0,0,.05)",
                  transition: "all 0.2s ease",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  border: "1px solid transparent",
                }} className="prev-next-link">
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Next Service</div>
                    <div style={{ fontSize: "1.05rem", fontFamily: "var(--serif)", fontWeight: 600, color: "var(--ink)" }}>{nextService.title}</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* BACK TO SERVICES CTA */}
        <section style={{ padding: "60px 0 80px", background: "var(--pine-deep)", color: "white", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "2rem", fontFamily: "var(--serif)", marginBottom: "14px" }}>Explore All Our Services</h2>
            <p style={{ fontSize: "1.05rem", opacity: 0.8, maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.7 }}>
              See the full range of services KWS provides to the community.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/services" className="btn btn-amber" style={{ padding: "14px 32px", fontSize: "1rem" }}>
                All Services
              </Link>
              <Link href="/contact" className="btn btn-ghost" style={{ padding: "14px 32px", fontSize: "1rem", borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <Link href="/" className="brand">
                <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
                <span className="brand-text">
                  <span className="brand-name" style={{ color: '#fff' }}>Khurram Welfare Society</span>
                  <span className="brand-sub">Serving Humanity Since 2012</span>
                </span>
              </Link>
              <p>Serving humanity without difference of religion, creed or caste.</p>
              <div className="foot-social">
                <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a>
                <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
              </div>
            </div>
            <div className="foot-col"><h4>Our Work</h4><Link href="/services/clean-water">Clean Water</Link><Link href="/services/education">Education</Link><Link href="/services/health">Health</Link><Link href="/services/welfare">Welfare</Link><Link href="/services/blood-donation">Blood Donation</Link></div>
            <div className="foot-col"><h4>Get Involved</h4><Link href="/contact">Donate Now</Link><Link href="/contact">Volunteer</Link><Link href="/membership">Become a Member</Link><Link href="/contact">Contact Us</Link></div>
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: '12px' }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
          </div>
          <div className="foot-bot">
            <div>&copy; {new Date().getFullYear()} Khurram Welfare Society. All rights reserved.</div>
            <div className="fb-links"><Link href="/">Privacy Policy</Link><Link href="/">Terms of Service</Link></div>
          </div>
        </div>
      </footer>
      <style>{`
        .other-svc-link:hover { background: ${service.colorBg} !important; transform: translateX(4px); }
        .prev-next-link:hover { border-color: var(--line) !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.08) !important; }
        @media(max-width: 900px) {
          .svc-detail-layout { grid-template-columns: 1fr !important; }
        }
        @media(max-width: 600px) {
          .svc-detail-layout > div:first-child > div { padding: 24px 20px !important; }
          .svc-detail-layout > div:last-child > div { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}
