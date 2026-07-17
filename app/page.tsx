"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendContactMessage } from "./actions";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendContactMessage(formData);
      if (result.success) {
        setFormSuccess(true);
      } else {
        setFormError(result.message);
      }
    });
  };

  return (
    <>
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
          <a href="#top" className="brand" aria-label="Khurram Welfare Society home">
            <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
            <span className="brand-text">
              <span className="brand-name">Khurram Welfare Society</span>
              <span className="brand-sub">Serving Humanity Since 2012</span>
            </span>
          </a>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/projects" className={pathname === "/projects" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <a href="/team" className={pathname === "/team" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>About</a>
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
            <a href="/legends" className={pathname === "/legends" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Legends</a>
            <a href="/directory" className={pathname === "/directory" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Directory</a>
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

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Welfare for all — no exceptions</span>
            <h1>Serving humanity, <em>without difference</em> of creed or caste.</h1>
            <p className="lead">Khurram Welfare Society brings clean water, education, healthcare, and dignity to underprivileged families across Kasur — and empowers communities to stand on their own.</p>
            <div className="hero-actions">
              <a href="#causes" className="btn btn-amber hero-donate-btn">Donate Now <span className="arrow">→</span></a>
              <Link href="/membership" className="btn btn-amber hero-member-btn">Apply for membership <span className="arrow">→</span></Link>
              <a href="#focus" className="btn btn-ghost">Our Projects</a>
            </div>
            <div className="hero-mini">
              <div><div className="m-num">2014</div><div className="m-lbl">Serving since</div></div>
              <div><div className="m-num">110<span style={{ color: 'var(--amber)' }}>+</span></div><div className="m-lbl">Projects completed</div></div>
              <div><div className="m-num">100%</div><div className="m-lbl">Volunteer-led</div></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-photo">
              <img src="/WhatsApp%20Image%202025-10-23%20at%2011.12.57_f540042f.jpg" alt="KWS community work" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="hero-badge b1">
              <div className="hb-ic g"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3A5 5 0 1 1 12 8a5 5 0 0 1 5 8.3" /><path d="M12 22V12" /></svg></div>
              <div><div className="hb-num">45</div><div className="hb-lbl">Water hand pumps</div></div>
            </div>
            <div className="hero-badge b2">
              <div className="hb-ic a"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg></div>
              <div><div className="hb-num">Education</div><div className="hb-lbl">for every child</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <div className="impact">
        <div className="wrap">
          <div className="impact-grid">
            <div className="impact-item reveal in"><div className="i-num"><span className="countup" data-target="43">43</span></div><div className="i-lbl">Street Lights Installed</div></div>
            <div className="impact-item reveal in"><div className="i-num"><span className="countup" data-target="45">45</span></div><div className="i-lbl">Water Hand Pumps</div></div>
            <div className="impact-item reveal in"><div className="i-num"><span className="countup" data-target="2">2</span></div><div className="i-lbl">Water Filtration Plants</div></div>
            <div className="impact-item reveal in"><div className="i-num"><span className="countup" data-target="20">20</span></div><div className="i-lbl">Social Welfare Projects</div></div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap about-grid">
          <div className="about-photo reveal in">
            <img src="/511953349_24746508848284362_7795780151817311534_n.jpg" alt="KWS helping the community" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="about-tag">Compassion in action</div>
          </div>
          <div className="reveal in">
            <span className="eyebrow">About the society</span>
            <h2 className="h-sec">A community built on <em>service and hope.</em></h2>
            <p className="lead">Khurram Welfare Society is a non-profit dedicated to serving humanity through social welfare, education, and community support. We uplift underprivileged families, promote learning, provide healthcare assistance, and empower people to build a self-reliant future.</p>
            <div className="about-points">
              <div className="ap"><div className="ap-ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div><div><b>For everyone</b><span>No difference of religion, creed or caste.</span></div></div>
              <div className="ap"><div className="ap-ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg></div><div><b>Volunteer-led</b><span>Powered by people who care.</span></div></div>
              <div className="ap"><div className="ap-ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg></div><div><b>Local &amp; direct</b><span>Every rupee reaches the ground.</span></div></div>
              <div className="ap"><div className="ap-ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div><div><b>Transparent</b><span>Open about where help goes.</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="focus" id="focus">
        <div className="wrap">
          <div className="sec-head center reveal in">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What we do</span>
            <h2 className="h-sec">The areas where we <em>make a difference.</em></h2>
            <p className="lead" style={{ margin: '0 auto' }}>From a clean glass of water to a child's first classroom — our projects meet people at their point of need.</p>
          </div>
          <div className="focus-grid">
            <Link href="/services/clean-water" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12z" /></svg></div><h3>Clean Water</h3><p>Hand pumps and filtration plants delivering safe drinking water to villages.</p></Link>
            <Link href="/services/education" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg></div><h3>Education</h3><p>Supporting schooling, supplies, and opportunity for every child.</p></Link>
            <Link href="/services/health" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>Health</h3><p>Medical assistance and care for those who cannot afford it.</p></Link>
            <Link href="/services/street-lights" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M12 8a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z" /><circle cx="12" cy="5" r="1" /></svg></div><h3>Street Lights</h3><p>Lighting up streets to keep neighbourhoods safe after dark.</p></Link>
            <Link href="/services/muqada-boxes" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8v13H4V8" /><path d="M2 3h20l-2 5H4z" /><path d="M10 12h4" /></svg></div><h3>Muqada Work Boxes</h3><p>Community donation boxes that keep local relief running year-round.</p></Link>
            <Link href="/services/welfare" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A3.5 3.5 0 0 0 12 6a3.5 3.5 0 0 0-10 2.5C2 10.7 3.5 12.5 5 14l7 7z" /></svg></div><h3>Welfare</h3><p>Rations, marriages, and emergency help for families in hardship.</p></Link>
            <Link href="/services/blood-donation" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z" /></svg></div><h3>Blood Donation</h3><p>Connecting donors with patients in urgent need of blood.</p></Link>
            <Link href="/services/sports" className="fcard reveal in"><div className="fcard-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" /></svg></div><h3>Sports</h3><p>Encouraging youth through community sports and talent events.</p></Link>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder">
        <div className="wrap founder-grid">
          <div className="founder-photo reveal in">
            <img src="/founder.jpg" alt="Hafiz Abdul Ghaffar Kamboh, Founder" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div className="reveal in">
            <span className="eyebrow light">Message of the founder</span>
            <h2>Hafiz Abdul Ghaffar Kamboh</h2>
            <div className="f-role">Founder, Khurram Welfare Society</div>
            <blockquote>True success lies in improving the lives of others and creating opportunity for those in need. Through education, clean water, health, and welfare, we bring positive change to our community and beyond.</blockquote>
            <p style={{ color: 'rgba(255,255,255,.72)', marginBottom: '24px' }}>I invite everyone to join hands with KWS in this noble journey of service and hope. Together, we can build a brighter, more caring future for all.</p>
            <div className="f-sign">— Hafiz Abdul Ghaffar</div>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section id="causes">
        <div className="wrap">
          <div className="sec-head center reveal in">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Give with purpose</span>
            <h2 className="h-sec">Choose a cause, <em>change a life.</em></h2>
            <p className="lead" style={{ margin: '0 auto' }}>Every contribution goes directly to families who need it. Pick a cause below and be the reason someone smiles today.</p>
          </div>
          <div className="causes-grid">
            <div className="cause reveal in">
              <div className="cause-img"><span className="cause-chip">Clean Water</span><img src="/handpump.jpg" alt="Hand pump" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="cause-body">
                <h3>Donate One Hand Pump</h3>
                <div className="cause-meta"><span className="goal">Goal <b>PKR 55,000</b></span><span className="goal">Raised PKR 0</span></div>
                <div className="track"><span></span></div>
                <div className="cause-note">Be the first to fund this pump →</div>
                <a href="#contact" className="btn btn-green">Donate Now</a>
              </div>
            </div>
            <div className="cause reveal in">
              <div className="cause-img"><span className="cause-chip">Welfare</span><img src="/welfare.jpg" alt="Monthly rashan" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="cause-body">
                <h3>One Family Monthly Rashan</h3>
                <div className="cause-meta"><span className="goal">Goal <b>PKR 11,000</b></span><span className="goal">Raised PKR 0</span></div>
                <div className="track"><span></span></div>
                <div className="cause-note">Feed a family for a whole month →</div>
                <a href="#contact" className="btn btn-green">Donate Now</a>
              </div>
            </div>
            <div className="cause reveal in">
              <div className="cause-img"><span className="cause-chip">Welfare</span><img src="/welfare2.jpg" alt="Sponsor a marriage" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="cause-body">
                <h3>Sponsor One Marriage</h3>
                <div className="cause-meta"><span className="goal">Goal <b>PKR 50,000</b></span><span className="goal">Raised PKR 0</span></div>
                <div className="track"><span></span></div>
                <div className="cause-note">Help a family celebrate with dignity →</div>
                <a href="#contact" className="btn btn-green">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="involve" id="involve">
        <div className="wrap">
          <div className="sec-head center reveal in">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Get involved</span>
            <h2 className="h-sec">More ways to <em>make an impact.</em></h2>
          </div>
          <div className="involve-grid">
            <div className="inv reveal in"><div className="inv-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A3.5 3.5 0 0 0 12 6a3.5 3.5 0 0 0-10 2.5C2 10.7 3.5 12.5 5 14l7 7z" /></svg></div><h3>Donate</h3><p>Support our causes with a one-time or monthly gift.</p><a href="#causes">Give now →</a></div>
            <div className="inv reveal in"><div className="inv-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div><h3>Volunteer</h3><p>Give your time and skills to projects on the ground.</p><a href="#contact">Join us →</a></div>
            <div className="inv reveal in"><div className="inv-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div><h3>Membership</h3><p>Become an official member of the society.</p><a href="#contact">Apply →</a></div>
            <div className="inv reveal in"><div className="inv-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z" /></svg></div><h3>Donate Blood</h3><p>Register as a donor and help save lives locally.</p><a href="#contact">Register →</a></div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="wrap">
          <div className="sec-head center reveal in">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>The people behind KWS</span>
            <h2 className="h-sec">Meet our <em>volunteers.</em></h2>
          </div>
          <div className="team-grid">
            <div className="tm reveal in">
              <div className="tm-img"><img src="/faisal.jpg" alt="Faisal Naveed" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="tm-body"><div className="tm-role">Co-Founder</div><h3>Faisal Naveed</h3>
                <div className="tm-social"><a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a><a href="#" aria-label="Phone"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a></div>
              </div>
            </div>
            <div className="tm reveal in">
              <div className="tm-img"><img src="/asad.png" alt="Asad Waqas" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="tm-body"><div className="tm-role">General Secretary</div><h3>Asad Waqas</h3>
                <div className="tm-social"><a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a><a href="#" aria-label="Phone"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a></div>
              </div>
            </div>
            <div className="tm reveal in">
              <div className="tm-img"><img src="/waqas.jpg" alt="Ahmad Waqas" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none'; }} /></div>
              <div className="tm-body"><div className="tm-role">Education Lead</div><h3>Ahmad Waqas</h3>
                <div className="tm-social"><a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a><a href="#" aria-label="Phone"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAKAT CTA */}
      <section style={{ paddingBottom: '104px' }}>
        <div className="wrap">
          <div className="zakat reveal in">
            <span className="eyebrow">Fulfil your obligation</span>
            <h2>Donate your Zakat to those who need it most.</h2>
            <p>Your Zakat is distributed directly to needy families and social welfare projects — with care, transparency, and dignity.</p>
            <div className="zakat-actions">
              <a href="#contact" className="btn btn-amber">Donate Zakat <span className="arrow">→</span></a>
              <a href="#about" className="btn btn-ghost on-dark">How it's used</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'var(--cream-2)' }}>
        <div className="wrap contact-grid">
          <div className="reveal in">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-sec">We'd love to <em>hear from you.</em></h2>
            <p className="lead">Whether you want to donate, volunteer, or partner with us — reach out and our team will get back to you soon.</p>
            <div className="ci-list">
              <div className="ci"><div className="ci-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="k">Address</div><div className="v">Village Khurram Hithar, Tehsil &amp; Dist. Kasur, Pakistan</div></div></div>
              <div className="ci"><div className="ci-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><div><div className="k">Phone</div><div className="v">+92 333 4178 699</div></div></div>
              <div className="ci"><div className="ci-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div><div><div className="k">Email</div><div className="v">kwsociety2014@gmail.com</div></div></div>
            </div>
          </div>
          <div className="form-card reveal in">
            {!formSuccess ? (
              <form id="contactForm" action={handleFormSubmit}>
                <div className="frow">
                  <div className="field"><label htmlFor="cf-name">Your name</label><input id="cf-name" name="firstName" type="text" placeholder="Full name" required /></div>
                  <div className="field"><label htmlFor="cf-email">Email</label><input id="cf-email" name="email" type="email" placeholder="you@email.com" required /></div>
                </div>
                <div className="field"><label htmlFor="cf-subject">I want to</label>
                  <select id="cf-subject" name="subject" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Donate to a cause</option><option>Volunteer with KWS</option><option>Apply for membership</option><option>Donate blood</option><option>Something else</option>
                  </select>
                </div>
                <div className="field"><label htmlFor="cf-msg">Message</label><textarea id="cf-msg" name="message" placeholder="How would you like to help?" required></textarea></div>
                {formError && <div style={{ color: "#d9534f", marginBottom: "15px", fontSize: "0.95rem", fontWeight: "bold" }}>{formError}</div>}
                <button type="submit" disabled={isPending} className="btn btn-amber">{isPending ? "Sending..." : "Send Message"} <span className="arrow">→</span></button>
              </form>
            ) : (
              <div className="form-success show" id="formSuccess">
                <div className="check"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div>
                <h3>Thank you!</h3>
                <p>Your message has been received. Our team will reach out to you soon, InshaAllah.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <a href="#top" className="brand">
                <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
                <span className="brand-text">
                  <span className="brand-name" style={{ color: '#fff' }}>Khurram Welfare Society</span>
                  <span className="brand-sub">Serving Humanity Since 2012</span>
                </span>
              </a>
              <p>A non-profit serving humanity through clean water, education, health, and welfare — without difference of religion, creed, or caste.</p>
              <div className="foot-social">
                <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a>
                <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
              </div>
            </div>
            <div className="foot-col"><h4>Our Work</h4><a href="#focus">Clean Water</a><a href="#focus">Education</a><a href="#focus">Health</a><a href="#focus">Welfare</a><a href="#focus">Blood Donation</a></div>
            <div className="foot-col"><h4>Get Involved</h4><a href="#causes">Donate</a><a href="#contact">Volunteer</a><a href="#contact">Membership</a><a href="#team">Our Team</a></div>
            <div className="foot-col"><h4>Contact</h4><a href="#">Khurram, Kasur, Pakistan</a><a href="tel:+923334178699">+92 333 4178 699</a><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></div>
          </div>
          <div className="foot-bottom">© 2026 Khurram Welfare Society. All rights reserved. · Built with compassion.</div>
        </div>
      </footer>
    </>
  );
}
