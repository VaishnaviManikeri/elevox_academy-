/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap,
  MapPin,
  Network,
  PlayCircle,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const iconMap = {
  badge: BadgeCheck,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  building: Building2,
  calendar: CalendarDays,
  chart: BarChart3,
  graduation: GraduationCap,
  map: MapPin,
  network: Network,
  play: PlayCircle,
  spark: Sparkles,
  target: Target,
  users: Users,
};

export default function BlueprintPage({
  eyebrow,
  title,
  summary,
  primaryCta = ["Map my pathway", "/admissions"],
  secondaryCta = ["Meet the founders", "/leadership"],
  proof = ["Founder-led credibility", "Applied AI fluency", "Employability outcomes"],
  sections = [],
  finalCta,
}) {
  return (
    <main className="blueprint-page">
      <style>{styles}</style>
      <section className="blueprint-hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="blueprint-orbit" aria-hidden="true" />
        <div className="blueprint-container blueprint-hero-inner">
          <p className="blueprint-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="blueprint-summary">{summary}</p>
          <div className="blueprint-proof">
            {proof.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="blueprint-actions">
            <Link className="blueprint-btn blueprint-btn-primary" to={primaryCta[1]}>
              {primaryCta[0]} <ArrowRight size={17} />
            </Link>
            <Link className="blueprint-btn blueprint-btn-secondary" to={secondaryCta[1]}>
              {secondaryCta[0]}
            </Link>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section className={`blueprint-section ${section.tone === "dark" ? "is-dark" : ""}`} key={section.title}>
          <div className="blueprint-container">
            <div className="blueprint-section-head">
              <p className="blueprint-eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              {section.copy && <p>{section.copy}</p>}
            </div>

            {section.type === "steps" ? (
              <div className="blueprint-steps">
                {section.items.map((item, index) => (
                  <article className="blueprint-step" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="blueprint-card-grid">
                {section.items.map((item) => {
                  const Icon = iconMap[item.icon] || Sparkles;
                  return (
                    <article className="blueprint-card" key={item.title}>
                      <div className="blueprint-card-icon"><Icon size={23} /></div>
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                      {item.points && (
                        <ul>
                          {item.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      )}
                      {item.link && <Link to={item.link[1]}>{item.link[0]} <ArrowRight size={15} /></Link>}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      ))}

      {finalCta && (
        <section className="blueprint-final">
          <div className="blueprint-container">
            <p className="blueprint-eyebrow">{finalCta.eyebrow}</p>
            <h2>{finalCta.title}</h2>
            <p>{finalCta.copy}</p>
            <Link className="blueprint-btn blueprint-btn-primary" to={finalCta.to}>
              {finalCta.label} <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

const styles = `
  .blueprint-page {
    min-height: 100vh;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
    overflow: hidden;
  }

  .blueprint-container {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
  }

  .blueprint-hero {
    position: relative;
    min-height: 76vh;
    display: flex;
    align-items: center;
    padding: 138px 0 84px;
    background:
      radial-gradient(circle at 72% 30%, rgba(0, 212, 168, 0.17), transparent 34%),
      linear-gradient(135deg, #020808 0%, #071212 52%, #020808 100%);
    isolation: isolate;
  }

  .blueprint-grid {
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
      linear-gradient(rgba(143, 239, 213, 0.052) 1px, transparent 1px),
      linear-gradient(90deg, rgba(143, 239, 213, 0.045) 1px, transparent 1px);
    background-size: 58px 58px;
    mask-image: linear-gradient(to bottom, transparent, black 18%, black 78%, transparent);
  }

  .blueprint-orbit {
    position: absolute;
    right: 8%;
    top: 22%;
    z-index: -1;
    width: min(42vw, 520px);
    aspect-ratio: 1;
    border: 1px solid rgba(143, 239, 213, 0.16);
    border-radius: 999px;
    box-shadow: inset 0 0 70px rgba(0, 212, 168, 0.08), 0 0 90px rgba(0, 212, 168, 0.08);
    animation: blueprintFloat 8s ease-in-out infinite;
  }

  .blueprint-orbit::before,
  .blueprint-orbit::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    border: 1px solid rgba(143, 239, 213, 0.11);
  }

  .blueprint-orbit::before { inset: 13%; }
  .blueprint-orbit::after { inset: 29%; background: rgba(0, 212, 168, 0.035); }

  .blueprint-hero-inner {
    position: relative;
    z-index: 1;
  }

  .blueprint-eyebrow {
    margin: 0 0 18px;
    color: #00d4a8;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .blueprint-hero h1 {
    max-width: 920px;
    margin: 0 0 24px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(42px, 7vw, 84px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .blueprint-summary {
    max-width: 720px;
    margin: 0 0 32px;
    color: rgba(240, 242, 245, 0.66);
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.68;
  }

  .blueprint-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 34px;
  }

  .blueprint-proof span {
    border: 1px solid rgba(143, 239, 213, 0.18);
    border-radius: 8px;
    padding: 10px 13px;
    color: #8fefd5;
    background: rgba(143, 239, 213, 0.045);
    font-size: 13px;
  }

  .blueprint-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .blueprint-btn {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 8px;
    padding: 12px 20px;
    text-decoration: none;
    font-weight: 800;
  }

  .blueprint-btn-primary {
    background: #00d4a8;
    color: #031a14;
  }

  .blueprint-btn-secondary {
    color: #f0f2f5;
    border: 1px solid rgba(143, 239, 213, 0.22);
    background: rgba(255, 255, 255, 0.035);
  }

  .blueprint-section {
    padding: 88px 0;
    background: #020808;
  }

  .blueprint-section.is-dark {
    background:
      radial-gradient(circle at 18% 12%, rgba(0, 212, 168, 0.1), transparent 28%),
      #071212;
    border-top: 1px solid rgba(143, 239, 213, 0.08);
    border-bottom: 1px solid rgba(143, 239, 213, 0.08);
  }

  .blueprint-section-head {
    max-width: 780px;
    margin-bottom: 36px;
  }

  .blueprint-section-head h2,
  .blueprint-final h2 {
    margin: 0;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(32px, 4.6vw, 58px);
    line-height: 1.04;
  }

  .blueprint-section-head > p:last-child,
  .blueprint-final p {
    max-width: 720px;
    margin: 18px 0 0;
    color: rgba(240, 242, 245, 0.62);
    font-size: 17px;
    line-height: 1.7;
  }

  .blueprint-card-grid,
  .blueprint-steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .blueprint-card,
  .blueprint-step {
    min-height: 260px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    border-radius: 8px;
    padding: 24px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.022));
  }

  .blueprint-card-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin-bottom: 22px;
    border-radius: 8px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
  }

  .blueprint-card > span,
  .blueprint-step > span {
    color: #f7b955;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .blueprint-card h3,
  .blueprint-step h3 {
    margin: 10px 0 10px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 22px;
    line-height: 1.12;
  }

  .blueprint-card p,
  .blueprint-step p {
    margin: 0;
    color: rgba(240, 242, 245, 0.6);
    line-height: 1.62;
  }

  .blueprint-card ul {
    display: grid;
    gap: 8px;
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  .blueprint-card li {
    color: rgba(240, 242, 245, 0.62);
    font-size: 14px;
  }

  .blueprint-card li::before {
    content: "+";
    color: #00d4a8;
    margin-right: 8px;
    font-weight: 900;
  }

  .blueprint-card a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #8fefd5;
    text-decoration: none;
    font-weight: 800;
  }

  .blueprint-final {
    padding: 96px 0 110px;
    text-align: center;
    background:
      radial-gradient(circle at 50% 0%, rgba(0, 212, 168, 0.18), transparent 34%),
      linear-gradient(180deg, #071212, #020808);
  }

  .blueprint-final .blueprint-container {
    max-width: 860px;
  }

  .blueprint-final .blueprint-btn {
    margin-top: 30px;
  }

  @keyframes blueprintFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(14px); }
  }

  @media (max-width: 980px) {
    .blueprint-card-grid,
    .blueprint-steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .blueprint-orbit {
      right: -18%;
      opacity: 0.42;
      width: 72vw;
    }
  }

  @media (max-width: 640px) {
    .blueprint-container {
      width: min(100% - 34px, 1180px);
    }

    .blueprint-hero {
      min-height: auto;
      padding: 112px 0 64px;
    }

    .blueprint-actions {
      flex-direction: column;
    }

    .blueprint-btn {
      width: 100%;
    }

    .blueprint-card-grid,
    .blueprint-steps {
      grid-template-columns: 1fr;
    }

    .blueprint-section {
      padding: 68px 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .blueprint-orbit {
      animation: none;
    }
  }
`;
