// pages/Corporate.jsx
const Corporate = () => {
  const programs = [
    {
      title: "AI Readiness Programme",
      audience: "For Teams & Departments",
      duration: "4-8 Weeks",
      description: "Audit your team's AI capabilities and build a customized upskilling roadmap.",
      outcomes: ["AI Skills Assessment", "Custom Learning Path", "Project Implementation", "ROI Tracking"]
    },
    {
      title: "Leadership AI Sessions",
      audience: "For C-Suite & Managers",
      duration: "2-3 Days",
      description: "Executive-level training on AI strategy, implementation, and business transformation.",
      outcomes: ["AI Strategy Development", "Investment Planning", "Change Management", "Competitive Analysis"]
    },
    {
      title: "Technical AI Training",
      audience: "For Engineering Teams",
      duration: "6-12 Weeks",
      description: "Deep technical training on AI/ML development, deployment, and production practices.",
      outcomes: ["ML Model Development", "Production Deployment", "Best Practices", "Team Collaboration"]
    },
    {
      title: "AI Transformation Consulting",
      audience: "For Organizations",
      duration: "Custom",
      description: "End-to-end AI transformation advisory including strategy, implementation, and measurement.",
      outcomes: ["AI Roadmap", "Implementation Plan", "Talent Strategy", "Success Metrics"]
    }
  ];

  const benefits = [
    { icon: "📈", title: "50%+ Productivity Gains", description: "AI-powered automation drives significant efficiency improvements" },
    { icon: "💡", title: "Innovation Culture", description: "Build AI-first mindset across your organization" },
    { icon: "🎯", title: "Competitive Advantage", description: "Stay ahead with cutting-edge AI capabilities" },
    { icon: "👥", title: "Talent Retention", description: "Invest in your people with valuable AI skills" }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>AI Training for <span style={highlightStyles}>Business</span></h1>
          <p style={subtitleStyles}>
            Transform your organization with customized AI training programs designed for business impact.
          </p>
          <a href="#programs" style={ctaStyles}>Explore Programs →</a>
        </div>
      </section>

      <section id="programs" style={programsSectionStyles}>
        <h2 style={headingStyles}>Our Corporate Programs</h2>
        <div style={programsGridStyles}>
          {programs.map((program, i) => (
            <div key={i} style={programCardStyles}>
              <div style={programHeaderStyles}>
                <h3 style={programTitleStyles}>{program.title}</h3>
                <span style={audienceStyles}>{program.audience}</span>
              </div>
              <div style={durationStyles}>⏱ {program.duration}</div>
              <p style={programDescStyles}>{program.description}</p>
              <div style={outcomesStyles}>
                {program.outcomes.map((outcome, j) => (
                  <span key={j} style={outcomeStyles}>✓ {outcome}</span>
                ))}
              </div>
              <a href="#" style={inquiryBtnStyles}>Request Info →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={benefitsSectionStyles}>
        <h2 style={headingStyles}>Why Partner With Us</h2>
        <div style={benefitsGridStyles}>
          {benefits.map((benefit, i) => (
            <div key={i} style={benefitCardStyles}>
              <div style={benefitIconStyles}>{benefit.icon}</div>
              <h3 style={benefitTitleStyles}>{benefit.title}</h3>
              <p style={benefitDescStyles}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Start Your Corporate AI Journey</h2>
          <p style={ctaDescStyles}>
            Let's discuss how we can help your organization build AI capabilities and drive business growth.
          </p>
          <a href="#" style={ctaBtnStyles}>Schedule a Consultation →</a>
        </div>
      </section>
    </div>
  );
};

const containerStyles = {
  minHeight: "100vh",
  backgroundColor: "#08090d",
  paddingTop: "72px"
};

const heroStyles = {
  padding: "60px 24px",
  textAlign: "center",
  background: "linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"
};

const heroInnerStyles = {
  maxWidth: "800px",
  margin: "0 auto"
};

const titleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  marginBottom: "16px",
  lineHeight: "1.1"
};

const highlightStyles = {
  color: "#00d4a8"
};

const subtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
  maxWidth: "600px",
  margin: "0 auto 32px",
  lineHeight: "1.6"
};

const ctaStyles = {
  display: "inline-block",
  padding: "12px 32px",
  borderRadius: "10px",
  backgroundColor: "#00d4a8",
  color: "#031a14",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "15px",
  transition: "all 0.2s"
};

const programsSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const headingStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "32px",
  textAlign: "center"
};

const programsGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px"
};

const programCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const programHeaderStyles = {
  marginBottom: "8px"
};

const programTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "4px"
};

const audienceStyles = {
  fontSize: "12px",
  color: "#00d4a8",
  fontWeight: 500
};

const durationStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.4)",
  marginBottom: "12px"
};

const programDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "16px"
};

const outcomesStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "20px"
};

const outcomeStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)"
};

const inquiryBtnStyles = {
  display: "inline-block",
  padding: "10px 24px",
  borderRadius: "8px",
  border: "1px solid rgba(0,212,168,0.3)",
  color: "#00d4a8",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  transition: "all 0.2s"
};

const benefitsSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const benefitsGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const benefitCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.06)"
};

const benefitIconStyles = {
  fontSize: "32px",
  marginBottom: "8px"
};

const benefitTitleStyles = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "4px"
};

const benefitDescStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  lineHeight: "1.5"
};

const ctaSectionStyles = {
  padding: "60px 24px",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"
};

const ctaInnerStyles = {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center"
};

const ctaTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "12px"
};

const ctaDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  marginBottom: "24px"
};

const ctaBtnStyles = {
  display: "inline-block",
  padding: "14px 36px",
  borderRadius: "10px",
  backgroundColor: "#00d4a8",
  color: "#031a14",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.2s"
};

export default Corporate;