import { useState, useEffect, useRef } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────
const ChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── NAV DATA ─────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
    megaMenu: {
      type: "list",
      columns: [
        {
          heading: "Our Story",
          items: [
            { label: "About Elevox", desc: "Why we built this academy", href: "#about" },
            { label: "Leadership & Founders", desc: "Real experts, real experience", href: "#founders" },
            { label: "Academy Tour", desc: "Our facilities & learning spaces", href: "#tour" },
            { label: "Vision & Mission", desc: "Where intelligence meets purpose", href: "#about#vision" },
          ],
        },
        {
          heading: "Why Elevox",
          items: [
            { label: "The AI Skills Gap", desc: "Why Tier-2 cities need AI", href: "#about#gap" },
            { label: "Our Difference", desc: "Outcomes, not just certificates", href: "#about#difference" },
            { label: "Insights & Blog", desc: "Thought leadership & trends", href: "#insights" },
            { label: "Contact & Visit", desc: "Come see us in Nagpur", href: "#contact" },
          ],
        },
      ],
      featured: {
        label: "Meet Our Founders",
        desc: "Industry veterans who've built real AI systems. Not just trainers.",
        href: "#founders",
        cta: "View Profiles",
      },
    },
  },
  {
    label: "Programmes",
    href: "#programmes",
    megaMenu: {
      type: "grid",
      columns: [
        {
          heading: "Foundational",
          items: [
            { label: "Elevox Foundations", desc: "AI literacy for everyone", href: "#programmes/foundations" },
            { label: "AI for Business Analysts", desc: "Data-driven decisions", href: "#programmes/business-analysts" },
            { label: "AI for Developers", desc: "Build AI-native products", href: "#programmes/developers" },
          ],
        },
        {
          heading: "Domain Tracks",
          items: [
            { label: "AI for Marketing", desc: "Growth & content automation", href: "#programmes/marketing" },
            { label: "AI for HR", desc: "People intelligence", href: "#programmes/hr" },
            { label: "AI for Design", desc: "Creative with AI tools", href: "#programmes/design" },
            { label: "AI for Operations", desc: "Process & supply chain AI", href: "#programmes/operations" },
          ],
        },
        {
          heading: "Professional",
          items: [
            { label: "Professional Upskilling", desc: "30–90 day intensives", href: "#programmes/upskilling" },
            { label: "Corporate Training", desc: "Team & leadership tracks", href: "#programmes/corporate" },
            { label: "Campus Programmes", desc: "For colleges & institutes", href: "#programmes/campus" },
          ],
        },
      ],
      featured: {
        label: "View All Programmes",
        desc: "Compare curricula, fees, formats, and career outcomes.",
        href: "#programmes",
        cta: "Explore Programmes",
      },
    },
  },
  {
    label: "For Students",
    href: "#students",
    megaMenu: {
      type: "list",
      columns: [
        {
          heading: "Learn",
          items: [
            { label: "All Programmes", desc: "Browse by domain & level", href: "#programmes" },
            { label: "Batch Calendar", desc: "Upcoming cohort dates", href: "#admissions#calendar" },
            { label: "Workshops & Events", desc: "Masterclasses & bootcamps", href: "#workshops" },
            { label: "Academy Tour", desc: "See where you'll learn", href: "#tour" },
          ],
        },
        {
          heading: "Get Placed",
          items: [
            { label: "Career Accelerator", desc: "Resume, LinkedIn, interviews", href: "#career" },
            { label: "Placement Outcomes", desc: "Where our alumni work", href: "#career#outcomes" },
            { label: "Portfolio Building", desc: "Real projects, real proof", href: "#career#portfolio" },
            { label: "Admissions", desc: "Fees, scholarships, process", href: "#admissions" },
          ],
        },
      ],
      featured: {
        label: "Start Your AI Career",
        desc: "Join a cohort built around employability — not just learning.",
        href: "#admissions",
        cta: "Apply Now",
      },
    },
  },
  {
    label: "For Business",
    href: "#business",
    megaMenu: {
      type: "list",
      columns: [
        {
          heading: "Organisations",
          items: [
            { label: "AI Readiness Programme", desc: "Audit & upskill your team", href: "#corporate" },
            { label: "Corporate Workshops", desc: "Tailored for your context", href: "#corporate#workshops" },
            { label: "Leadership AI Sessions", desc: "For C-suite & managers", href: "#corporate#leadership" },
            { label: "AI Transformation Consulting", desc: "End-to-end advisory", href: "#corporate#consulting" },
          ],
        },
        {
          heading: "Colleges & Institutes",
          items: [
            { label: "Campus Workshops", desc: "Student-facing AI sessions", href: "#colleges" },
            { label: "Faculty Development", desc: "Train the trainers", href: "#colleges#faculty" },
            { label: "Curriculum Partnerships", desc: "Embed AI in your syllabus", href: "#colleges#curriculum" },
            { label: "Placement Readiness", desc: "Make students job-ready", href: "#colleges#placement" },
          ],
        },
      ],
      featured: {
        label: "Invite Elevox to Your Campus",
        desc: "We work with engineering colleges, MBA institutes, and universities.",
        href: "#colleges",
        cta: "Request a Proposal",
      },
    },
  },
  {
    label: "Why AI",
    href: "#why-ai",
    megaMenu: {
      type: "grid",
      columns: [
        {
          heading: "Industries",
          items: [
            { label: "AI in Healthcare", href: "#why-ai/healthcare" },
            { label: "AI in Manufacturing", href: "#why-ai/manufacturing" },
            { label: "AI in Banking & Finance", href: "#why-ai/banking" },
            { label: "AI in HR & Recruitment", href: "#why-ai/hr" },
          ],
        },
        {
          heading: "",
          items: [
            { label: "AI in Marketing & Sales", href: "#why-ai/marketing" },
            { label: "AI in Retail", href: "#why-ai/retail" },
            { label: "AI in Logistics", href: "#why-ai/logistics" },
            { label: "AI in Education", href: "#why-ai/education" },
          ],
        },
        {
          heading: "",
          items: [
            { label: "AI in Pharma", href: "#why-ai/pharma" },
            { label: "AI in Operations", href: "#why-ai/operations" },
          ],
        },
      ],
      featured: {
        label: "AI is a Business Skill",
        desc: "Every industry is being reshaped. Understand where AI creates leverage in yours.",
        href: "#why-ai",
        cta: "Read the Full Story",
      },
    },
  },
  {
    label: "Insights",
    href: "#insights",
    simple: true,
    dropdown: [
      { label: "AI Trends & Reports", href: "#insights/trends" },
      { label: "Founder Articles", href: "#insights/articles" },
      { label: "Student Success Stories", href: "#insights/stories" },
      { label: "Case Studies", href: "#insights/cases" },
      { label: "Webinar Recordings", href: "#insights/webinars" },
      { label: "Podcast Episodes", href: "#insights/podcast" },
    ],
  },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root {
    --elevox-bg: #08090d;
    --elevox-surface: rgba(255,255,255,0.03);
    --elevox-border: rgba(255,255,255,0.08);
    --elevox-border-hover: rgba(0,212,168,0.35);
    --elevox-teal: #00d4a8;
    --elevox-teal-dim: rgba(0,212,168,0.12);
    --elevox-teal-glow: rgba(0,212,168,0.06);
    --elevox-white: #f0f2f5;
    --elevox-muted: rgba(240,242,245,0.45);
    --elevox-subtle: rgba(240,242,245,0.22);
    --elevox-font-display: 'Space Grotesk', sans-serif;
    --elevox-font-body: 'Inter', sans-serif;
    --elevox-nav-h: 72px;
    --elevox-transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --elevox-transition-slow: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .elx-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: var(--elevox-nav-h);
    background: rgba(8,9,13,0.72);
    backdrop-filter: blur(20px) saturate(1.4);
    -webkit-backdrop-filter: blur(20px) saturate(1.4);
    border-bottom: 1px solid var(--elevox-border);
    transition: background var(--elevox-transition), border-color var(--elevox-transition);
    font-family: var(--elevox-font-body);
  }

  .elx-nav.scrolled {
    background: rgba(8,9,13,0.92);
    border-bottom-color: rgba(0,212,168,0.15);
  }

  .elx-nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0;
  }

  /* ── Logo ── */
  .elx-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    flex-shrink: 0;
    margin-right: 40px;
  }

  .elx-logo-mark {
    width: 42px;
    height: 42px;
    position: relative;
    flex-shrink: 0;
  }

  .elx-logo-mark svg {
    width: 100%;
    height: 100%;
  }

  .elx-logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .elx-logo-name {
    font-family: var(--elevox-font-display);
    font-size: 22px;
    font-weight: 700;
    color: var(--elevox-white);
    letter-spacing: -0.3px;
    line-height: 1.1;
  }

  .elx-logo-name span {
    color: var(--elevox-teal);
  }

  .elx-logo-tagline {
    font-size: 9.5px;
    font-weight: 400;
    color: var(--elevox-muted);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  /* ── Nav Links ── */
  .elx-nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
    list-style: none;
    flex: 1;
  }

  .elx-nav-item {
    position: relative;
  }

  .elx-nav-trigger {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
    background: none;
    border: none;
    font-family: var(--elevox-font-body);
    font-size: 14px;
    font-weight: 500;
    color: var(--elevox-muted);
    text-decoration: none;
    transition: color var(--elevox-transition), background var(--elevox-transition);
    white-space: nowrap;
    letter-spacing: 0.1px;
  }

  .elx-nav-trigger:hover,
  .elx-nav-item.active .elx-nav-trigger {
    color: var(--elevox-white);
    background: var(--elevox-surface);
  }

  .elx-nav-trigger .elx-chevron {
    transition: transform var(--elevox-transition);
    opacity: 0.6;
    flex-shrink: 0;
  }

  .elx-nav-item.active .elx-nav-trigger .elx-chevron {
    transform: rotate(180deg);
    opacity: 1;
    color: var(--elevox-teal);
  }

  /* ── Right Side ── */
  .elx-nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .elx-btn-ghost {
    padding: 8px 18px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--elevox-font-body);
    color: var(--elevox-muted);
    background: none;
    border: none;
    cursor: pointer;
    transition: color var(--elevox-transition), background var(--elevox-transition);
    text-decoration: none;
    white-space: nowrap;
  }

  .elx-btn-ghost:hover {
    color: var(--elevox-white);
    background: var(--elevox-surface);
  }

  .elx-btn-primary {
    padding: 9px 22px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    font-family: var(--elevox-font-body);
    color: #031a14;
    background: var(--elevox-teal);
    border: none;
    cursor: pointer;
    transition: background var(--elevox-transition), transform 0.15s, box-shadow var(--elevox-transition);
    text-decoration: none;
    white-space: nowrap;
    letter-spacing: 0.1px;
  }

  .elx-btn-primary:hover {
    background: #00edc0;
    transform: translateY(-1px);
    box-shadow: 0 4px 24px rgba(0,212,168,0.3);
  }

  .elx-btn-primary:active {
    transform: translateY(0);
  }

  /* ── Mega Menu ── */
  .elx-mega {
    position: fixed;
    top: var(--elevox-nav-h);
    left: 0;
    right: 0;
    z-index: 999;
    background: rgba(10,11,16,0.97);
    backdrop-filter: blur(24px) saturate(1.5);
    -webkit-backdrop-filter: blur(24px) saturate(1.5);
    border-bottom: 1px solid var(--elevox-border);
    padding: 32px 0 36px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity var(--elevox-transition-slow), transform var(--elevox-transition-slow);
  }

  .elx-mega.open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  .elx-mega-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    gap: 0 40px;
  }

  .elx-mega-inner.layout-3col {
    grid-template-columns: 1fr 1fr 1fr 280px;
  }

  .elx-mega-inner.layout-2col {
    grid-template-columns: 1fr 1fr 280px;
  }

  .elx-mega-inner.layout-3grid {
    grid-template-columns: 1fr 1fr 1fr 280px;
  }

  .elx-mega-col-heading {
    font-family: var(--elevox-font-body);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: var(--elevox-teal);
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--elevox-border);
  }

  .elx-mega-col-heading.empty {
    border-color: transparent;
    margin-bottom: 0;
  }

  .elx-mega-col {
    display: flex;
    flex-direction: column;
  }

  .elx-mega-link {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: background var(--elevox-transition);
    margin-bottom: 2px;
  }

  .elx-mega-link:hover {
    background: var(--elevox-teal-glow);
  }

  .elx-mega-link:hover .elx-mega-link-label {
    color: var(--elevox-white);
  }

  .elx-mega-link-label {
    font-size: 13.5px;
    font-weight: 500;
    color: rgba(240,242,245,0.78);
    transition: color var(--elevox-transition);
    line-height: 1.3;
  }

  .elx-mega-link-desc {
    font-size: 11.5px;
    color: var(--elevox-subtle);
    line-height: 1.4;
  }

  /* ── Featured Card ── */
  .elx-mega-featured {
    border-left: 1px solid var(--elevox-border);
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .elx-featured-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--elevox-teal);
    margin-bottom: 10px;
  }

  .elx-featured-title {
    font-family: var(--elevox-font-display);
    font-size: 18px;
    font-weight: 700;
    color: var(--elevox-white);
    line-height: 1.3;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
  }

  .elx-featured-desc {
    font-size: 13px;
    color: var(--elevox-muted);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .elx-featured-cta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    font-weight: 600;
    color: var(--elevox-teal);
    text-decoration: none;
    cursor: pointer;
    transition: gap var(--elevox-transition);
  }

  .elx-featured-cta:hover {
    gap: 11px;
  }

  /* ── Simple Dropdown ── */
  .elx-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    min-width: 220px;
    background: rgba(10,11,16,0.97);
    border: 1px solid var(--elevox-border);
    border-radius: 12px;
    padding: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--elevox-transition), transform var(--elevox-transition);
    backdrop-filter: blur(24px);
  }

  .elx-dropdown.open {
    opacity: 1;
    pointer-events: all;
    transform: translateX(-50%) translateY(0);
  }

  .elx-dropdown-link {
    display: block;
    padding: 9px 12px;
    border-radius: 7px;
    font-size: 13.5px;
    font-weight: 400;
    color: rgba(240,242,245,0.7);
    text-decoration: none;
    cursor: pointer;
    transition: background var(--elevox-transition), color var(--elevox-transition);
  }

  .elx-dropdown-link:hover {
    background: var(--elevox-teal-glow);
    color: var(--elevox-white);
  }

  /* ── Backdrop ── */
  .elx-backdrop {
    position: fixed;
    inset: 0;
    top: var(--elevox-nav-h);
    z-index: 998;
    background: rgba(0,0,0,0);
    pointer-events: none;
    transition: background 0.25s;
  }

  .elx-backdrop.active {
    background: rgba(0,0,0,0.45);
    pointer-events: all;
  }

  /* ── Mobile Hamburger ── */
  .elx-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: 1px solid var(--elevox-border);
    background: none;
    cursor: pointer;
    color: var(--elevox-white);
    margin-left: 8px;
    transition: border-color var(--elevox-transition), background var(--elevox-transition);
    padding: 0;
  }

  .elx-hamburger:hover {
    border-color: var(--elevox-border-hover);
    background: var(--elevox-teal-dim);
  }

  /* ── Mobile Drawer ── */
  .elx-mobile-drawer {
    position: fixed;
    inset: 0;
    top: var(--elevox-nav-h);
    z-index: 999;
    background: rgba(8,9,13,0.98);
    backdrop-filter: blur(20px);
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform var(--elevox-transition-slow);
    padding: 16px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .elx-mobile-drawer.open {
    transform: translateX(0);
  }

  .elx-mobile-section {
    border-bottom: 1px solid var(--elevox-border);
    padding-bottom: 12px;
    margin-bottom: 4px;
  }

  .elx-mobile-section-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 4px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--elevox-font-body);
    font-size: 16px;
    font-weight: 500;
    color: var(--elevox-white);
  }

  .elx-mobile-section-trigger .elx-chevron {
    transition: transform var(--elevox-transition);
    color: var(--elevox-muted);
  }

  .elx-mobile-section-trigger.expanded .elx-chevron {
    transform: rotate(180deg);
    color: var(--elevox-teal);
  }

  .elx-mobile-sub {
    display: none;
    flex-direction: column;
    gap: 2px;
    padding: 4px 0 8px;
  }

  .elx-mobile-sub.open {
    display: flex;
  }

  .elx-mobile-sub-link {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: rgba(240,242,245,0.7);
    font-size: 14px;
    transition: background var(--elevox-transition), color var(--elevox-transition);
  }

  .elx-mobile-sub-link:hover {
    background: var(--elevox-teal-glow);
    color: var(--elevox-white);
  }

  .elx-mobile-sub-label {
    font-weight: 500;
    font-size: 13.5px;
  }

  .elx-mobile-sub-desc {
    font-size: 11.5px;
    color: var(--elevox-subtle);
  }

  .elx-mobile-sub-heading {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--elevox-teal);
    padding: 8px 12px 4px;
  }

  .elx-mobile-cta-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--elevox-border);
  }

  .elx-mobile-btn-outline {
    display: block;
    width: 100%;
    padding: 13px;
    border-radius: 10px;
    border: 1px solid var(--elevox-border);
    background: none;
    font-family: var(--elevox-font-body);
    font-size: 14px;
    font-weight: 500;
    color: var(--elevox-white);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .elx-mobile-btn-primary {
    display: block;
    width: 100%;
    padding: 13px;
    border-radius: 10px;
    border: none;
    background: var(--elevox-teal);
    font-family: var(--elevox-font-body);
    font-size: 14px;
    font-weight: 600;
    color: #031a14;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  /* ── Responsive ── */
  @media (max-width: 1080px) {
    .elx-nav-links { display: none; }
    .elx-btn-ghost { display: none; }
    .elx-btn-primary { display: none; }
    .elx-hamburger { display: flex; }
    .elx-mega { display: none; }
    .elx-backdrop { display: none; }
  }

  @media (max-width: 768px) {
    .elx-logo-mark {
      width: 38px;
      height: 38px;
    }

    .elx-logo-name {
      font-size: 20px;
    }

    .elx-logo-tagline {
      font-size: 8.5px;
      letter-spacing: 1.8px;
    }

    .elx-logo {
      gap: 10px;
      margin-right: 0;
    }

    .elx-nav-inner {
      padding: 0 16px;
    }

    .elx-hamburger {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --elevox-nav-h: 64px;
    }

    .elx-logo-mark {
      width: 34px;
      height: 34px;
    }

    .elx-logo-name {
      font-size: 18px;
    }

    .elx-logo-tagline {
      display: none;
    }

    .elx-logo {
      gap: 8px;
    }

    .elx-nav-inner {
      padding: 0 12px;
    }

    .elx-hamburger {
      width: 38px;
      height: 38px;
    }

    .elx-mobile-drawer {
      padding: 12px 16px 30px;
    }

    .elx-mobile-section-trigger {
      font-size: 15px;
      padding: 10px 2px;
    }

    .elx-mobile-sub-link {
      font-size: 13px;
      padding: 7px 10px;
    }
  }

  @media (max-width: 360px) {
    .elx-logo-mark {
      width: 30px;
      height: 30px;
    }

    .elx-logo-name {
      font-size: 16px;
    }
  }
`;

// ─── LOGO SVG ─────────────────────────────────────────────────────────────────
const ElevoxLogoMark = () => (
  <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="8" fill="rgba(0,212,168,0.1)" />
    <rect x="1" y="1" width="32" height="32" rx="7" stroke="rgba(0,212,168,0.25)" strokeWidth="1" />
    {/* E letter stylized */}
    <path d="M9 10h10M9 17h8M9 24h10" stroke="#00d4a8" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M20 10v14" stroke="rgba(0,212,168,0.35)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Spark dot */}
    <circle cx="26" cy="10" r="2.5" fill="#00d4a8" />
    <circle cx="26" cy="10" r="4" fill="rgba(0,212,168,0.18)" />
  </svg>
);

// ─── MEGA MENU COMPONENT ──────────────────────────────────────────────────────
const MegaMenu = ({ item, isOpen }) => {
  if (!item.megaMenu) return null;
  const { columns, featured, type } = item.megaMenu;

  const layoutClass =
    type === "grid" || columns.length === 3
      ? "layout-3col"
      : "layout-2col";

  return (
    <div className={`elx-mega ${isOpen ? "open" : ""}`} role="region" aria-label={`${item.label} submenu`}>
      <div className={`elx-mega-inner ${layoutClass}`}>
        {columns.map((col, ci) => (
          <div key={ci} className="elx-mega-col">
            {col.heading ? (
              <div className="elx-mega-col-heading">{col.heading}</div>
            ) : (
              <div className="elx-mega-col-heading empty" style={{ height: 34 }} />
            )}
            {col.items.map((link, li) => (
              <a key={li} href={link.href} className="elx-mega-link">
                <span className="elx-mega-link-label">{link.label}</span>
                {link.desc && <span className="elx-mega-link-desc">{link.desc}</span>}
              </a>
            ))}
          </div>
        ))}
        {featured && (
          <div className="elx-mega-featured">
            <div className="elx-featured-label">Featured</div>
            <div className="elx-featured-title">{featured.label}</div>
            <div className="elx-featured-desc">{featured.desc}</div>
            <a href={featured.href} className="elx-featured-cta">
              {featured.cta}
              <ArrowRight size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── SIMPLE DROPDOWN ──────────────────────────────────────────────────────────
const SimpleDropdown = ({ item, isOpen }) => {
  if (!item.dropdown) return null;
  return (
    <div className={`elx-dropdown ${isOpen ? "open" : ""}`}>
      {item.dropdown.map((link, i) => (
        <a key={i} href={link.href} className="elx-dropdown-link">
          {link.label}
        </a>
      ))}
    </div>
  );
};

// ─── MOBILE DRAWER ────────────────────────────────────────────────────────────
const MobileDrawer = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const getAllItems = (item) => {
    if (item.dropdown) return [{ heading: null, items: item.dropdown.map(d => ({ label: d.label, href: d.href })) }];
    if (item.megaMenu) return item.megaMenu.columns;
    return [];
  };

  return (
    <div className={`elx-mobile-drawer ${isOpen ? "open" : ""}`} role="dialog" aria-label="Mobile navigation">
      {NAV_ITEMS.map((item, i) => {
        const sections = getAllItems(item);
        const isExpanded = expandedIndex === i;

        return (
          <div key={i} className="elx-mobile-section">
            {sections.length === 0 ? (
              <a href={item.href} className="elx-mobile-section-trigger" style={{ textDecoration: "none", display: "flex" }} onClick={onClose}>
                {item.label}
              </a>
            ) : (
              <>
                <button
                  className={`elx-mobile-section-trigger ${isExpanded ? "expanded" : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={isExpanded}
                >
                  {item.label}
                  <span className="elx-chevron"><ChevronDown size={18} /></span>
                </button>
                <div className={`elx-mobile-sub ${isExpanded ? "open" : ""}`}>
                  {sections.map((col, ci) => (
                    <div key={ci}>
                      {col.heading && <div className="elx-mobile-sub-heading">{col.heading}</div>}
                      {col.items.map((link, li) => (
                        <a key={li} href={link.href} className="elx-mobile-sub-link" onClick={onClose}>
                          <span className="elx-mobile-sub-label">{link.label}</span>
                          {link.desc && <span className="elx-mobile-sub-desc">{link.desc}</span>}
                        </a>
                      ))}
                    </div>
                  ))}
                  {item.megaMenu?.featured && (
                    <a href={item.megaMenu.featured.href} className="elx-mobile-sub-link" onClick={onClose} style={{ marginTop: 6, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
                      <span className="elx-mobile-sub-label" style={{ color: "var(--elevox-teal)" }}>
                        → {item.megaMenu.featured.cta}
                      </span>
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="elx-mobile-cta-wrap">
        <a href="#workshops" className="elx-mobile-btn-outline" onClick={onClose}>Book a Workshop</a>
        <a href="#admissions" className="elx-mobile-btn-primary" onClick={onClose}>Apply Now</a>
      </div>
    </div>
  );
};

// ─── MAIN NAVBAR ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const navRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleTriggerEnter = (i) => {
    clearTimeout(closeTimer.current);
    setActiveIndex(i);
  };

  const handleTriggerLeave = () => {
    closeTimer.current = setTimeout(() => setActiveIndex(null), 120);
  };

  const handleMenuEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => setActiveIndex(null), 120);
  };

  return (
    <>
      <style>{styles}</style>

      <nav
        ref={navRef}
        className={`elx-nav${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="elx-nav-inner">
          {/* Logo */}
          <a href="#" className="elx-logo" aria-label="Elevox AI Academy — Home">
            <div className="elx-logo-mark">
              <ElevoxLogoMark />
            </div>
            <div className="elx-logo-text">
              <span className="elx-logo-name">Elev<span>ox</span></span>
              <span className="elx-logo-tagline">AI Academy</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="elx-nav-links" role="list">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeIndex === i;
              const hasMega = !!item.megaMenu;
              const hasDropdown = !!item.dropdown;
              const hasMenu = hasMega || hasDropdown;

              return (
                <li
                  key={i}
                  className={`elx-nav-item${isActive ? " active" : ""}`}
                  onMouseEnter={() => hasMenu && handleTriggerEnter(i)}
                  onMouseLeave={handleTriggerLeave}
                >
                  {hasMenu ? (
                    <button
                      className="elx-nav-trigger"
                      aria-haspopup="true"
                      aria-expanded={isActive}
                      onClick={() => setActiveIndex(isActive ? null : i)}
                    >
                      {item.label}
                      <span className="elx-chevron"><ChevronDown size={14} /></span>
                    </button>
                  ) : (
                    <a href={item.href} className="elx-nav-trigger">{item.label}</a>
                  )}

                  {hasDropdown && (
                    <SimpleDropdown item={item} isOpen={isActive} />
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Buttons */}
          <div className="elx-nav-right">
            <a href="#workshops" className="elx-btn-ghost">Book Workshop</a>
            <a href="#admissions" className="elx-btn-primary">Apply Now →</a>
            {/* Mobile trigger */}
            <button
              className="elx-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menus — rendered outside nav for full-width */}
      {NAV_ITEMS.map((item, i) =>
        item.megaMenu ? (
          <div
            key={i}
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          >
            <MegaMenu item={item} isOpen={activeIndex === i} />
          </div>
        ) : null
      )}

      {/* Backdrop */}
      <div
        className={`elx-backdrop${activeIndex !== null ? " active" : ""}`}
        onClick={() => setActiveIndex(null)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}