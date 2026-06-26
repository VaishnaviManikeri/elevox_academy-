// pages/Tour.jsx
const Tour = () => {
  const facilities = [
    {
      name: "AI Lab",
      icon: "💻",
      description: "State-of-the-art lab with high-performance computing workstations for AI training.",
      features: ["50+ Workstations", "GPU Clusters", "Collaborative Learning Space"]
    },
    {
      name: "Innovation Hub",
      icon: "🚀",
      description: "Dedicated space for project development, prototyping, and innovation challenges.",
      features: ["Project Display Area", "Brainstorming Rooms", "3D Printers"]
    },
    {
      name: "Library & Resource Center",
      icon: "📚",
      description: "Extensive collection of AI books, research papers, and digital resources.",
      features: ["5000+ Books", "Digital Journals", "Study Pods"]
    },
    {
      name: "Collaboration Spaces",
      icon: "🤝",
      description: "Modern collaborative spaces designed for group work and networking.",
      features: ["Breakout Rooms", "Whiteboard Walls", "Relaxation Zone"]
    },
    {
      name: "Lecture Halls",
      icon: "🎓",
      description: "Tech-enabled classrooms with interactive learning technology.",
      features: ["Smart Boards", "Recording Systems", "Accessible Design"]
    },
    {
      name: "Makerspace",
      icon: "⚙️",
      description: "Hands-on space for building prototypes and exploring hardware AI applications.",
      features: ["Hardware Lab", "IoT Devices", "Robotics Kits"]
    }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Welcome to <span style={highlightStyles}>Elevox Academy</span></h1>
          <p style={subtitleStyles}>
            Explore our state-of-the-art facilities designed for immersive AI learning and innovation.
          </p>
          <a href="#facilities" style={ctaStyles}>Take a Virtual Tour →</a>
        </div>
      </section>

      <section id="facilities" style={facilitiesSectionStyles}>
        <h2 style={headingStyles}>Our Facilities</h2>
        <p style={facilitiesSubStyles}>Every space designed with learning and innovation in mind</p>
        <div style={facilitiesGridStyles}>
          {facilities.map((facility, i) => (
            <div key={i} style={facilityCardStyles}>
              <div style={facilityIconStyles}>{facility.icon}</div>
              <h3 style={facilityNameStyles}>{facility.name}</h3>
              <p style={facilityDescStyles}>{facility.description}</p>
              <div style={featureTagsStyles}>
                {facility.features.map((feature, j) => (
                  <span key={j} style={featureTagStyles}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={gallerySectionStyles}>
        <h2 style={headingStyles}>Campus Gallery</h2>
        <div style={galleryGridStyles}>
          <div style={galleryItemStyles}></div>
          <div style={galleryItemStyles}></div>
          <div style={galleryItemStyles}></div>
          <div style={galleryItemStyles}></div>
          <div style={galleryItemStyles}></div>
          <div style={galleryItemStyles}></div>
        </div>
        <p style={galleryNoteStyles}>* Interactive campus tour coming soon. Schedule a visit to experience it in person.</p>
      </section>

      <section style={visitSectionStyles}>
        <div style={visitInnerStyles}>
          <h2 style={visitTitleStyles}>Visit Our Campus</h2>
          <p style={visitDescStyles}>Experience Elevox Academy in person. Schedule a campus tour today.</p>
          <div style={visitInfoStyles}>
            <div style={visitInfoItemStyles}>
              <span style={visitLabelStyles}>📍 Address:</span>
              <span style={visitValueStyles}>Nagpur, Maharashtra, India</span>
            </div>
            <div style={visitInfoItemStyles}>
              <span style={visitLabelStyles}>📞 Phone:</span>
              <span style={visitValueStyles}>+91 98765 43210</span>
            </div>
            <div style={visitInfoItemStyles}>
              <span style={visitLabelStyles}>📧 Email:</span>
              <span style={visitValueStyles}>tour@elevox.ai</span>
            </div>
          </div>
          <a href="#" style={scheduleBtnStyles}>Schedule a Visit →</a>
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

const facilitiesSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const headingStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "8px",
  textAlign: "center"
};

const facilitiesSubStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.5)",
  textAlign: "center",
  marginBottom: "32px"
};

const facilitiesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const facilityCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s"
};

const facilityIconStyles = {
  fontSize: "40px",
  marginBottom: "12px"
};

const facilityNameStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const facilityDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "12px"
};

const featureTagsStyles = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap"
};

const featureTagStyles = {
  fontSize: "11px",
  padding: "4px 12px",
  borderRadius: "6px",
  backgroundColor: "rgba(255,255,255,0.04)",
  color: "rgba(240,242,245,0.4)"
};

const gallerySectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const galleryGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
  marginBottom: "16px"
};

const galleryItemStyles = {
  aspectRatio: "1",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)",
  backgroundImage: "linear-gradient(135deg, rgba(0,212,168,0.05) 0%, transparent 100%)",
  minHeight: "160px"
};

const galleryNoteStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.3)",
  textAlign: "center"
};

const visitSectionStyles = {
  padding: "60px 24px",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"
};

const visitInnerStyles = {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center"
};

const visitTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "12px"
};

const visitDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  marginBottom: "24px"
};

const visitInfoStyles = {
  textAlign: "left",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const visitInfoItemStyles = {
  padding: "8px 0",
  borderBottom: "1px solid rgba(255,255,255,0.04)"
};

const visitLabelStyles = {
  fontSize: "14px",
  fontWeight: 600,
  color: "rgba(240,242,245,0.5)",
  marginRight: "8px"
};

const visitValueStyles = {
  fontSize: "14px",
  color: "#f0f2f5"
};

const scheduleBtnStyles = {
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

export default Tour;