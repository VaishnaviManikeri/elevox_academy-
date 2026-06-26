import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
    featured: ["Meet Our Founders", "Industry operators, not just trainers.", "/leadership"],
    groups: [
      {
        title: "Our Story",
        links: [
          ["About Elevox", "Why we built this academy", "/about"],
          ["Leadership & Founders", "Real experts, real experience", "/leadership"],
          ["Founder Profiles", "The people behind the method", "/founders"],
          ["Academy Tour", "Facilities and learning spaces", "/tour"],
        ],
      },
      {
        title: "Why Elevox",
        links: [
          ["Vision & Mission", "Where intelligence meets purpose", "/about/vision"],
          ["The AI Skills Gap", "Why Tier-2 cities need AI", "/why-ai/skills-gap"],
          ["Our Difference", "Outcomes, not certificates", "/about/difference"],
          ["Contact & Visit", "Come see us in Nagpur", "/contact"],
        ],
      },
    ],
  },
  {
    label: "Programmes",
    to: "/programmes",
    featured: ["View All Programmes", "Compare tracks, formats, and career outcomes.", "/programmes"],
    groups: [
      {
        title: "Foundational",
        links: [
          ["Elevox Foundations", "AI literacy for everyone", "/programmes/foundations"],
          ["AI for Business Analysts", "Data-driven decisions", "/programmes/business-analysts"],
          ["AI for Developers", "Build AI-native products", "/programmes/developers"],
        ],
      },
      {
        title: "Domain Tracks",
        links: [
          ["AI for Marketing", "Growth and automation", "/programmes/marketing"],
          ["AI for HR", "People intelligence", "/programmes/hr"],
          ["AI for Design", "Creative AI workflows", "/programmes/design"],
          ["AI for Operations", "Process and supply chain AI", "/programmes/operations"],
        ],
      },
      {
        title: "Professional",
        links: [
          ["Professional Upskilling", "30-90 day intensives", "/programmes/upskilling"],
          ["Corporate Training", "Team and leadership tracks", "/corporate"],
          ["Campus Programmes", "For colleges and institutes", "/colleges"],
        ],
      },
    ],
  },
  {
    label: "For Students",
    to: "/students",
    featured: ["Start Your AI Career", "A cohort built around employability.", "/admissions"],
    groups: [
      {
        title: "Learn",
        links: [
          ["All Programmes", "Browse by domain and level", "/programmes"],
          ["Batch Calendar", "Upcoming cohort dates", "/admissions/calendar"],
          ["Workshops & Events", "Masterclasses and bootcamps", "/workshops"],
          ["Academy Tour", "See where you will learn", "/tour"],
        ],
      },
      {
        title: "Get Placed",
        links: [
          ["Career Accelerator", "Resume, LinkedIn, interviews", "/career"],
          ["Placement Outcomes", "Where alumni work", "/career/outcomes"],
          ["Portfolio Building", "Real projects, real proof", "/career/portfolio"],
          ["Admissions", "Fees, scholarships, process", "/admissions"],
        ],
      },
    ],
  },
  {
    label: "For Business",
    to: "/business",
    featured: ["Invite Elevox to Your Campus", "For colleges, MBA institutes, and universities.", "/colleges"],
    groups: [
      {
        title: "Organisations",
        links: [
          ["AI Readiness Programme", "Audit and upskill your team", "/corporate/readiness"],
          ["Corporate Workshops", "Tailored for your context", "/corporate/workshops"],
          ["Leadership AI Sessions", "For C-suite and managers", "/corporate/leadership"],
          ["AI Transformation Consulting", "End-to-end advisory", "/corporate/consulting"],
        ],
      },
      {
        title: "Colleges & Institutes",
        links: [
          ["Campus Workshops", "Student-facing AI sessions", "/colleges/workshops"],
          ["Faculty Development", "Train the trainers", "/colleges/faculty"],
          ["Curriculum Partnerships", "Embed AI in your syllabus", "/colleges/curriculum"],
          ["Placement Readiness", "Make students job-ready", "/colleges/placement"],
        ],
      },
    ],
  },
  {
    label: "Why AI",
    to: "/why-ai",
    featured: ["AI is a Business Skill", "Understand where AI creates leverage in your industry.", "/why-ai"],
    groups: [
      {
        title: "Industries",
        links: [
          ["AI in Healthcare", "Diagnosis, care, and operations", "/why-ai/healthcare"],
          ["AI in Manufacturing", "Quality, maintenance, supply chain", "/why-ai/manufacturing"],
          ["AI in Banking & Finance", "Risk, fraud, customer intelligence", "/why-ai/banking"],
          ["AI in HR & Recruitment", "Hiring and people analytics", "/why-ai/hr"],
        ],
      },
      {
        title: "More Industries",
        links: [
          ["AI in Marketing & Sales", "Personalization and growth", "/why-ai/marketing"],
          ["AI in Retail", "Demand, inventory, customer experience", "/why-ai/retail"],
          ["AI in Logistics", "Routing and operations", "/why-ai/logistics"],
          ["AI in Education", "Learning and assessment", "/why-ai/education"],
        ],
      },
      {
        title: "Applied AI",
        links: [
          ["AI in Pharma", "Research and compliance", "/why-ai/pharma"],
          ["AI in Operations", "Process intelligence", "/why-ai/operations"],
        ],
      },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    compact: true,
    groups: [
      {
        title: "Read",
        links: [
          ["AI Trends & Reports", "Market signals", "/insights/trends"],
          ["Founder Articles", "Operator perspective", "/insights/articles"],
          ["Student Success Stories", "Learner outcomes", "/insights/stories"],
          ["Case Studies", "Transformation proof", "/insights/cases"],
          ["Webinar Recordings", "Watch sessions", "/insights/webinars"],
          ["Podcast Episodes", "Listen and learn", "/insights/podcast"],
        ],
      },
    ],
  },
];

function Logo() {
  return (
    <Link to="/" className="elx-logo" aria-label="Elevox AI Academy home">
      <span className="elx-logo-mark">E</span>
      <span className="elx-logo-copy">
        <strong>Elev<span>ox</span></strong>
        <small>AI Academy</small>
      </span>
    </Link>
  );
}

function MegaMenu({ item, open, onNavigate }) {
  if (!item.groups) return null;

  return (
    <div className={`elx-mega ${open ? "is-open" : ""}`}>
      <div className={`elx-mega-inner ${item.compact ? "is-compact" : ""}`}>
        <div className="elx-mega-groups">
          {item.groups.map((group) => (
            <div className="elx-mega-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, desc, to]) => (
                <Link to={to} className="elx-mega-link" key={to} onClick={onNavigate}>
                  <span>{label}</span>
                  <small>{desc}</small>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {item.featured && (
          <Link to={item.featured[2]} className="elx-mega-feature" onClick={onNavigate}>
            <span>Featured</span>
            <strong>{item.featured[0]}</strong>
            <small>{item.featured[1]}</small>
            <em>Explore -&gt;</em>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setActive(null);
    setMobileOpen(false);
  };

  const show = (index) => {
    clearTimeout(closeTimer.current);
    setActive(index);
  };

  const hideSoon = () => {
    closeTimer.current = setTimeout(() => setActive(null), 140);
  };

  return (
    <>
      <style>{styles}</style>
      <header className={`elx-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="elx-nav-inner">
          <Logo />

          <nav className="elx-desktop-nav" aria-label="Main navigation">
            {navItems.map((item, index) => {
              const hasMenu = Boolean(item.groups);
              return (
                <div
                  className="elx-nav-item"
                  key={item.label}
                  onMouseEnter={() => hasMenu && show(index)}
                  onMouseLeave={hideSoon}
                >
                  {hasMenu ? (
                    <button
                      className={`elx-nav-link ${active === index ? "is-active" : ""}`}
                      type="button"
                      onClick={() => setActive(active === index ? null : index)}
                      aria-expanded={active === index}
                    >
                      {item.label}
                      <span aria-hidden="true">v</span>
                    </button>
                  ) : (
                    <Link to={item.to} className="elx-nav-link" onClick={closeAll}>
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="elx-nav-actions">
            <Link to="/workshops" className="elx-btn elx-btn-ghost">Workshop</Link>
            <Link to="/admissions" className="elx-btn elx-btn-primary">Apply Now</Link>
            <button
              className="elx-menu-btn"
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {navItems.map((item, index) => (
        <div
          key={item.label}
          onMouseEnter={() => show(index)}
          onMouseLeave={hideSoon}
        >
          <MegaMenu item={item} open={active === index} onNavigate={closeAll} />
        </div>
      ))}

      <div className={`elx-mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <details className="elx-mobile-section" key={item.label}>
            <summary>
              <Link to={item.to} onClick={closeAll}>{item.label}</Link>
              {item.groups && <span>+</span>}
            </summary>
            {item.groups?.map((group) => (
              <div className="elx-mobile-group" key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map(([label, desc, to]) => (
                  <Link to={to} key={to} onClick={closeAll}>
                    <strong>{label}</strong>
                    <small>{desc}</small>
                  </Link>
                ))}
              </div>
            ))}
          </details>
        ))}
        <div className="elx-mobile-actions">
          <Link to="/workshops" onClick={closeAll}>Book Workshop</Link>
          <Link to="/admissions" onClick={closeAll}>Apply Now</Link>
        </div>
      </div>
    </>
  );
}

const styles = `
  .elx-nav {
    position: fixed;
    inset: 0 0 auto;
    height: 72px;
    z-index: 1000;
    background: rgba(8, 9, 13, 0.76);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px) saturate(1.35);
    font-family: Inter, system-ui, sans-serif;
  }

  .elx-nav.is-scrolled {
    background: rgba(8, 9, 13, 0.94);
    border-bottom-color: rgba(0, 212, 168, 0.18);
  }

  .elx-nav-inner {
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .elx-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #f0f2f5;
    flex: 0 0 auto;
  }

  .elx-logo-mark {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
    border: 1px solid rgba(0, 212, 168, 0.28);
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 800;
    box-shadow: 0 0 32px rgba(0, 212, 168, 0.08);
  }

  .elx-logo-copy strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 22px;
    line-height: 1;
  }

  .elx-logo-copy strong span { color: #00d4a8; }

  .elx-logo-copy small {
    display: block;
    margin-top: 4px;
    color: rgba(240, 242, 245, 0.46);
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .elx-desktop-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .elx-nav-link {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 0;
    border-radius: 8px;
    padding: 0 13px;
    color: rgba(240, 242, 245, 0.62);
    background: transparent;
    text-decoration: none;
    font: 600 14px Inter, system-ui, sans-serif;
    cursor: pointer;
  }

  .elx-nav-link:hover,
  .elx-nav-link.is-active {
    color: #f0f2f5;
    background: rgba(255, 255, 255, 0.045);
  }

  .elx-nav-link span {
    font-size: 11px;
    color: #00d4a8;
  }

  .elx-nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .elx-btn {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 18px;
    text-decoration: none;
    font: 700 14px Inter, system-ui, sans-serif;
  }

  .elx-btn-ghost {
    color: rgba(240, 242, 245, 0.7);
  }

  .elx-btn-primary {
    color: #031a14;
    background: #00d4a8;
  }

  .elx-mega {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: opacity 0.22s ease, transform 0.22s ease;
    background: rgba(10, 11, 16, 0.97);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
  }

  .elx-mega.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .elx-mega-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 30px 24px 34px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 34px;
  }

  .elx-mega-inner.is-compact {
    max-width: 760px;
    grid-template-columns: 1fr;
  }

  .elx-mega-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .elx-mega-inner.is-compact .elx-mega-groups {
    grid-template-columns: 1fr;
  }

  .elx-mega-group h3,
  .elx-mobile-group h3 {
    margin: 0 0 12px;
    color: #00d4a8;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .elx-mega-link {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    padding: 10px;
    color: rgba(240, 242, 245, 0.78);
    text-decoration: none;
  }

  .elx-mega-link:hover {
    background: rgba(0, 212, 168, 0.06);
    color: #f0f2f5;
  }

  .elx-mega-link span {
    font-size: 14px;
    font-weight: 700;
  }

  .elx-mega-link small {
    color: rgba(240, 242, 245, 0.36);
    line-height: 1.35;
  }

  .elx-mega-feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 30px;
    text-decoration: none;
  }

  .elx-mega-feature span {
    color: #00d4a8;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .elx-mega-feature strong {
    margin: 12px 0 10px;
    color: #f0f2f5;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 20px;
    line-height: 1.2;
  }

  .elx-mega-feature small {
    color: rgba(240, 242, 245, 0.5);
    line-height: 1.55;
  }

  .elx-mega-feature em {
    margin-top: 18px;
    color: #00d4a8;
    font-style: normal;
    font-weight: 800;
  }

  .elx-menu-btn {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    background: transparent;
    padding: 10px;
  }

  .elx-menu-btn span {
    display: block;
    height: 2px;
    margin: 4px 0;
    background: #f0f2f5;
  }

  .elx-mobile-panel {
    position: fixed;
    inset: 72px 0 0;
    z-index: 998;
    padding: 16px 20px 36px;
    overflow: auto;
    transform: translateX(100%);
    transition: transform 0.28s ease;
    background: rgba(8, 9, 13, 0.985);
    backdrop-filter: blur(20px);
  }

  .elx-mobile-panel.is-open {
    transform: translateX(0);
  }

  .elx-mobile-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 0;
  }

  .elx-mobile-section summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    color: #f0f2f5;
    font-weight: 800;
    cursor: pointer;
  }

  .elx-mobile-section summary::-webkit-details-marker { display: none; }

  .elx-mobile-section summary a {
    color: inherit;
    text-decoration: none;
    padding: 12px 0;
  }

  .elx-mobile-group {
    padding: 8px 0 14px;
  }

  .elx-mobile-group a {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 8px;
    color: rgba(240, 242, 245, 0.76);
    text-decoration: none;
  }

  .elx-mobile-group small {
    color: rgba(240, 242, 245, 0.4);
  }

  .elx-mobile-actions {
    display: grid;
    gap: 10px;
    padding-top: 18px;
  }

  .elx-mobile-actions a {
    padding: 13px 16px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: #031a14;
    background: #00d4a8;
    font-weight: 800;
  }

  .elx-mobile-actions a:first-child {
    color: #f0f2f5;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 1120px) {
    .elx-desktop-nav,
    .elx-btn {
      display: none;
    }

    .elx-nav-inner {
      justify-content: space-between;
    }

    .elx-menu-btn {
      display: block;
    }

    .elx-mega {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .elx-nav { height: 64px; }
    .elx-mobile-panel { inset-top: 64px; }
    .elx-nav-inner { padding: 0 16px; }
    .elx-logo-mark { width: 36px; height: 36px; }
    .elx-logo-copy strong { font-size: 19px; }
    .elx-logo-copy small { display: none; }
  }
`;
