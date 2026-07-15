"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sports() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          background: "linear-gradient(135deg, #1A365D 0%, #2A4365 100%)",
          color: "white",
          textAlign: "center"
        }}>
          {/* decorative athletic lines */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: "linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -150, right: -100, width: 400, height: 400, borderRadius: "50%", border: "40px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />

          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <span className="eyebrow light" style={{ justifyContent: "center", color: "var(--amber)" }}>KWS Sports Wing</span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#fff", margin: "16px 0", lineHeight: 1.1 }}>
              Nurturing Talent.<br />Building Character.
            </h1>
            <p className="lead" style={{ margin: "0 auto", maxWidth: 700, color: "rgba(255,255,255,0.85)", fontSize: "1.2rem" }}>
              We believe that sports are essential for a healthy community. Our sports initiatives bring the youth of Khurram Hithar together, promoting fitness, discipline, and teamwork through local tournaments and events.
            </p>
          </div>
        </div>

        {/* STATS STRIP */}
        <div style={{ background: "var(--amber)", color: "var(--ink)", padding: "40px 0", marginTop: "-30px", position: "relative", zIndex: 10 }} className="stats-strip">
          <div className="wrap stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "30px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>10+</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Tournaments Hosted</div>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>300+</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Athletes Engaged</div>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>5</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Active Teams</div>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>1</div>
              <div style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 5, fontSize: "0.9rem" }}>Local Ground Upgraded</div>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <section style={{ padding: "100px 0", background: "#fff" }} className="mission-sec">
          <div className="wrap sports-mission" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span className="eyebrow">Our Vision</span>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", lineHeight: 1.2 }}>Channeling youth energy into <em style={{ color: "var(--green)" }}>positive action.</em></h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: "20px" }}>
                In rural communities, youth often lack access to structured recreational activities. Khurram Welfare Society recognizes that an active youth is the foundation of a progressive society.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: "30px" }}>
                By organizing cricket, football, and kabaddi tournaments, we provide a safe, competitive environment where local talent can shine, keeping the younger generation away from negative influences and fostering a spirit of brotherhood.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                <li style={{ display: "flex", gap: "15px", alignItems: "center", fontSize: "1.1rem", fontWeight: 500 }}>
                  <div style={{ background: "rgba(76,175,136,.1)", color: "var(--green)", padding: "8px", borderRadius: "50%" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  Promoting physical and mental health
                </li>
                <li style={{ display: "flex", gap: "15px", alignItems: "center", fontSize: "1.1rem", fontWeight: 500 }}>
                  <div style={{ background: "rgba(76,175,136,.1)", color: "var(--green)", padding: "8px", borderRadius: "50%" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  Discovering local athletic talent
                </li>
                <li style={{ display: "flex", gap: "15px", alignItems: "center", fontSize: "1.1rem", fontWeight: 500 }}>
                  <div style={{ background: "rgba(76,175,136,.1)", color: "var(--green)", padding: "8px", borderRadius: "50%" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  Providing kits and sports equipment to teams
                </li>
              </ul>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ background: "var(--cream)", borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "var(--shadow-soft)" }}>
                <img src="/sports.jpg" alt="KWS Sports Event" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: -20, left: -20, background: "var(--green)", color: "#fff", padding: "20px", borderRadius: "16px", boxShadow: "var(--shadow-lift)" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>KWS Super League</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>Annual Tape Ball Cricket</div>
              </div>
            </div>
          </div>
        </section>

        {/* SPORTS WE SUPPORT */}
        <section style={{ padding: "100px 0", background: "var(--cream-2)" }}>
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow" style={{ justifyContent: "center" }}>Activities</span>
              <h2 className="h-sec">Sports we <em>actively support.</em></h2>
            </div>
            <div className="sports-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px" }}>

              {/* Cricket */}
              <div style={{ background: "#fff", borderRadius: "20px", padding: "40px 30px", textAlign: "center", boxShadow: "var(--shadow-soft)", transition: "transform 0.3s ease" }} className="hover-lift">
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(232,163,61,.1)", color: "var(--amber)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Tape Ball Cricket</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>The heartbeat of Pakistan. We organize grand tape ball tournaments with cash prizes, trophies, and proper umpiring to bring out the best local cricketers.</p>
              </div>

              {/* Kabaddi */}
              <div style={{ background: "#fff", borderRadius: "20px", padding: "40px 30px", textAlign: "center", boxShadow: "var(--shadow-soft)", transition: "transform 0.3s ease" }} className="hover-lift">
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(76,175,136,.1)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Volly Ball</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Preserving our cultural heritage. We sponsor local Kabaddi matches and support athletes with nutrition and training gear to compete at higher levels.</p>
              </div>

              {/* Football */}
              <div style={{ background: "#fff", borderRadius: "20px", padding: "40px 30px", textAlign: "center", boxShadow: "var(--shadow-soft)", transition: "transform 0.3s ease" }} className="hover-lift">
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(42,67,101,.1)", color: "#2A4365", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Badminton</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Growing the beautiful game in Kasur. We provide footballs, goal nets, and organize local league matches to keep the youth engaged in team sports.</p>
              </div>

            </div>
          </div>
        </section>

        {/* LEGEND PLAYERS */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow" style={{ justifyContent: "center" }}>Our Stars</span>
              <h2 className="h-sec"><em>Sports Legends.</em></h2>
              <p className="lead" style={{ margin: "0 auto", maxWidth: "600px" }}>Celebrating the outstanding athletes who have brought pride to Khurram Hithar through their dedication to sports.</p>
            </div>

            <div className="legends-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "20px", marginTop: "40px" }}>
              {/* Player 1 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/Nadeem ND.png" alt="M Nadeem ND" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>M Nadeem ND</h3>
                  <div style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 2 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/usman tufail.png" alt="Usman Tufail" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Usman Tufail</h3>
                  <div style={{ color: "var(--amber)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 3 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/ashfaq.png" alt="Ashfaq Aslam" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Ashfaq Aslam</h3>
                  <div style={{ color: "var(--pine)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 4 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/farakh sohail.png" alt="Farakh Sohail Rabbani" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Farakh Sohail Rabbani</h3>
                  <div style={{ color: "var(--pine)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 5 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/ahmad waqas.png" alt="Ahmad Waqas" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Ahmad Waqas</h3>
                  <div style={{ color: "var(--amber)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 6 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/masab.png" alt="Masab" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Masab Khalil</h3>
                  <div style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>

              {/* Player 7 */}
              <div style={{ background: "var(--cream)", borderRadius: "16px", overflow: "hidden", textAlign: "center", boxShadow: "var(--shadow-soft)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src="/qaisar.png" alt="Qaisar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ padding: "12px 10px" }}>
                  <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px 0", lineHeight: 1.2 }}>Qaisar Ramzan</h3>
                  <div style={{ color: "var(--pine)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 0.5 }}>Cricket</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "var(--pine-deep)", color: "white", textAlign: "center" }} className="cta-sec">
          <div className="wrap">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Want to organize a tournament?</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "600px", margin: "0 auto 30px" }}>If you have a team or want to propose a sports event in your area, reach out to us. We are always looking to sponsor and support local sports initiatives.</p>
            <Link href="/contact" className="btn btn-amber" style={{ padding: "16px 40px", fontSize: "1.1rem" }}>Contact Us to Collaborate</Link>
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
              <div className="foot-social">
                <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a>
                <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
              </div>
            </div>
            <div className="foot-col"><h4>Our Work</h4><Link href="/projects">Clean Water</Link><Link href="/projects">Education</Link><Link href="/projects">Health</Link><Link href="/projects">Welfare</Link><Link href="/projects">Blood Donation</Link></div>
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
        .hover-lift:hover { transform: translateY(-8px); }
        @media(max-width: 860px) {
          .sports-mission { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media(max-width: 600px) {
          .mission-sec, .cta-sec { padding: 60px 0 !important; }
          .stats-strip { padding: 30px 0 !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .stats-grid > div > div:first-child { font-size: 2.2rem !important; }
          .sports-grid { grid-template-columns: 1fr !important; }
          .legends-grid { grid-template-columns: 1fr 1fr !important; gap: 15px !important; }
        }
      `}</style>
    </div>
  );
}
