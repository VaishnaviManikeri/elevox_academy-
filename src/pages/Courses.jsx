// pages/Courses.jsx
const Courses = () => {
  return (
    <div style={containerStyles}>
      <section style={sectionStyles}>
        <h1 style={titleStyles}>Our Courses</h1>
        <p style={subtitleStyles}>
          Explore our comprehensive range of AI courses designed for every skill level.
        </p>
        <div style={gridStyles}>
          {[
            { name: "AI Fundamentals", level: "Beginner", duration: "8 Weeks" },
            { name: "Data Science Mastery", level: "Intermediate", duration: "12 Weeks" },
            { name: "Deep Learning", level: "Advanced", duration: "12 Weeks" },
            { name: "NLP Specialization", level: "Advanced", duration: "10 Weeks" },
            { name: "Computer Vision", level: "Advanced", duration: "10 Weeks" },
            { name: "MLOps Engineering", level: "Intermediate", duration: "8 Weeks" }
          ].map((course, i) => (
            <div key={i} style={cardStyles}>
              <h3 style={courseNameStyles}>{course.name}</h3>
              <div style={metaStyles}>
                <span style={levelStyles}>{course.level}</span>
                <span style={durationStyles}>{course.duration}</span>
              </div>
              <a href="/programmes" style={linkStyles}>Learn More →</a>
            </div>
          ))}
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

const sectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const titleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  textAlign: "center",
  marginBottom: "16px"
};

const subtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
  textAlign: "center",
  marginBottom: "40px"
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const cardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  textAlign: "center"
};

const courseNameStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const metaStyles = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  marginBottom: "16px"
};

const levelStyles = {
  fontSize: "13px",
  padding: "4px 12px",
  borderRadius: "12px",
  backgroundColor: "rgba(0,212,168,0.1)",
  color: "#00d4a8"
};

const durationStyles = {
  fontSize: "13px",
  padding: "4px 12px",
  borderRadius: "12px",
  backgroundColor: "rgba(255,255,255,0.05)",
  color: "rgba(240,242,245,0.5)"
};

const linkStyles = {
  color: "#00d4a8",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "14px"
};

export default Courses;