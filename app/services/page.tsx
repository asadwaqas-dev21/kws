import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { services, type ServiceData } from "./data";

function ServiceIcon({ path, size = 28 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const heroStats = [
  { num: String(services.length), label: "Service Areas" },
  { num: "110+", label: "Updates Done" },
  { num: "2014", label: "Serving Since" },
  { num: "100%", label: "Volunteer Led" },
];

function ServiceCard({ service, index }: { service: ServiceData; index: number }) {
  const cover = service.cover ?? service.gallery?.[0];
  return (
    <Link
      href={`/services/${service.id}`}
      className="sv-card"
      style={{ "--sc": service.color, "--sc-bg": service.colorBg } as React.CSSProperties}
    >
      <div className="sv-card-media">
        {cover ? (
          <Image src={cover} alt="" fill sizes="(max-width: 760px) 100vw, 380px" style={{ objectFit: "cover" }} />
        ) : (
          <span className="sv-art"><ServiceIcon path={service.iconPath} size={96} /></span>
        )}
        <span className="sv-card-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="sv-card-ic"><ServiceIcon path={service.iconPath} /></span>
      </div>
      <div className="sv-card-body">
        <h3>{service.title}</h3>
        <p>{service.subtitle}</p>
        <div className="sv-pills">
          {service.stats.map((stat) => (
            <span key={stat.label} className="sv-pill"><b>{stat.value}</b>{stat.label}</span>
          ))}
        </div>
        <span className="sv-card-link">
          Explore this service
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <div className="sv-page">
      <SiteHeader />

      <main className="sv-main">
        <section className="sv-hero">
          <div className="wrap">
            <span className="eyebrow sv-anim">What we do for the community</span>
            <h1 className="sv-anim d1">Our <em>Services</em></h1>
            <p className="sv-anim d2">
              From clean water to education, healthcare to street lights — we serve the community across {services.length} focus areas, driven entirely by volunteers and local donations.
            </p>
          </div>
        </section>

        <div className="wrap">
          <div className="sv-stats">
            {heroStats.map((s) => (
              <div key={s.label} className="sv-stat">
                <b>{s.num}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="sv-section">
          <div className="wrap">
            <div className="sv-head">
              <span className="eyebrow">Explore our services</span>
              <h2 className="h-sec">Areas where we <em>serve.</em></h2>
              <p className="lead">Choose a service to see how it works, the impact it has had, and how you can help.</p>
            </div>
            <div className="sv-grid">
              {services.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="sv-cta-wrap">
          <div className="wrap">
            <div className="sv-cta">
              <span className="eyebrow" style={{ color: "var(--amber)", position: "relative" }}>Join the mission</span>
              <h2 style={{ marginTop: 14 }}>Want to contribute?</h2>
              <p>Every contribution, big or small, goes directly to the people who need it most. Join us in making a difference.</p>
              <div className="sv-cta-actions">
                <Link href="/contact" className="btn btn-amber">Get in Touch</Link>
                <Link href="/membership" className="btn btn-ghost on-dark">Become a Member</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
