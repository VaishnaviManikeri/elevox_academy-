// pages/Business.jsx
const Business = () => {
  return (
    <div style={containerStyles}>
      <section style={sectionStyles}>
        <h1 style={pageTitleStyles}>For Business</h1>
        <p style={pageSubtitleStyles}>
          Transform your organization with AI. Tailored solutions for teams and enterprises.
        </p>
      </section>

      <section style={gridStyles}>
        <div style={cardStyles}>
          <h3 style={cardTitleStyles}>🏢 AI Readiness Programme</h3>
          <p style={cardDescStyles}>Audit and upskill your team with our comprehensive AI readiness program.</p>
          <a href="/corporate" style={linkStyles}>Learn More →</a>
        </div>
        <div style={cardStyles}>
          <h3 style={cardTitleStyles}>👔 Leadership AI Sessions</h3>
          <p style={cardDescStyles}>Executive-level AI training for C-suite and management teams.</p>
          <a href="/corporate" style={linkStyles}>Explore →</a>
        </div>
        <div style={cardStyles}>
          <h3 style={cardTitleStyles}>🏫 Campus Programmes</h3>
          <p style={cardDescStyles}>Partner with Elevox to bring AI education to your campus.</p>
          <a href="/colleges" style={linkStyles}>Partner With Us →</a>
        </div>
        <div style={cardStyles}>
          <h3 style={cardTitleStyles}>🎓 Faculty Development</h3>
          <p style={cardDescStyles}>Train the trainers - empower your faculty with AI expertise.</p>
          <a href="/colleges" style={linkStyles}>Get Started →</a>
        </div>
      </section>
    </div>
  );
};

const containerStyles = {
  minHeight: "100vh",
  backgroundColor: "#08090d",
  paddingTop: "72px",
};

const sectionStyles = {
  padding: "60px 24px 40px",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const pageTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  marginBottom: "16px",
};

const pageSubtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "32px",
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 24px 80px",
};

const cardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "32px",
  border: "1px solid rgba(255,255,255,0.06)",
};

const cardTitleStyles = {
  fontSize: "20px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "12px",
};

const cardDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const linkStyles = {
  color: "#00d4a8",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "14px",
};

export default Business;