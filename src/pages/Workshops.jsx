// pages/Workshops.jsx
import React from "react";

const Workshops = () => {
  const workshops = [
    {
      title: "AI Fundamentals Bootcamp",
      type: "Beginner",
      date: "July 10-12, 2026",
      duration: "3 Days",
      price: "₹4,999",
      description: "Master the basics of AI, machine learning, and data science in this intensive bootcamp.",
      topics: ["Python Basics", "Data Science Intro", "ML Algorithms", "Project: Build Your First AI Model"]
    },
    {
      title: "Data Science Masterclass",
      type: "Intermediate",
      date: "July 20-22, 2026",
      duration: "3 Days",
      price: "₹7,999",
      description: "Dive deep into data science with advanced analytics, visualization, and modeling.",
      topics: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Real-world Projects"]
    },
    {
      title: "Deep Learning Intensive",
      type: "Advanced",
      date: "August 5-7, 2026",
      duration: "3 Days",
      price: "₹9,999",
      description: "Explore neural networks, deep learning architectures, and AI model deployment.",
      topics: ["Neural Networks", "CNN", "RNN", "Transfer Learning", "Model Deployment"]
    },
    {
      title: "AI in Business Strategy",
      type: "Executive",
      date: "August 15-16, 2026",
      duration: "2 Days",
      price: "₹12,999",
      description: "Learn how to leverage AI for business transformation and competitive advantage.",
      topics: ["AI Strategy", "ROI Analysis", "Implementation", "Change Management"]
    },
    {
      title: "Generative AI Workshop",
      type: "Intermediate",
      date: "September 1-2, 2026",
      duration: "2 Days",
      price: "₹6,999",
      description: "Create content, images, and applications using cutting-edge generative AI tools.",
      topics: ["ChatGPT", "DALL-E", "Stable Diffusion", "Prompt Engineering", "AI Applications"]
    },
    {
      title: "MLOps & Deployment",
      type: "Advanced",
      date: "September 10-12, 2026",
      duration: "3 Days",
      price: "₹8,999",
      description: "Learn to deploy, monitor, and maintain machine learning models in production.",
      topics: ["Docker", "Kubernetes", "CI/CD", "Model Monitoring", "Cloud Deployment"]
    }
  ];

  const workshopTypes = ["All", "Beginner", "Intermediate", "Advanced", "Executive"];
  const [activeType, setActiveType] = React.useState("All");

  const filteredWorkshops = activeType === "All" 
    ? workshops 
    : workshops.filter(w => w.type === activeType);

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Hands-on <span style={highlightStyles}>AI Workshops</span></h1>
          <p style={subtitleStyles}>
            Practical, intensive workshops designed to give you real AI skills you can apply immediately.
          </p>
        </div>
      </section>

      <section style={filterStyles}>
        <div style={filterInnerStyles}>
          {workshopTypes.map((type, i) => (
            <button 
              key={i}
              style={{
                ...filterBtnStyles,
                backgroundColor: activeType === type ? "rgba(0,212,168,0.15)" : "transparent",
                color: activeType === type ? "#00d4a8" : "rgba(240,242,245,0.6)",
                border: activeType === type ? "1px solid rgba(0,212,168,0.3)" : "1px solid rgba(255,255,255,0.06)"
              }}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section style={gridStyles}>
        {filteredWorkshops.map((workshop, i) => (
          <div key={i} style={cardStyles}>
            <div style={cardHeaderStyles}>
              <span style={{
                ...typeBadgeStyles,
                backgroundColor: workshop.type === "Beginner" ? "rgba(0,212,168,0.15)" :
                                 workshop.type === "Intermediate" ? "rgba(255,193,7,0.15)" :
                                 workshop.type === "Advanced" ? "rgba(255,87,34,0.15)" :
                                 "rgba(100,100,255,0.15)",
                color: workshop.type === "Beginner" ? "#00d4a8" :
                       workshop.type === "Intermediate" ? "#ffc107" :
                       workshop.type === "Advanced" ? "#ff5722" :
                       "#6464ff"
              }}>
                {workshop.type}
              </span>
              <span style={priceStyles}>{workshop.price}</span>
            </div>
            <h3 style={workshopTitleStyles}>{workshop.title}</h3>
            <div style={metaStyles}>
              <span style={metaItemStyles}>📅 {workshop.date}</span>
              <span style={metaItemStyles}>⏱ {workshop.duration}</span>
            </div>
            <p style={descStyles}>{workshop.description}</p>
            <div style={topicsStyles}>
              {workshop.topics.map((topic, j) => (
                <span key={j} style={topicStyles}>{topic}</span>
              ))}
            </div>
            <a href="#" style={registerBtnStyles}>Register Now →</a>
          </div>
        ))}
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Can't find what you're looking for?</h2>
          <p style={ctaDescStyles}>We also offer custom workshops for corporate teams and institutions.</p>
          <a href="/business" style={ctaBtnStyles}>Request a Custom Workshop →</a>
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

const filterStyles = {
  padding: "0 24px 40px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const filterInnerStyles = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center"
};

const filterBtnStyles = {
  padding: "8px 20px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  backgroundColor: "transparent",
  fontFamily: "'Inter', sans-serif"
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 24px 60px"
};

const cardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s"
};

const cardHeaderStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px"
};

const typeBadgeStyles = {
  fontSize: "11px",
  fontWeight: 600,
  padding: "4px 14px",
  borderRadius: "12px",
  letterSpacing: "0.5px"
};

const priceStyles = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#00d4a8"
};

const workshopTitleStyles = {
  fontSize: "20px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const metaStyles = {
  display: "flex",
  gap: "16px",
  marginBottom: "12px",
  flexWrap: "wrap"
};

const metaItemStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.4)"
};

const descStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "16px"
};

const topicsStyles = {
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
  marginBottom: "20px"
};

const topicStyles = {
  fontSize: "12px",
  padding: "4px 10px",
  borderRadius: "6px",
  backgroundColor: "rgba(255,255,255,0.04)",
  color: "rgba(240,242,245,0.4)"
};

const registerBtnStyles = {
  display: "inline-block",
  padding: "10px 24px",
  borderRadius: "8px",
  backgroundColor: "#00d4a8",
  color: "#031a14",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.2s"
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
  padding: "12px 32px",
  borderRadius: "10px",
  border: "1px solid rgba(0,212,168,0.3)",
  color: "#00d4a8",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
  transition: "all 0.2s"
};

export default Workshops;
