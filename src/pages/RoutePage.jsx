import { ArrowRight, Brain, BriefcaseBusiness, GraduationCap, Network } from "lucide-react";

const icons = [Brain, GraduationCap, BriefcaseBusiness, Network];

export default function RoutePage({ eyebrow, title, summary, focus = [] }) {
  return (
    <main className="elx-route-page">
      <style>{styles}</style>
      <section className="elx-route-hero">
        <div className="elx-route-grid" aria-hidden="true" />
        <div className="elx-route-orbit" aria-hidden="true" />

        <div className="elx-route-content">
          <p className="elx-route-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="elx-route-summary">{summary}</p>

          <div className="elx-route-proof" aria-label="Elevox positioning">
            <span>Industry experience</span>
            <span>AI urgency</span>
            <span>Employability bridge</span>
          </div>

          <div className="elx-route-actions">
            <a href="/admissions" className="elx-route-primary">
              Map my pathway <ArrowRight size={16} />
            </a>
            <a href="/leadership" className="elx-route-secondary">Meet the founders</a>
          </div>
        </div>
      </section>

      <section className="elx-route-focus" aria-label="Page focus areas">
        {focus.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="elx-focus-card" key={item}>
              <Icon size={22} />
              <h2>{item}</h2>
              <p>Built around transformation, proof, and practical AI fluency.</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

const styles = `
  .elx-route-page {
    min-height: 100vh;
    background: #020808;
    color: #eaf6f2;
    font-family: Inter, system-ui, sans-serif;
    overflow: hidden;
  }

  .elx-route-hero {
    position: relative;
    min-height: 76vh;
    display: flex;
    align-items: center;
    padding: 140px 6% 80px;
    background:
      radial-gradient(circle at 78% 28%, rgba(24, 200, 163, 0.18), transparent 32%),
      linear-gradient(135deg, #020808 0%, #071212 52%, #020808 100%);
    isolation: isolate;
  }

  .elx-route-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(143, 239, 213, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(143, 239, 213, 0.055) 1px, transparent 1px);
    background-size: 54px 54px;
    mask-image: linear-gradient(to bottom, transparent, black 18%, black 76%, transparent);
    opacity: 0.55;
  }

  .elx-route-orbit {
    position: absolute;
    right: 8%;
    top: 22%;
    width: min(42vw, 520px);
    aspect-ratio: 1;
    border: 1px solid rgba(143, 239, 213, 0.16);
    border-radius: 999px;
    box-shadow: inset 0 0 70px rgba(24, 200, 163, 0.08), 0 0 90px rgba(24, 200, 163, 0.08);
    animation: elxFloat 8s ease-in-out infinite;
  }

  .elx-route-orbit::before,
  .elx-route-orbit::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    border: 1px solid rgba(143, 239, 213, 0.11);
  }

  .elx-route-orbit::before { inset: 13%; }
  .elx-route-orbit::after { inset: 29%; background: rgba(24, 200, 163, 0.035); }

  .elx-route-content {
    position: relative;
    z-index: 1;
    max-width: 780px;
  }

  .elx-route-eyebrow {
    color: #18c8a3;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .elx-route-content h1 {
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(42px, 7vw, 82px);
    line-height: 0.98;
    letter-spacing: 0;
    margin: 0 0 24px;
    max-width: 860px;
  }

  .elx-route-summary {
    color: #9fbdb6;
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.65;
    max-width: 680px;
    margin: 0 0 34px;
  }

  .elx-route-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 34px;
  }

  .elx-route-proof span {
    border: 1px solid rgba(143, 239, 213, 0.18);
    color: #8fefd5;
    background: rgba(143, 239, 213, 0.045);
    border-radius: 8px;
    padding: 10px 13px;
    font-size: 13px;
  }

  .elx-route-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .elx-route-primary,
  .elx-route-secondary {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    padding: 12px 20px;
    text-decoration: none;
    font-weight: 700;
  }

  .elx-route-primary {
    background: #18c8a3;
    color: #031a14;
  }

  .elx-route-secondary {
    color: #eaf6f2;
    border: 1px solid rgba(143, 239, 213, 0.24);
  }

  .elx-route-focus {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    background: rgba(143, 239, 213, 0.08);
  }

  .elx-focus-card {
    min-height: 210px;
    background: #071212;
    padding: 34px 28px;
  }

  .elx-focus-card svg {
    color: #18c8a3;
    margin-bottom: 24px;
  }

  .elx-focus-card h2 {
    margin: 0 0 10px;
    font-size: 19px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
  }

  .elx-focus-card p {
    color: #9fbdb6;
    line-height: 1.55;
    margin: 0;
  }

  @keyframes elxFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(14px); }
  }

  @media (max-width: 900px) {
    .elx-route-hero { padding-top: 118px; }
    .elx-route-orbit { opacity: 0.38; right: -24%; width: 78vw; }
    .elx-route-focus { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .elx-route-hero { min-height: auto; padding: 104px 20px 64px; }
    .elx-route-proof { flex-direction: column; align-items: flex-start; }
    .elx-route-actions { flex-direction: column; }
    .elx-route-primary, .elx-route-secondary { justify-content: center; width: 100%; }
    .elx-route-focus { grid-template-columns: 1fr; }
    .elx-focus-card { min-height: auto; padding: 28px 22px; }
  }
`;
