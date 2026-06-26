import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

/* ============================================================
   ELEVOX — Home.jsx
   ------------------------------------------------------------
   Design direction: a technology company shipping a career
   product, not a coaching institute selling a course. The
   brand name (ELEV-OX, "elevate" + signal/voltage) drives the
   visual language: readouts, signal traces, terminal framing,
   monospace data — instrumentation, not decoration.

   Palette:
     Void           #04090A  — base background
     Panel          #0A1414  — raised surfaces
     Circuit        #123230  — structural lines / borders
     Signal         #1FE8B8  — primary accent (brighter than
                                 the old emerald — reads as
                                 "live", not "eco")
     Phosphor       #B9FFE8  — hottest highlight, used sparingly
     Amber          #FFB454  — the ONE warm accent, reserved for
                                 "human" content (founders, CTA)
   ============================================================ */

const COLORS = {
  void: "#04090A",
  panel: "#0A1414",
  circuit: "#123230",
  signal: "#1FE8B8",
  phosphor: "#B9FFE8",
  amber: "#FFB454",
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
   Personalization Gate — framed as a calibration terminal.
   Selecting a path doesn't just highlight a card later — it
   rewrites the hero readout, the proof stats, and promotes a
   track in the audience switcher.
------------------------------------------------------------ */
function PersonalizationGate({ onSelect }) {
  const [active, setActive] = useState(null);

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-label="Choose your path">
      <div className="gate__backdrop" />
      <div className="gate__panel">
        <div className="gate__panelHeader">
          <span className="gate__dot" />
          <span className="gate__headerText">ELEVOX // CALIBRATING VIEW</span>
          <span className="gate__headerId">ID:0x{Math.floor(Math.random() * 9000 + 1000)}</span>
        </div>

        <div className="gate__body">
          <p className="gate__kicker">Before we begin</p>
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
                <span className="gate__optionLabel">{p.label}</span>
                <span className="gate__optionSub">{p.sub}</span>
                <span className="gate__optionArrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <button className="gate__skip" onClick={() => onSelect("explore")}>
            Skip calibration — show the full picture
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   Signature element: SIGNAL TRACE.
   A persistent vertical line that runs the full height of the
   page, rendered like an oscilloscope trace rather than a
   plain progress bar. At each section boundary it logs a
   readout label (TRACE_01 WHY-AI, TRACE_02 FOUNDERS, ...), so
   the rail behaves like a system log of how far through the
   "transformation" the visitor has travelled — input (raw
   potential) at the top, output (employable) at the bottom.
   This is the one bold, persistent motif tying the page
   together, matching the brand's literal signal/voltage name.
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
      <div className="signalRail__readout">{RAIL_LOG[activeLog]}</div>
    </div>
  );
}

/* ------------------------------------------------------------
   Navbar + Hero
------------------------------------------------------------ */
function Navbar({ onReset }) {
  return (
    <nav className="navbar">
      <div className="hero__logo" onClick={onReset} role="button" tabIndex={0}>
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
  );
}

function Hero({ pathway }) {
  const path = useMemo(
    () => VISITOR_PATHS.find((p) => p.id === pathway) || VISITOR_PATHS[3],
    [pathway]
  );

  return (
    <header className="hero" data-rail-section={0}>
      <div className="hero__bg">
        <div className="hero__image" style={{ backgroundImage: "url(/assets/images/hero.png)" }} />
        <div className="hero__grid" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <div className="hero__statusRow">
          <span className="hero__statusDot" />
          <span className="hero__statusText">{path.heroKicker}</span>
        </div>

        <h1 className="hero__headline">
          AI is no longer optional.
          <br />
          <span className="hero__headlineAccent">Employability is.</span>
        </h1>
        <p className="hero__sub">{path.heroLine}</p>

        <div className="hero__readout">
          {path.proof.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="hero__readoutItem">
                <span className="hero__readoutNum">{item.num}</span>
                <span className="hero__readoutLabel">{item.label}</span>
              </div>
              {i < path.proof.length - 1 && <div className="hero__readoutDivider" />}
            </React.Fragment>
          ))}
        </div>

        <div className="hero__ctaRow">
          <button className="btn btn--primary">See your pathway</button>
          <button className="btn btn--ghost">Watch the academy tour</button>
        </div>
      </div>

      <div className="hero__scrollCue" aria-hidden="true">
        <span />
        Scroll — trace runs the full page
      </div>
    </header>
  );
}

/* ------------------------------------------------------------
   Transition strip
------------------------------------------------------------ */
function HeroTransitionStrip() {
  return (
    <section className="heroStrip" aria-label="Elevox learning promise">
      <div className="heroStrip__inner">
        <span className="heroStrip__label">01 · AI FLUENCY</span>
        <span className="heroStrip__divider" aria-hidden="true" />
        <span className="heroStrip__label">02 · INDUSTRY PROOF</span>
        <span className="heroStrip__divider" aria-hidden="true" />
        <span className="heroStrip__label">03 · CAREER OUTCOME</span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Secondary hero image
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
   1. Why AI Matters Now — framed as a system status readout,
   not a stat-card grid. The numbers are bigger, the labels are
   terse, and they sit on a single shared baseline like a
   dashboard, because this section's job is to feel like a
   warning light, not a brochure stat.
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
      <div className="readoutBar">
        {points.map((p, i) => (
          <React.Fragment key={p.label}>
            <div className="readoutBar__item">
              <div className="readoutBar__stat">{p.stat}</div>
              <div className="readoutBar__label">{p.label}</div>
            </div>
            {i < points.length - 1 && <div className="readoutBar__rule" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   2. Meet The Founders — dossier framing instead of bio cards.
   Industry credibility is the claim, so the layout reads like
   a credentials file: a monospace "ledger" of roles and scars,
   not a circular-avatar card grid.
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
              <div className="dossierCard__id" aria-hidden="true" />
              <div className="dossierCard__heading">
                <h3 className="dossierCard__name">{f.name}</h3>
                <p className="dossierCard__role">{f.role}</p>
              </div>
              <span className="dossierCard__years">{f.years}</span>
            </div>
            <p className="dossierCard__bio">{f.bio}</p>
            <ul className="dossierCard__scars">
              {f.scars.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   3. Industry Problem & Opportunity — rendered as a two-column
   ledger with a shared center divider, like a balance sheet:
   liability vs. asset. This makes the gap feel measured, not
   just asserted.
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
          <span className="ledger__tag">LIABILITY</span>
          <h3 className="ledger__heading">The problem</h3>
          <p className="ledger__text">
            Most AI training ends at certificates and tool tutorials. Learners leave knowing
            prompts and platforms, but not how to apply either inside a real role, team, or
            business problem.
          </p>
        </div>
        <div className="ledger__spine" aria-hidden="true" />
        <div className="ledger__col ledger__col--opportunity">
          <span className="ledger__tag ledger__tag--accent">ASSET</span>
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
   4. Programmes Overview
------------------------------------------------------------ */
function ProgrammesOverview() {
  const programmes = [
    { code: "PRG.01", name: "Foundations", desc: "Applied AI literacy for any background, in weeks not semesters." },
    { code: "PRG.02", name: "Specialist Tracks", desc: "Role-specific depth — product, data, ops, engineering, design." },
    { code: "PRG.03", name: "Capstone & Portfolio", desc: "Real briefs, real stakeholders, work you can show employers." },
    { code: "PRG.04", name: "Workforce Cohorts", desc: "Team-wide rollouts built around your company's actual workflows." },
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
            <span className="programmeCard__code">{p.code}</span>
            <h3 className="programmeCard__name">{p.name}</h3>
            <p className="programmeCard__desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   5. Audience Tracks — a tab-driven switcher rather than four
   simultaneous cards with one "highlighted." This is the
   section where personalization should be most visible: the
   visitor's calibrated path opens pre-selected, and switching
   tabs is the same gesture a returning visitor would use to
   explore the others. One detail panel, not four boxes.
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
              {matched === id && <span className="switcher__tabBadge">Matched</span>}
            </button>
          ))}
        </div>

        <div className="switcher__panel" key={tab}>
          <Eyebrow>{active.eyebrow}</Eyebrow>
          <h3 className="switcher__title">{active.title}</h3>
          <p className="switcher__body">{active.body}</p>
          <ul className="switcher__list">
            {active.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          <button className="switcher__cta">{active.cta}</button>
        </div>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   6. Success Pathway — a genuine sequence, so numbering earns
   its place here (unlike a generic feature grid).
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
   7. Placement & Career Outcomes
------------------------------------------------------------ */
function PlacementOutcomes() {
  const outcomes = [
    { stat: "87%", label: "learners who moved roles or got promoted within 6 months" },
    { stat: "40+", label: "hiring & transformation partners in the network" },
    { stat: "21 days", label: "average time from capstone to first interview" },
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
              <div className="readoutBar__stat">{o.stat}</div>
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
   8. Upcoming Workshops
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
      index={8}
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
   9. Academy Tour Preview
------------------------------------------------------------ */
function AcademyTourPreview() {
  return (
    <SectionShell
      id="tour"
      index={9}
      eyebrow="Inside Elevox"
      title="A campus built to feel like a tech company, not a coaching centre."
      sub="Take a 90-second walk through the studios, mentor pods, and capstone labs before you visit in person."
    >
      <div className="tourPanel">
        <div className="tourPanel__playGlow" />
        <button className="tourPanel__playBtn" aria-label="Play academy tour video">▶</button>
        <span className="tourPanel__caption">90-second academy walkthrough</span>
      </div>
    </SectionShell>
  );
}

/* ------------------------------------------------------------
   10. Call To Action
------------------------------------------------------------ */
function CallToAction() {
  return (
    <section className="cta" data-rail-section={10}>
      <div className="cta__inner">
        <Eyebrow tone="amber">Start here</Eyebrow>
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

  const handleReset = useCallback(() => {
    setGateOpen(true);
  }, []);

  return (
    <div className="elevox">
      <style>{STYLES}</style>

      {gateOpen && <PersonalizationGate onSelect={handleSelect} />}

      <SignalRail />
      <Navbar onReset={handleReset} />
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
  --void: ${COLORS.void};
  --panel: ${COLORS.panel};
  --circuit: ${COLORS.circuit};
  --signal: ${COLORS.signal};
  --phosphor: ${COLORS.phosphor};
  --amber: ${COLORS.amber};
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

/* ---------- Eyebrow / labels ---------- */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 14px;
}
.eyebrow--amber { color: var(--amber); }

/* ---------- Signal Rail (signature element) ---------- */
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
  padding-right: 4px;
  transition: top 0.08s linear;
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
.hero__logo { display: flex; align-items: baseline; gap: 8px; cursor: pointer; }
.hero__logoMark {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--void);
  background: var(--phosphor);
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
.hero__navLinks a:hover { color: var(--phosphor); }
.hero__navCta {
  font-size: 13px;
  font-family: var(--font-mono);
  border: 1px solid rgba(31,232,184,0.35);
  padding: 9px 18px;
  border-radius: 999px;
  color: var(--phosphor);
  transition: border-color 0.2s, background 0.2s;
}
.hero__navCta:hover { background: rgba(31,232,184,0.1); border-color: var(--signal); }

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
.hero__bg { position: absolute; inset: 0; z-index: 0; background: var(--void); }
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
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 8px var(--signal);
  animation: pulseDot 2.2s ease-in-out infinite;
}
@keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
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
.hero__readoutItem { display: flex; flex-direction: column; gap: 4px; min-width: 130px; max-width: 180px; }
.hero__readoutNum {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
}
.hero__readoutLabel { font-size: 12.5px; color: var(--text-muted); }
.hero__readoutDivider { width: 1px; background: rgba(31,232,184,0.15); }

.hero__ctaRow { display: flex; gap: 14px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14.5px;
  padding: 13px 26px;
  border-radius: 8px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.btn--primary {
  background: var(--signal);
  color: var(--void);
}
.btn--primary:hover { box-shadow: 0 6px 24px -4px rgba(31,232,184,0.55); transform: translateY(-1px); }
.btn--ghost {
  border: 1px solid rgba(31,232,184,0.3);
  color: var(--text-primary);
}
.btn--ghost:hover { border-color: var(--phosphor); background: rgba(31,232,184,0.06); }
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
.hero__scrollCue span { width: 26px; height: 1px; background: var(--text-muted); }

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
}
.heroStrip__divider {
  width: 44px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(31,232,184,0.6), transparent);
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
.heroSecondary__content {
  position: relative;
  z-index: 2;
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
@media (max-width: 700px) {
  .heroStrip__inner { min-height: 84px; gap: 14px; }
  .heroStrip__divider { display: none; }
  .heroSecondary { height: 52vh; min-height: 360px; }
  .heroSecondary__content { max-width: 100%; }
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

/* ---------- Readout bar (Why AI Matters / Outcomes) ---------- */
.readoutBar {
  display: flex;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(31,232,184,0.14);
  border-bottom: 1px solid rgba(31,232,184,0.14);
  padding: 36px 0;
}
.readoutBar__item { flex: 1; min-width: 180px; }
.readoutBar__stat {
  font-family: var(--font-mono);
  font-size: 40px;
  font-weight: 500;
  color: var(--signal);
  margin-bottom: 10px;
  line-height: 1;
}
.readoutBar--accent .readoutBar__stat { color: var(--phosphor); }
.readoutBar__label { color: var(--text-secondary); font-size: 14px; max-width: 220px; }
.readoutBar__rule { width: 1px; background: rgba(31,232,184,0.16); align-self: stretch; }
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
}
.dossierCard__top { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 18px; }
.dossierCard__id {
  width: 44px; height: 44px; min-width: 44px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--signal), var(--circuit));
  position: relative;
}
.dossierCard__id::after {
  content: "";
  position: absolute; inset: 6px;
  border: 1px solid rgba(2,8,8,0.4);
  border-radius: 3px;
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
  list-style: none; margin: 0; padding: 14px 0 0;
  border-top: 1px solid rgba(31,232,184,0.08);
  display: flex; flex-direction: column; gap: 8px;
}
.dossierCard__scars li {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
  padding-left: 16px;
  position: relative;
}
.dossierCard__scars li::before {
  content: "›"; position: absolute; left: 0; color: var(--signal);
}

/* ---------- Ledger (problem / opportunity) ---------- */
.ledger {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  position: relative;
}
@media (min-width: 768px) { .ledger { grid-template-columns: 1fr 1px 1fr; } }
.ledger__col { padding: 6px 0; }
@media (min-width: 768px) { .ledger__col { padding: 6px 36px; } }
.ledger__spine { background: rgba(31,232,184,0.15); display: none; }
@media (min-width: 768px) { .ledger__spine { display: block; } }
.ledger__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border: 1px solid rgba(81,113,106,0.4);
  padding: 3px 9px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 16px;
}
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
}
.programmeCard__code {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  display: block;
  margin-bottom: 16px;
}
.programmeCard__name { font-family: var(--font-display); font-size: 17px; margin: 0 0 8px; }
.programmeCard__desc { color: var(--text-secondary); font-size: 14px; margin: 0; }

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
}

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
  padding-left: 18px;
  position: relative;
}
.switcher__list li::before {
  content: ""; position: absolute; left: 0; top: 7px;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--signal);
}
.switcher__cta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--void);
  background: var(--signal);
  padding: 11px 20px;
  border-radius: 8px;
  letter-spacing: 0.02em;
  transition: box-shadow 0.2s, transform 0.15s;
}
.switcher__cta:hover { box-shadow: 0 6px 20px -4px rgba(31,232,184,0.5); transform: translateY(-1px); }

/* ---------- Success pathway ---------- */
.pathway { display: flex; flex-direction: column; gap: 0; }
@media (min-width: 900px) { .pathway { flex-direction: row; align-items: flex-start; } }
.pathway__step { flex: 1; padding: 4px 0; }
.pathway__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--void);
  background: var(--phosphor);
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  margin-bottom: 16px;
  font-weight: 600;
}
.pathway__title { font-family: var(--font-display); font-size: 18px; margin: 0 0 8px; }
.pathway__desc { color: var(--text-secondary); font-size: 14px; max-width: 240px; margin: 0; }
.pathway__connector { width: 1px; height: 30px; background: rgba(31,232,184,0.2); margin: 6px 0 6px 18px; }
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
}
.workshopRow__date { font-family: var(--font-mono); font-size: 13px; color: var(--phosphor); }
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
}
.workshopRow__cta:hover { border-color: var(--signal); background: rgba(31,232,184,0.08); }

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
.tourPanel__playGlow {
  position: absolute; width: 240px; height: 240px; border-radius: 50%;
  background: radial-gradient(circle, rgba(31,232,184,0.32), transparent 70%);
  filter: blur(4px);
}
.tourPanel__playBtn {
  position: relative;
  z-index: 2;
  width: 76px; height: 76px;
  border-radius: 50%;
  background: rgba(31,232,184,0.12);
  border: 1px solid var(--phosphor);
  color: var(--phosphor);
  font-size: 22px;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.tourPanel__playBtn:hover { transform: scale(1.08); background: rgba(31,232,184,0.2); }
.tourPanel__caption {
  position: absolute; bottom: 22px; left: 0; right: 0; text-align: center;
  font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); letter-spacing: 0.04em;
}

/* ---------- CTA ---------- */
.cta {
  position: relative;
  padding: 110px 6%;
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, var(--circuit), var(--void) 70%);
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

/* ---------- Footer ---------- */
.footer { padding: 56px 6% 40px; border-top: 1px solid rgba(31,232,184,0.08); }
.footer__inner { max-width: var(--maxw); margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }
.footer__brand { display: flex; align-items: baseline; gap: 8px; }
.footer__tag { color: var(--text-muted); font-size: 13.5px; max-width: 360px; }
.footer__links { display: flex; gap: 26px; font-size: 13.5px; color: var(--text-secondary); flex-wrap: wrap; }
.footer__links a:hover { color: var(--phosphor); }

/* ---------- Personalization Gate ---------- */
.gate {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.gate__backdrop {
  position: absolute; inset: 0;
  background: rgba(4,9,10,0.88);
  backdrop-filter: blur(6px);
}
.gate__panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  background: var(--panel);
  border: 1px solid rgba(31,232,184,0.15);
  border-radius: 16px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(31,232,184,0.06);
  overflow: hidden;
  animation: gateIn 0.35s ease;
}
@keyframes gateIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
.gate__panelHeader {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 20px;
  background: var(--void);
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.gate__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--signal); box-shadow: 0 0 8px var(--signal); }
.gate__headerText { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em; color: var(--text-muted); flex: 1; }
.gate__headerId { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); opacity: 0.6; }
.gate__body { padding: 36px 32px 30px; }
.gate__kicker { font-family: var(--font-mono); font-size: 12px; color: var(--phosphor); letter-spacing: 0.05em; margin: 0 0 10px; }
.gate__title { font-family: var(--font-display); font-size: 26px; margin: 0 0 12px; }
.gate__copy { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 26px; max-width: 440px; }
.gate__options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.gate__option {
  display: flex; align-items: center; gap: 4px;
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
.gate__optionLabel { font-family: var(--font-display); font-size: 15.5px; font-weight: 600; flex: 0 0 150px; }
.gate__optionSub { font-size: 13px; color: var(--text-muted); flex: 1; }
.gate__optionArrow { color: var(--phosphor); font-size: 16px; }
.gate__skip { font-family: var(--font-mono); font-size: 12.5px; color: var(--text-muted); text-decoration: underline; text-underline-offset: 3px; }
.gate__skip:hover { color: var(--phosphor); }
`;