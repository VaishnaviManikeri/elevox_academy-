const founders = [
  {
    name: "Dr. Ananya Sharma",
    role: "Co-Founder, AI Strategy",
    journey: "Former AI research lead who moved from building production models to building the people who can use them responsibly.",
    expertise: "NLP, model evaluation, AI product strategy, enterprise adoption",
    achievements: ["Led applied AI teams across healthcare and fintech", "20+ AI research and industry papers", "Advisor to early-stage AI product teams"],
    thought: "AI education must move from tool demos to decision capability.",
    intro: "Founder introduction",
    courseVideo: "Stream-wise course walkthrough",
    linkedin: "https://www.linkedin.com",
    media: ["AI India Today interview", "Future of Work panel", "Applied AI keynote"],
    specializations: ["AI Strategy", "NLP", "Responsible AI"],
  },
  {
    name: "Vikram Mehta",
    role: "Co-Founder, Technology",
    journey: "Built AI systems, data platforms, and automation products before designing Elevox's technical learning spine.",
    expertise: "MLOps, cloud AI architecture, computer vision, LLM applications",
    achievements: ["Scaled ML systems for high-volume teams", "Speaker at 50+ engineering forums", "Mentored AI engineers across enterprise teams"],
    thought: "Employability comes from shipping, measuring, and explaining systems.",
    intro: "Technology founder introduction",
    courseVideo: "Developer and operations stream walkthrough",
    linkedin: "https://www.linkedin.com",
    media: ["Cloud AI summit", "MLOps India forum", "Engineering leadership podcast"],
    specializations: ["MLOps", "LLM Apps", "Cloud AI"],
  },
  {
    name: "Priya Patel",
    role: "Co-Founder, Learning Experience",
    journey: "Education leader focused on converting complex AI concepts into practical, confidence-building learning journeys.",
    expertise: "Curriculum design, learner success, assessment, career readiness",
    achievements: ["Designed programmes for 3,000+ learners", "Built placement-readiness frameworks", "Former academic innovation lead"],
    thought: "The final assessment is not a test. It is whether the learner can be trusted with real work.",
    intro: "Learning philosophy introduction",
    courseVideo: "Student and professional pathway walkthrough",
    linkedin: "https://www.linkedin.com",
    media: ["Education innovation roundtable", "Career readiness forum", "Women in AI education"],
    specializations: ["Curriculum", "Career Coaching", "Assessment"],
  },
];

export default function Leadership() {
  return (
    <main className="leadership-page">
      <style>{styles}</style>
      <section className="leadership-hero">
        <p className="eyebrow">Leadership & Founders</p>
        <h1>Credibility before courses.</h1>
        <p>
          Elevox is founder-led because transformation needs people who have built,
          hired, mentored, and shipped in the real AI economy.
        </p>
      </section>

      <section className="founder-profiles">
        {founders.map((founder, index) => (
          <article className="founder-profile" key={founder.name}>
            <div className="founder-visual">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{founder.name.split(" ").map((part) => part[0]).join("")}</strong>
            </div>

            <div className="founder-content">
              <p className="eyebrow">{founder.role}</p>
              <h2>{founder.name}</h2>
              <p className="journey">{founder.journey}</p>

              <div className="profile-grid">
                <Info title="Industry expertise" text={founder.expertise} />
                <Info title="Thought leadership" text={founder.thought} />
                <Info title="Video introduction" text={founder.intro} />
                <Info title="Course detail video" text={founder.courseVideo} />
              </div>

              <div className="tag-row">
                {founder.specializations.map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className="split-list">
                <div>
                  <h3>Achievements</h3>
                  {founder.achievements.map((item) => <p key={item}>{item}</p>)}
                </div>
                <div>
                  <h3>Media appearances</h3>
                  {founder.media.map((item) => <p key={item}>{item}</p>)}
                </div>
              </div>

              <a className="linkedin-link" href={founder.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function Info({ title, text }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const styles = `
  .leadership-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
  }

  .leadership-hero {
    max-width: 1160px;
    margin: 0 auto;
    padding: 78px 24px 40px;
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 16px;
  }

  .leadership-hero h1 {
    max-width: 780px;
    margin: 0 0 20px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(46px, 8vw, 88px);
    line-height: 0.96;
  }

  .leadership-hero p:last-child {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
  }

  .founder-profiles {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px 88px;
    display: grid;
    gap: 26px;
  }

  .founder-profile {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 28px;
    padding: 28px;
    border-radius: 18px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
  }

  .founder-visual {
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    padding: 22px;
    background:
      radial-gradient(circle at 70% 20%, rgba(0,212,168,0.26), transparent 32%),
      linear-gradient(145deg, #071212, #0d2a29);
    border: 1px solid rgba(143, 239, 213, 0.14);
  }

  .founder-visual span {
    color: rgba(240, 242, 245, 0.46);
    font-weight: 900;
  }

  .founder-visual strong {
    color: #8fefd5;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 62px;
  }

  .founder-content h2 {
    margin: 0 0 12px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(30px, 4vw, 48px);
  }

  .journey,
  .info-card p,
  .split-list p {
    color: rgba(240, 242, 245, 0.62);
    line-height: 1.6;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 22px 0;
  }

  .info-card {
    border: 1px solid rgba(143, 239, 213, 0.1);
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
    padding: 18px;
  }

  .info-card h3,
  .split-list h3 {
    margin: 0 0 8px;
    color: #8fefd5;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .tag-row span {
    border-radius: 8px;
    border: 1px solid rgba(143, 239, 213, 0.14);
    color: #00d4a8;
    padding: 8px 10px;
    background: rgba(0, 212, 168, 0.055);
  }

  .split-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .linkedin-link {
    display: inline-block;
    margin-top: 22px;
    padding: 12px 16px;
    border-radius: 8px;
    background: #00d4a8;
    color: #031a14;
    text-decoration: none;
    font-weight: 900;
  }

  @media (max-width: 860px) {
    .founder-profile,
    .profile-grid,
    .split-list {
      grid-template-columns: 1fr;
    }

    .founder-visual {
      min-height: 220px;
    }
  }
`;
