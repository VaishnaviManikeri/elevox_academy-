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
        <strong>
          Elev<span>ox</span>
        </strong>
        <small>AI Academy</small>
      </span>
    </Link>
  );
}

function MegaMenu({ item, open, onNavigate }) {
  if (!item.groups) return null;

  return (
    <div className={`elx-mega ${open ? "is-open" : ""}`} role="region" aria-label={`${item.label} menu`}>
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
            <em>
              Explore <i aria-hidden="true">&rarr;</i>
            </em>
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

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
      <header className={`elx-nav ${scrolled ? "is-scrolled" : ""} ${active !== null ? "has-open-menu" : ""}`}>
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
                      <i aria-hidden="true" className="elx-caret" />
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
            <Link to="/workshops" className="elx-btn elx-btn-ghost">
              Workshop
            </Link>
            <Link to="/admissions" className="elx-btn elx-btn-primary">
              Apply Now
            </Link>
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

        <div
          className="elx-mega-stack"
          onMouseEnter={() => active !== null && show(active)}
          onMouseLeave={hideSoon}
        >
          {navItems.map((item, index) => (
            <MegaMenu key={item.label} item={item} open={active === index} onNavigate={closeAll} />
          ))}
        </div>
      </header>

      <div className={`elx-mobile-backdrop ${mobileOpen ? "is-open" : ""}`} onClick={closeAll} />

      <div className={`elx-mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <details className="elx-mobile-section" key={item.label}>
            <summary>
              <Link to={item.to} onClick={closeAll}>
                {item.label}
              </Link>
              {item.groups && <span aria-hidden="true">+</span>}
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
          <Link to="/workshops" onClick={closeAll}>
            Book Workshop
          </Link>
          <Link to="/admissions" onClick={closeAll}>
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}

const styles = `
  .elx-nav {
    position: fixed;
    inset: 0 0 auto;
    height: 76px;
    z-index: 1000;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease, backdrop-filter 0.3s ease;
    font-family: "Inter", system-ui, sans-serif;
  }

  .elx-nav.is-scrolled,
  .elx-nav.has-open-menu {
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }

  .elx-nav-inner {
    position: relative;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    gap: 36px;
    z-index: 2;
  }

  .elx-logo {
    display: inline-flex;
    align-items: center;
    gap: 13px;
    text-decoration: none;
    color: #f5f6f8;
    flex: 0 0 auto;
  }

  .elx-logo-mark {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
    border: 1px solid rgba(0, 212, 168, 0.3);
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 800;
    font-size: 18px;
  }

  .elx-logo-copy strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 600;
    font-size: 21px;
    line-height: 1;
    letter-spacing: -0.01em;
  }

  .elx-logo-copy strong span {
    color: #00d4a8;
  }

  .elx-logo-copy small {
    display: block;
    margin-top: 4px;
    color: rgba(245, 246, 248, 0.5);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .elx-desktop-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .elx-nav-link {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 0;
    border-radius: 8px;
    padding: 0 14px;
    color: rgba(245, 246, 248, 0.74);
    background: transparent;
    text-decoration: none;
    font: 500 14.5px Inter, system-ui, sans-serif;
    cursor: pointer;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .elx-nav-link:hover,
  .elx-nav-link.is-active {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
  }

  .elx-caret {
    width: 7px;
    height: 7px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    opacity: 0.65;
    transform: translateY(-2px) rotate(45deg);
    transition: transform 0.18s ease;
  }

  .elx-nav-link.is-active .elx-caret {
    transform: translateY(0) rotate(225deg);
  }

  .elx-nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .elx-btn {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 20px;
    text-decoration: none;
    font: 600 14px Inter, system-ui, sans-serif;
    transition: opacity 0.15s ease, background 0.15s ease, border-color 0.15s ease;
  }

  .elx-btn-ghost {
    color: rgba(245, 246, 248, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .elx-btn-ghost:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }

  .elx-btn-primary {
    color: #04201a;
    background: #00d4a8;
  }

  .elx-btn-primary:hover {
    opacity: 0.88;
  }

  .elx-mega-stack {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }

  .elx-mega {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    background: rgba(8, 9, 13, 0.92);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(22px) saturate(1.3);
  }

  .elx-mega.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .elx-mega-inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 32px 28px 36px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 36px;
  }

  .elx-mega-inner.is-compact {
    max-width: 780px;
    grid-template-columns: 1fr;
  }

  .elx-mega-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
  }

  .elx-mega-inner.is-compact .elx-mega-groups {
    grid-template-columns: 1fr;
  }

  .elx-mega-group h3,
  .elx-mobile-group h3 {
    margin: 0 0 12px;
    color: #00d4a8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .elx-mega-link {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    padding: 10px 11px;
    color: rgba(245, 246, 248, 0.82);
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .elx-mega-link:hover {
    background: rgba(0, 212, 168, 0.07);
    color: #ffffff;
  }

  .elx-mega-link span {
    font-size: 14.5px;
    font-weight: 600;
  }

  .elx-mega-link small {
    color: rgba(245, 246, 248, 0.4);
    line-height: 1.4;
    font-size: 12.5px;
  }

  .elx-mega-feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 32px;
    text-decoration: none;
  }

  .elx-mega-feature span {
    color: #00d4a8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .elx-mega-feature strong {
    margin: 12px 0 10px;
    color: #ffffff;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 1.25;
  }

  .elx-mega-feature small {
    color: rgba(245, 246, 248, 0.5);
    line-height: 1.55;
    font-size: 13.5px;
  }

  .elx-mega-feature em {
    margin-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #00d4a8;
    font-style: normal;
    font-weight: 700;
    font-size: 13.5px;
    transition: gap 0.15s ease;
  }

  .elx-mega-feature:hover em {
    gap: 9px;
  }

  .elx-menu-btn {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    background: transparent;
    padding: 10px;
    flex: 0 0 auto;
  }

  .elx-menu-btn span {
    display: block;
    height: 2px;
    margin: 4px 0;
    background: #f5f6f8;
    border-radius: 1px;
  }

  .elx-mobile-backdrop {
    position: fixed;
    inset: 0;
    z-index: 997;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }

  .elx-mobile-backdrop.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .elx-mobile-panel {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(86vw, 400px);
    z-index: 998;
    padding: 96px 22px 36px;
    overflow: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    background: rgba(9, 10, 14, 0.98);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
  }

  .elx-mobile-panel.is-open {
    transform: translateX(0);
  }

  .elx-mobile-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 0;
  }

  .elx-mobile-section summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    color: #f5f6f8;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }

  .elx-mobile-section summary::-webkit-details-marker {
    display: none;
  }

  .elx-mobile-section summary span {
    color: rgba(245, 246, 248, 0.4);
    font-weight: 400;
  }

  .elx-mobile-section summary a {
    color: inherit;
    text-decoration: none;
    padding: 14px 0;
    flex: 1;
  }

  .elx-mobile-group {
    padding: 6px 0 16px;
  }

  .elx-mobile-group a {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 8px;
    color: rgba(245, 246, 248, 0.78);
    text-decoration: none;
  }

  .elx-mobile-group small {
    color: rgba(245, 246, 248, 0.4);
    font-size: 12.5px;
  }

  .elx-mobile-actions {
    display: grid;
    gap: 10px;
    padding-top: 22px;
  }

  .elx-mobile-actions a {
    padding: 14px 16px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 14.5px;
    color: #04201a;
    background: #00d4a8;
  }

  .elx-mobile-actions a:first-child {
    color: #f5f6f8;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .elx-nav-link:focus-visible,
  .elx-btn:focus-visible,
  .elx-menu-btn:focus-visible,
  .elx-mega-link:focus-visible,
  .elx-mega-feature:focus-visible {
    outline: 2px solid #00d4a8;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .elx-nav,
    .elx-mega,
    .elx-mobile-panel,
    .elx-mobile-backdrop,
    .elx-caret,
    .elx-mega-feature em {
      transition: none !important;
    }
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

    .elx-mega-stack {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .elx-nav {
      height: 64px;
    }
    .elx-mobile-panel {
      padding-top: 84px;
    }
    .elx-nav-inner {
      padding: 0 16px;
    }
    .elx-logo-mark {
      width: 36px;
      height: 36px;
    }
    .elx-logo-copy strong {
      font-size: 19px;
    }
    .elx-logo-copy small {
      display: none;
    }
  }
`;