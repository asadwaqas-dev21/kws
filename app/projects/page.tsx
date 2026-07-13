"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Projects() {
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

      <main style={{ flexGrow: 1 }}>
        
        {/* HERO SECTION */}
        <div style={{
          position: "relative", overflow: "hidden", padding: "100px 0 80px",
          background: "linear-gradient(160deg, var(--pine) 0%, var(--pine-deep) 100%)",
          color: "white",
          textAlign: "center"
        }}>
          {/* decorative orbs */}
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,61,.15), transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,175,136,.15), transparent 65%)", pointerEvents: "none" }} />
          
          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <span className="eyebrow light" style={{ justifyContent: "center" }}>What We Do</span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#fff", margin: "16px 0", lineHeight: 1.1 }}>
              Impacting lives, one <em>project</em> at a time.
            </h1>
            <p className="lead" style={{ margin: "0 auto", maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
              From a clean glass of water to a child's first classroom — our projects are designed to meet people at their point of deepest need. Explore our ongoing and completed initiatives.
            </p>
          </div>
        </div>

        {/* IMPACT STRIP */}
        <div className="impact">
          <div className="wrap">
            <div className="impact-grid">
              <div className="impact-item"><div className="i-num"><span className="countup" data-target="43">43</span></div><div className="i-lbl">Street Lights Installed</div></div>
              <div className="impact-item"><div className="i-num"><span className="countup" data-target="45">45</span></div><div className="i-lbl">Water Hand Pumps</div></div>
              <div className="impact-item"><div className="i-num"><span className="countup" data-target="2">2</span></div><div className="i-lbl">Water Filtration Plants</div></div>
              <div className="impact-item"><div className="i-num"><span className="countup" data-target="20">20</span></div><div className="i-lbl">Social Welfare Projects</div></div>
            </div>
          </div>
        </div>

        {/* FOCUS AREAS */}
        <section className="focus" style={{ paddingTop: "80px", paddingBottom: "100px", background: "#fff" }}>
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Focus Areas</span>
              <h2 className="h-sec">The areas where we <em>make a difference.</em></h2>
            </div>
            <div className="focus-grid">
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12z" /></svg></div><h3>Clean Water</h3><p>Hand pumps and filtration plants delivering safe drinking water to villages.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg></div><h3>Education</h3><p>Supporting schooling, supplies, and opportunity for every child.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>Health</h3><p>Medical assistance and care for those who cannot afford it.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M12 8a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z" /><circle cx="12" cy="5" r="1" /></svg></div><h3>Street Lights</h3><p>Lighting up streets to keep neighbourhoods safe after dark.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8v13H4V8" /><path d="M2 3h20l-2 5H4z" /><path d="M10 12h4" /></svg></div><h3>Muqada Work Boxes</h3><p>Community donation boxes that keep local relief running year-round.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A3.5 3.5 0 0 0 12 6a3.5 3.5 0 0 0-10 2.5C2 10.7 3.5 12.5 5 14l7 7z" /></svg></div><h3>Welfare</h3><p>Rations, marriages, and emergency help for families in hardship.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z" /></svg></div><h3>Blood Donation</h3><p>Connecting donors with patients in urgent need of blood.</p></div>
              <div className="fcard"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" /></svg></div><h3>Sports</h3><p>Encouraging youth through community sports and talent events.</p></div>
            </div>
          </div>
        </section>

        {/* ONGOING CAMPAIGNS */}
        <section id="causes" style={{ background: "var(--cream)", paddingTop: "80px", paddingBottom: "120px" }}>
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Give with purpose</span>
              <h2 className="h-sec">Fund our <em>active campaigns.</em></h2>
              <p className="lead" style={{ margin: '0 auto' }}>Every contribution goes directly to families who need it. Pick a cause below and be the reason someone smiles today.</p>
            </div>
            <div className="causes-grid">
              <div className="cause">
                <div className="cause-img"><span className="cause-chip">Clean Water</span><img src="/handpump.jpg" alt="Hand pump" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
                <div className="cause-body">
                  <h3>Donate One Hand Pump</h3>
                  <div className="cause-meta"><span className="goal">Goal <b>PKR 55,000</b></span><span className="goal">Raised PKR 0</span></div>
                  <div className="track"><span></span></div>
                  <div className="cause-note">Be the first to fund this pump →</div>
                  <Link href="/contact" className="btn btn-green">Donate Now</Link>
                </div>
              </div>
              <div className="cause">
                <div className="cause-img"><span className="cause-chip">Welfare</span><img src="/welfare.jpg" alt="Monthly rashan" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
                <div className="cause-body">
                  <h3>One Family Monthly Rashan</h3>
                  <div className="cause-meta"><span className="goal">Goal <b>PKR 11,000</b></span><span className="goal">Raised PKR 0</span></div>
                  <div className="track"><span></span></div>
                  <div className="cause-note">Feed a family for a whole month →</div>
                  <Link href="/contact" className="btn btn-green">Donate Now</Link>
                </div>
              </div>
              <div className="cause">
                <div className="cause-img"><span className="cause-chip">Welfare</span><img src="/welfare2.jpg" alt="Sponsor a marriage" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
                <div className="cause-body">
                  <h3>Sponsor One Marriage</h3>
                  <div className="cause-meta"><span className="goal">Goal <b>PKR 50,000</b></span><span className="goal">Raised PKR 0</span></div>
                  <div className="track"><span></span></div>
                  <div className="cause-note">Help a family celebrate with dignity →</div>
                  <Link href="/contact" className="btn btn-green">Donate Now</Link>
                </div>
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
    </div>
  );
}
