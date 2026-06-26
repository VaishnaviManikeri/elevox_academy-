// pages/Admissions.jsx
const Admissions = () => {
  const cohorts = [
    {
      name: "AI Foundations - Batch 7",
      startDate: "July 15, 2026",
      duration: "8 Weeks",
      format: "Hybrid (Online + In-Person)",
      seats: 12,
      status: "Open",
      deadline: "July 5, 2026"
    },
    {
      name: "Professional Upskilling - Cohort 3",
      startDate: "August 1, 2026",
      duration: "12 Weeks",
      format: "In-Person (Nagpur)",
      seats: 15,
      status: "Open",
      deadline: "July 20, 2026"
    },
    {
      name: "AI for Developers - Batch 4",
      startDate: "August 15, 2026",
      duration: "12 Weeks",
      format: "Online",
      seats: 8,
      status: "Limited",
      deadline: "August 5, 2026"
    },
    {
      name: "AI for Marketing - Batch 2",
      startDate: "September 1, 2026",
      duration: "10 Weeks",
      format: "Hybrid",
      seats: 10,
      status: "Coming Soon",
      deadline: "August 20, 2026"
    }
  ];

  const scholarships = [
    { name: "Merit Scholarship", amount: "Up to 50%", criteria: "Based on entrance exam performance" },
    { name: "Women in AI", amount: "30%", criteria: "For female candidates in STEM" },
    { name: "Early Bird Discount", amount: "15%", criteria: "Apply 30 days before batch start" },
    { name: "Group Discount", amount: "20%", criteria: "For 3+ students applying together" }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Join the <span style={highlightStyles}>AI Revolution</span></h1>
          <p style={subtitleStyles}>
            Secure your spot in our upcoming cohorts. Limited seats available for each batch.
          </p>
          <a href="#apply" style={ctaStyles}>Start Your Application →</a>
        </div>
      </section>

      <section style={sectionStyles}>
        <h2 style={headingStyles}>Upcoming Cohorts</h2>
        <div style={tableWrapperStyles}>
          <table style={tableStyles}>
            <thead>
              <tr style={headerRowStyles}>
                <th style={thStyles}>Program</th>
                <th style={thStyles}>Start Date</th>
                <th style={thStyles}>Duration</th>
                <th style={thStyles}>Format</th>
                <th style={thStyles}>Seats</th>
                <th style={thStyles}>Status</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort, i) => (
                <tr key={i} style={rowStyles}>
                  <td style={tdStyles}><strong>{cohort.name}</strong></td>
                  <td style={tdStyles}>{cohort.startDate}</td>
                  <td style={tdStyles}>{cohort.duration}</td>
                  <td style={tdStyles}>{cohort.format}</td>
                  <td style={tdStyles}>{cohort.seats}</td>
                  <td style={tdStyles}>
                    <span style={{
                      ...statusStyles,
                      backgroundColor: cohort.status === "Open" ? "rgba(0,212,168,0.15)" : 
                                       cohort.status === "Limited" ? "rgba(255,193,7,0.15)" : 
                                       "rgba(100,100,100,0.15)",
                      color: cohort.status === "Open" ? "#00d4a8" : 
                             cohort.status === "Limited" ? "#ffc107" : 
                             "rgba(240,242,245,0.5)"
                    }}>
                      {cohort.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={scholarshipStyles}>
        <h2 style={headingStyles}>Scholarships & Financial Aid</h2>
        <div style={scholarshipGridStyles}>
          {scholarships.map((scholarship, i) => (
            <div key={i} style={scholarshipCardStyles}>
              <h3 style={scholarshipNameStyles}>{scholarship.name}</h3>
              <div style={amountStyles}>{scholarship.amount}</div>
              <p style={criteriaStyles}>{scholarship.criteria}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" style={applyStyles}>
        <div style={applyInnerStyles}>
          <h2 style={applyTitleStyles}>Ready to Apply?</h2>
          <p style={applyDescStyles}>
            Fill out our application form and take the first step towards your AI career.
          </p>
          <form style={formStyles}>
            <input type="text" placeholder="Full Name" style={inputStyles} />
            <input type="email" placeholder="Email Address" style={inputStyles} />
            <input type="tel" placeholder="Phone Number" style={inputStyles} />
            <select style={inputStyles}>
              <option value="">Select Program</option>
              <option value="foundations">AI Foundations</option>
              <option value="upskilling">Professional Upskilling</option>
              <option value="developers">AI for Developers</option>
              <option value="marketing">AI for Marketing</option>
            </select>
            <button type="submit" style={submitStyles}>Submit Application →</button>
          </form>
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
  padding: "80px 24px 60px",
  background: "linear-gradient(180deg, rgba(0,212,168,0.05) 0%, transparent 100%)",
  textAlign: "center"
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
  marginBottom: "20px",
  lineHeight: "1.1"
};

const highlightStyles = {
  color: "#00d4a8"
};

const subtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
  marginBottom: "32px",
  lineHeight: "1.6"
};

const ctaStyles = {
  display: "inline-block",
  padding: "14px 40px",
  borderRadius: "10px",
  backgroundColor: "#00d4a8",
  color: "#031a14",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.2s"
};

const sectionStyles = {
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

const tableWrapperStyles = {
  overflowX: "auto",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const tableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "rgba(255,255,255,0.02)"
};

const headerRowStyles = {
  borderBottom: "1px solid rgba(255,255,255,0.06)"
};

const thStyles = {
  padding: "16px",
  textAlign: "left",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(240,242,245,0.5)"
};

const tdStyles = {
  padding: "16px",
  fontSize: "14px",
  color: "rgba(240,242,245,0.8)",
  borderBottom: "1px solid rgba(255,255,255,0.04)"
};

const rowStyles = {
  transition: "background 0.2s"
};

const statusStyles = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: 500
};

const scholarshipStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const scholarshipGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const scholarshipCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.06)",
  textAlign: "center"
};

const scholarshipNameStyles = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const amountStyles = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#00d4a8",
  marginBottom: "8px"
};

const criteriaStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  lineHeight: "1.4"
};

const applyStyles = {
  padding: "80px 24px",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"
};

const applyInnerStyles = {
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center"
};

const applyTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2rem, 3vw, 2.8rem)",
  color: "#f0f2f5",
  marginBottom: "16px"
};

const applyDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  marginBottom: "32px"
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

const inputStyles = {
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "#f0f2f5",
  fontSize: "15px",
  fontFamily: "'Inter', sans-serif"
};

const submitStyles = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#00d4a8",
  color: "#031a14",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s"
};

export default Admissions;