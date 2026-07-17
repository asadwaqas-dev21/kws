"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendMembershipApplication } from "../actions";

export default function Membership() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      setMessage("Sending application...");
      const result = await sendMembershipApplication(formData);
      setMessage(result.message);
    });
  };

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

      <main style={{ flexGrow: 1, padding: "60px 20px" }}>
        
        {/* Form Container */}
        {/* Form Container */}
        <form action={handleSubmit} className="mem-form-container" style={{ 
          maxWidth: 900, 
          margin: "0 auto", 
          background: "#fff", 
          border: "4px solid #111", 
          padding: "40px", 
          boxShadow: "var(--shadow-lift)", 
          fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Arial', sans-serif" 
        }} dir="rtl">
          
          <div className="mem-form-inner" style={{ border: "2px solid #111", padding: "30px" }}>
            {/* Header Section */}
            <div className="mem-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px", marginBottom: "20px", position: "relative" }}>
              <div style={{ width: 140, padding: 10 }}>
                <img src="/kws.png" alt="KWS Logo" style={{ width: "100%", filter: "grayscale(100%)", opacity: 0.9 }} />
              </div>
              <div style={{ textAlign: "center", flex: 1, padding: "0 20px" }}>
                <h1 className="mem-h1" style={{ fontSize: "3rem", fontWeight: "bold", margin: "0 0 10px 0", letterSpacing: "-1px" }}>خرم ویلفیئر سوسائٹی</h1>
                <h2 className="mem-h2" style={{ fontSize: "1.6rem", margin: "0 0 15px 0" }}>خرم ہٹھاڑ (قصور)</h2>
                
                <div className="mem-header-links" style={{ display: "flex", justifyContent: "center", gap: 20, fontSize: "1rem", direction: "ltr", marginTop: 10 }}>
                  <span><b dir="rtl">ای میل:</b> kwsociety1@yahoo.com</span>
                  <span><b dir="rtl">ویب سائٹ:</b> www.kwsociety.org</span>
                </div>
                <div className="mem-header-links" style={{ display: "flex", justifyContent: "center", gap: 20, fontSize: "1rem", direction: "ltr", marginTop: 8 }}>
                  <span><b dir="rtl">فون نمبر:</b> +92 333 4178699</span>
                  <span><b dir="rtl">فیس بک:</b> www.facebook.com/kwsociety</span>
                </div>
              </div>
              <div style={{ width: 130, height: 160, border: "2px solid #333", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f9f9f9" }}>
                <span style={{ color: "#333", fontSize: "1.1rem", fontWeight: "bold" }}>تصویر لگائیں</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="mem-title" style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", margin: "30px 0 10px 0" }}>ممبرشپ فارم</h3>
            <p className="mem-subtitle" style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "50px", fontWeight: "bold" }}>ممبرشپ کے لیے بیس (20) سال سے کم عمر افراد کا طالب علم ہونا ضروری ہے</p>

            {/* Fields Grid */}
            <div className="mem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px 40px", marginBottom: "50px" }}>
              {/* Name */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>نام</label>
                <input type="text" name="name" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>
              {/* Father Name */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>ولدیت</label>
                <input type="text" name="fatherName" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>

              {/* CNIC */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>شناختی کارڈ نمبر</label>
                  <input type="text" name="cnic" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px", direction: "ltr", textAlign: "right" }} required />
                </div>
                <span style={{ fontSize: "0.85rem", color: "#444", marginTop: 6 }}>اگر آپ کا شناختی کارڈ نہیں بنا تو والد کے شناختی کارڈ کا نمبر لکھیں اور فوٹو کاپی ساتھ لگائیں</span>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "flex-end", alignSelf: "flex-start" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>ای میل ایڈریس</label>
                <input type="email" name="email" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px", direction: "ltr", textAlign: "right" }} />
              </div>

              {/* Address (Full width) */}
              <div style={{ display: "flex", alignItems: "flex-end", gridColumn: "1 / -1" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>پتہ</label>
                <input type="text" name="address" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>

              {/* DOB */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>تاریخ پیدائش</label>
                <input type="text" name="dob" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>
              {/* Age */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>عمر</label>
                <input type="text" name="age" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>فون نمبر</label>
                <input type="text" name="phone" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px", direction: "ltr", textAlign: "right" }} required />
              </div>
              {/* Blood Group */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>خون کا گروپ</label>
                <input type="text" name="bloodGroup" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px", direction: "ltr", textAlign: "right" }} />
              </div>

              {/* Education */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>تعلیمی قابلیت</label>
                <input type="text" name="education" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} required />
              </div>
              {/* Profession */}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.3rem" }}>پیشہ</label>
                <input type="text" name="profession" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.3rem", padding: "0 5px" }} />
              </div>
            </div>

            {/* Declaration */}
            <h3 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", margin: "40px 0 30px" }}>عہد نامہ</h3>
            <ol style={{ listStyle: "decimal", paddingRight: 30, fontSize: "1.2rem", lineHeight: 2, marginBottom: "50px", fontWeight: 500 }}>
              <li>میں خرم ویلفیئر سوسائٹی کے تمام فیصلوں کی پابندی کروں گا/گی اور تمام ممبران سے باہمی تعاون اور مشورے سے سوسائٹی کے تمام کام سرانجام دوں گا/گی۔</li>
              <li>اگر مجھے کسی فیصلے یا کام پر اعتراض ہوگا تو میں صدر صاحب کو فوری آگاہ کروں گا/گی۔</li>
              <li>میں سوسائٹی سے کسی بھی قسم کا ذاتی مفاد نہیں لوں گا/گی۔</li>
              <li>میں سوسائٹی کے تمام کام اللہ کی رضا کے لیے کروں گا/گی۔</li>
              <li>میں ویلفیئر کے کاموں میں کسی سے بھی ذاتی انا، رنجش یا دشمنی کا مظاہرہ نہیں کروں گا/گی۔</li>
              <li>میں ویلفیئر کے کاموں میں اپنے نام یا شہرت کا تقاضا نہیں کروں گا/گی۔</li>
              <li>میں سوسائٹی میں خود سے کوئی بھی عہدہ طلب نہیں کروں گا/گی۔</li>
              <li>سوسائٹی کی ممبرشپ لینے میں میرا کوئی بھی ذاتی مفاد یا لالچ نہیں ہے۔ یہ خالصتاً اللہ کی رضا کے لیے میرا ذاتی فیصلہ ہے۔</li>
              <li style={{ lineHeight: "2.5" }}>
                میں ہر ماہ سوسائٹی کو <input type="text" name="monthlyFund" style={{ width: 120, margin: "0 10px", border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.2rem", textAlign: "center" }} required /> روپے بطور فنڈ دیا کروں گا/گی۔
              </li>
            </ol>

            {/* Signatures */}
            <div className="mem-signs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: "60px" }}>
              <div className="mem-sign-spacer"></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.2rem" }}>دستخط امیدوار</label>
                  <input type="text" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none" }} />
                </div>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <label style={{ whiteSpace: "nowrap", marginLeft: 15, fontWeight: "bold", fontSize: "1.2rem", minWidth: "100px" }}>تاریخ</label>
                  <input type="text" style={{ flex: 1, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none" }} />
                </div>
              </div>
            </div>

            {/* Office Use */}
            <div style={{ marginTop: "40px", paddingTop: "40px" }}>
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>جاری کردہ:</p>
              <div style={{ marginTop: 20, fontSize: "1.2rem", lineHeight: "2.5" }}>
                <span>اس فارم کو اجلاس منعقدہ</span>
                <input type="text" style={{ width: "200px", maxWidth: "100%", margin: "0 10px", border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", textAlign: "center" }} />
                <span>کو زیر غور لایا گیا اور یہ فیصلہ کیا گیا کہ</span>
              </div>
              <div style={{ marginTop: 30 }}>
                <input type="text" style={{ width: "100%", border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.2rem" }} />
              </div>

              <div className="mem-office" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: "80px", textAlign: "center" }}>
                <div>
                  <div style={{ borderTop: "2px dashed #666", width: "80%", margin: "0 auto", paddingTop: 15, fontWeight: "bold", fontSize: "1.1rem" }}>نام و دستخط جنرل سیکرٹری</div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", marginTop: 30 }}>
                    <label style={{ fontWeight: "bold", marginLeft: 15, fontSize: "1.1rem" }}>تاریخ</label>
                    <input type="text" style={{ width: 120, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.1rem" }} />
                  </div>
                  <div style={{ marginTop: 30, fontWeight: "bold", fontSize: "1.2rem" }}>مہر</div>
                </div>
                <div>
                  <div style={{ borderTop: "2px dashed #666", width: "80%", margin: "0 auto", paddingTop: 15, fontWeight: "bold", fontSize: "1.1rem" }}>نام و دستخط صدر</div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", marginTop: 30 }}>
                    <label style={{ fontWeight: "bold", marginLeft: 15, fontSize: "1.1rem" }}>تاریخ</label>
                    <input type="text" style={{ width: 120, border: "none", borderBottom: "2px dashed #666", background: "transparent", outline: "none", fontSize: "1.1rem" }} />
                  </div>
                  <div style={{ marginTop: 30, fontWeight: "bold", fontSize: "1.2rem" }}>مہر</div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button type="submit" className="btn btn-amber" style={{ padding: "16px 40px", fontSize: "1.1rem" }} disabled={isPending}>
              {isPending ? "Sending..." : "Submit Application"}
            </button>
            {message && <div style={{ marginTop: 20, fontSize: "1.1rem", color: message.includes("success") ? "green" : "red", fontWeight: "bold" }}>{message}</div>}
          </div>
        </form>

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
            <div className="foot-col"><h4>Get Involved</h4><Link href="/#causes">Donate Now</Link><Link href="/#contact">Volunteer</Link><Link href="/#contact">Become a Member</Link><Link href="/#contact">Contact Us</Link></div>
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
          .tp-about-grid { grid-template-columns: 1fr !important; }
          .mem-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width: 650px) {
          .mem-header { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .mem-header > div { margin-bottom: 15px !important; }
          .mem-header-links { flex-direction: column !important; gap: 5px !important; }
          .mem-h1 { font-size: 2.2rem !important; }
          .mem-h2 { font-size: 1.3rem !important; }
          .mem-title { font-size: 1.8rem !important; }
          .mem-subtitle { font-size: 1rem !important; }
          .mem-grid { gap: 20px !important; }
          .mem-signs, .mem-office { grid-template-columns: 1fr !important; gap: 30px !important; margin-top: 30px !important; }
          .mem-sign-spacer { display: none !important; }
          .mem-form-container { padding: 15px !important; border-width: 2px !important; }
          .mem-form-inner { padding: 15px !important; border-width: 1px !important; }
          .mem-grid > div { flex-direction: column !important; align-items: flex-start !important; gap: 8px; }
          .mem-grid input { width: 100% !important; border-bottom: 1px solid #666 !important; }
          .mem-grid label { margin-bottom: 0 !important; font-size: 1.1rem !important; }
        }
      `}</style>
    </div>
  );
}
