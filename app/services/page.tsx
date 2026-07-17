"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "./data";

function ServiceIcon({ path, size = 32 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

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

        {/* HERO SECTION */}
        <div style={{
          position: "relative", overflow: "hidden", padding: "120px 0 100px",
          background: "linear-gradient(135deg, var(--pine-deep) 0%, var(--pine) 50%, var(--green) 100%)",
          color: "white", textAlign: "center",
        }}>
          {/* Background decoration */}
          <div style={{
            position: "absolute", top: "-50%", right: "-20%", width: "600px", height: "600px",
            borderRadius: "50%", background: "rgba(232,163,61,.08)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-30%", left: "-10%", width: "400px", height: "400px",
            borderRadius: "50%", background: "rgba(76,175,136,.1)", pointerEvents: "none",
          }} />
          <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
            <span className="eyebrow light" style={{ justifyContent: "center", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              What we do for the community
            </span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontFamily: "var(--serif)", marginBottom: "20px", fontWeight: 700 }}>
              Our <em style={{ color: "var(--amber)" }}>Services</em>
            </h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.85, maxWidth: "700px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              From clean water to education, healthcare to street lights — we serve the community across 8 major focus areas, driven entirely by volunteers and local donations.
            </p>
            <div style={{
              display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap",
            }}>
              {[
                { num: "8", label: "Service Areas" },
                { num: "110+", label: "Projects Done" },
                { num: "2014", label: "Since" },
                { num: "100%", label: "Volunteer Led" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--serif)", color: "var(--amber)" }}>{s.num}</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES OVERVIEW GRID */}
        <section style={{ padding: "80px 0 40px" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Explore our services</span>
              <h2 className="h-sec" style={{ marginBottom: "12px" }}>Areas where we <em>serve.</em></h2>
              <p className="lead" style={{ margin: "0 auto", maxWidth: "600px" }}>
                Click on any service below to see a quick overview, or visit the detail page for the full story.
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "60px",
            }}>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    toggleService(service.id);
                    setTimeout(() => {
                      const el = document.getElementById(`service-detail-${service.id}`);
                      if (el && activeService !== service.id) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                  style={{
                    background: activeService === service.id ? service.colorBg : "#fff",
                    border: activeService === service.id ? `2px solid ${service.color}` : "2px solid transparent",
                    borderRadius: "16px",
                    padding: "28px 22px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: activeService === service.id ? `0 8px 30px -10px ${service.color}40` : "var(--shadow-soft)",
                    transform: activeService === service.id ? "translateY(-4px)" : "none",
                  }}
                  className="hover-lift-svc"
                >
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    background: service.colorBg, color: service.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                    transition: "all 0.3s ease",
                  }}>
                    <ServiceIcon path={service.iconPath} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--serif)", marginBottom: "6px", color: "var(--ink)" }}>{service.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>{service.subtitle}</p>
                  <div style={{
                    marginTop: "14px",
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "0.8rem", fontWeight: 600, color: service.color,
                    textTransform: "uppercase", letterSpacing: "0.5px",
                  }}>
                    {activeService === service.id ? "Hide Details" : "View Details"}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: activeService === service.id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE DETAIL DROPDOWNS */}
        <section style={{ paddingBottom: "80px" }}>
          <div className="wrap">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                style={{
                  maxHeight: activeService === service.id ? "2000px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, margin 0.4s ease",
                  opacity: activeService === service.id ? 1 : 0,
                  marginBottom: activeService === service.id ? "30px" : "0",
                }}
              >
                <div style={{
                  background: "#fff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px -20px rgba(20,80,60,.15)",
                  border: `1px solid ${service.color}20`,
                }}>
                  {/* Detail Header */}
                  <div style={{
                    padding: "40px 40px 30px",
                    background: `linear-gradient(135deg, ${service.colorBg} 0%, transparent 100%)`,
                    borderBottom: `1px solid ${service.color}15`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                      <div style={{
                        width: "72px", height: "72px", borderRadius: "18px",
                        background: service.colorBg, color: service.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <ServiceIcon path={service.iconPath} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: "1.8rem", fontFamily: "var(--serif)", marginBottom: "6px", color: "var(--ink)" }}>{service.title}</h2>
                        <p style={{ color: "var(--muted)", fontSize: "1rem", margin: 0 }}>{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div style={{
                      display: "flex", gap: "30px", marginTop: "28px", flexWrap: "wrap",
                    }}>
                      {service.stats.map((stat) => (
                        <div key={stat.label} style={{
                          background: "#fff",
                          borderRadius: "12px",
                          padding: "16px 24px",
                          textAlign: "center",
                          minWidth: "120px",
                          boxShadow: "0 2px 8px rgba(0,0,0,.06)",
                        }}>
                          <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--serif)", color: service.color }}>{stat.value}</div>
                          <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "2px" }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detail Body */}
                  <div style={{ padding: "35px 40px 40px" }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "40px",
                    }} className="svc-detail-grid">

                      {/* Description */}
                      <div>
                        <h3 style={{
                          fontSize: "1.1rem", fontFamily: "var(--serif)", marginBottom: "16px",
                          display: "flex", alignItems: "center", gap: "10px", color: "var(--ink)",
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                          </svg>
                          About This Service
                        </h3>
                        {service.description.map((para, i) => (
                          <p key={i} style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "14px", fontSize: "0.95rem" }}>{para}</p>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 style={{
                          fontSize: "1.1rem", fontFamily: "var(--serif)", marginBottom: "16px",
                          display: "flex", alignItems: "center", gap: "10px", color: "var(--ink)",
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          Key Highlights
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          {service.highlights.map((highlight, i) => (
                            <div key={i} style={{
                              display: "flex", alignItems: "flex-start", gap: "12px",
                              padding: "14px 18px",
                              background: service.colorBg,
                              borderRadius: "12px",
                              borderLeft: `3px solid ${service.color}`,
                            }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span style={{ fontSize: "0.92rem", color: "var(--ink)", lineHeight: 1.5 }}>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                          <Link href={`/services/${service.id}`} className="btn btn-amber" style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "14px 28px", fontSize: "0.95rem",
                          }}>
                            Read Full Details
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                          <Link href="/contact" className="btn btn-ghost" style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "14px 28px", fontSize: "0.95rem",
                          }}>
                            Support This Cause
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ padding: "80px 0", background: "var(--pine-deep)", color: "white", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--serif)", marginBottom: "20px" }}>Want to contribute?</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto 30px", lineHeight: 1.7 }}>
              Every contribution, big or small, goes directly to the people who need it most. Join us in making a difference.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-amber" style={{ padding: "16px 40px", fontSize: "1.1rem" }}>
                Get in Touch
              </Link>
              <Link href="/membership" className="btn btn-ghost" style={{ padding: "16px 40px", fontSize: "1.1rem", borderColor: "rgba(255,255,255,.3)", color: "#fff" }}>
                Become a Member
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
        .hover-lift-svc:hover { transform: translateY(-6px) !important; box-shadow: 0 16px 40px -12px rgba(20,80,60,.2) !important; }
        .hover-lift-svc:focus-visible { outline: 2px solid var(--amber); outline-offset: 2px; }
        @media(max-width: 768px) {
          .svc-detail-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
        @media(max-width: 600px) {
          .svc-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
