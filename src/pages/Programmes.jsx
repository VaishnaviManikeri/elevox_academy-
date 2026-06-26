import { Link, useParams } from "react-router-dom";

const programmes = [
  {
    slug: "foundations",
    title: "Elevox Foundations",
    category: "Foundational",
    duration: "8 weeks",
    fees: "Rs. 24,000",
    format: "Hybrid live cohort",
    certification: "Elevox AI Fluency Certificate",
    eligibility: "Students, fresh graduates, non-technical professionals",
    summary: "Build practical AI literacy and confidence before choosing a specialization.",
    outcomes: ["AI-first thinking", "Prompt and workflow fluency", "Portfolio-ready mini projects", "Career direction clarity"],
    careers: ["AI-enabled analyst", "Junior automation associate", "Digital transformation intern"],
    curriculum: ["AI landscape and use cases", "Data literacy", "Prompt systems", "No-code AI workflows", "Ethics and responsible use"],
    tools: ["ChatGPT", "Claude", "Perplexity", "Google AI Studio", "Airtable"],
    projects: ["AI research assistant", "Automated content workflow", "Data insight dashboard"],
  },
  {
    slug: "marketing",
    title: "AI for Marketing",
    category: "Domain Track",
    duration: "10 weeks",
    fees: "Rs. 36,000",
    format: "Weekend cohort",
    certification: "AI Marketing Operator Certificate",
    eligibility: "Marketing students, founders, creators, growth teams",
    summary: "Use AI to research markets, create campaigns, personalize journeys, and measure growth.",
    outcomes: ["Campaign automation", "AI content systems", "Customer segmentation", "Growth experimentation"],
    careers: ["AI marketing specialist", "Growth analyst", "Content automation strategist"],
    curriculum: ["Audience intelligence", "Content engines", "Ad creative testing", "CRM automation", "Analytics storytelling"],
    tools: ["ChatGPT", "Canva AI", "HubSpot", "Meta Ads", "Looker Studio"],
    projects: ["30-day campaign engine", "Persona research board", "Automated newsletter workflow"],
  },
  {
    slug: "hr",
    title: "AI for HR",
    category: "Domain Track",
    duration: "8 weeks",
    fees: "Rs. 32,000",
    format: "Live online plus labs",
    certification: "AI HR Transformation Certificate",
    eligibility: "HR students, recruiters, people ops professionals",
    summary: "Apply AI to hiring, workforce planning, people analytics, and employee experience.",
    outcomes: ["Smarter screening", "People analytics basics", "Interview workflow design", "HR automation"],
    careers: ["AI recruiter", "People analytics associate", "HR automation specialist"],
    curriculum: ["Recruitment workflows", "Bias and ethics", "HR analytics", "Employee support bots", "Talent intelligence"],
    tools: ["ChatGPT", "LinkedIn", "Notion AI", "Google Sheets", "Zapier"],
    projects: ["Screening rubric system", "AI onboarding assistant", "Attrition insight report"],
  },
  {
    slug: "business-analysts",
    title: "AI for Business Analysts",
    category: "Domain Track",
    duration: "12 weeks",
    fees: "Rs. 42,000",
    format: "Hybrid project cohort",
    certification: "Applied AI Business Analyst Certificate",
    eligibility: "MBA students, analysts, consultants, operations teams",
    summary: "Turn business problems into AI-ready workflows, dashboards, and decision systems.",
    outcomes: ["Problem framing", "Dashboard storytelling", "Process automation", "Stakeholder-ready documentation"],
    careers: ["AI business analyst", "Product analyst", "Transformation associate"],
    curriculum: ["AI opportunity mapping", "Data interpretation", "Workflow design", "Requirement writing", "Decision dashboards"],
    tools: ["ChatGPT", "Excel", "Power BI", "Miro", "Zapier"],
    projects: ["AI readiness audit", "Operations dashboard", "Automation business case"],
  },
  {
    slug: "developers",
    title: "AI for Developers",
    category: "Technical Track",
    duration: "12 weeks",
    fees: "Rs. 48,000",
    format: "Code labs and capstone",
    certification: "AI Native Developer Certificate",
    eligibility: "Developers, CS students, technical founders",
    summary: "Build AI-native products with APIs, agents, retrieval, evaluation, and deployment patterns.",
    outcomes: ["LLM app development", "RAG architecture", "Agent workflows", "Evaluation mindset"],
    careers: ["AI app developer", "LLM engineer intern", "Automation engineer"],
    curriculum: ["LLM APIs", "Embeddings", "RAG", "Agents", "Evaluation", "Deployment"],
    tools: ["OpenAI API", "LangChain", "React", "Node.js", "Vector databases"],
    projects: ["Knowledge-base assistant", "AI workflow agent", "Evaluation dashboard"],
  },
  {
    slug: "design",
    title: "AI for Design",
    category: "Creative Track",
    duration: "8 weeks",
    fees: "Rs. 34,000",
    format: "Studio cohort",
    certification: "AI Design Workflow Certificate",
    eligibility: "Designers, creators, UI/UX students, product teams",
    summary: "Use AI to accelerate research, ideation, prototyping, visual systems, and product storytelling.",
    outcomes: ["AI-assisted research", "Fast prototyping", "Design system acceleration", "Creative direction"],
    careers: ["AI product designer", "UX researcher", "Creative technologist"],
    curriculum: ["AI research synthesis", "Prompted ideation", "UI generation", "Design critique", "Prototype storytelling"],
    tools: ["Figma", "FigJam AI", "Midjourney", "Runway", "ChatGPT"],
    projects: ["AI-assisted app concept", "Product story deck", "Prototype sprint"],
  },
  {
    slug: "operations",
    title: "AI for Operations",
    category: "Domain Track",
    duration: "10 weeks",
    fees: "Rs. 38,000",
    format: "Hybrid labs",
    certification: "AI Operations Transformation Certificate",
    eligibility: "Operations, logistics, manufacturing, and business teams",
    summary: "Apply AI to repetitive workflows, process intelligence, forecasting, and operational decisions.",
    outcomes: ["Process automation", "Forecasting basics", "SOP intelligence", "Operational dashboards"],
    careers: ["AI operations associate", "Automation analyst", "Process improvement specialist"],
    curriculum: ["Workflow mapping", "AI SOP systems", "Forecasting", "Quality checks", "Automation metrics"],
    tools: ["ChatGPT", "Excel", "Power BI", "Zapier", "Notion"],
    projects: ["AI SOP assistant", "Inventory insight tracker", "Process automation plan"],
  },
  {
    slug: "upskilling",
    title: "Professional Upskilling Programme",
    category: "Professional",
    duration: "12-24 weeks",
    fees: "Custom by pathway",
    format: "Role-based intensive",
    certification: "Elevox Professional AI Transformation Certificate",
    eligibility: "Working professionals and teams",
    summary: "A guided transition from current role to AI-augmented professional capability.",
    outcomes: ["Role transformation plan", "Promotion-ready proof", "Capstone portfolio", "Mentor-reviewed roadmap"],
    careers: ["AI product operator", "AI consultant", "AI transformation lead"],
    curriculum: ["Role diagnosis", "AI workflow design", "Automation", "Capstone execution", "Career positioning"],
    tools: ["Role-specific AI stack", "Automation tools", "Analytics tools", "Presentation systems"],
    projects: ["Role transformation map", "Live workflow automation", "Executive-ready capstone"],
  },
];

function DetailPage({ programme }) {
  return (
    <main className="programme-page">
      <style>{styles}</style>
      <section className="programme-detail-hero">
        <Link to="/programmes" className="back-link">Back to all programmes</Link>
        <p className="eyebrow">{programme.category}</p>
        <h1>{programme.title}</h1>
        <p>{programme.summary}</p>
        <div className="meta-grid">
          <span><strong>Duration</strong>{programme.duration}</span>
          <span><strong>Fees</strong>{programme.fees}</span>
          <span><strong>Format</strong>{programme.format}</span>
          <span><strong>Certification</strong>{programme.certification}</span>
        </div>
      </section>

      <section className="detail-layout">
        <article className="detail-main">
          <Block title="Curriculum" items={programme.curriculum} />
          <Block title="Tools Covered" items={programme.tools} />
          <Block title="Projects" items={programme.projects} />
          <Block title="Career Opportunities" items={programme.careers} />
        </article>

        <aside className="detail-side">
          <h2>Best fit</h2>
          <p>{programme.eligibility}</p>
          <h2>Outcomes</h2>
          <ul>
            {programme.outcomes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h2>Faculty</h2>
          <p>Founder-led sessions, mentor labs, and industry reviews.</p>
          <Link to="/admissions" className="apply-link">Apply Now</Link>
        </aside>
      </section>

      <section className="faq-section">
        <h2>FAQ</h2>
        <details open>
          <summary>Do I need prior AI experience?</summary>
          <p>No. We map the route based on your current background and the outcome you want.</p>
        </details>
        <details>
          <summary>Will I build a portfolio?</summary>
          <p>Yes. Every programme ends with visible work that can be shown to employers or teams.</p>
        </details>
      </section>
    </main>
  );
}

function Block({ title, items }) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <div className="pill-grid">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

export default function Programmes() {
  const { track } = useParams();
  const selected = programmes.find((item) => item.slug === track);

  if (selected) {
    return <DetailPage programme={selected} />;
  }

  return (
    <main className="programme-page">
      <style>{styles}</style>
      <section className="programme-hero">
        <p className="eyebrow">Learning hub for Nagpur and beyond</p>
        <h1>Programmes designed around outcomes, not course catalogs.</h1>
        <p>
          Every Elevox pathway includes duration, fees, format, certification,
          eligibility, career routes, projects, and proof you can show.
        </p>
      </section>

      <section className="programme-grid">
        {programmes.map((programme) => (
          <Link to={`/programmes/${programme.slug}`} className="programme-card" key={programme.slug}>
            <span>{programme.category}</span>
            <h2>{programme.title}</h2>
            <p>{programme.summary}</p>
            <div>
              <small>{programme.duration}</small>
              <small>{programme.fees}</small>
              <small>{programme.format}</small>
            </div>
            <strong>View details -&gt;</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}

const styles = `
  .programme-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
  }

  .programme-hero,
  .programme-detail-hero {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: 76px 24px 54px;
  }

  .programme-hero::after,
  .programme-detail-hero::after {
    content: "";
    position: absolute;
    right: 4%;
    top: 24%;
    width: 320px;
    height: 320px;
    border-radius: 999px;
    border: 1px solid rgba(143, 239, 213, 0.14);
    box-shadow: inset 0 0 70px rgba(0, 212, 168, 0.08);
    pointer-events: none;
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 18px;
  }

  .programme-hero h1,
  .programme-detail-hero h1 {
    max-width: 850px;
    margin: 0 0 22px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(42px, 7vw, 78px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .programme-hero p,
  .programme-detail-hero p {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
  }

  .programme-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 92px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 18px;
  }

  .programme-card {
    min-height: 310px;
    display: flex;
    flex-direction: column;
    padding: 26px;
    border-radius: 14px;
    border: 1px solid rgba(143, 239, 213, 0.12);
    background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .programme-card:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 212, 168, 0.42);
    background: rgba(0, 212, 168, 0.055);
  }

  .programme-card span {
    color: #00d4a8;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .programme-card h2 {
    margin: 18px 0 12px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 24px;
  }

  .programme-card p {
    color: rgba(240, 242, 245, 0.58);
    line-height: 1.58;
    flex: 1;
  }

  .programme-card div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0;
  }

  .programme-card small,
  .pill-grid span,
  .meta-grid span {
    border: 1px solid rgba(143, 239, 213, 0.12);
    border-radius: 8px;
    background: rgba(255,255,255,0.035);
    color: rgba(240, 242, 245, 0.68);
    padding: 8px 10px;
  }

  .programme-card strong,
  .back-link {
    color: #00d4a8;
    text-decoration: none;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 28px;
    font-weight: 800;
  }

  .meta-grid {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }

  .meta-grid span {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .meta-grid strong {
    color: #8fefd5;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .detail-layout {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 70px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 28px;
  }

  .detail-main {
    display: grid;
    gap: 18px;
  }

  .detail-block,
  .detail-side,
  .faq-section {
    border: 1px solid rgba(143, 239, 213, 0.12);
    border-radius: 14px;
    background: rgba(255,255,255,0.03);
    padding: 28px;
  }

  .detail-block h2,
  .detail-side h2,
  .faq-section h2 {
    margin: 0 0 16px;
    font-family: "Space Grotesk", Inter, sans-serif;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .detail-side {
    position: sticky;
    top: 96px;
    align-self: start;
  }

  .detail-side p,
  .detail-side li,
  .faq-section p {
    color: rgba(240, 242, 245, 0.62);
    line-height: 1.6;
  }

  .detail-side ul {
    padding-left: 18px;
    margin-bottom: 24px;
  }

  .apply-link {
    display: block;
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 10px;
    background: #00d4a8;
    color: #031a14;
    text-align: center;
    text-decoration: none;
    font-weight: 900;
  }

  .faq-section {
    max-width: 1180px;
    margin: 0 auto 90px;
  }

  .faq-section details {
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    padding: 16px 0;
  }

  .faq-section summary {
    cursor: pointer;
    font-weight: 800;
  }

  @media (max-width: 860px) {
    .detail-layout { grid-template-columns: 1fr; }
    .detail-side { position: static; }
  }
`;
