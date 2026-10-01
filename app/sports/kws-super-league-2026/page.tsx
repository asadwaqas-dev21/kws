import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const facts = [
  { num: "T10", label: "Tape Ball Format" },
  { num: "12", label: "Local Clubs" },
  { num: "1", label: "Khurram Ground" },
  { num: "Annual", label: "Flagship Event" },
];

export default function SuperLeague() {
  return (
    <div className="sp-page">
      <SiteHeader />

      <main className="sp-main">
        <section className="sp-hero">
          <div className="wrap">
            <nav className="sv-crumbs" aria-label="Breadcrumb" style={{ justifyContent: "center", marginBottom: 28, display: "flex", gap: 8, color: "rgba(255,255,255,.7)", fontSize: ".86rem" }}>
              <Link href="/sports">Sports</Link><span>/</span><b style={{ color: "#fff" }}>Super League 2026</b>
            </nav>
            <span className="eyebrow sp-anim">KWS Sports Wing Event</span>
            <h1 className="sp-anim d1">KWS <em>Super League</em> 2026</h1>
            <p className="sp-anim d2">
              The biggest annual tape ball cricket tournament in Kasur, bringing together local talent for a thrilling showcase of sportsmanship and youth development.
            </p>
            <div className="sp-hero-actions sp-anim d3">
              <Link href="/contact" className="btn btn-amber">Register Your Team</Link>
              <Link href="/sports" className="btn btn-ghost on-dark">Back to Sports</Link>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="sp-stats">
            {facts.map((f) => (
              <div key={f.label} className="sp-stat">
                <b>{f.num}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="sp-sec">
          <div className="wrap sp-detail-grid">
            <div className="sp-vision" style={{ display: "block" }}>
              <span className="eyebrow">Tournament Details</span>
              <h2>Promoting competitive cricket in <em>our community.</em></h2>
              <p>
                The KWS Super League is our flagship annual event designed to foster local talent, encourage physical fitness, and unite the community through the love of cricket.
              </p>
              <p>
                With 12 teams competing from surrounding villages, the tournament provides a professional platform complete with proper umpiring, scoring, and grand cash prizes for the winners.
              </p>
            </div>
            <div className="sp-placeholder">
              <div>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 12px" }}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                Event photos coming soon
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
