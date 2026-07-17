"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendContactMessage } from "../actions";

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      setFormStatus("submitting");
      const result = await sendContactMessage(formData);
      if (result.success) {
        setFormStatus("success");
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setErrorMessage(result.message);
      }
    });
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

      <main style={{ flexGrow: 1, background: "var(--cream-2)" }}>
        
        {/* HERO SECTION */}
        <div style={{
          position: "relative", overflow: "hidden", padding: "100px 0 80px",
          background: "linear-gradient(160deg, var(--cream) 0%, var(--cream-2) 60%)",
          borderBottom: "1px solid var(--line)",
          textAlign: "center"
        }}>
          {/* decorative orbs */}
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(76,175,136,.13), transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,61,.11), transparent 65%)", pointerEvents: "none" }} />
          
          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Get In Touch</span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--ink)", margin: "16px 0", lineHeight: 1.1 }}>
              We'd love to hear from <em style={{ fontStyle: "italic", color: "var(--green)" }}>you.</em>
            </h1>
            <p className="lead" style={{ margin: "0 auto", maxWidth: 600 }}>
              Whether you have a question about our projects, want to volunteer, or simply want to say hello, our team is ready to answer all your questions.
            </p>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="wrap" style={{ padding: "80px 26px 120px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="contact-grid">
            
            {/* Info Column */}
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "30px", color: "var(--ink)" }}>Contact Information</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(20,80,60,.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--pine)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", fontWeight: 600 }}>Our Location</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(20,80,60,.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--pine)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", fontWeight: 600 }}>Phone Number</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                      <a href="tel:+923334178699" style={{ color: "var(--green)" }}>+92 333 4178 699</a><br />
                      Available Mon-Fri, 9am to 6pm
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(20,80,60,.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--pine)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", fontWeight: 600 }}>Email Address</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                      <a href="mailto:kwsociety2014@gmail.com" style={{ color: "var(--green)" }}>kwsociety2014@gmail.com</a><br />
                      We aim to reply within 24 hours.
                    </p>
                  </div>
                </div>

              </div>
              
              <div style={{ marginTop: "40px", padding: "30px", background: "#fff", borderRadius: "20px", border: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Follow our journey</h3>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a href="https://www.facebook.com/KWSociety/" target="_blank" rel="noreferrer" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--cream-2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pine)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
                  </a>
                  <a href="https://www.youtube.com/@aGhaffar702" target="_blank" rel="noreferrer" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--cream-2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pine)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div style={{ background: "#fff", padding: "40px", borderRadius: "24px", boxShadow: "var(--shadow-soft)", border: "1px solid var(--line)" }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "24px", color: "var(--ink)" }}>Send us a message</h2>
              {formStatus === "success" ? (
                <div style={{ padding: "30px", background: "rgba(76,175,136,.1)", borderRadius: "12px", textAlign: "center", color: "var(--pine-deep)" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", color: "var(--green)" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form action={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>First Name</label>
                      <input required type="text" name="firstName" placeholder="John" style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none", transition: "border-color .2s" }} onFocus={(e) => e.target.style.borderColor = 'var(--green)'} onBlur={(e) => e.target.style.borderColor = '#ddd'} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>Last Name</label>
                      <input required type="text" name="lastName" placeholder="Doe" style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none", transition: "border-color .2s" }} onFocus={(e) => e.target.style.borderColor = 'var(--green)'} onBlur={(e) => e.target.style.borderColor = '#ddd'} />
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>Email Address</label>
                    <input required type="email" name="email" placeholder="john@example.com" style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none", transition: "border-color .2s" }} onFocus={(e) => e.target.style.borderColor = 'var(--green)'} onBlur={(e) => e.target.style.borderColor = '#ddd'} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>Subject</label>
                    <input required type="text" name="subject" placeholder="How can we help?" style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none", transition: "border-color .2s" }} onFocus={(e) => e.target.style.borderColor = 'var(--green)'} onBlur={(e) => e.target.style.borderColor = '#ddd'} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>Message</label>
                    <textarea required name="message" placeholder="Write your message here..." rows={5} style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem", outline: "none", resize: "vertical", transition: "border-color .2s" }} onFocus={(e) => e.target.style.borderColor = 'var(--green)'} onBlur={(e) => e.target.style.borderColor = '#ddd'}></textarea>
                  </div>

                  {formStatus === "error" && <div style={{ color: "red", fontSize: "0.95rem" }}>{errorMessage}</div>}

                  <button type="submit" disabled={isPending} className="btn btn-green" style={{ width: "100%", justifyContent: "center", marginTop: "10px", padding: "16px", fontSize: "1.05rem" }}>
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
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
            <div className="foot-col"><h4>Our Work</h4><Link href="/#focus">Clean Water</Link><Link href="/#focus">Education</Link><Link href="/#focus">Health</Link><Link href="/#focus">Welfare</Link><Link href="/#focus">Blood Donation</Link></div>
            <div className="foot-col"><h4>Get Involved</h4><Link href="/#causes">Donate Now</Link><Link href="/#contact">Volunteer</Link><Link href="/#contact">Become a Member</Link><Link href="/contact">Contact Us</Link></div>
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: '12px' }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
          </div>
          <div className="foot-bot">
            <div>&copy; {new Date().getFullYear()} Khurram Welfare Society. All rights reserved.</div>
            <div className="fb-links"><Link href="/">Privacy Policy</Link><Link href="/">Terms of Service</Link></div>
          </div>
        </div>
      </footer>
      <style>{`
        @media(max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
