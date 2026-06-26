// pages/WhyAI.jsx
const WhyAI = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      impact: "AI in healthcare is revolutionizing diagnosis, treatment planning, and patient care.",
      applications: ["Medical Imaging", "Drug Discovery", "Patient Monitoring"],
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      impact: "Manufacturing AI improves quality control, predictive maintenance, and supply chain.",
      applications: ["Quality Inspection", "Predictive Maintenance", "Supply Chain Optimization"],
    },
    {
      name: "Banking & Finance",
      icon: "🏦",
      impact: "Financial AI enhances fraud detection, risk assessment, and customer service.",
      applications: ["Fraud Detection", "Risk Analysis", "Algorithmic Trading"],
    },
    {
      name: "Marketing & Sales",
      icon: "📊",
      impact: "AI-driven marketing enables personalization, automation, and predictive analytics.",
      applications: ["Customer Segmentation", "Content Generation", "Sales Forecasting"],
    },
  ];

  return (
    <div style={containerStyles}>
      <section style={sectionStyles}>
        <h1 style={pageTitleStyles}>Why AI Matters</h1>
        <p style={pageSubtitleStyles}>
          Every industry is being reshaped by AI. Understand where AI creates leverage in yours.
        </p>
      </section>

      <section style={gridStyles}>
        {industries.map((industry, i) => (
          <div key={i} style={cardStyles}>
            <div style={iconStyles}>{industry.icon}</div>
            <h3 style={nameStyles}>{industry.name}</h3>
            <p style={impactStyles}>{industry.impact}</p>
            <div style={appsStyles}>
              {industry.applications.map((app, j) => (
                <span key={j} style={appStyles}>{app}</span>
              ))}
            </div>
          </div>
        ))}
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
  textAlign: "center",
};

const iconStyles = {
  fontSize: "48px",
  marginBottom: "12px",
};

const nameStyles = {
  fontSize: "20px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "12px",
};

const impactStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const appsStyles = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const appStyles = {
  fontSize: "12px",
  padding: "4px 12px",
  borderRadius: "6px",
  backgroundColor: "rgba(255,255,255,0.05)",
  color: "rgba(240,242,245,0.5)",
};

export default WhyAI;