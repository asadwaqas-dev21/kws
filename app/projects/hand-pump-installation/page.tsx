"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CaseStudyPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <span className="brand-sub">Serving Humanity Since 2014</span>
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
                <Link href="/services/clean-water" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(47,143,107,.1)", color: "#2F8F6B" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Clean Water</span><span className="nav-dd-sub">Hand pumps & filtration</span></div></Link>
                <Link href="/services/education" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(232,163,61,.1)", color: "#CE8A1F" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10L12 5 2 10l10 5 10-5z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Education</span><span className="nav-dd-sub">Scholarships & supplies</span></div></Link>
                <Link href="/services/health" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(232,93,93,.1)", color: "#E85D5D" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Health & Medical</span><span className="nav-dd-sub">Free camps & aid</span></div></Link>
                <Link href="/services/street-lights" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(206,138,31,.1)", color: "#CE8A1F" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6M12 8a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Street Lights</span><span className="nav-dd-sub">43+ lights installed</span></div></Link>
                <Link href="/services/welfare" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(20,80,60,.1)", color: "#14503C" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Social Welfare</span><span className="nav-dd-sub">Rations & relief</span></div></Link>
                <Link href="/services/blood-donation" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(192,57,43,.1)", color: "#C0392B" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Blood Donation</span><span className="nav-dd-sub">Donor network</span></div></Link>
                <Link href="/services/muqada-boxes" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(142,68,173,.1)", color: "#8E44AD" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8v13H4V8" /><path d="M2 3h20l-2 5H4z" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Muqada Boxes</span><span className="nav-dd-sub">Community giving</span></div></Link>
                <Link href="/services/sports" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{ background: "rgba(41,128,185,.1)", color: "#2980B9" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Sports & Youth</span><span className="nav-dd-sub">Tournaments & events</span></div></Link>
                <div className="nav-dd-sep" />
                <Link href="/services" className="nav-dd-viewall" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}>View All Services →</Link>
              </div>
            </div>
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

      <main style={{ flexGrow: 1, background: "var(--cream)" }}>

        {/* HERO SECTION */}
        <div style={{
          position: "relative", overflow: "hidden", padding: "120px 0 100px",
          background: "linear-gradient(135deg, #2F8F6B 0%, #14503C 100%)",
          color: "white",
          textAlign: "center"
        }}>
          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <span className="eyebrow light" style={{ justifyContent: "center", color: "var(--amber)" }}>Project Case Study</span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#fff", margin: "16px 0", lineHeight: 1.1 }}>
              Hand Pump Installation in Kasur
            </h1>
            <p className="lead" style={{ margin: "0 auto", maxWidth: 700, color: "rgba(255,255,255,0.85)", fontSize: "1.2rem" }}>
              Providing safe and clean drinking water to over 50 families in Khurram Hithar.
            </p>
          </div>
        </div>

        {/* DETAILS STRIP */}
        <div style={{ background: "var(--cream-2)", color: "var(--ink)", padding: "40px 0", borderBottom: "1px solid var(--line)", position: "relative", zIndex: 10 }}>
          <div className="wrap stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "30px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: 1, color: "var(--green)" }}>PKR 55,000</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Project Cost</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: 1, color: "var(--green)" }}>50+</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Families Served</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: 1, color: "var(--green)" }}>May 2024</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Completed Date</div>
            </div>
          </div>
        </div>

        {/* CASE STUDY CONTENT */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--ink)" }}>The Challenge</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "40px" }}>
              In many parts of Kasur, rural communities struggle to access clean drinking water. Families often have to walk long distances to fetch water from open wells or contaminated streams, leading to a high rate of waterborne illnesses such as cholera, typhoid, and hepatitis. 
            </p>

            <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--ink)" }}>Our Solution</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "40px" }}>
              Khurram Welfare Society initiated a project to install a heavy-duty hand pump in the heart of a severely affected neighborhood in Khurram Hithar. After conducting a thorough geographical assessment to find the optimal water table, our trained technicians successfully bored a well and installed a durable hand pump mechanism designed to last for over a decade.
            </p>

            <div style={{ background: "var(--cream)", padding: "30px", borderRadius: "16px", marginBottom: "40px", borderLeft: "4px solid var(--green)" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "var(--ink)" }}>Project Impact</h3>
              <ul style={{ paddingLeft: "20px", lineHeight: 1.8, color: "var(--muted)", fontSize: "1.05rem" }}>
                <li>Provided immediate access to clean drinking water for over 50 households.</li>
                <li>Significantly reduced the incidence of waterborne diseases in the area.</li>
                <li>Saved women and children an average of 2 hours daily previously spent fetching water.</li>
              </ul>
            </div>

            <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--ink)" }}>Photo Documentation</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {/* Placeholders for actual project photos */}
              <div style={{ background: "var(--cream-2)", borderRadius: "12px", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>
                Installation Photo 1
              </div>
              <div style={{ background: "var(--cream-2)", borderRadius: "12px", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>
                Installation Photo 2
              </div>
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
                  <span className="brand-sub">Serving Humanity Since 2014</span>
                </span>
              </Link>
              <p>Serving humanity without difference of religion, creed or caste.</p>
            </div>
            <div className="foot-col"><h4>Our Work</h4><Link href="/projects">Clean Water</Link><Link href="/projects">Education</Link><Link href="/projects">Health</Link><Link href="/projects">Welfare</Link><Link href="/projects">Blood Donation</Link></div>
            <div className="foot-col"><h4>Get Involved</h4><Link href="/contact">Donate Now</Link><Link href="/contact">Volunteer</Link><Link href="/membership">Become a Member</Link><Link href="/contact">Contact Us</Link></div>
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: '12px' }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
          </div>
          <div className="foot-bot">
            <div>&copy; {new Date().getFullYear()} Khurram Welfare Society. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
