const slides = [
  ["01", "Diagnose", "Map a learner or team's current AI readiness."],
  ["02", "Build", "Create real artifacts using AI inside role-based workflows."],
  ["03", "Prove", "Turn learning into portfolios, demos, and employability signals."],
  ["04", "Transform", "Move from tool use to measurable career or business outcomes."],
];

export default function Experience3D() {
  return (
    <section className="elx-3d" aria-label="Elevox animated transformation pathway">
      <style>{styles}</style>
      <div className="elx-3d-inner">
        <div className="elx-3d-copy">
          <p className="elx-3d-kicker">Transformation engine</p>
          <h2>Learning that zooms into outcomes, then scales back into careers.</h2>
          <p>
            A cinematic pathway for students, professionals, teams, and campuses:
            diagnose the gap, build with AI, prove the work, and move upward.
          </p>
        </div>

        <div className="elx-3d-stage" aria-hidden="true">
          <div className="elx-3d-card elx-3d-card-a">
            <span>AI Fluency</span>
            <strong>Zoom in</strong>
          </div>
          <div className="elx-3d-card elx-3d-card-b">
            <span>Industry Proof</span>
            <strong>Build up</strong>
          </div>
          <div className="elx-3d-card elx-3d-card-c">
            <span>Employability</span>
            <strong>Scale out</strong>
          </div>
        </div>

        <div className="elx-slider" aria-label="Elevox pathway slider">
          <div className="elx-slider-track">
            {[...slides, ...slides].map(([num, title, text], index) => (
              <article className="elx-slide" key={`${num}-${index}`}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = `
  .elx-3d {
    background:
      radial-gradient(circle at 74% 45%, rgba(0, 212, 168, 0.14), transparent 28%),
      linear-gradient(180deg, #020808, #071212 48%, #020808);
    color: #f0f2f5;
    border-top: 1px solid rgba(143, 239, 213, 0.09);
    border-bottom: 1px solid rgba(143, 239, 213, 0.09);
    overflow: hidden;
    font-family: Inter, system-ui, sans-serif;
  }

  .elx-3d-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 86px 24px;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr 320px;
    gap: 42px;
    align-items: center;
  }

  .elx-3d-kicker {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 16px;
  }

  .elx-3d-copy h2 {
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: 0;
    margin: 0 0 18px;
  }

  .elx-3d-copy p:last-child {
    color: rgba(240, 242, 245, 0.62);
    line-height: 1.7;
    max-width: 500px;
    margin: 0;
  }

  .elx-3d-stage {
    position: relative;
    height: 430px;
    perspective: 1100px;
  }

  .elx-3d-stage::before {
    content: "";
    position: absolute;
    inset: 12% 6%;
    border-radius: 50%;
    border: 1px solid rgba(143, 239, 213, 0.16);
    transform: rotateX(68deg);
    box-shadow: 0 0 90px rgba(0, 212, 168, 0.11);
  }

  .elx-3d-card {
    position: absolute;
    width: min(300px, 72%);
    min-height: 150px;
    padding: 24px;
    border: 1px solid rgba(143, 239, 213, 0.18);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025));
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    transform-style: preserve-3d;
    animation: elxZoomOrbit 7s ease-in-out infinite;
  }

  .elx-3d-card span {
    display: block;
    color: rgba(240, 242, 245, 0.55);
    font-size: 13px;
    margin-bottom: 16px;
  }

  .elx-3d-card strong {
    display: block;
    color: #8fefd5;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 28px;
  }

  .elx-3d-card-a { left: 4%; top: 14%; }
  .elx-3d-card-b { right: 3%; top: 34%; animation-delay: -2.1s; }
  .elx-3d-card-c { left: 18%; bottom: 6%; animation-delay: -4.2s; }

  @keyframes elxZoomOrbit {
    0%, 100% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(-12deg) scale(0.94); }
    35% { transform: translate3d(16px, -24px, 90px) rotateX(8deg) rotateY(16deg) scale(1.06); }
    70% { transform: translate3d(-18px, 18px, -30px) rotateX(-5deg) rotateY(-20deg) scale(0.9); }
  }

  .elx-slider {
    height: 360px;
    overflow: hidden;
    border-left: 1px solid rgba(143, 239, 213, 0.12);
    mask-image: linear-gradient(to bottom, transparent, black 14%, black 86%, transparent);
  }

  .elx-slider-track {
    display: flex;
    flex-direction: column;
    gap: 14px;
    animation: elxSlideUp 12s linear infinite;
    padding-left: 22px;
  }

  .elx-slide {
    min-height: 152px;
    border-radius: 12px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    background: rgba(255, 255, 255, 0.035);
    padding: 20px;
  }

  .elx-slide span {
    color: #00d4a8;
    font-weight: 800;
    font-size: 12px;
  }

  .elx-slide h3 {
    margin: 12px 0 8px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 20px;
  }

  .elx-slide p {
    margin: 0;
    color: rgba(240, 242, 245, 0.58);
    line-height: 1.55;
    font-size: 14px;
  }

  @keyframes elxSlideUp {
    from { transform: translateY(0); }
    to { transform: translateY(-664px); }
  }

  @media (max-width: 1080px) {
    .elx-3d-inner { grid-template-columns: 1fr; }
    .elx-3d-stage { height: 380px; }
    .elx-slider { height: 300px; border-left: 0; }
    .elx-slider-track { padding-left: 0; }
  }

  @media (max-width: 560px) {
    .elx-3d-inner { padding: 64px 20px; gap: 26px; }
    .elx-3d-stage { height: 320px; }
    .elx-3d-card { width: 78%; min-height: 128px; padding: 18px; }
    .elx-3d-card strong { font-size: 23px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .elx-3d-card,
    .elx-slider-track {
      animation: none;
    }
  }
`;
