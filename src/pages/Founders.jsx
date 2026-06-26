// pages/Founders.jsx
const Founders = () => {
  const founders = [
    {
      name: "Dr. Ananya Sharma",
      role: "CEO & Co-Founder",
      image: "👩‍🔬",
      bio: "Former AI Research Lead at Google with a PhD in Machine Learning from Stanford. Published 20+ research papers in top AI conferences including NeurIPS, ICML, and ICLR.",
      expertise: ["Natural Language Processing", "Deep Learning", "AI Strategy"],
      experience: "12+ years in AI research and development",
      education: "PhD - Stanford University, MS - IIT Bombay",
      achievements: ["Top 100 Women in AI 2025", "Google Research Excellence Award", "3 Patents in AI"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Vikram Mehta",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Built and scaled AI systems at Microsoft and Amazon. Expert in MLOps, computer vision, and production-grade AI deployment at enterprise scale.",
      expertise: ["MLOps", "Computer Vision", "Cloud AI Architecture"],
      experience: "15+ years in software engineering and AI",
      education: "MS - Carnegie Mellon, BE - NIT Surathkal",
      achievements: ["AWS AI Hero", "Microsoft Gold Star Award", "Tech Speaker at 50+ Conferences"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Priya Patel",
      role: "Head of Education & Co-Founder",
      image: "👩‍🏫",
      bio: "10+ years in EdTech and curriculum design. Former Dean at a top engineering college. Passionate about making AI education accessible to all.",
      expertise: ["Curriculum Design", "Pedagogy", "Student Success"],
      experience: "10+ years in education and EdTech",
      education: "PhD - Education Technology, MA - Harvard",
      achievements: ["Education Innovation Award 2024", "Published 5 Textbooks", "3000+ Students Mentored"],
      linkedin: "#",
      twitter: "#"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Purpose-Driven",
      description: "We believe AI education should serve a purpose - creating opportunities and solving real problems."
    },
    {
      icon: "🤝",
      title: "Industry-First",
      description: "Our curriculum is built by industry veterans who understand what it takes to succeed in AI."
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "We foster a culture of continuous learning and encourage our students to push boundaries."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace innovation in everything we do - from teaching methods to technology integration."
    }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Meet Our <span style={highlightStyles}>Founders</span></h1>
          <p style={subtitleStyles}>
            Industry veterans with decades of combined experience in AI, research, and education.
            Real experts who've built real AI systems.
          </p>
        </div>
      </section>

      <section style={foundersSectionStyles}>
        {founders.map((founder, i) => (
          <div key={i} style={founderCardStyles}>
            <div style={founderContentStyles}>
              <div style={founderAvatarStyles}>
                <span style={founderAvatarTextStyles}>{founder.image}</span>
              </div>
              <div style={founderInfoStyles}>
                <h2 style={founderNameStyles}>{founder.name}</h2>
                <div style={founderRoleStyles}>{founder.role}</div>
                <p style={founderBioStyles}>{founder.bio}</p>
                
                <div style={founderMetaStyles}>
                  <div style={metaItemStyles}>
                    <span style={metaLabelStyles}>Experience:</span>
                    <span style={metaValueStyles}>{founder.experience}</span>
                  </div>
                  <div style={metaItemStyles}>
                    <span style={metaLabelStyles}>Education:</span>
                    <span style={metaValueStyles}>{founder.education}</span>
                  </div>
                </div>

                <div style={expertiseStyles}>
                  {founder.expertise.map((skill, j) => (
                    <span key={j} style={expertiseTagStyles}>{skill}</span>
                  ))}
                </div>

                <div style={achievementsStyles}>
                  {founder.achievements.map((achievement, j) => (
                    <span key={j} style={achievementStyles}>🏆 {achievement}</span>
                  ))}
                </div>

                <div style={socialLinkStyles}>
                  <a href={founder.linkedin} style={socialLink}>LinkedIn</a>
                  <a href={founder.twitter} style={socialLink}>Twitter</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section style={valuesSectionStyles}>
        <h2 style={headingStyles}>Our Core Values</h2>
        <p style={subHeadingStyles}>The principles that guide everything we do</p>
        <div style={valuesGridStyles}>
          {values.map((value, i) => (
            <div key={i} style={valueCardStyles}>
              <div style={valueIconStyles}>{value.icon}</div>
              <h3 style={valueTitleStyles}>{value.title}</h3>
              <p style={valueDescStyles}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={storySectionStyles}>
        <div style={storyInnerStyles}>
          <h2 style={storyTitleStyles}>Our Story</h2>
          <p style={storyDescStyles}>
            Elevox AI Academy was born from a simple belief: exceptional AI talent exists everywhere, 
            but opportunity doesn't. We're bridging that gap by bringing world-class AI education to 
            Tier-2 cities.
          </p>
          <p style={storyDescStyles}>
            Founded in 2024, we've grown from a small cohort of 20 students to over 500 alumni, 
            with a 95% placement rate. Our success comes from our commitment to practical, 
            industry-aligned education that transforms careers.
          </p>
          <div style={storyStatsStyles}>
            <div style={storyStatStyles}>
              <span style={storyStatNumStyles}>2024</span>
              <span style={storyStatLabelStyles}>Founded</span>
            </div>
            <div style={storyStatStyles}>
              <span style={storyStatNumStyles}>500+</span>
              <span style={storyStatLabelStyles}>Alumni</span>
            </div>
            <div style={storyStatStyles}>
              <span style={storyStatNumStyles}>95%</span>
              <span style={storyStatLabelStyles}>Placement</span>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Join Our Mission</h2>
          <p style={ctaDescStyles}>
            Be part of a community that's democratizing AI education and creating opportunities 
            in Tier-2 cities. Start your AI journey today.
          </p>
          <div style={ctaBtnGroupStyles}>
            <a href="/admissions" style={ctaPrimaryStyles}>Apply Now →</a>
            <a href="/aboutus" style={ctaSecondaryStyles}>Learn More</a>
          </div>
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

const foundersSectionStyles = {
  padding: "40px 24px 60px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const founderCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "32px",
  marginBottom: "32px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const founderContentStyles = {
  display: "flex",
  gap: "32px",
  alignItems: "flex-start"
};

const founderAvatarStyles = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "rgba(0,212,168,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "2px solid rgba(0,212,168,0.2)"
};

const founderAvatarTextStyles = {
  fontSize: "48px"
};

const founderInfoStyles = {
  flex: 1
};

const founderNameStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "4px"
};

const founderRoleStyles = {
  fontSize: "16px",
  color: "#00d4a8",
  fontWeight: 500,
  marginBottom: "12px"
};

const founderBioStyles = {
  fontSize: "15px",
  color: "rgba(240,242,245,0.7)",
  lineHeight: "1.7",
  marginBottom: "16px"
};

const founderMetaStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "10px",
  padding: "12px 16px",
  marginBottom: "16px"
};

const metaItemStyles = {
  padding: "4px 0",
  fontSize: "14px"
};

const metaLabelStyles = {
  color: "rgba(240,242,245,0.4)",
  marginRight: "8px"
};

const metaValueStyles = {
  color: "rgba(240,242,245,0.7)"
};

const expertiseStyles = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "12px"
};

const expertiseTagStyles = {
  fontSize: "12px",
  padding: "4px 14px",
  borderRadius: "12px",
  backgroundColor: "rgba(0,212,168,0.1)",
  color: "#00d4a8",
  border: "1px solid rgba(0,212,168,0.15)"
};

const achievementsStyles = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "16px"
};

const achievementStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  padding: "4px 8px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "6px"
};

const socialLinkStyles = {
  display: "flex",
  gap: "12px"
};

const socialLink = {
  color: "rgba(240,242,245,0.4)",
  textDecoration: "none",
  fontSize: "14px",
  padding: "6px 16px",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s"
};

const valuesSectionStyles = {
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

const subHeadingStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.5)",
  textAlign: "center",
  marginBottom: "32px"
};

const valuesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const valueCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.06)"
};

const valueIconStyles = {
  fontSize: "36px",
  marginBottom: "12px"
};

const valueTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const valueDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6"
};

const storySectionStyles = {
  padding: "60px 24px",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"
};

const storyInnerStyles = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center"
};

const storyTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "16px"
};

const storyDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.8",
  marginBottom: "16px"
};

const storyStatsStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "24px",
  marginTop: "32px"
};

const storyStatStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const storyStatNumStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  color: "#00d4a8",
  display: "block"
};

const storyStatLabelStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.4)",
  display: "block",
  marginTop: "4px"
};

const ctaSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
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

const ctaBtnGroupStyles = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap"
};

const ctaPrimaryStyles = {
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

const ctaSecondaryStyles = {
  display: "inline-block",
  padding: "14px 36px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#f0f2f5",
  fontWeight: 500,
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.2s"
};

export default Founders;