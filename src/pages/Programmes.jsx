import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

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

// Floating particle animation component
const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 168, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

// Animated gradient border component
const AnimatedBorder = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02))',
        border: '1px solid rgba(143, 239, 213, 0.12)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent, rgba(0, 212, 168, 0.1), transparent, rgba(0, 212, 168, 0.1), transparent)',
          animation: 'spin 10s linear infinite',
        }}
      />
      {children}
    </motion.div>
  );
};

function DetailPage({ programme }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="programme-page"
    >
      <style>{styles}</style>
      <FloatingParticles />
      
      <section className="programme-detail-hero">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/programmes" className="back-link">
            <motion.span
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              ← Back to all programmes
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="eyebrow"
        >
          {programme.category}
        </motion.p>
        
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {programme.title}
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {programme.summary}
        </motion.p>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="meta-grid"
        >
          <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <strong>Duration</strong>
            {programme.duration}
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <strong>Fees</strong>
            {programme.fees}
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <strong>Format</strong>
            {programme.format}
          </motion.span>
          <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <strong>Certification</strong>
            {programme.certification}
          </motion.span>
        </motion.div>
      </section>

      <section className="detail-layout">
        <article className="detail-main">
          <AnimatedBorder className="detail-block">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Curriculum
            </motion.h2>
            <div className="pill-grid">
              {programme.curriculum.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 168, 0.15)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </AnimatedBorder>

          <AnimatedBorder className="detail-block">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tools Covered
            </motion.h2>
            <div className="pill-grid">
              {programme.tools.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 168, 0.15)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </AnimatedBorder>

          <AnimatedBorder className="detail-block">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <div className="pill-grid">
              {programme.projects.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 168, 0.15)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </AnimatedBorder>

          <AnimatedBorder className="detail-block">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Career Pathways
            </motion.h2>
            <div className="pill-grid">
              {programme.careers.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 168, 0.15)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </AnimatedBorder>
        </article>

        <aside className="detail-side">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Eligibility</h2>
            <p>{programme.eligibility}</p>
            
            <h2>Outcomes</h2>
            <ul>
              {programme.outcomes.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <h2>Faculty</h2>
            <p>Founder-led sessions, mentor labs, and industry reviews.</p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/admissions" className="apply-link">
                Apply Now →
              </Link>
            </motion.div>
          </motion.div>
        </aside>
      </section>

      <section className="faq-section">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>
        <motion.details
          open
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <summary>Do I need prior AI experience?</summary>
          <p>No. We map the route based on your current background and the outcome you want.</p>
        </motion.details>
        <motion.details
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <summary>Will I build a portfolio?</summary>
          <p>Yes. Every programme ends with visible work that can be shown to employers or teams.</p>
        </motion.details>
      </section>
    </motion.main>
  );
}

function Block({ title, items }) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <div className="pill-grid">
        {items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.span>
        ))}
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="programme-page"
    >
      <style>{styles}</style>
      <FloatingParticles />
      
      <section className="programme-hero">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="eyebrow"
        >
          Central Learning Hub in Nagpur & Nearby Areas
        </motion.p>
        
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Programmes Designed Around Outcomes, Not Course Catalogs.
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Every Elevox pathway includes duration, fees, format, certification,
          eligibility, career routes, projects, and proof you can show.
        </motion.p>
      </section>

      <section className="programme-grid">
        {programmes.map((programme, index) => (
          <motion.div
            key={programme.slug}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link to={`/programmes/${programme.slug}`} className="programme-card">
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {programme.category}
              </motion.span>
              
              <motion.h2
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {programme.title}
              </motion.h2>
              
              <motion.p
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {programme.summary}
              </motion.p>
              
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <motion.small whileHover={{ scale: 1.05 }}>
                  {programme.duration}
                </motion.small>
                <motion.small whileHover={{ scale: 1.05 }}>
                  {programme.fees}
                </motion.small>
                <motion.small whileHover={{ scale: 1.05 }}>
                  {programme.format}
                </motion.small>
              </motion.div>
              
              <motion.strong
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ x: 5 }}
              >
                View details →
              </motion.strong>
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}

const styles = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .programme-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  .programme-hero,
  .programme-detail-hero {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: 76px 24px 54px;
    z-index: 1;
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
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 18px;
    position: relative;
    z-index: 1;
  }

  .programme-hero h1,
  .programme-detail-hero h1 {
    max-width: 850px;
    margin: 0 0 22px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(42px, 7vw, 78px);
    line-height: 0.98;
    letter-spacing: 0;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #f0f2f5 0%, #00d4a8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .programme-hero p,
  .programme-detail-hero p {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  .programme-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 92px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 18px;
    position: relative;
    z-index: 1;
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
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .programme-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 168, 0.05), transparent);
    transition: left 0.5s ease;
  }

  .programme-card:hover::before {
    left: 100%;
  }

  .programme-card:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: rgba(0, 212, 168, 0.42);
    background: rgba(0, 212, 168, 0.055);
    box-shadow: 0 10px 40px rgba(0, 212, 168, 0.1);
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
    transition: color 0.3s ease;
  }

  .programme-card:hover h2 {
    color: #00d4a8;
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
    transition: all 0.3s ease;
    cursor: default;
  }

  .pill-grid span:hover {
    background: rgba(0, 212, 168, 0.15);
    border-color: rgba(0, 212, 168, 0.3);
    transform: scale(1.05);
  }

  .programme-card strong,
  .back-link {
    color: #00d4a8;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .programme-card strong:hover {
    color: #8fefd5;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 28px;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  .back-link:hover {
    color: #8fefd5;
  }

  .meta-grid {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .meta-grid span {
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease;
    cursor: default;
  }

  .meta-grid span:hover {
    background: rgba(0, 212, 168, 0.1);
    border-color: rgba(0, 212, 168, 0.3);
    transform: translateY(-2px);
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
    position: relative;
    z-index: 1;
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
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .detail-block:hover {
    border-color: rgba(0, 212, 168, 0.2);
    box-shadow: 0 5px 30px rgba(0, 212, 168, 0.05);
  }

  .detail-block h2,
  .detail-side h2,
  .faq-section h2 {
    margin: 0 0 16px;
    font-family: "Space Grotesk", Inter, sans-serif;
    color: #8fefd5;
    position: relative;
    z-index: 1;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    z-index: 1;
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

  .detail-side li {
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  .detail-side li:hover {
    color: #8fefd5;
    transform: translateX(5px);
  }

  .apply-link {
    display: block;
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 10px;
    background: linear-gradient(135deg, #00d4a8, #008f7a);
    color: #031a14;
    text-align: center;
    text-decoration: none;
    font-weight: 900;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .apply-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  .apply-link:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(0, 212, 168, 0.3);
  }

  .apply-link:hover::before {
    left: 100%;
  }

  .faq-section {
    max-width: 1180px;
    margin: 0 auto 90px;
    position: relative;
    z-index: 1;
  }

  .faq-section details {
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    padding: 16px 0;
    transition: all 0.3s ease;
  }

  .faq-section details:hover {
    border-color: rgba(0, 212, 168, 0.3);
  }

  .faq-section summary {
    cursor: pointer;
    font-weight: 800;
    transition: color 0.3s ease;
  }

  .faq-section summary:hover {
    color: #00d4a8;
  }

  @media (max-width: 860px) {
    .detail-layout { 
      grid-template-columns: 1fr; 
    }
    .detail-side { 
      position: static; 
    }
    .programme-hero::after,
    .programme-detail-hero::after {
      width: 200px;
      height: 200px;
      right: 2%;
    }
  }
`;