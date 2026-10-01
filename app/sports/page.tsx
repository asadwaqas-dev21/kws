import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

// Photos that aren't in /public yet fall back to initials.
const CRICKET_LEGENDS = [
  { name: "Master Muhammad Mudassir", img: "" },
  { name: "Abdul Hameed", img: "" },
  { name: "Muhammad Saleem Akhtar", img: "" },
  { name: "Abdul Razzaq", img: "" },
  { name: "Abdul Sattar Gulam Muhammad", img: "" },
  { name: "Rafee Ahmad Mehmood", img: "" },
  { name: "PT Sadiq Ameen", img: "" },
  { name: "Muhammad Saleem Ahmad", img: "/Muhammad Saleem Ahmad.jpg" },
  { name: "Baoo Muhammad Shareef", img: "" },
  { name: "Abdul Rasheed Matee", img: "" },
  { name: "Yaseen Munir Ahmad", img: "" },
  { name: "Muhammad Shoaib Gori", img: "" },
  { name: "Muhammad Amin Munir", img: "" },
  { name: "Siddique Asim", img: "" },
  { name: "Muhammad Zulfiqar Gulam Muhammad", img: "" },
  { name: "Faisal Ramzan", img: "" },
  { name: "Maqsood Muhammad Hussain", img: "" },
  { name: "Master Abdul Sattar", img: "" },
  { name: "Muhammad Shakeel Ashraf", img: "" },
  { name: "Irfan Amin", img: "" },
  { name: "Hafiz Abid Khushi Muhammad", img: "" },
  { name: "Imran Shafee", img: "" },
  { name: "Usman Tufail", img: "/usman tufail.png" },
  { name: "M Nadeem ND", img: "/Nadeem ND.png" },
  { name: "Farakh Sohail Rabbani", img: "" },
  { name: "Qaisar Ramzan", img: "" },
  { name: "Ashfaq Aslam", img: "/ashfaq.png" },
  { name: "Muhammad Dawood Jonti", img: "" },
  { name: "Asad Waqas", img: "/asad.png" },
  { name: "Ahmad Waqas", img: "/ahmad waqas.png" },
  { name: "Masab Khalil", img: "" },
];

const stats = [
  { num: "10+", label: "Tournaments Hosted" },
  { num: "500+", label: "Athletes Engaged" },
  { num: "5", label: "Active Teams" },
  { num: "1", label: "Local Ground Upgraded" },
];

const sports = [
  {
    title: "Tape Ball Cricket",
    color: "#CE8A1F",
    bg: "rgba(232,163,61,.14)",
    text: "The heartbeat of Pakistan. We organize grand tape ball tournaments with cash prizes, trophies, and proper umpiring to bring out the best local cricketers.",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></>,
  },
  {
    title: "Volleyball",
    color: "#2F8F6B",
    bg: "rgba(47,143,107,.12)",
    text: "Fostering teamwork and agility. We organize thrilling local volleyball tournaments and provide high-quality nets and balls to encourage youth participation in the sport.",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: "Badminton",
    color: "#2A4365",
    bg: "rgba(42,67,101,.12)",
    text: "Promoting speed and precision. We support community badminton courts with rackets, shuttlecocks, and proper lighting so players can enjoy the game even after sunset.",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>,
  },
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function Sports() {
  return (
    <div className="sp-page">
      <SiteHeader />

      <main className="sp-main">
        {/* HERO */}
        <section className="sp-hero">
          <div className="wrap">
            <span className="eyebrow sp-anim">KWS Sports Wing</span>
            <h1 className="sp-anim d1">Khurram Sports Wing: <em>Youth Sports</em> Development in Kasur</h1>
            <p className="sp-anim d2">
              Khurram Sports Wing is the sports and youth development initiative of Khurram Welfare Society. We organize cricket, volleyball, badminton and community sports events for young athletes in Khurram Hithar and surrounding areas of Kasur.
            </p>
            <div className="sp-hero-actions sp-anim d3">
              <Link href="/sports/kws-super-league-2026" className="btn btn-amber">KWS Super League 2026 <Arrow /></Link>
              <Link href="/contact" className="btn btn-ghost on-dark">Collaborate With Us</Link>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="sp-stats">
            {stats.map((s) => (
              <div key={s.label} className="sp-stat">
                <b>{s.num}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VISION */}
        <section className="sp-sec">
          <div className="wrap sp-vision">
            <div>
              <span className="eyebrow">Our Vision</span>
              <h2>Channeling youth energy into <em>positive action.</em></h2>
              <p>
                In rural communities, youth often lack access to structured recreational activities. Khurram Welfare Society recognizes that an active youth is the foundation of a progressive society.
              </p>
              <p>
                By organizing cricket, volleyball, and badminton tournaments, we provide a safe, competitive environment where local talent can shine, keeping the younger generation away from negative influences and fostering a spirit of brotherhood.
              </p>
              <ul className="sp-checks">
                {["Promoting physical and mental health", "Discovering local athletic talent", "Providing kits and sports equipment to teams"].map((t) => (
                  <li key={t}><i><Check /></i>{t}</li>
                ))}
              </ul>
            </div>
            <div className="sp-photo">
              <div className="sp-photo-frame">
                <Image src="/sports.jpg" alt="KWS sports event" fill sizes="(max-width: 960px) 90vw, 480px" style={{ objectFit: "cover" }} />
              </div>
              <div className="sp-badge">
                <b>KWS Super League</b>
                <span>Annual Tape Ball Cricket</span>
              </div>
            </div>
          </div>
        </section>

        {/* SPORTS */}
        <section className="sp-sec sp-alt">
          <div className="wrap">
            <div className="sp-head">
              <span className="eyebrow">Activities</span>
              <h2 className="h-sec">Sports we <em>actively support.</em></h2>
            </div>
            <div className="sp-cards">
              {sports.map((s, i) => (
                <article key={s.title} className="sp-card" style={{ "--c": s.color, "--cbg": s.bg } as React.CSSProperties}>
                  <span className="sp-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="sp-card-ic">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLAGSHIP EVENT */}
        <section className="sp-sec">
          <div className="wrap">
            <div className="sp-event">
              <div>
                <span className="eyebrow">Flagship Event</span>
                <h2>KWS Super League 2026</h2>
                <p>The biggest annual tape ball cricket tournament in Kasur, bringing together local talent for a thrilling showcase of sportsmanship and youth development.</p>
                <Link href="/sports/kws-super-league-2026" className="btn btn-amber">View Tournament Details <Arrow /></Link>
              </div>
              <div className="sp-event-facts">
                {[
                  { k: "Format", v: "Tape Ball T10", d: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
                  { k: "Teams", v: "12 Local Clubs", d: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></> },
                  { k: "Venue", v: "Khurram Ground", d: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> },
                ].map((f) => (
                  <div key={f.k} className="sp-fact">
                    <i><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.d}</svg></i>
                    <div><small>{f.k}</small><b>{f.v}</b></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEGENDS */}
        <section className="sp-sec sp-alt">
          <div className="wrap">
            <div className="sp-head">
              <span className="eyebrow">Our Stars</span>
              <h2 className="h-sec"><em>Sports Legends.</em></h2>
              <p className="lead">Celebrating the outstanding athletes who have brought pride to Khurram Hithar through their dedication to sports.</p>
            </div>
            <div className="sp-legends">
              {CRICKET_LEGENDS.map((p) => (
                <div key={p.name} className="sp-player">
                  <div className="sp-player-img">
                    {p.img ? (
                      <Image src={p.img} alt={p.name} fill sizes="200px" style={{ objectFit: "cover", objectPosition: "top" }} />
                    ) : (
                      <span className="sp-initials">{initials(p.name)}</span>
                    )}
                  </div>
                  <div className="sp-player-body">
                    <h3>{p.name}</h3>
                    <span>Cricket</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="sp-more">
              <Link href="/legends" className="btn btn-green">Meet Our Community Legends <Arrow /></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sp-cta-wrap" style={{ paddingTop: 96 }}>
          <div className="wrap">
            <div className="sp-cta">
              <span className="eyebrow" style={{ color: "var(--amber)", justifyContent: "center" }}>Play with us</span>
              <h2>Want to organize a tournament?</h2>
              <p>If you have a team or want to propose a sports event in your area, reach out to us. We are always looking to sponsor and support local sports initiatives.</p>
              <Link href="/contact" className="btn btn-amber">Contact Us to Collaborate <Arrow /></Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
