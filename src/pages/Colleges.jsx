// pages/Colleges.jsx
const Colleges = () => {
  const programs = [
    {
      title: "Campus Workshops",
      description: "Student-facing AI workshops designed to inspire and educate the next generation of AI professionals.",
      features: ["2-5 Day Programs", "Hands-on Projects", "Industry Insights", "Career Guidance"],
      duration: "2-5 Days"
    },
    {
      title: "Faculty Development Program",
      description: "Equip your faculty with AI expertise and teaching methodologies for modern AI education.",
      features: ["AI Fundamentals", "Teaching Methods", "Resource Development", "Certification"],
      duration: "1-2 Weeks"
    },
    {
      title: "Curriculum Partnership",
      description: "Integrate AI into your existing curriculum with our expert-designed modules and learning materials.",
      features: ["Course Design", "Learning Materials", "Assessment Tools", "Ongoing Support"],
      duration: "Semester-long"
    },
    {
      title: "Placement Readiness Program",
      description: "Make your students job-ready with comprehensive AI skills and placement preparation.",
      features: ["Technical Skills", "Interview Prep", "Portfolio Building", "Corporate Connect"],
      duration: "4-6 Weeks"
    }
  ];

  const partners = [
    { name: "IIT Nagpur", type: "Technical Institute" },
    { name: "IIM Nagpur", type: "Management Institute" },
    { name: "VNIT", type: "Engineering College" },
    { name: "Datta Meghe Institute", type: "University" },
    { name: "GH Raisoni College", type: "Engineering College" },
    { name: "Yeshwantrao College", type: "Degree College" }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Campus <span style={highlightStyles}>Partnerships</span></h1>
          <p style={subtitleStyles}>
            Bring world-class AI education to your campus. Partner with Elevox to transform your institution.
          </p>
          <a href="#programs" style={ctaStyles}>View Programs →</a>
        </div>
      </section>

      <section id="programs" style={programsSectionStyles}>
        <h2 style={headingStyles}>Our Campus Programs</h2>
        <div style={programsGridStyles}>
          {programs.map((program, i) => (
            <div key={i} style={programCardStyles}>
              <div style={programIconStyles}>{["🎓", "👨‍🏫", "📚", "💼"][i]}</div>
              <h3 style={programTitleStyles}>{program.title}</h3>
              <div style={programDurationStyles}>⏱ {program.duration}</div>
              <p style={programDescStyles}>{program.description}</p>
              <ul style={featureListStyles}>
                {program.features.map((feature, j) => (
                  <li key={j} style={featureItemStyles}>{feature}</li>
                ))}
              </ul>
              <a href="#" style={partnerBtnStyles}>Partner With Us →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={partnersSectionStyles}>
        <h2 style={headingStyles}>Our Partner Institutions</h2>
        <div style={partnersGridStyles}>
          {partners.map((partner, i) => (
            <div key={i} style={partnerCardStyles}>
              <div style={partnerInitialStyles}>{partner.name.charAt(0)}</div>
              <div style={partnerInfoStyles}>
                <div style={partnerNameStyles}>{partner.name}</div>
                <div style={partnerTypeStyles}>{partner.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Ready to Partner?</h2>
          <p style={ctaDescStyles}>
            Let's discuss how Elevox can help your institution become an AI education leader.
          </p>
          <a href="#" style={ctaBtnStyles}>Request a Proposal →</a>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const programCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const programIconStyles = {
  fontSize: "40px",
  marginBottom: "8px"
};

const programTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "4px"
};

const programDurationStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.4)",
  marginBottom: "12px"
};

const programDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "12px"
};

const featureListStyles = {
  listStyle: "none",
  padding: 0,
  marginBottom: "20px"
};

const featureItemStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  padding: "4px 0",
  borderBottom: "1px solid rgba(255,255,255,0.04)"
};

const partnerBtnStyles = {
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

const partnersSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const partnersGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px"
};

const partnerCardStyles = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const partnerInitialStyles = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(0,212,168,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: 600,
  color: "#00d4a8"
};

const partnerInfoStyles = {
  flex: 1
};

const partnerNameStyles = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#f0f2f5"
};

const partnerTypeStyles = {
  fontSize: "12px",
  color: "rgba(240,242,245,0.4)"
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

export default Colleges;