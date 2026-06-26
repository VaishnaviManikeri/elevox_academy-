import React, { useState, useEffect, useRef, useCallback } from "react";

/* ============================================================
   ELEVOX — Home.jsx
   Premium dark-tech storytelling homepage.
   Palette:
     Deep Black     #020808  — main background
     Charcoal Black #071212  — gradients
     Dark Teal      #0D2A29  — glow effects
     Emerald Teal   #18C8A3  — highlight accents
     Mint Green     #8FEFD5  — reflections / light streaks
   ============================================================ */

const COLORS = {
  deepBlack: "#020808",
  charcoal: "#071212",
  darkTeal: "#0D2A29",
  emerald: "#18C8A3",
  mint: "#8FEFD5",
};

/* ------------------------------------------------------------
   Visitor-path data — drives the personalization pop-up and
   the dynamic re-weighting of homepage copy.
------------------------------------------------------------ */
const VISITOR_PATHS = [
  {
    id: "student",
    label: "Student",
    sub: "Building toward a career",
    heroLine: "Turn what you're studying into work the market actually wants.",
    chipLine: "Career outcomes, placement pathways, industry mentors",
  },
  {
    id: "professional",
    label: "Professional",
    sub: "Upskilling for what's next",
    heroLine: "AI is rewriting your job description. Get ahead of the rewrite.",
    chipLine: "Upskilling tracks, role transformation, applied AI fluency",
  },
  {
    id: "corporate",
    label: "Corporate / Team",
    sub: "Transforming a workforce",
    heroLine: "Your workforce doesn't need a course. It needs a transformation plan.",
    chipLine: "Workforce audits, cohort training, measurable adoption",
  },
  {
    id: "explore",
    label: "Just exploring",
    sub: "Not sure yet — show me everything",
    heroLine: "The bridge between learning AI and being employable because of it.",
    chipLine: "Founders, programmes, outcomes — the full picture",
  },
];

/* ------------------------------------------------------------
   Small reusable bits
------------------------------------------------------------ */

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function SectionShell({ id, eyebrow, title, sub, children, tone = "default" }) {
  return (
    <section id={id} className={`section ${tone === "panel" ? "section--panel" : ""}`}>
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
   Personalization Modal — styled like an access terminal,
   not a generic "pick your persona" card grid.
------------------------------------------------------------ */
function PersonalizationGate({ onSelect }) {
  const [active, setActive] = useState(null);

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-label="Choose your path">
      <div className="gate__backdrop" />
      <div className="gate__panel">
        <div className="gate__panelHeader">
          <span className="gate__dot" />
          <span className="gate__headerText">ELEVOX // ACCESS CALIBRATION</span>
        </div>

        <div className="gate__body">
          <p className="gate__kicker">Before we begin</p>
          <h1 className="gate__title">Who's reading this?</h1>
          <p className="gate__copy">
            We'll shape what you see next — outcomes, programmes, and proof —
            around where you actually stand right now.
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
                <span className="gate__optionLabel">{p.label}</span>
                <span className="gate__optionSub">{p.sub}</span>
                <span className="gate__optionArrow" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>

          <button className="gate__skip" onClick={() => onSelect("explore")}>
            Skip — show me the full picture
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   Signature element: a thin current/signal line that travels
   down the page, glowing in sync with scroll position. This is
   the one bold, persistent motion motif tying every section
   together — "current running through the brand."
------------------------------------------------------------ */
function SignalRail() {
  const railRef = useRef(null);

  useEffect(() => {
    const handle = () => {
      const doc = document.documentElement;
      const scrollPct =
        (doc.scrollTop || document.body.scrollTop) /
        ((doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight);
      if (railRef.current) {
        railRef.current.style.setProperty("--rail-progress", `${Math.min(1, Math.max(0, scrollPct)) * 100}%`);
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="signalRail" ref={railRef} aria-hidden="true">
      <div className="signalRail__track" />
      <div className="signalRail__fill" />
      <div className="signalRail__bead" />
    </div>
  );
}

/* ------------------------------------------------------------
   Hero — full-bleed generated background (mesh + nodes),
   content anchored right, asymmetric composition.
------------------------------------------------------------ */
function Hero({ pathway }) {
  const path = VISITOR_PATHS.find((p) => p.id === pathway) || VISITOR_PATHS[3];

  return (
    <header className="hero">
      <div className="hero__bg">
        <div className="hero__image" style={{ backgroundImage: "url(/assets/images/hero.png)" }} />
      </div>

      <nav className="hero__nav">
        <div className="hero__logo">
          <span className="hero__logoMark">EX</span>
          <span className="hero__logoWord">ELEVOX</span>
        </div>
        <div className="hero__navLinks">
          <a href="#programmes">Programmes</a>
          <a href="#founders">Founders</a>
          <a href="#pathway">Outcomes</a>
          <a href="#workshops">Workshops</a>
        </div>
        <button className="hero__navCta">Talk to us</button>
      </nav>

      <div className="hero__content">
        <p className="hero__tag">{path.chipLine}</p>
        <h1 className="hero__headline">
          AI is no longer optional.
          <br />
          <span className="hero__headlineAccent">Employability is.</span>
        </h1>
        <p className="hero__sub">{path.heroLine}</p>

        <div className="hero__proof">
          <div className="hero__proofItem">
            <span className="hero__proofNum">12+ yrs</span>
            <span className="hero__proofLabel">Founders' industry experience</span>
          </div>
          <div className="hero__proofDivider" />
          <div className="hero__proofItem">
            <span className="hero__proofNum">40+</span>
            <span className="hero__proofLabel">Hiring &amp; transformation partners</span>
          </div>
          <div className="hero__proofDivider" />
          <div className="hero__proofItem">
            <span className="hero__proofNum">1</span>
            <span className="hero__proofLabel">Bridge from learning to employment</span>
          </div>
        </div>

        <div className="hero__ctaRow">
          <button className="btn btn--primary">See your pathway</button>
          <button className="btn btn--ghost">Watch the academy tour</button>
        </div>
      </div>

      <div className="hero__scrollCue" aria-hidden="true">
        <span />
        Scroll to see how it works
      </div>
    </header>
  );
}

/* ------------------------------------------------------------
   1. Why AI Matters Now
------------------------------------------------------------ */
function WhyAIMattersNow() {
  const points = [
    {
      stat: "92%",
      label: "of roles will require applied AI fluency within 3 years",
    },
    {
      stat: "3x",
      label: "faster skill obsolescence than the decade before",
    },
    {
      stat: "0",
      label: "industries left untouched by AI-driven restructuring",
    },
  ];
  return (
    <SectionShell
      id="why-ai"
      eyebrow="The shift"
      title="AI didn't knock. It already let itself in."
      sub="Every industry is being re-architected around AI-literate people. The question isn't whether you adapt — it's whether you adapt on your own terms, or someone else's."
    >
      <div className="grid grid--3">
        {points.map((p) => (
          <div className="statCard" key={p.label}>
            <div className="statCard__stat">{p.stat}</div>
            <div className="statCard__label">{p.label}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   2. Meet The Founders
------------------------------------------------------------ */
function MeetTheFounders() {
  const founders = [
    {
      name: "Founder One",
      role: "Ex-Industry AI Lead",
      bio: "Spent over a decade shipping production AI systems before turning to building the people who'll ship the next generation of them.",
    },
    {
      name: "Founder Two",
      role: "Ex-Talent & Workforce Strategy",
      bio: "Built and scaled hiring pipelines for AI-first teams — sees firsthand the gap between classroom AI and employable AI.",
    },
  ];
  return (
    <SectionShell
      id="founders"
      eyebrow="Why trust this"
      title="Built by people who hired, fired, and shipped — not just taught."
      sub="Elevox exists because its founders sat on both sides of the table: inside the companies building AI, and inside the rooms deciding who gets hired to do it."
    >
      <div className="grid grid--2">
        {founders.map((f) => (
          <div className="founderCard" key={f.name}>
            <div className="founderCard__avatar" aria-hidden="true" />
            <div>
              <h3 className="founderCard__name">{f.name}</h3>
              <p className="founderCard__role">{f.role}</p>
              <p className="founderCard__bio">{f.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   3. Industry Problem & Opportunity
------------------------------------------------------------ */
function IndustryProblemOpportunity() {
  return (
    <SectionShell
      id="problem"
      tone="panel"
      eyebrow="The gap"
      title="Courses teach tools. Companies hire outcomes."
    >
      <div className="splitRow">
        <div className="splitRow__col">
          <h3 className="splitRow__heading">The problem</h3>
          <p className="splitRow__text">
            Most AI training ends at certificates and tool tutorials. Learners leave knowing
            prompts and platforms, but not how to apply either inside a real role, team, or
            business problem.
          </p>
        </div>
        <div className="splitRow__col">
          <h3 className="splitRow__heading splitRow__heading--accent">The opportunity</h3>
          <p className="splitRow__text">
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
   4. Programmes Overview
------------------------------------------------------------ */
function ProgrammesOverview() {
  const programmes = [
    { name: "Foundations", desc: "Applied AI literacy for any background, in weeks not semesters." },
    { name: "Specialist Tracks", desc: "Role-specific depth — product, data, ops, engineering, design." },
    { name: "Capstone & Portfolio", desc: "Real briefs, real stakeholders, work you can show employers." },
    { name: "Workforce Cohorts", desc: "Team-wide rollouts built around your company's actual workflows." },
  ];
  return (
    <SectionShell
      id="programmes"
      eyebrow="What we run"
      title="One philosophy, four formats."
      sub="Every track ends the same way: with proof you can put in front of a hiring manager, a promotion panel, or a board."
    >
      <div className="grid grid--4">
        {programmes.map((p) => (
          <div className="programmeCard" key={p.name}>
            <div className="programmeCard__bar" />
            <h3 className="programmeCard__name">{p.name}</h3>
            <p className="programmeCard__desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   5–8. Audience tracks: Students / Professionals / Corporates / Colleges
   Personalized: the matching pathway is visually promoted.
------------------------------------------------------------ */
function AudienceTrack({ id, eyebrow, title, points, ctaLabel, highlighted }) {
  return (
    <div className={`audienceCard ${highlighted ? "is-highlighted" : ""}`} id={id}>
      {highlighted && <span className="audienceCard__badge">Matched to you</span>}
      <p className="audienceCard__eyebrow">{eyebrow}</p>
      <h3 className="audienceCard__title">{title}</h3>
      <ul className="audienceCard__list">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
      <button className="audienceCard__cta">{ctaLabel}</button>
    </div>
  );
}

function AudienceTracks({ pathway }) {
  return (
    <SectionShell
      id="audiences"
      eyebrow="Built for where you stand"
      title="Four starting points. One destination — employable AI fluency."
    >
      <div className="grid grid--4">
        <AudienceTrack
          id="students"
          eyebrow="For Students"
          title="AI for Students"
          points={["Career-mapped curriculum", "Live industry mentors", "Placement-ready portfolio"]}
          ctaLabel="See student pathway"
          highlighted={pathway === "student"}
        />
        <AudienceTrack
          id="professionals"
          eyebrow="For Professionals"
          title="AI for Professionals"
          points={["Role-specific upskilling", "Evening & weekend cohorts", "Promotion-ready proof"]}
          ctaLabel="See upskilling tracks"
          highlighted={pathway === "professional"}
        />
        <AudienceTrack
          id="corporates"
          eyebrow="For Corporates"
          title="AI for Corporates"
          points={["Workforce AI audits", "Team-wide cohort delivery", "Adoption measured, not assumed"]}
          ctaLabel="Book a workforce audit"
          highlighted={pathway === "corporate"}
        />
        <AudienceTrack
          id="colleges"
          eyebrow="For Colleges"
          title="AI for Colleges"
          points={["Curriculum partnerships", "Faculty enablement", "Placement pipeline access"]}
          ctaLabel="Partner with Elevox"
          highlighted={false}
        />
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   9. Success Pathway — a genuine sequence, so numbering earns
   its place here (unlike the audience cards above).
------------------------------------------------------------ */
function SuccessPathway() {
  const steps = [
    { n: "01", title: "Diagnose", desc: "Map where you stand against where the market is heading." },
    { n: "02", title: "Build", desc: "Apply AI inside real briefs, not isolated tutorials." },
    { n: "03", title: "Prove", desc: "Leave with a portfolio, not just a certificate." },
    { n: "04", title: "Place", desc: "Get matched to roles or transformation outcomes." },
  ];
  return (
    <SectionShell
      id="pathway"
      eyebrow="How it actually works"
      title="The success pathway"
      sub="Four stages. Every stage produces something you can show, not just something you've learned."
    >
      <div className="pathway">
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <div className="pathway__step">
              <span className="pathway__num">{s.n}</span>
              <h3 className="pathway__title">{s.title}</h3>
              <p className="pathway__desc">{s.desc}</p>
            </div>
            {i < steps.length - 1 && <div className="pathway__connector" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   10. Placement & Career Outcomes
------------------------------------------------------------ */
function PlacementOutcomes() {
  const outcomes = [
    { stat: "87%", label: "Learners who moved roles or got promoted within 6 months" },
    { stat: "40+", label: "Hiring & transformation partners in the network" },
    { stat: "21 days", label: "Average time from capstone to first interview" },
  ];
  return (
    <SectionShell
      id="outcomes"
      tone="panel"
      eyebrow="Proof, not promises"
      title="Outcomes we're accountable for."
    >
      <div className="grid grid--3">
        {outcomes.map((o) => (
          <div className="statCard statCard--accent" key={o.label}>
            <div className="statCard__stat">{o.stat}</div>
            <div className="statCard__label">{o.label}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   11. Upcoming Workshops
------------------------------------------------------------ */
function UpcomingWorkshops() {
  const workshops = [
    { date: "08 JUL", title: "Applied AI for Product Teams", mode: "Live · Online" },
    { date: "15 JUL", title: "AI Readiness Audit for Leaders", mode: "Live · Mumbai" },
    { date: "22 JUL", title: "From Tutorials to Portfolios", mode: "Live · Online" },
  ];
  return (
    <SectionShell
      id="workshops"
      eyebrow="This month"
      title="Upcoming workshops"
      sub="Free, live sessions to test the approach before you commit to a track."
    >
      <div className="workshopList">
        {workshops.map((w) => (
          <div className="workshopRow" key={w.title}>
            <span className="workshopRow__date">{w.date}</span>
            <span className="workshopRow__title">{w.title}</span>
            <span className="workshopRow__mode">{w.mode}</span>
            <button className="workshopRow__cta">Reserve seat</button>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   12. Academy Tour Preview
------------------------------------------------------------ */
function AcademyTourPreview() {
  return (
    <SectionShell
      id="tour"
      eyebrow="Inside Elevox"
      title="A campus built to feel like a tech company, not a coaching centre."
      sub="Take a 90-second walk through the studios, mentor pods, and capstone labs before you visit in person."
    >
      <div className="tourPanel">
        <div className="tourPanel__playGlow" />
        <button className="tourPanel__playBtn" aria-label="Play academy tour video">
          ▶
        </button>
        <span className="tourPanel__caption">90-second academy walkthrough</span>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   13. Call To Action
------------------------------------------------------------ */
function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <p className="eyebrow eyebrow--onDark">Start here</p>
        <h2 className="cta__title">Learning ends at a certificate. Ours ends at a job.</h2>
        <p className="cta__sub">
          Tell us where you stand, and we'll show you the shortest real path from here to
          employable, promotable, or transformation-ready.
        </p>
        <div className="cta__row">
          <button className="btn btn--primary btn--lg">Map my pathway</button>
          <button className="btn btn--ghost btn--lg">Talk to a founder</button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Footer
------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="hero__logoMark">EX</span>
          <span className="hero__logoWord">ELEVOX</span>
        </div>
        <p className="footer__tag">The bridge between learning AI and being employable because of it.</p>
        <div className="footer__links">
          <a href="#programmes">Programmes</a>
          <a href="#founders">Founders</a>
          <a href="#pathway">Outcomes</a>
          <a href="#workshops">Workshops</a>
        </div>
      </div>
    </footer>
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

  return (
    <div className="elevox">
      <style>{STYLES}</style>

      {gateOpen && <PersonalizationGate onSelect={handleSelect} />}

      <SignalRail />
      <Hero pathway={pathway} />

      <WhyAIMattersNow />
      <MeetTheFounders />
      <IndustryProblemOpportunity />
      <ProgrammesOverview />
      <AudienceTracks pathway={pathway} />
      <SuccessPathway />
      <PlacementOutcomes />
      <UpcomingWorkshops />
      <AcademyTourPreview />
      <CallToAction />
      <Footer />
    </div>
  );
}

/* ============================================================
   STYLES
   ============================================================ */
const STYLES = `
:root {
  --deep-black: ${COLORS.deepBlack};
  --charcoal: ${COLORS.charcoal};
  --dark-teal: ${COLORS.darkTeal};
  --emerald: ${COLORS.emerald};
  --mint: ${COLORS.mint};
  --text-primary: #EAF6F2;
  --text-secondary: #9FBDB6;
  --text-muted: #5E7E78;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 14px;
  --maxw: 1200px;
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }

.elevox {
  background: var(--deep-black);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
}

.elevox a { color: inherit; text-decoration: none; }
.elevox button { font-family: var(--font-body); cursor: pointer; border: none; background: none; color: inherit; }

@media (prefers-reduced-motion: reduce) {
  .elevox * { animation: none !important; transition: none !important; }
}

/* ---------- Eyebrow / labels ---------- */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--emerald);
  margin-bottom: 14px;
}
.eyebrow--onDark { color: var(--mint); }

/* ---------- Signal Rail (signature element) ---------- */
.signalRail {
  position: fixed;
  top: 0;
  right: 18px;
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
  background: linear-gradient(to bottom, transparent, rgba(143,239,213,0.08) 10%, rgba(143,239,213,0.08) 90%, transparent);
}
.signalRail__fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--rail-progress);
  background: linear-gradient(to bottom, var(--mint), var(--emerald));
  box-shadow: 0 0 12px rgba(24,200,163,0.7);
}
.signalRail__bead {
  position: absolute;
  left: -3px;
  top: var(--rail-progress);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--mint);
  box-shadow: 0 0 14px 4px rgba(143,239,213,0.8);
  transform: translateY(-50%);
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100vh;
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
  background: var(--deep-black);
}
.hero__image {
  position: absolute;
  inset: 0;
  background-image: url(/assets/images/hero.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__nav {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 5%;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
}
.hero__logo { display: flex; align-items: baseline; gap: 8px; }
.hero__logoMark {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--deep-black);
  background: var(--mint);
  padding: 4px 7px;
  border-radius: 4px;
  font-weight: 600;
}
.hero__logoWord {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.02em;
}
.hero__navLinks { display: none; gap: 36px; font-size: 14px; color: var(--text-secondary); }
@media (min-width: 900px) { .hero__navLinks { display: flex; } }
.hero__navLinks a:hover { color: var(--mint); }
.hero__navCta {
  font-size: 13px;
  font-family: var(--font-mono);
  border: 1px solid rgba(143,239,213,0.35);
  padding: 9px 18px;
  border-radius: 999px;
  color: var(--mint);
  transition: border-color 0.2s, background 0.2s;
}
.hero__navCta:hover { background: rgba(24,200,163,0.1); border-color: var(--emerald); }

.hero__content {
  position: relative;
  z-index: 5;
  margin-left: auto;
  max-width: 620px;
  padding: 40px 5% 0;
  text-align: left;
  text-shadow: 0 2px 18px rgba(0,0,0,0.55);
}
@media (min-width: 700px) {
  .hero__content { padding: 60px 6% 0; }
}

.hero__tag {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--mint);
  letter-spacing: 0.06em;
  border-left: 2px solid var(--emerald);
  padding-left: 12px;
  margin-bottom: 22px;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(34px, 5.4vw, 58px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
}
.hero__headlineAccent {
  background: linear-gradient(90deg, var(--mint), var(--emerald));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__sub {
  font-size: clamp(15px, 1.6vw, 18px);
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 36px;
}

.hero__proof {
  display: flex;
  align-items: stretch;
  gap: 22px;
  margin-bottom: 38px;
  flex-wrap: wrap;
}
.hero__proofItem { display: flex; flex-direction: column; gap: 4px; min-width: 120px; }
.hero__proofNum {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
}
.hero__proofLabel { font-size: 12.5px; color: var(--text-muted); max-width: 160px; }
.hero__proofDivider { width: 1px; background: rgba(143,239,213,0.15); }

.hero__ctaRow { display: flex; gap: 14px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14.5px;
  padding: 13px 26px;
  border-radius: 10px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.btn--primary {
  background: linear-gradient(90deg, var(--emerald), #14a98a);
  color: var(--deep-black);
  box-shadow: 0 0 0 0 rgba(24,200,163,0);
}
.btn--primary:hover { box-shadow: 0 6px 24px -4px rgba(24,200,163,0.55); transform: translateY(-1px); }
.btn--ghost {
  border: 1px solid rgba(143,239,213,0.3);
  color: var(--text-primary);
}
.btn--ghost:hover { border-color: var(--mint); background: rgba(143,239,213,0.06); }
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
  padding: 20px 5% 28px;
}
.hero__scrollCue span {
  width: 26px; height: 1px; background: var(--text-muted);
}

/* ---------- Sections ---------- */
.section { padding: 96px 0; position: relative; }
.section--panel { background: linear-gradient(180deg, var(--charcoal), var(--deep-black)); }
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

.grid { display: grid; gap: 22px; }
.grid--2 { grid-template-columns: repeat(1, 1fr); }
.grid--3 { grid-template-columns: repeat(1, 1fr); }
.grid--4 { grid-template-columns: repeat(1, 1fr); }
@media (min-width: 640px) {
  .grid--2 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(3, 1fr); }
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid--4 { grid-template-columns: repeat(4, 1fr); }
}

/* stat cards */
.statCard {
  background: var(--charcoal);
  border: 1px solid rgba(143,239,213,0.08);
  border-radius: var(--radius);
  padding: 28px 24px;
}
.statCard--accent { border-color: rgba(24,200,163,0.25); }
.statCard__stat {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--mint);
  margin-bottom: 10px;
}
.statCard__label { color: var(--text-secondary); font-size: 14px; }

/* founder cards */
.founderCard {
  display: flex;
  gap: 20px;
  background: var(--charcoal);
  border: 1px solid rgba(143,239,213,0.08);
  border-radius: var(--radius);
  padding: 28px;
}
.founderCard__avatar {
  width: 64px; height: 64px; min-width: 64px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, var(--mint), var(--emerald) 55%, var(--dark-teal) 100%);
}
.founderCard__name { font-family: var(--font-display); font-size: 18px; margin: 0 0 4px; }
.founderCard__role { font-family: var(--font-mono); font-size: 12px; color: var(--emerald); margin: 0 0 10px; letter-spacing: 0.03em; }
.founderCard__bio { color: var(--text-secondary); font-size: 14.5px; margin: 0; }

/* split row (problem/opportunity) */
.splitRow { display: grid; gap: 28px; }
@media (min-width: 768px) { .splitRow { grid-template-columns: 1fr 1fr; } }
.splitRow__col { padding: 4px 0; }
.splitRow__heading { font-family: var(--font-display); font-size: 19px; margin: 0 0 12px; color: var(--text-secondary); }
.splitRow__heading--accent { color: var(--mint); }
.splitRow__text { color: var(--text-secondary); font-size: 15.5px; max-width: 420px; }

/* programme cards */
.programmeCard {
  background: var(--charcoal);
  border-radius: var(--radius);
  padding: 26px 22px;
  border: 1px solid rgba(143,239,213,0.08);
}
.programmeCard__bar {
  width: 30px; height: 3px; border-radius: 2px;
  background: linear-gradient(90deg, var(--emerald), var(--mint));
  margin-bottom: 18px;
}
.programmeCard__name { font-family: var(--font-display); font-size: 17px; margin: 0 0 8px; }
.programmeCard__desc { color: var(--text-secondary); font-size: 14px; margin: 0; }

/* audience cards */
.audienceCard {
  position: relative;
  background: var(--charcoal);
  border: 1px solid rgba(143,239,213,0.08);
  border-radius: var(--radius);
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.audienceCard.is-highlighted {
  border-color: var(--emerald);
  box-shadow: 0 0 0 1px rgba(24,200,163,0.3), 0 16px 40px -16px rgba(24,200,163,0.35);
  transform: translateY(-4px);
}
.audienceCard__badge {
  position: absolute; top: -11px; left: 20px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.05em;
  background: var(--emerald);
  color: var(--deep-black);
  padding: 3px 10px;
  border-radius: 999px;
}
.audienceCard__eyebrow { font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); letter-spacing: 0.06em; margin-bottom: 10px; text-transform: uppercase; }
.audienceCard__title { font-family: var(--font-display); font-size: 18px; margin: 0 0 14px; }
.audienceCard__list { list-style: none; padding: 0; margin: 0 0 22px; display: flex; flex-direction: column; gap: 9px; flex-grow: 1; }
.audienceCard__list li {
  font-size: 13.5px;
  color: var(--text-secondary);
  padding-left: 16px;
  position: relative;
}
.audienceCard__list li::before {
  content: ""; position: absolute; left: 0; top: 7px;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--mint);
}
.audienceCard__cta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--mint);
  text-align: left;
  padding: 0;
  letter-spacing: 0.02em;
}
.audienceCard__cta:hover { color: var(--emerald); }

/* success pathway */
.pathway {
  display: flex;
  flex-direction: column;
  gap: 0;
}
@media (min-width: 900px) {
  .pathway { flex-direction: row; align-items: flex-start; }
}
.pathway__step { flex: 1; padding: 4px 0; }
.pathway__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--dark-teal);
  background: var(--mint);
  display: inline-block;
  padding: 3px 9px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-weight: 600;
}
.pathway__title { font-family: var(--font-display); font-size: 18px; margin: 0 0 8px; }
.pathway__desc { color: var(--text-secondary); font-size: 14px; max-width: 240px; margin: 0; }
.pathway__connector {
  width: 1px; height: 30px; background: rgba(143,239,213,0.2);
  margin: 6px 0 6px 18px;
}
@media (min-width: 900px) {
  .pathway__connector { width: auto; height: 1px; flex: 0 0 40px; margin: 26px 0 0; background: rgba(143,239,213,0.25); }
}

/* workshops */
.workshopList { display: flex; flex-direction: column; gap: 1px; border-radius: var(--radius); overflow: hidden; }
.workshopRow {
  display: grid;
  grid-template-columns: 70px 1fr auto auto;
  align-items: center;
  gap: 18px;
  background: var(--charcoal);
  padding: 18px 22px;
  border-bottom: 1px solid rgba(143,239,213,0.06);
}
.workshopRow__date { font-family: var(--font-mono); font-size: 13px; color: var(--mint); }
.workshopRow__title { font-size: 15px; }
.workshopRow__mode { font-size: 12.5px; color: var(--text-muted); display: none; }
@media (min-width: 640px) { .workshopRow__mode { display: block; } }
.workshopRow__cta {
  font-family: var(--font-mono);
  font-size: 12px;
  border: 1px solid rgba(143,239,213,0.3);
  padding: 7px 14px;
  border-radius: 999px;
  color: var(--mint);
  white-space: nowrap;
}
.workshopRow__cta:hover { border-color: var(--emerald); background: rgba(24,200,163,0.08); }

/* academy tour */
.tourPanel {
  position: relative;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, var(--dark-teal), var(--deep-black) 75%);
  border: 1px solid rgba(143,239,213,0.1);
}
.tourPanel__playGlow {
  position: absolute; width: 240px; height: 240px; border-radius: 50%;
  background: radial-gradient(circle, rgba(24,200,163,0.35), transparent 70%);
  filter: blur(4px);
}
.tourPanel__playBtn {
  position: relative;
  z-index: 2;
  width: 76px; height: 76px;
  border-radius: 50%;
  background: rgba(143,239,213,0.12);
  border: 1px solid var(--mint);
  color: var(--mint);
  font-size: 22px;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.tourPanel__playBtn:hover { transform: scale(1.08); background: rgba(143,239,213,0.2); }
.tourPanel__caption {
  position: absolute; bottom: 22px; left: 0; right: 0; text-align: center;
  font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); letter-spacing: 0.04em;
}

/* CTA */
.cta {
  position: relative;
  padding: 110px 6%;
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, var(--dark-teal), var(--deep-black) 70%);
}
.cta__inner { max-width: 700px; margin: 0 auto; }
.cta__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 600;
  margin: 0 0 18px;
  line-height: 1.2;
}
.cta__sub { color: var(--text-secondary); font-size: 16px; margin-bottom: 36px; }
.cta__row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

/* footer */
.footer { padding: 56px 6% 40px; border-top: 1px solid rgba(143,239,213,0.08); }
.footer__inner { max-width: var(--maxw); margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }
.footer__brand { display: flex; align-items: baseline; gap: 8px; }
.footer__tag { color: var(--text-muted); font-size: 13.5px; max-width: 360px; }
.footer__links { display: flex; gap: 26px; font-size: 13.5px; color: var(--text-secondary); flex-wrap: wrap; }
.footer__links a:hover { color: var(--mint); }

/* ---------- Personalization Gate ---------- */
.gate {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.gate__backdrop {
  position: absolute; inset: 0;
  background: rgba(2,8,8,0.86);
  backdrop-filter: blur(6px);
}
.gate__panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  background: var(--charcoal);
  border: 1px solid rgba(143,239,213,0.15);
  border-radius: 18px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(24,200,163,0.06);
  overflow: hidden;
  animation: gateIn 0.35s ease;
}
@keyframes gateIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
.gate__panelHeader {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 20px;
  background: var(--deep-black);
  border-bottom: 1px solid rgba(143,239,213,0.08);
}
.gate__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--emerald); box-shadow: 0 0 8px var(--emerald); }
.gate__headerText { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--text-muted); }
.gate__body { padding: 36px 32px 30px; }
.gate__kicker { font-family: var(--font-mono); font-size: 12px; color: var(--mint); letter-spacing: 0.05em; margin: 0 0 10px; }
.gate__title { font-family: var(--font-display); font-size: 26px; margin: 0 0 12px; }
.gate__copy { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 26px; max-width: 440px; }
.gate__options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.gate__option {
  display: flex; align-items: center; gap: 4px;
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(143,239,213,0.12);
  background: rgba(143,239,213,0.02);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}
.gate__option:hover, .gate__option.is-active {
  border-color: var(--emerald);
  background: rgba(24,200,163,0.08);
  transform: translateX(2px);
}
.gate__optionLabel { font-family: var(--font-display); font-size: 15.5px; font-weight: 600; flex: 0 0 150px; }
.gate__optionSub { font-size: 13px; color: var(--text-muted); flex: 1; }
.gate__optionArrow { color: var(--mint); font-size: 16px; }
.gate__skip { font-family: var(--font-mono); font-size: 12.5px; color: var(--text-muted); text-decoration: underline; text-underline-offset: 3px; }
.gate__skip:hover { color: var(--mint); }
`;