import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SocialShare } from "@/components/SocialShare";
import { services } from "../data";
import { ServiceGallery } from "./ServiceGallery";

function ServiceIcon({ path, size = 28 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {dir === "right" ? <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></> : <><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>}
  </svg>
);

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentIndex = services.findIndex((s) => s.id === slug);
  if (currentIndex === -1) notFound();

  const service = services[currentIndex];
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;
  const otherServices = services.filter((s) => s.id !== slug).slice(0, 4);
  const cover = service.cover ?? service.gallery?.[0];

  return (
    <div className="sv-page sv-detail" style={{ "--sc": service.color, "--sc-bg": service.colorBg } as React.CSSProperties}>
      <SiteHeader />

      <main className="sv-main">
        {/* HERO */}
        <section className="sv-dhero">
          {cover && (
            <div className="sv-dhero-bg">
              <Image src={cover} alt="" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="wrap">
            <nav className="sv-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <b>{service.title}</b>
            </nav>

            <div className="sv-dhero-row">
              <div className="sv-dhero-ic sv-anim"><ServiceIcon path={service.iconPath} size={48} /></div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h1 className="sv-anim d1">{service.title}</h1>
                <p className="sub sv-anim d2">{service.subtitle}</p>
              </div>
            </div>

            <div className="sv-dhero-actions sv-anim d3">
              <Link href="/contact" className="btn btn-amber">Support This Cause <Arrow /></Link>
              <Link href="/services" className="btn btn-ghost on-dark">All Services</Link>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="sv-dstats">
            {service.stats.map((stat) => (
              <div key={stat.label} className="sv-dstat">
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="sv-layout">
            {/* MAIN COLUMN */}
            <div className="sv-stack">
              <article className="sv-panel">
                <h2 className="sv-panel-title">
                  <i>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                  </i>
                  About This Service
                </h2>
                <div className="sv-prose">
                  {service.longDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>

              <section className="sv-panel">
                <h2 className="sv-panel-title">
                  <i>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </i>
                  How It Works
                </h2>
                <ol className="sv-steps">
                  {service.howItWorks.map((step, i) => (
                    <li key={step.title} className="sv-step">
                      <span className="sv-step-n">{i + 1}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="sv-impact">
                <span className="tag">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Our Impact
                </span>
                <p>{service.impact}</p>
              </section>

              {service.gallery && service.gallery.length > 0 && (
                <section className="sv-panel">
                  <h2 className="sv-panel-title">
                    <i>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                    </i>
                    Photo Gallery
                  </h2>
                  <ServiceGallery images={service.gallery} title={service.title} />
                </section>
              )}

              <SocialShare title={`KWS Service: ${service.title}`} />
            </div>

            {/* SIDEBAR */}
            <aside className="sv-side">
              <div className="sv-side-card">
                <h3>Key Highlights</h3>
                <ul className="sv-checks">
                  {service.highlights.map((h) => (
                    <li key={h}>
                      <i>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </i>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sv-support">
                <h3>Support This Cause</h3>
                <p>Your contribution makes a real difference. Every rupee helps us serve more families.</p>
                <Link href="/contact" className="btn btn-amber">Get Involved <Arrow /></Link>
                <a href="tel:+923334178699" className="phone">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +92 333 4178 699
                </a>
              </div>

              <div className="sv-side-card">
                <h3>Other Services</h3>
                <div className="sv-others">
                  {otherServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}`}
                      className="sv-other"
                      style={{ "--sc": s.color, "--sc-bg": s.colorBg } as React.CSSProperties}
                    >
                      <span className="sv-other-ic"><ServiceIcon path={s.iconPath} size={20} /></span>
                      <div>
                        <b>{s.title}</b>
                        <span>{s.subtitle}</span>
                      </div>
                      <svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  ))}
                </div>
                <Link href="/services" className="sv-all">View All Services →</Link>
              </div>
            </aside>
          </div>

          {/* PREV / NEXT */}
          <nav className="sv-pn" aria-label="More services">
            {prevService && (
              <Link href={`/services/${prevService.id}`}>
                <Arrow dir="left" />
                <div>
                  <small>Previous service</small>
                  <strong>{prevService.title}</strong>
                </div>
              </Link>
            )}
            {nextService && (
              <Link href={`/services/${nextService.id}`} className="next">
                <div>
                  <small>Next service</small>
                  <strong>{nextService.title}</strong>
                </div>
                <Arrow />
              </Link>
            )}
          </nav>
        </div>

        <section className="sv-cta-wrap">
          <div className="wrap">
            <div className="sv-cta">
              <span className="eyebrow" style={{ color: "var(--amber)", position: "relative" }}>Be part of it</span>
              <h2 style={{ marginTop: 14 }}>Explore All Our Services</h2>
              <p>See the full range of services KWS provides to the community, or reach out to volunteer.</p>
              <div className="sv-cta-actions">
                <Link href="/services" className="btn btn-amber">All Services</Link>
                <Link href="/contact" className="btn btn-ghost on-dark">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
