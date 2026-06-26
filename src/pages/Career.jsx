// pages/Career.jsx
const Career = () => {
  const services = [
    {
      icon: "📄",
      title: "Resume & Portfolio Building",
      description: "Get professional resume writing and portfolio development services tailored for AI roles.",
      details: ["ATS-optimized resumes", "GitHub profile setup", "Project portfolio creation", "LinkedIn optimization"]
    },
    {
      icon: "🎯",
      title: "Interview Preparation",
      description: "Comprehensive interview training with mock interviews and technical assessments.",
      details: ["Technical interview prep", "Behavioral interview coaching", "Mock interviews", "Salary negotiation"]
    },
    {
      icon: "🤝",
      title: "Job Placement Support",
      description: "Connect with our network of hiring partners and get placement assistance.",
      details: ["Job matching", "Referral network", "Company introductions", "Career fairs"]
    },
    {
      icon: "🌐",
      title: "Networking & Community",
      description: "Join a community of AI professionals and expand your professional network.",
      details: ["Alumni network", "Industry events", "Guest lectures", "Mentorship program"]
    }
  ];

  const outcomes = [
    { company: "Google", role: "AI Engineer", location: "Bangalore", alumni: "Priya M." },
    { company: "Microsoft", role: "Data Scientist", location: "Hyderabad", alumni: "Rahul K." },
    { company: "Amazon", role: "ML Engineer", location: "Chennai", alumni: "Sneha P." },
    { company: "Flipkart", role: "AI Analyst", location: "Bengaluru", alumni: "Amit S." },
    { company: "TCS", role: "AI Consultant", location: "Mumbai", alumni: "Ravi G." },
    { company: "Wipro", role: "Data Analyst", location: "Pune", alumni: "Neha R." }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Launch Your <span style={highlightStyles}>AI Career</span></h1>
          <p style={subtitleStyles}>
            From learning to earning - our Career Accelerator program guides you every step of the way.
          </p>
        </div>
      </section>

      <section style={statsSectionStyles}>
        <div style={statsGridStyles}>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>95%</div>
            <div style={statLabelStyles}>Placement Rate</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>₹15L</div>
            <div style={statLabelStyles}>Average Package</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>100+</div>
            <div style={statLabelStyles}>Hiring Partners</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>3x</div>
            <div style={statLabelStyles}>Salary Growth</div>
          </div>
        </div>
      </section>

      <section style={servicesSectionStyles}>
        <h2 style={headingStyles}>Career Accelerator Services</h2>
        <div style={servicesGridStyles}>
          {services.map((service, i) => (
            <div key={i} style={serviceCardStyles}>
              <div style={serviceIconStyles}>{service.icon}</div>
              <h3 style={serviceTitleStyles}>{service.title}</h3>
              <p style={serviceDescStyles}>{service.description}</p>
              <ul style={serviceListStyles}>
                {service.details.map((detail, j) => (
                  <li key={j} style={serviceListItemStyles}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={outcomesSectionStyles}>
        <h2 style={headingStyles}>Placement Outcomes</h2>
        <p style={outcomesSubStyles}>Where our alumni are making an impact</p>
        <div style={outcomesGridStyles}>
          {outcomes.map((outcome, i) => (
            <div key={i} style={outcomeCardStyles}>
              <div style={companyLogoStyles}>{outcome.company.charAt(0)}</div>
              <div style={outcomeInfoStyles}>
                <div style={companyNameStyles}>{outcome.company}</div>
                <div style={roleNameStyles}>{outcome.role}</div>
                <div style={locationStyles}>{outcome.location}</div>
                <div style={alumniStyles}>🌟 {outcome.alumni}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Start Your Career Journey</h2>
          <p style={ctaDescStyles}>Join our Career Accelerator program and get placed in top companies.</p>
          <a href="/admissions" style={ctaBtnStyles}>Apply for Career Accelerator →</a>
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
  margin: "0 auto",
  lineHeight: "1.6"
};

const statsSectionStyles = {
  padding: "40px 24px 60px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const statsGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "16px"
};

const statCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.06)"
};

const statNumberStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 700,
  color: "#00d4a8",
  marginBottom: "4px"
};

const statLabelStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.5)"
};

const servicesSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const headingStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "12px",
  textAlign: "center"
};

const servicesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px"
};

const serviceCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const serviceIconStyles = {
  fontSize: "40px",
  marginBottom: "12px"
};

const serviceTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const serviceDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "12px"
};

const serviceListStyles = {
  listStyle: "none",
  padding: 0
};

const serviceListItemStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  padding: "4px 0",
  borderBottom: "1px solid rgba(255,255,255,0.04)"
};

const outcomesSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const outcomesSubStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.5)",
  textAlign: "center",
  marginBottom: "32px"
};

const outcomesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px"
};

const outcomeCardStyles = {
  display: "flex",
  gap: "16px",
  padding: "16px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)",
  alignItems: "center"
};

const companyLogoStyles = {
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  backgroundColor: "rgba(0,212,168,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: 700,
  color: "#00d4a8",
  flexShrink: 0
};

const outcomeInfoStyles = {
  flex: 1
};

const companyNameStyles = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#f0f2f5"
};

const roleNameStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.6)"
};

const locationStyles = {
  fontSize: "12px",
  color: "rgba(240,242,245,0.3)"
};

const alumniStyles = {
  fontSize: "12px",
  color: "#00d4a8",
  marginTop: "4px"
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

export default Career;