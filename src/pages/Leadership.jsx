const founders = [
  {
    name: "Dr. Ananya Sharma",
    role: "Co-Founder, AI Strategy",
    journey: "Former AI research lead at Microsoft Research, Dr. Sharma transitioned from building state-of-the-art NLP models to building the people who can deploy them responsibly. Her decade-long journey spans academia, enterprise AI, and product leadership.",
    expertise: "Natural Language Processing, Model Evaluation, AI Product Strategy, Enterprise AI Adoption, Responsible AI Frameworks",
    thought: "AI education must move from tool demos to decision capability. The real test isn't knowing how to use a model—it's knowing when and why to use it.",
    intro: "Dr. Sharma shares her vision for Elevox and why AI education needs to evolve from technical training to strategic decision-making.",
    courseVideo: "A comprehensive walkthrough of the AI Strategy stream—covering model evaluation, NLP applications, product strategy, and responsible deployment.",
    linkedin: "https://www.linkedin.com/in/drananyasharma",
    media: [
      "AI India Today: 'The Future of Enterprise AI'",
      "Future of Work Panel at TechSparks 2025",
      "Keynote: 'Responsible AI in Production' at Applied AI Summit",
      "Guest Lecturer at IIT Bombay AI Program",
      "Featured in YourStory's 'Women in AI' Series"
    ],
    specializations: ["AI Strategy", "NLP", "Responsible AI", "Enterprise Architecture", "Product Leadership"],
    achievements: [
      "Led applied AI teams across healthcare and fintech for 8+ years",
      "Published 20+ AI research papers and industry white papers",
      "Advisor to 12 early-stage AI product teams",
      "Built NLP systems used by 50+ enterprise clients",
      "Designed AI governance frameworks for 3 Fortune 500 companies"
    ],
    stats: [
      { label: "Years Experience", value: "12+" },
      { label: "Papers Published", value: "22" },
      { label: "Enterprise Clients", value: "50+" },
      { label: "Teams Mentored", value: "200+" }
    ],
    quote: "The most important skill in AI is knowing when not to use it."
  },
  {
    name: "Vikram Mehta",
    role: "Co-Founder, Technology",
    journey: "Vikram's career spans building AI systems at scale—from data platforms at Flipkart to automation products at UiPath. He now designs Elevox's technical spine, ensuring every learner builds production-ready skills.",
    expertise: "MLOps, Cloud AI Architecture, Computer Vision, LLM Applications, Distributed Systems, Production ML",
    thought: "Employability comes from shipping, measuring, and explaining systems. Theoretical knowledge is worthless without practical deployment experience.",
    intro: "Vikram discusses the technology philosophy behind Elevox and why hands-on learning is non-negotiable for AI careers.",
    courseVideo: "Deep dive into the Developer stream—covering MLOps pipelines, cloud deployment, computer vision, and LLM application development.",
    linkedin: "https://www.linkedin.com/in/vikrammehta",
    media: [
      "Cloud AI Summit: 'Scaling ML in Production'",
      "MLOps India Forum 2025 Keynote Speaker",
      "Engineering Leadership Podcast: 'Building AI Teams'",
      "Featured in Analytics India Magazine's 'Top ML Engineers'",
      "Guest Speaker at AWS re:Invent 2025"
    ],
    specializations: ["MLOps", "LLM Applications", "Cloud AI", "Distributed Systems", "Production ML"],
    achievements: [
      "Scaled ML systems to handle 1M+ requests per second",
      "Speaker at 50+ engineering forums worldwide",
      "Mentored 100+ AI engineers across enterprise teams",
      "Built computer vision systems for autonomous warehouse robots",
      "Reduced model deployment time from weeks to hours"
    ],
    stats: [
      { label: "Systems Scaled", value: "1M+/sec" },
      { label: "Forums Spoken", value: "50+" },
      { label: "Engineers Mentored", value: "100+" },
      { label: "Years Experience", value: "10+" }
    ],
    quote: "AI is not about models—it's about systems that deliver value consistently."
  },
  {
    name: "Priya Patel",
    role: "Co-Founder, Learning Experience",
    journey: "With a background in educational psychology and curriculum design, Priya has transformed how complex AI concepts are taught. She previously led learning innovation at a top ed-tech firm and now shapes Elevox's learner-first approach.",
    expertise: "Curriculum Design, Learner Success, Assessment Strategy, Career Readiness, Educational Technology",
    thought: "The final assessment is not a test. It is whether the learner can be trusted with real work. We measure readiness, not memorization.",
    intro: "Priya shares her learning philosophy and how Elevox creates confidence-building educational journeys.",
    courseVideo: "Walkthrough of the Professional Pathway—designed for career transition, skill acceleration, and placement readiness.",
    linkedin: "https://www.linkedin.com/in/priyapatel",
    media: [
      "Education Innovation Roundtable: 'Future of Tech Learning'",
      "Career Readiness Forum at UNESCO Conference",
      "Women in AI Education Summit Keynote",
      "Featured in YourStory's 'EdTech Leaders 2025'",
      "Guest Lecturer at Harvard EdTech Program"
    ],
    specializations: ["Curriculum Design", "Career Coaching", "Assessment", "EdTech Strategy", "Learning Science"],
    achievements: [
      "Designed programmes for 3,000+ learners with 85% completion rate",
      "Built placement-readiness frameworks adopted by 20+ institutions",
      "Led academic innovation team at leading ed-tech company",
      "Developed adaptive learning paths for AI education",
      "Achieved 92% learner satisfaction rate across programmes"
    ],
    stats: [
      { label: "Learners Impacted", value: "3,000+" },
      { label: "Completion Rate", value: "85%" },
      { label: "Institutions Served", value: "20+" },
      { label: "Satisfaction Rate", value: "92%" }
    ],
    quote: "Learning happens when challenge meets support at the right moment."
  }
];

export default function Leadership() {
  return (
    <main className="leadership-page">
      <style>{styles}</style>
      <section className="leadership-hero">
        <p className="eyebrow">Leadership Team</p>
        <h1>One of the strongest assets of the brand.</h1>
        <p>
          Meet the founders behind Elevox. Each brings decades of experience in AI research,
          production systems, and education. Our credibility comes from people who have built,
          deployed, and scaled AI in the real world.
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
                <Info title="Industry Expertise" text={founder.expertise} />
                <Info title="Thought Leadership" text={founder.thought} />
                <Info title="Video Introduction" text={founder.intro} />
                <Info title="Course Detail Video" text={founder.courseVideo} />
              </div>

              <div className="tag-row">
                {founder.specializations.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="achievements-media-grid">
                <div className="achievements">
                  <h3>🏆 Key Achievements</h3>
                  {founder.achievements.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
                <div className="media">
                  <h3>🎤 Media Appearances</h3>
                  {founder.media.map((item) => (
                    <p key={item}>• {item}</p>
                  ))}
                </div>
              </div>

              <div className="stats-row">
                {founder.stats.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <blockquote className="founder-quote">"{founder.quote}"</blockquote>

              <a 
                className="linkedin-link" 
                href={founder.linkedin} 
                target="_blank" 
                rel="noreferrer"
              >
                <span>LinkedIn Profile</span>
                <span>→</span>
              </a>
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
    font-family: Inter, system-ui, -apple-system, sans-serif;
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
    background: linear-gradient(135deg, #ffffff 0%, #00d4a8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    gap: 40px;
  }

  .founder-profile {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 32px;
    padding: 32px;
    border-radius: 18px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
    transition: all 0.3s ease;
  }

  .founder-profile:hover {
    border-color: rgba(143, 239, 213, 0.3);
    background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  .founder-visual {
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    padding: 24px;
    background:
      radial-gradient(circle at 70% 20%, rgba(0,212,168,0.26), transparent 40%),
      linear-gradient(145deg, #071212, #0d2a29);
    border: 1px solid rgba(143, 239, 213, 0.14);
  }

  .founder-visual span {
    color: rgba(240, 242, 245, 0.46);
    font-weight: 900;
    font-size: 14px;
  }

  .founder-visual strong {
    color: #8fefd5;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 72px;
    text-shadow: 0 0 30px rgba(0, 212, 168, 0.2);
  }

  .founder-content h2 {
    margin: 0 0 12px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(30px, 4vw, 48px);
  }

  .journey {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 20px;
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
    padding: 16px;
    transition: all 0.3s ease;
  }

  .info-card:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(143, 239, 213, 0.2);
  }

  .info-card h3 {
    margin: 0 0 8px;
    color: #8fefd5;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .info-card p {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.5;
    font-size: 14px;
    margin: 0;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0 24px;
  }

  .tag-row span {
    border-radius: 8px;
    border: 1px solid rgba(143, 239, 213, 0.14);
    color: #00d4a8;
    padding: 6px 12px;
    font-size: 13px;
    background: rgba(0, 212, 168, 0.055);
    transition: all 0.3s ease;
  }

  .tag-row span:hover {
    background: rgba(0, 212, 168, 0.12);
    border-color: rgba(143, 239, 213, 0.3);
  }

  .achievements-media-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 24px 0;
  }

  .achievements h3,
  .media h3 {
    color: #8fefd5;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .achievements p,
  .media p {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.6;
    font-size: 14px;
    margin: 0 0 6px 0;
    padding: 0;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 24px 0;
    padding: 20px;
    background: rgba(0, 212, 168, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(143, 239, 213, 0.08);
  }

  .stat-item {
    text-align: center;
  }

  .stat-item strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 28px;
    color: #00d4a8;
  }

  .stat-item span {
    color: rgba(240, 242, 245, 0.5);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .founder-quote {
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(18px, 2vw, 24px);
    color: rgba(240, 242, 245, 0.8);
    font-style: italic;
    margin: 20px 0 24px;
    padding: 20px 24px;
    border-left: 3px solid #00d4a8;
    background: rgba(0, 212, 168, 0.04);
    border-radius: 0 8px 8px 0;
  }

  .linkedin-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
    padding: 14px 24px;
    border-radius: 8px;
    background: linear-gradient(135deg, #00d4a8, #00b894);
    color: #031a14;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s ease;
    border: none;
  }

  .linkedin-link:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(0, 212, 168, 0.3);
  }

  .linkedin-link span:last-child {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  .linkedin-link:hover span:last-child {
    transform: translateX(4px);
  }

  @media (max-width: 860px) {
    .founder-profile {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 24px;
    }

    .profile-grid,
    .achievements-media-grid,
    .stats-row {
      grid-template-columns: 1fr;
    }

    .founder-visual {
      min-height: 200px;
    }

    .founder-visual strong {
      font-size: 48px;
    }

    .stats-row {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .stat-item strong {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    .leadership-hero {
      padding: 40px 16px;
    }

    .founder-profiles {
      padding: 0 16px 64px;
      gap: 32px;
    }

    .founder-profile {
      padding: 16px;
    }

    .profile-grid {
      gap: 8px;
    }

    .info-card {
      padding: 12px;
    }

    .stats-row {
      grid-template-columns: 1fr 1fr;
      padding: 16px;
    }
  }
`;