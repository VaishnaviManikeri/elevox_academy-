import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

/* ============================================================
   ELEVOX — Home.jsx
   ------------------------------------------------------------
   AI-ORIENTED DESIGN SYSTEM
   Neural network aesthetics, particle fields, glow effects,
   and data-stream animations. Every interaction feels like
   interacting with an AI system — responsive, intelligent,
   and alive with possibility.
   ============================================================ */

const COLORS = {
  void: "#04090A",
  panel: "#0A1414",
  circuit: "#123230",
  signal: "#1FE8B8",
  phosphor: "#B9FFE8",
  amber: "#FFB454",
  neural: "#6C5CE7",
  data: "#00D2FF",
  quantum: "#FF6B6B",
};

/* ------------------------------------------------------------
   Visitor-path data — drives personalization across the page.
   Every audience gets its own hero line, proof stats, and
   promoted track — not just one highlighted card.
------------------------------------------------------------ */
const VISITOR_PATHS = [
  {
    id: "student",
    label: "Student",
    sub: "Building toward a first role",
    heroKicker: "STATUS: PRE-CAREER",
    heroLine: "Turn what you're studying into work the market actually wants.",
    proof: [
      { num: "87%", label: "placed or interviewing within 6 months of capstone" },
      { num: "21 days", label: "average time from capstone to first interview" },
      { num: "40+", label: "hiring partners reviewing student portfolios" },
    ],
    audienceId: "students",
  },
  {
    id: "professional",
    label: "Professional",
    sub: "Upskilling for what's next",
    heroKicker: "STATUS: IN-CAREER",
    heroLine: "AI is rewriting your job description. Get ahead of the rewrite.",
    proof: [
      { num: "3x", label: "faster skill obsolescence than the decade before" },
      { num: "92%", label: "of roles will require applied AI fluency within 3 years" },
      { num: "6 wks", label: "average track length, built around a working week" },
    ],
    audienceId: "professionals",
  },
  {
    id: "corporate",
    label: "Corporate / Team",
    sub: "Transforming a workforce",
    heroKicker: "STATUS: WORKFORCE",
    heroLine: "Your team doesn't need a course. It needs a transformation plan.",
    proof: [
      { num: "40+", label: "transformation partners across hiring & L&D" },
      { num: "0", label: "industries left untouched by AI-driven restructuring" },
      { num: "1", label: "audit before any training begins" },
    ],
    audienceId: "corporates",
  },
  {
    id: "explore",
    label: "Just exploring",
    sub: "Show me everything",
    heroKicker: "STATUS: UNCALIBRATED",
    heroLine: "The bridge between learning AI and being employable because of it.",
    proof: [
      { num: "12+ yrs", label: "founders' industry experience, not classroom experience" },
      { num: "40+", label: "hiring & transformation partners in the network" },
      { num: "1", label: "outcome every track is built around: employability" },
    ],
    audienceId: null,
  },
];

const AUDIENCE_DATA = {
  students: {
    eyebrow: "For Students",
    title: "Career-mapped, not curriculum-mapped",
    body: "Most student tracks teach a syllabus. This one starts from the roles hiring managers are actually filling, and works backward into what you need to be credible for them.",
    points: [
      "Curriculum mapped to live job descriptions, refreshed quarterly",
      "Mentors who are currently shipping AI in production, not ex-academics",
      "A portfolio piece per module — by graduation, evidence, not a transcript",
    ],
    cta: "See the student pathway",
  },
  professionals: {
    eyebrow: "For Professionals",
    title: "Built around the job you already have",
    body: "You're not starting over. You're adding a capability your role doesn't have yet — fast enough that it shows up in your next review, not your next decade.",
    points: [
      "Evening & weekend cohorts — no leave of absence required",
      "Role-specific tracks: product, data, ops, design, engineering",
      "A applied-AI case study you can present internally within 6 weeks",
    ],
    cta: "See upskilling tracks",
  },
  corporates: {
    eyebrow: "For Corporates",
    title: "Audited before it's taught",
    body: "We don't sell seats in a generic course. We start by mapping where your workforce actually stands against where your industry is heading, then build the cohort around the gap.",
    points: [
      "Workforce AI-readiness audit before any curriculum is proposed",
      "Cohort delivery built around your real workflows and tools",
      "Adoption measured at 30/60/90 days — not just attendance",
    ],
    cta: "Book a workforce audit",
  },
  colleges: {
    eyebrow: "For Colleges",
    title: "A placement pipeline, not a guest lecture",
    body: "Curriculum partnerships that give your students the same industry-mapped tracks, with faculty enablement and direct access to our hiring network at graduation.",
    points: [
      "Co-built curriculum aligned to your existing academic calendar",
      "Faculty enablement so the capability stays in-house after rollout",
      "Direct placement-pipeline access for graduating cohorts",
    ],
    cta: "Partner with Elevox",
  },
};

/* ------------------------------------------------------------
   AI Themed Components
------------------------------------------------------------ */

// Neural Network Background
function NeuralBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const numParticles = 80;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
    particlesRef.current = particles;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(31, 232, 184, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#1FE8B8';
        ctx.shadowColor = '#1FE8B8';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-bg" />;
}

// AI Pulse Animation
function AIPulse({ children, active = true }) {
  return (
    <div className={`ai-pulse ${active ? 'is-active' : ''}`}>
      <div className="ai-pulse__ring" />
      <div className="ai-pulse__ring" style={{ animationDelay: '0.5s' }} />
      <div className="ai-pulse__ring" style={{ animationDelay: '1s' }} />
      {children}
    </div>
  );
}

// Data Stream Text Animation
function DataStream({ text, className = '' }) {
  const chars = text.split('');
  return (
    <span className={`data-stream ${className}`}>
      {chars.map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
      ))}
    </span>
  );
}

// Glitch Effect Wrapper
function GlitchText({ children, className = '' }) {
  return (
    <div className={`glitch-text ${className}`}>
      <span className="glitch-text__main">{children}</span>
      <span className="glitch-text__glitch" aria-hidden="true">{children}</span>
      <span className="glitch-text__glitch2" aria-hidden="true">{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------
   Small reusable bits
------------------------------------------------------------ */

function Eyebrow({ children, tone = "signal" }) {
  return <div className={`eyebrow eyebrow--${tone}`}>{children}</div>;
}

function SectionShell({ id, eyebrow, title, sub, children, tone = "default", index }) {
  return (
    <section id={id} className={`section ${tone === "panel" ? "section--panel" : ""}`} data-rail-section={index}>
      <div className="section__inner">
        <div className="section__head">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <h2 className="section__title">{title}</h2>}
          {sub && <p className="section__sub">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Personalization Gate — AI-themed calibration terminal
------------------------------------------------------------ */
function PersonalizationGate({ onSelect }) {
  const [active, setActive] = useState(null);
  const [scanline, setScanline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanline(v => (v + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-label="Choose your path">
      <div className="gate__backdrop">
        <div className="gate__scanline" style={{ top: `${scanline}%` }} />
        <div className="gate__grid-overlay" />
      </div>
      <div className="gate__panel">
        <div className="gate__panelHeader">
          <AIPulse active>
            <span className="gate__dot" />
          </AIPulse>
          <span className="gate__headerText">
            <DataStream text="ELEVOX // CALIBRATING VIEW" />
          </span>
          <span className="gate__headerId">ID:0x{Math.floor(Math.random() * 9000 + 1000)}</span>
        </div>

        <div className="gate__body">
          <p className="gate__kicker">
            <span className="gate__kicker-dot">●</span> Neural calibration required
          </p>
          <h1 className="gate__title">Who's reading this?</h1>
          <p className="gate__copy">
            Everything below — the proof, the tracks, the outcomes — will reorder
            itself around where you actually stand right now.
          </p>

          <div className="gate__options">
            {VISITOR_PATHS.map((p) => (
              <button
                key={p.id}
                className={`gate__option ${active === p.id ? "is-active" : ""}`}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => onSelect(p.id)}
              >
                <span className="gate__optionMarker">{active === p.id ? '▶' : '○'}</span>
                <span className="gate__optionLabel">{p.label}</span>
                <span className="gate__optionSub">{p.sub}</span>
                <span className="gate__optionArrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <button className="gate__skip" onClick={() => onSelect("explore")}>
            <span className="gate__skip-icon">⟳</span> Skip calibration — show the full picture
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   Signature element: SIGNAL TRACE with AI enhancements
------------------------------------------------------------ */
const RAIL_LOG = [
  "INPUT // RAW POTENTIAL",
  "WHY_AI",
  "FOUNDERS",
  "GAP",
  "PROGRAMMES",
  "AUDIENCE_MATCH",
  "PATHWAY",
  "OUTCOMES",
  "WORKSHOPS",
  "TOUR",
  "OUTPUT // EMPLOYABLE",
];

function SignalRail() {
  const railRef = useRef(null);
  const [activeLog, setActiveLog] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-rail-section]"));
    const handle = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      if (railRef.current) {
        railRef.current.style.setProperty("--rail-progress", `${Math.min(1, Math.max(0, pct)) * 100}%`);
      }
      let idx = 0;
      sections.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.6) idx = Number(el.dataset.railSection);
      });
      setActiveLog(Math.min(idx, RAIL_LOG.length - 1));
      
      // Simulate signal strength variation
      setSignalStrength(Math.sin(Date.now() / 1000) * 0.3 + 0.7);
    };
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    handle();
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div className="signalRail" ref={railRef} aria-hidden="true">
      <div className="signalRail__track" />
      <div className="signalRail__fill" />
      <div className="signalRail__bead" />
      <div className="signalRail__signal-glow" style={{ opacity: signalStrength * 0.5 }} />
      <div className="signalRail__readout">
        <span className="signalRail__readout-dot">●</span>
        {RAIL_LOG[activeLog]}
        <span className="signalRail__readout-strength">{Math.round(signalStrength * 100)}%</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   Navbar + Hero with AI animations
------------------------------------------------------------ */


function Hero({ pathway }) {
  const path = useMemo(
    () => VISITOR_PATHS.find((p) => p.id === pathway) || VISITOR_PATHS[3],
    [pathway]
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <header className="hero" data-rail-section={0}>
      <div className="hero__bg">
        <div className="hero__image" style={{ backgroundImage: "url(/assets/images/hero.png)" }} />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__neural-glow" 
          style={{ 
            left: `${mousePos.x * 100}%`, 
            top: `${mousePos.y * 100}%`,
          }} 
        />
      </div>

      <div className="hero__content">
        <div className="hero__statusRow">
          <AIPulse active>
            <span className="hero__statusDot" />
          </AIPulse>
          <span className="hero__statusText">
            <DataStream text={path.heroKicker} />
          </span>
        </div>

        <GlitchText className="hero__headline">
          AI is no longer optional.
          <br />
          <span className="hero__headlineAccent">Employability is.</span>
        </GlitchText>

        <p className="hero__sub">{path.heroLine}</p>

        <div className="hero__readout">
          {path.proof.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="hero__readoutItem">
                <span className="hero__readoutNum">
                  <DataStream text={item.num} />
                </span>
                <span className="hero__readoutLabel">{item.label}</span>
              </div>
              {i < path.proof.length - 1 && <div className="hero__readoutDivider" />}
            </React.Fragment>
          ))}
        </div>

        <div className="hero__ctaRow">
          <button className="btn btn--primary">
            <span className="btn__icon">⚡</span>
            See your pathway
          </button>
          <button className="btn btn--ghost">
            <span className="btn__icon">▶</span>
            Watch the academy tour
          </button>
        </div>
      </div>

      <div className="hero__scrollCue" aria-hidden="true">
        <div className="hero__scrollLine">
          <span className="hero__scrollDot" />
        </div>
        Scroll — trace runs the full page
      </div>
    </header>
  );
}

/* ------------------------------------------------------------
   Transition strip with AI theming
------------------------------------------------------------ */
function HeroTransitionStrip() {
  return (
    <section className="heroStrip" aria-label="Elevox learning promise">
      <div className="heroStrip__inner">
        <span className="heroStrip__label">
          <span className="heroStrip__num">01</span> AI FLUENCY
        </span>
        <span className="heroStrip__divider" aria-hidden="true">
          <span className="heroStrip__divider-dot">●</span>
        </span>
        <span className="heroStrip__label">
          <span className="heroStrip__num">02</span> INDUSTRY PROOF
        </span>
        <span className="heroStrip__divider" aria-hidden="true">
          <span className="heroStrip__divider-dot">●</span>
        </span>
        <span className="heroStrip__label">
          <span className="heroStrip__num">03</span> CAREER OUTCOME
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Secondary hero image with AI overlay
------------------------------------------------------------ */
function SecondaryHeroImage() {
  return (
    <div className="heroSecondary">
      <div
        className="heroSecondary__image"
        style={{ backgroundImage: "url(/assets/images/h4.png)" }}
        role="img"
        aria-label="Elevox secondary hero visual"
      />
      <div className="heroSecondary__overlay">
        <div className="heroSecondary__scanline" />
        <div className="heroSecondary__data-overlay">
          <span className="heroSecondary__data-text">[AI_TRAINING_MATRIX]</span>
          <span className="heroSecondary__data-text">[OPTIMIZATION: 87%]</span>
        </div>
      </div>
      <div className="heroSecondary__content">
        <Eyebrow>The transformation, not the tools</Eyebrow>
        <h2 className="heroSecondary__title">
          We don't teach AI.
          <br />
          We make you <span className="heroSecondary__accent">unignorable</span> because of it.
        </h2>
        <p className="heroSecondary__sub">
          Real founders. Real industry scars. A pathway built for outcomes, not certificates.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   1. Why AI Matters Now — AI system status dashboard
------------------------------------------------------------ */
function WhyAIMattersNow() {
  const points = [
    { stat: "92%", label: "of roles require applied AI fluency within 3 years" },
    { stat: "3×", label: "faster skill obsolescence than the decade before" },
    { stat: "0", label: "industries left untouched by AI-driven restructuring" },
  ];

  return (
    <SectionShell
      id="why-ai"
      index={1}
      eyebrow="The shift"
      title="AI didn't knock. It already let itself in."
      sub="Every industry is being re-architected around AI-literate people. The question isn't whether you adapt — it's whether you adapt on your own terms, or someone else's."
    >
      <div className="ai-dashboard">
        <div className="ai-dashboard__header">
          <span className="ai-dashboard__status">● SYSTEM STATUS: ACTIVE</span>
          <span className="ai-dashboard__timestamp">[AI_READOUT_{new Date().getFullYear()}]</span>
        </div>
        <div className="readoutBar">
          {points.map((p, i) => (
            <React.Fragment key={p.label}>
              <div className="readoutBar__item">
                <div className="readoutBar__stat">{p.stat}</div>
                <div className="readoutBar__label">{p.label}</div>
                <div className="readoutBar__progress">
                  <div className="readoutBar__progress-bar" style={{ width: `${Math.random() * 30 + 70}%` }} />
                </div>
              </div>
              {i < points.length - 1 && <div className="readoutBar__rule" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   2. Meet The Founders — AI dossier with neural connections
------------------------------------------------------------ */
function MeetTheFounders() {
  const founders = [
    {
      name: "Founder One",
      role: "Ex-Industry AI Lead",
      years: "12 YRS",
      bio: "Shipped production AI systems for a decade before turning to building the people who'll ship the next generation of them.",
      scars: ["Shipped 3 production ML systems at scale", "Hired and managed AI engineering teams"],
    },
    {
      name: "Founder Two",
      role: "Ex-Talent & Workforce Strategy",
      years: "10 YRS",
      bio: "Built and scaled hiring pipelines for AI-first teams — sees the gap between classroom AI and employable AI from the inside.",
      scars: ["Built hiring pipelines for 40+ AI-first teams", "Ran workforce transformation for two enterprises"],
    },
  ];
  return (
    <SectionShell
      id="founders"
      index={2}
      eyebrow="Why trust this"
      title="Built by people who hired, fired, and shipped — not just taught."
      sub="Elevox exists because its founders sat on both sides of the table: inside the companies building AI, and inside the rooms deciding who gets hired to do it."
    >
      <div className="dossier">
        {founders.map((f) => (
          <div className="dossierCard" key={f.name}>
            <div className="dossierCard__top">
              <div className="dossierCard__id">
                <div className="dossierCard__id-pulse" />
              </div>
              <div className="dossierCard__heading">
                <h3 className="dossierCard__name">{f.name}</h3>
                <p className="dossierCard__role">{f.role}</p>
              </div>
              <span className="dossierCard__years">{f.years}</span>
            </div>
            <p className="dossierCard__bio">{f.bio}</p>
            <ul className="dossierCard__scars">
              {f.scars.map((s) => (
                <li key={s}>
                  <span className="dossierCard__scar-icon">▶</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="dossierCard__neural">
              <span className="dossierCard__neural-dot" />
              <span className="dossierCard__neural-dot" />
              <span className="dossierCard__neural-dot" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   3. Industry Problem & Opportunity — AI balance sheet
------------------------------------------------------------ */
function IndustryProblemOpportunity() {
  return (
    <SectionShell
      id="problem"
      index={3}
      tone="panel"
      eyebrow="The gap"
      title="Courses teach tools. Companies hire outcomes."
    >
      <div className="ledger">
        <div className="ledger__col ledger__col--problem">
          <span className="ledger__tag">
            <span className="ledger__tag-icon">⚠</span> LIABILITY
          </span>
          <h3 className="ledger__heading">The problem</h3>
          <p className="ledger__text">
            Most AI training ends at certificates and tool tutorials. Learners leave knowing
            prompts and platforms, but not how to apply either inside a real role, team, or
            business problem.
          </p>
        </div>
        <div className="ledger__spine" aria-hidden="true">
          <div className="ledger__spine-pulse" />
        </div>
        <div className="ledger__col ledger__col--opportunity">
          <span className="ledger__tag ledger__tag--accent">
            <span className="ledger__tag-icon">✦</span> ASSET
          </span>
          <h3 className="ledger__heading ledger__heading--accent">The opportunity</h3>
          <p className="ledger__text">
            The market doesn't have an AI knowledge shortage — it has an AI application
            shortage. Whoever closes that gap first becomes the obvious hire, the obvious
            promotion, the obvious vendor.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   4. Programmes Overview with AI-themed cards
------------------------------------------------------------ */
function ProgrammesOverview() {
  const programmes = [
    { code: "PRG.01", name: "Foundations", desc: "Applied AI literacy for any background, in weeks not semesters.", icon: "🧠" },
    { code: "PRG.02", name: "Specialist Tracks", desc: "Role-specific depth — product, data, ops, engineering, design.", icon: "⚡" },
    { code: "PRG.03", name: "Capstone & Portfolio", desc: "Real briefs, real stakeholders, work you can show employers.", icon: "📊" },
    { code: "PRG.04", name: "Workforce Cohorts", desc: "Team-wide rollouts built around your company's actual workflows.", icon: "🏢" },
  ];
  return (
    <SectionShell
      id="programmes"
      index={4}
      eyebrow="What we run"
      title="One philosophy, four formats."
      sub="Every track ends the same way: with proof you can put in front of a hiring manager, a promotion panel, or a board."
    >
      <div className="grid grid--4">
        {programmes.map((p) => (
          <div className="programmeCard" key={p.name}>
            <div className="programmeCard__icon">{p.icon}</div>
            <span className="programmeCard__code">
              <span className="programmeCard__code-dot">●</span> {p.code}
            </span>
            <h3 className="programmeCard__name">{p.name}</h3>
            <p className="programmeCard__desc">{p.desc}</p>
            <div className="programmeCard__glow" />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   5. Audience Tracks — AI-enhanced switcher
------------------------------------------------------------ */
function AudienceTracks({ pathway }) {
  const order = ["students", "professionals", "corporates", "colleges"];
  const matched = VISITOR_PATHS.find((p) => p.id === pathway)?.audienceId || null;
  const [tab, setTab] = useState(matched || "students");

  useEffect(() => {
    if (matched) setTab(matched);
  }, [matched]);

  const active = AUDIENCE_DATA[tab];

  return (
    <SectionShell
      id="audiences"
      index={5}
      eyebrow="Built for where you stand"
      title="Four starting points. One destination — employable AI fluency."
    >
      <div className="switcher">
        <div className="switcher__tabs" role="tablist">
          {order.map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              className={`switcher__tab ${tab === id ? "is-active" : ""}`}
              onClick={() => setTab(id)}
            >
              <span className="switcher__tabLabel">{AUDIENCE_DATA[id].eyebrow.replace("For ", "")}</span>
              {matched === id && (
                <span className="switcher__tabBadge">
                  <span className="switcher__tabBadge-dot">●</span> Matched
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="switcher__panel" key={tab}>
          <Eyebrow>{active.eyebrow}</Eyebrow>
          <h3 className="switcher__title">{active.title}</h3>
          <p className="switcher__body">{active.body}</p>
          <ul className="switcher__list">
            {active.points.map((pt) => (
              <li key={pt}>
                <span className="switcher__list-icon">▸</span>
                {pt}
              </li>
            ))}
          </ul>
          <button className="switcher__cta">
            <span className="switcher__cta-icon">⚡</span>
            {active.cta}
          </button>
        </div>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   6. Success Pathway — AI sequence
------------------------------------------------------------ */
function SuccessPathway() {
  const steps = [
    { n: "01", title: "Diagnose", desc: "Map where you stand against where the market is heading.", icon: "🔍" },
    { n: "02", title: "Build", desc: "Apply AI inside real briefs, not isolated tutorials.", icon: "🏗️" },
    { n: "03", title: "Prove", desc: "Leave with a portfolio, not just a certificate.", icon: "📈" },
    { n: "04", title: "Place", desc: "Get matched to roles or transformation outcomes.", icon: "🎯" },
  ];
  return (
    <SectionShell
      id="pathway"
      index={6}
      eyebrow="How it actually works"
      title="The success pathway"
      sub="Four stages. Every stage produces something you can show, not just something you've learned."
    >
      <div className="pathway">
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <div className="pathway__step">
              <span className="pathway__num">{s.n}</span>
              <div className="pathway__icon">{s.icon}</div>
              <h3 className="pathway__title">{s.title}</h3>
              <p className="pathway__desc">{s.desc}</p>
              <div className="pathway__progress">
                <div className="pathway__progress-bar" style={{ width: `${(i + 1) * 25}%` }} />
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="pathway__connector" aria-hidden="true">
                <div className="pathway__connector-dot" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   7. Placement & Career Outcomes — AI metrics
------------------------------------------------------------ */
function PlacementOutcomes() {
  const outcomes = [
    { stat: "87%", label: "learners who moved roles or got promoted within 6 months", trend: "+12%" },
    { stat: "40+", label: "hiring & transformation partners in the network", trend: "+5" },
    { stat: "21 days", label: "average time from capstone to first interview", trend: "-3d" },
  ];
  return (
    <SectionShell
      id="outcomes"
      index={7}
      tone="panel"
      eyebrow="Proof, not promises"
      title="Outcomes we're accountable for."
    >
      <div className="readoutBar readoutBar--accent">
        {outcomes.map((o, i) => (
          <React.Fragment key={o.label}>
            <div className="readoutBar__item">
              <div className="readoutBar__stat">
                <DataStream text={o.stat} />
                <span className="readoutBar__trend">{o.trend}</span>
              </div>
              <div className="readoutBar__label">{o.label}</div>
            </div>
            {i < outcomes.length - 1 && <div className="readoutBar__rule" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   8. Upcoming Workshops — AI schedule
------------------------------------------------------------ */
function UpcomingWorkshops() {
  const workshops = [
    { date: "08 JUL", title: "Applied AI for Product Teams", mode: "Live · Online", status: "active" },
    { date: "15 JUL", title: "AI Readiness Audit for Leaders", mode: "Live · Mumbai", status: "upcoming" },
    { date: "22 JUL", title: "From Tutorials to Portfolios", mode: "Live · Online", status: "upcoming" },
  ];
  return (
    <SectionShell
      id="workshops"
      index={8}
      eyebrow="This month"
      title="Upcoming workshops"
      sub="Free, live sessions to test the approach before you commit to a track."
    >
      <div className="workshopList">
        {workshops.map((w) => (
          <div className="workshopRow" key={w.title}>
            <span className="workshopRow__date">
              <span className="workshopRow__date-dot" />
              {w.date}
            </span>
            <span className="workshopRow__title">{w.title}</span>
            <span className="workshopRow__mode">{w.mode}</span>
            <button className="workshopRow__cta">
              <span className="workshopRow__cta-icon">✦</span>
              Reserve seat
            </button>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   9. Academy Tour Preview — AI hologram
------------------------------------------------------------ */

/* ------------------------------------------------------------
   10. Call To Action — AI recruitment
------------------------------------------------------------ */
function CallToAction() {
  return (
    <section className="cta" data-rail-section={10}>
      <div className="cta__neural-bg">
        <div className="cta__neural-particle" />
        <div className="cta__neural-particle" style={{ animationDelay: '2s' }} />
        <div className="cta__neural-particle" style={{ animationDelay: '4s' }} />
      </div>
      <div className="cta__inner">
        <Eyebrow tone="amber">
          <span className="cta__eyebrow-icon">✦</span> Start here
        </Eyebrow>
        <h2 className="cta__title">Learning ends at a certificate. Ours ends at a job.</h2>
        <p className="cta__sub">
          Tell us where you stand, and we'll show you the shortest real path from here to
          employable, promotable, or transformation-ready.
        </p>
        <div className="cta__row">
          <button className="btn btn--primary btn--lg">
            <span className="btn__icon">⚡</span>
            Map my pathway
          </button>
          <button className="btn btn--ghost btn--lg">
            <span className="btn__icon">◇</span>
            Talk to a founder
          </button>
        </div>
        <div className="cta__ai-status">
          <span className="cta__ai-dot">●</span>
          AI calibration complete — ready for your pathway
        </div>
      </div>
    </section>
  );
}



/* ------------------------------------------------------------
   MAIN — Home
------------------------------------------------------------ */
export default function Home() {
  const [pathway, setPathway] = useState(null);
  const [gateOpen, setGateOpen] = useState(true);

  const handleSelect = useCallback((id) => {
    setPathway(id);
    setGateOpen(false);
  }, []);

  const handleReset = useCallback(() => {
    setGateOpen(true);
  }, []);

  return (
    <div className="elevox">
      <style>{STYLES}</style>

      {gateOpen && <PersonalizationGate onSelect={handleSelect} />}

      <NeuralBackground />
      <SignalRail />
      <Hero pathway={pathway} />
      <HeroTransitionStrip />
      <SecondaryHeroImage />

      <WhyAIMattersNow />
      <MeetTheFounders />
      <IndustryProblemOpportunity />
      <ProgrammesOverview />
      <AudienceTracks pathway={pathway} />
      <SuccessPathway />
      <PlacementOutcomes />
      <UpcomingWorkshops />
      {/* <AcademyTourPreview /> */}
      <CallToAction />
    </div>
  );
}

/* ============================================================
   STYLES
   ============================================================ */
const STYLES = `
:root {
  --void: ${COLORS.void};
  --panel: ${COLORS.panel};
  --circuit: ${COLORS.circuit};
  --signal: ${COLORS.signal};
  --phosphor: ${COLORS.phosphor};
  --amber: ${COLORS.amber};
  --neural: ${COLORS.neural};
  --data: ${COLORS.data};
  --quantum: ${COLORS.quantum};
  --text-primary: #EAF6F2;
  --text-secondary: #93B3AC;
  --text-muted: #51716A;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 12px;
  --maxw: 1200px;
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
header, nav, h1, h2, h3, p { margin: 0; padding: 0; }

.elevox {
  background: var(--void);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
}

.elevox a { color: inherit; text-decoration: none; }
.elevox button { font-family: var(--font-body); cursor: pointer; border: none; background: none; color: inherit; }
.elevox button:focus-visible,
.elevox a:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .elevox * { animation: none !important; transition: none !important; }
}

/* ---------- Neural Background ---------- */
.neural-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.4;
}

/* ---------- AI Pulse ---------- */
.ai-pulse {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.ai-pulse__ring {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid var(--signal);
  border-radius: 50%;
  opacity: 0;
  animation: pulseRing 2s ease-out infinite;
}
@keyframes pulseRing {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
.ai-pulse.is-active .ai-pulse__ring {
  animation-play-state: running;
}

/* ---------- Data Stream ---------- */
.data-stream span {
  display: inline-block;
  opacity: 0;
  animation: dataStream 0.5s forwards;
}
@keyframes dataStream {
  0% { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ---------- Glitch Text ---------- */
.glitch-text {
  position: relative;
  display: inline-block;
}
.glitch-text__main {
  position: relative;
  z-index: 1;
}
.glitch-text__glitch {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: var(--data);
  animation: glitch1 3s infinite;
}
.glitch-text__glitch2 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: var(--quantum);
  animation: glitch2 3s infinite;
}
@keyframes glitch1 {
  0%, 95%, 100% { transform: translate(0); opacity: 0; }
  96% { transform: translate(-2px, 1px); opacity: 0.7; }
  97% { transform: translate(2px, -1px); opacity: 0.7; }
}
@keyframes glitch2 {
  0%, 97%, 100% { transform: translate(0); opacity: 0; }
  98% { transform: translate(2px, -2px); opacity: 0.7; }
  99% { transform: translate(-2px, 1px); opacity: 0.7; }
}

/* ---------- Eyebrow ---------- */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 14px;
}
.eyebrow--amber { color: var(--amber); }

/* ---------- Signal Rail ---------- */
.signalRail {
  position: fixed;
  top: 0;
  right: 26px;
  width: 2px;
  height: 100vh;
  z-index: 60;
  pointer-events: none;
  --rail-progress: 0%;
  display: none;
}
@media (min-width: 1024px) { .signalRail { display: block; } }
.signalRail__track {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.10) 8%, rgba(31,232,184,0.10) 92%, transparent);
}
.signalRail__fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--rail-progress);
  background: linear-gradient(to bottom, var(--phosphor), var(--signal));
  box-shadow: 0 0 12px rgba(31,232,184,0.7);
  transition: height 0.08s linear;
}
.signalRail__bead {
  position: absolute;
  left: -3px;
  top: var(--rail-progress);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--phosphor);
  box-shadow: 0 0 14px 4px rgba(185,255,232,0.8);
  transform: translateY(-50%);
  transition: top 0.08s linear;
}
.signalRail__signal-glow {
  position: absolute;
  left: -20px;
  top: 50%;
  width: 40px;
  height: 100px;
  background: radial-gradient(ellipse, rgba(31,232,184,0.2), transparent 70%);
  transform: translateY(-50%);
  pointer-events: none;
}
.signalRail__readout {
  position: absolute;
  left: -10px;
  top: var(--rail-progress);
  transform: translate(-100%, -50%);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  white-space: nowrap;
  padding-right: 8px;
  transition: top 0.08s linear;
  display: flex;
  align-items: center;
  gap: 6px;
}
.signalRail__readout-dot {
  color: var(--signal);
  font-size: 6px;
}
.signalRail__readout-strength {
  font-size: 8px;
  color: var(--phosphor);
  opacity: 0.7;
}

/* ---------- Navbar ---------- */
.navbar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 6%;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  background: var(--void);
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.hero__logo {
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  position: relative;
}
.hero__logoMark {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--void);
  background: var(--phosphor);
  padding: 4px 7px;
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}
.hero__logoMark::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: logoShine 3s infinite;
}
@keyframes logoShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
.hero__logoWord {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.02em;
}
.hero__logoPulse {
  position: absolute;
  right: -12px;
  top: -2px;
  width: 8px;
  height: 8px;
  background: var(--signal);
  border-radius: 50%;
  animation: pulseDot 2s ease-in-out infinite;
}
.hero__navLinks {
  display: none;
  gap: 36px;
  font-size: 14px;
  color: var(--text-secondary);
}
@media (min-width: 900px) { .hero__navLinks { display: flex; } }
.nav-link {
  position: relative;
  padding: 4px 0;
}
.nav-link__indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--signal);
  transition: width 0.3s ease;
}
.nav-link:hover .nav-link__indicator { width: 100%; }
.hero__navCta {
  font-size: 13px;
  font-family: var(--font-mono);
  border: 1px solid rgba(31,232,184,0.35);
  padding: 9px 18px;
  border-radius: 999px;
  color: var(--phosphor);
  transition: border-color 0.2s, background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero__navCta:hover {
  background: rgba(31,232,184,0.1);
  border-color: var(--signal);
}
.hero__navCta-wave {
  animation: wave 0.5s ease-in-out;
}
@keyframes wave {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 56vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  isolation: isolate;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--void);
}
.hero__image {
  position: absolute;
  inset: 0;
  background-image: url(/assets/images/hero3.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 70% 30%, black, transparent 70%);
}
.hero__neural-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(31,232,184,0.15), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s ease;
  filter: blur(20px);
}

.hero__content {
  position: relative;
  z-index: 5;
  margin-left: auto;
  max-width: 620px;
  padding: 48px 6% 0;
  text-align: left;
  text-shadow: 0 2px 18px rgba(0,0,0,0.55);
}
@media (min-width: 700px) { .hero__content { padding: 70px 6% 0; } }

.hero__statusRow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
}
.hero__statusDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 8px var(--signal);
}
.hero__statusText {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--phosphor);
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(34px, 5.4vw, 58px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
  position: relative;
}
.hero__headlineAccent { color: var(--signal); }

.hero__sub {
  font-size: clamp(15px, 1.6vw, 18px);
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 36px;
}

.hero__readout {
  display: flex;
  align-items: stretch;
  gap: 22px;
  margin-bottom: 38px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(31,232,184,0.16);
  padding-top: 22px;
}
.hero__readoutItem {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 130px;
  max-width: 180px;
}
.hero__readoutNum {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
}
.hero__readoutLabel { font-size: 12.5px; color: var(--text-muted); }
.hero__readoutDivider {
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.2), transparent);
}

.hero__ctaRow { display: flex; gap: 14px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14.5px;
  padding: 13px 26px;
  border-radius: 8px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn__icon {
  display: inline-block;
  transition: transform 0.3s ease;
}
.btn:hover .btn__icon {
  transform: translateX(2px) scale(1.1);
}
.btn--primary {
  background: var(--signal);
  color: var(--void);
}
.btn--primary:hover {
  box-shadow: 0 6px 24px -4px rgba(31,232,184,0.55);
  transform: translateY(-1px);
}
.btn--ghost {
  border: 1px solid rgba(31,232,184,0.3);
  color: var(--text-primary);
}
.btn--ghost:hover {
  border-color: var(--phosphor);
  background: rgba(31,232,184,0.06);
}
.btn--lg { padding: 15px 30px; font-size: 15.5px; }

.hero__scrollCue {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  padding: 20px 6% 28px;
}
.hero__scrollLine {
  width: 26px;
  height: 1px;
  background: var(--text-muted);
  position: relative;
}
.hero__scrollDot {
  position: absolute;
  left: 0;
  top: -2px;
  width: 5px;
  height: 5px;
  background: var(--signal);
  border-radius: 50%;
  animation: scrollDot 2s ease-in-out infinite;
}
@keyframes scrollDot {
  0%, 100% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(20px); opacity: 0.3; }
}

/* ---------- Hero transition strip ---------- */
.heroStrip {
  position: relative;
  background: linear-gradient(90deg, var(--void), var(--panel) 50%, var(--void));
  border-top: 1px solid rgba(31,232,184,0.1);
  border-bottom: 1px solid rgba(31,232,184,0.14);
}
.heroStrip__inner {
  max-width: var(--maxw);
  min-height: 64px;
  margin: 0 auto;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  flex-wrap: wrap;
}
.heroStrip__label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--phosphor);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}
.heroStrip__num {
  font-size: 10px;
  color: var(--text-muted);
}
.heroStrip__divider {
  width: 44px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(31,232,184,0.6), transparent);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heroStrip__divider-dot {
  font-size: 4px;
  color: var(--signal);
}

/* ---------- Secondary hero image ---------- */
.heroSecondary {
  position: relative;
  width: 100%;
  height: 62vh;
  min-height: 430px;
  background: var(--void);
  overflow: hidden;
  display: flex;
  align-items: center;
}
.heroSecondary__image {
  position: absolute;
  inset: 0;
  background-image: url(/assets/images/h2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.heroSecondary__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--void) 0%, transparent 30%, transparent 70%, var(--void) 100%);
  z-index: 1;
}
.heroSecondary__scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
    transparent 0%,
    rgba(31,232,184,0.02) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  animation: scanline 8s linear infinite;
  z-index: 2;
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
.heroSecondary__data-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0.6;
}
.heroSecondary__content {
  position: relative;
  z-index: 4;
  max-width: 560px;
  padding: 0 6%;
  text-shadow: 0 2px 18px rgba(0,0,0,0.6);
}
.heroSecondary__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4.4vw, 46px);
  font-weight: 600;
  line-height: 1.16;
  margin: 0 0 18px;
}
.heroSecondary__accent { color: var(--signal); }
.heroSecondary__sub {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--text-secondary);
  max-width: 420px;
  margin: 0;
}

/* ---------- Sections ---------- */
.section { padding: 96px 0; position: relative; }
.section--panel { background: linear-gradient(180deg, var(--panel), var(--void)); }
.section__inner { max-width: var(--maxw); margin: 0 auto; padding: 0 6%; }
.section__head { max-width: 720px; margin-bottom: 48px; }
.section__title {
  font-family: var(--font-display);
  font-size: clamp(26px, 3.4vw, 38px);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 14px;
}
.section__sub { color: var(--text-secondary); font-size: 16px; max-width: 600px; }

.grid { display: grid; gap: 20px; }
.grid--4 { grid-template-columns: repeat(1, 1fr); }
@media (min-width: 640px) { .grid--4 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid--4 { grid-template-columns: repeat(4, 1fr); } }

/* ---------- AI Dashboard ---------- */
.ai-dashboard {
  border: 1px solid rgba(31,232,184,0.12);
  border-radius: var(--radius);
  padding: 24px;
  background: var(--panel);
}
.ai-dashboard__header {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.ai-dashboard__status {
  color: var(--signal);
}

/* ---------- Readout bar ---------- */
.readoutBar {
  display: flex;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
}
.readoutBar__item { flex: 1; min-width: 180px; }
.readoutBar__stat {
  font-family: var(--font-mono);
  font-size: 40px;
  font-weight: 500;
  color: var(--signal);
  margin-bottom: 10px;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}
.readoutBar__trend {
  font-size: 14px;
  color: var(--phosphor);
  font-weight: 400;
}
.readoutBar--accent .readoutBar__stat { color: var(--phosphor); }
.readoutBar__label { color: var(--text-secondary); font-size: 14px; max-width: 220px; }
.readoutBar__rule {
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.16), transparent);
  align-self: stretch;
}
.readoutBar__progress {
  margin-top: 12px;
  height: 2px;
  background: rgba(31,232,184,0.1);
  border-radius: 2px;
  overflow: hidden;
}
.readoutBar__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--signal), var(--phosphor));
  border-radius: 2px;
  animation: progressPulse 2s ease-in-out infinite;
}
@keyframes progressPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
@media (max-width: 640px) {
  .readoutBar { flex-direction: column; gap: 24px; }
  .readoutBar__rule { display: none; }
}

/* ---------- Founder dossier ---------- */
.dossier { display: grid; gap: 20px; grid-template-columns: repeat(1, 1fr); }
@media (min-width: 768px) { .dossier { grid-template-columns: repeat(2, 1fr); } }
.dossierCard {
  background: var(--panel);
  border: 1px solid rgba(31,232,184,0.1);
  border-radius: var(--radius);
  padding: 26px 26px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.dossierCard:hover {
  border-color: rgba(31,232,184,0.3);
  transform: translateY(-2px);
}
.dossierCard__top { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 18px; }
.dossierCard__id {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--signal), var(--circuit));
  position: relative;
  overflow: hidden;
}
.dossierCard__id-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%);
  animation: idPulse 2s ease-in-out infinite;
}
@keyframes idPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
.dossierCard__heading { flex: 1; }
.dossierCard__name { font-family: var(--font-display); font-size: 18px; margin: 0 0 4px; }
.dossierCard__role { font-family: var(--font-mono); font-size: 12px; color: var(--signal); margin: 0; letter-spacing: 0.02em; }
.dossierCard__years {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid rgba(31,232,184,0.2);
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
}
.dossierCard__bio { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 18px; }
.dossierCard__scars {
  list-style: none;
  margin: 0;
  padding: 14px 0 0;
  border-top: 1px solid rgba(31,232,184,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dossierCard__scars li {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dossierCard__scar-icon {
  color: var(--signal);
  font-size: 8px;
}
.dossierCard__neural {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 4px;
}
.dossierCard__neural-dot {
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  animation: neuralDot 1.5s ease-in-out infinite;
}
.dossierCard__neural-dot:nth-child(2) { animation-delay: 0.3s; }
.dossierCard__neural-dot:nth-child(3) { animation-delay: 0.6s; }
@keyframes neuralDot {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

/* ---------- Ledger ---------- */
.ledger {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  position: relative;
}
@media (min-width: 768px) { .ledger { grid-template-columns: 1fr 1px 1fr; } }
.ledger__col { padding: 6px 0; }
@media (min-width: 768px) { .ledger__col { padding: 6px 36px; } }
.ledger__spine {
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.15), transparent);
  display: none;
  position: relative;
}
@media (min-width: 768px) { .ledger__spine { display: block; } }
.ledger__spine-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: spinePulse 2s ease-in-out infinite;
  box-shadow: 0 0 12px var(--signal);
}
@keyframes spinePulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}
.ledger__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border: 1px solid rgba(81,113,106,0.4);
  padding: 3px 9px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.ledger__tag-icon { font-size: 10px; }
.ledger__tag--accent { color: var(--signal); border-color: rgba(31,232,184,0.35); }
.ledger__heading { font-family: var(--font-display); font-size: 19px; margin: 0 0 12px; color: var(--text-secondary); }
.ledger__heading--accent { color: var(--phosphor); }
.ledger__text { color: var(--text-secondary); font-size: 15.5px; max-width: 420px; margin: 0; }
.ledger__col--problem { margin-bottom: 28px; }
@media (min-width: 768px) { .ledger__col--problem { margin-bottom: 0; } }

/* ---------- Programme cards ---------- */
.programmeCard {
  background: var(--panel);
  border-radius: var(--radius);
  padding: 26px 22px;
  border: 1px solid rgba(31,232,184,0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.programmeCard:hover {
  transform: translateY(-4px);
  border-color: rgba(31,232,184,0.3);
}
.programmeCard__icon {
  font-size: 24px;
  margin-bottom: 12px;
  display: block;
}
.programmeCard__code {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.programmeCard__code-dot { color: var(--signal); font-size: 6px; }
.programmeCard__name { font-family: var(--font-display); font-size: 17px; margin: 0 0 8px; }
.programmeCard__desc { color: var(--text-secondary); font-size: 14px; margin: 0; }
.programmeCard__glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(31,232,184,0.03), transparent 70%);
  pointer-events: none;
}

/* ---------- Audience switcher ---------- */
.switcher {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  border: 1px solid rgba(31,232,184,0.12);
  border-radius: var(--radius);
  overflow: hidden;
}
@media (min-width: 860px) { .switcher { grid-template-columns: 240px 1fr; } }

.switcher__tabs {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  background: var(--panel);
  border-bottom: 1px solid rgba(31,232,184,0.1);
}
@media (min-width: 860px) {
  .switcher__tabs { flex-direction: column; border-bottom: none; border-right: 1px solid rgba(31,232,184,0.1); }
}
.switcher__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 18px;
  text-align: left;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  border-left: 2px solid transparent;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
@media (min-width: 860px) { .switcher__tab { white-space: normal; } }
.switcher__tab:hover { color: var(--text-secondary); background: rgba(31,232,184,0.04); }
.switcher__tab.is-active {
  color: var(--phosphor);
  background: rgba(31,232,184,0.08);
  border-left-color: var(--signal);
}
.switcher__tabBadge {
  font-size: 9.5px;
  background: var(--signal);
  color: var(--void);
  padding: 2px 7px;
  border-radius: 999px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 4px;
}
.switcher__tabBadge-dot { font-size: 6px; }

.switcher__panel {
  padding: 32px 30px;
  background: var(--void);
  animation: panelFade 0.25s ease;
}
@keyframes panelFade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
.switcher__title { font-family: var(--font-display); font-size: 22px; margin: 0 0 14px; max-width: 480px; }
.switcher__body { color: var(--text-secondary); font-size: 15px; max-width: 520px; margin: 0 0 22px; }
.switcher__list { list-style: none; padding: 0; margin: 0 0 26px; display: flex; flex-direction: column; gap: 11px; }
.switcher__list li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.switcher__list-icon { color: var(--signal); font-size: 12px; }
.switcher__cta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--void);
  background: var(--signal);
  padding: 11px 20px;
  border-radius: 8px;
  letter-spacing: 0.02em;
  transition: box-shadow 0.2s, transform 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.switcher__cta:hover { box-shadow: 0 6px 20px -4px rgba(31,232,184,0.5); transform: translateY(-1px); }
.switcher__cta-icon { font-size: 12px; }

/* ---------- Success pathway ---------- */
.pathway { display: flex; flex-direction: column; gap: 0; }
@media (min-width: 900px) { .pathway { flex-direction: row; align-items: flex-start; } }
.pathway__step {
  flex: 1;
  padding: 4px 0;
  position: relative;
}
.pathway__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--void);
  background: var(--phosphor);
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  margin-bottom: 12px;
  font-weight: 600;
}
.pathway__icon { font-size: 24px; margin-bottom: 8px; display: block; }
.pathway__title { font-family: var(--font-display); font-size: 18px; margin: 0 0 8px; }
.pathway__desc { color: var(--text-secondary); font-size: 14px; max-width: 240px; margin: 0 0 12px; }
.pathway__progress {
  height: 2px;
  background: rgba(31,232,184,0.1);
  border-radius: 2px;
  overflow: hidden;
  width: 80%;
}
.pathway__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--signal), var(--phosphor));
  border-radius: 2px;
  transition: width 1s ease;
}
.pathway__connector {
  width: 1px;
  height: 30px;
  background: rgba(31,232,184,0.2);
  margin: 6px 0 6px 18px;
  position: relative;
}
.pathway__connector-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 900px) {
  .pathway__connector { width: auto; height: 1px; flex: 0 0 40px; margin: 26px 0 0; background: rgba(31,232,184,0.25); }
}

/* ---------- Workshops ---------- */
.workshopList { display: flex; flex-direction: column; gap: 1px; border-radius: var(--radius); overflow: hidden; }
.workshopRow {
  display: grid;
  grid-template-columns: 70px 1fr auto auto;
  align-items: center;
  gap: 18px;
  background: var(--panel);
  padding: 18px 22px;
  border-bottom: 1px solid rgba(31,232,184,0.06);
  transition: background 0.3s ease;
}
.workshopRow:hover { background: rgba(31,232,184,0.03); }
.workshopRow__date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--phosphor);
  display: flex;
  align-items: center;
  gap: 6px;
}
.workshopRow__date-dot {
  font-size: 6px;
  color: var(--signal);
}
.workshopRow__title { font-size: 15px; }
.workshopRow__mode { font-size: 12.5px; color: var(--text-muted); display: none; }
@media (min-width: 640px) { .workshopRow__mode { display: block; } }
.workshopRow__cta {
  font-family: var(--font-mono);
  font-size: 12px;
  border: 1px solid rgba(31,232,184,0.3);
  padding: 7px 14px;
  border-radius: 999px;
  color: var(--phosphor);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: border-color 0.2s, background 0.2s;
}
.workshopRow__cta:hover { border-color: var(--signal); background: rgba(31,232,184,0.08); }
.workshopRow__cta-icon { font-size: 8px; }

/* ---------- Academy tour ---------- */
.tourPanel {
  position: relative;
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, var(--circuit), var(--void) 75%);
  border: 1px solid rgba(31,232,184,0.1);
}
.tourPanel__hologram {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.tourPanel__hologram-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}
.tourPanel__hologram-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(31,232,184,0.15), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: hologramPulse 3s ease-in-out infinite;
}
@keyframes hologramPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
}
.tourPanel__playGlow {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(31,232,184,0.32), transparent 70%);
  filter: blur(4px);
}
.tourPanel__playBtn {
  position: relative;
  z-index: 2;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(31,232,184,0.12);
  border: 1px solid var(--phosphor);
  color: var(--phosphor);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.tourPanel__playBtn:hover { transform: scale(1.08); background: rgba(31,232,184,0.2); }
.tourPanel__playIcon { font-size: 22px; }
.tourPanel__caption {
  position: absolute;
  bottom: 22px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  z-index: 2;
}
.tourPanel__data-feed {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-muted);
  opacity: 0.5;
  z-index: 2;
}

/* ---------- CTA ---------- */
.cta {
  position: relative;
  padding: 110px 6%;
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, var(--circuit), var(--void) 70%);
  overflow: hidden;
}
.cta__neural-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.cta__neural-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--signal);
  border-radius: 50%;
  animation: neuralParticle 8s ease-in-out infinite;
  opacity: 0.3;
}
.cta__neural-particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.cta__neural-particle:nth-child(2) { top: 60%; left: 70%; animation-delay: 2s; }
.cta__neural-particle:nth-child(3) { top: 80%; left: 30%; animation-delay: 4s; }
@keyframes neuralParticle {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(50px, -30px) scale(3); opacity: 0.8; }
}
.cta__inner { max-width: 700px; margin: 0 auto; position: relative; z-index: 1; }
.cta__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 600;
  margin: 0 0 18px;
  line-height: 1.2;
}
.cta__sub { color: var(--text-secondary); font-size: 16px; margin-bottom: 36px; }
.cta__row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.cta__eyebrow-icon { font-size: 12px; }
.cta__ai-status {
  margin-top: 32px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.cta__ai-dot {
  color: var(--signal);
  animation: pulseDot 2s ease-in-out infinite;
}

/* ---------- Footer ---------- */
.footer {
  padding: 56px 6% 40px;
  border-top: 1px solid rgba(31,232,184,0.08);
  position: relative;
}
.footer__neural-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--signal), transparent);
  opacity: 0.3;
}
.footer__inner { max-width: var(--maxw); margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }
.footer__brand { display: flex; align-items: baseline; gap: 8px; }
.footer__brand-ai {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--signal);
  opacity: 0.5;
  letter-spacing: 0.1em;
}
.footer__tag { color: var(--text-muted); font-size: 13.5px; max-width: 360px; }
.footer__links { display: flex; gap: 26px; font-size: 13.5px; color: var(--text-secondary); flex-wrap: wrap; }
.footer__links a {
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;
}
.footer__links a:hover { color: var(--phosphor); }
.footer__link-icon { font-size: 8px; }
.footer__ai-metrics {
  display: flex;
  gap: 24px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  opacity: 0.5;
  padding-top: 16px;
  border-top: 1px solid rgba(31,232,184,0.06);
}

/* ---------- Personalization Gate ---------- */
.gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.gate__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(4,9,10,0.92);
  backdrop-filter: blur(8px);
  overflow: hidden;
}
.gate__scanline {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(31,232,184,0.1), transparent);
  animation: scanline 0.05s linear infinite;
}
.gate__grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}
.gate__panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  background: var(--panel);
  border: 1px solid rgba(31,232,184,0.15);
  border-radius: 16px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(31,232,184,0.06), 0 0 40px rgba(31,232,184,0.03);
  overflow: hidden;
  animation: gateIn 0.35s ease;
}
@keyframes gateIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
.gate__panelHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--void);
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.gate__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
}
.gate__headerText {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  flex: 1;
}
.gate__headerId { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); opacity: 0.6; }
.gate__body { padding: 36px 32px 30px; }
.gate__kicker {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--phosphor);
  letter-spacing: 0.05em;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.gate__kicker-dot {
  color: var(--signal);
  font-size: 8px;
}
.gate__title {
  font-family: var(--font-display);
  font-size: 26px;
  margin: 0 0 12px;
}
.gate__copy { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 26px; max-width: 440px; }
.gate__options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.gate__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid rgba(31,232,184,0.12);
  background: rgba(31,232,184,0.02);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}
.gate__option:hover, .gate__option.is-active {
  border-color: var(--signal);
  background: rgba(31,232,184,0.08);
  transform: translateX(2px);
}
.gate__optionMarker {
  font-size: 12px;
  color: var(--signal);
  width: 16px;
}
.gate__optionLabel { font-family: var(--font-display); font-size: 15.5px; font-weight: 600; flex: 0 0 150px; }
.gate__optionSub { font-size: 13px; color: var(--text-muted); flex: 1; }
.gate__optionArrow { color: var(--phosphor); font-size: 16px; }
.gate__skip {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}
.gate__skip:hover { color: var(--phosphor); }
.gate__skip-icon { font-size: 14px; }
`;