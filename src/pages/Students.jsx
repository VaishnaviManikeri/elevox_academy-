// pages/Students.jsx
const Students = () => {
  const features = [
    {
      icon: "📚",
      title: "All Programmes",
      description: "Browse programmes by domain and level. Find the perfect fit for your career goals.",
      link: "/programmes",
      linkText: "View All →"
    },
    {
      icon: "📅",
      title: "Batch Calendar",
      description: "Check upcoming cohort dates and plan your learning journey.",
      link: "/admissions",
      linkText: "See Cohorts →"
    },
    {
      icon: "🎯",
      title: "Career Accelerator",
      description: "Resume building, LinkedIn optimization, and interview preparation.",
      link: "/career",
      linkText: "Get Started →"
    },
    {
      icon: "💼",
      title: "Placement Outcomes",
      description: "See where our alumni are working and how Elevox changed their careers.",
      link: "/career/outcomes",
      linkText: "View Outcomes →"
    },
    {
      icon: "🏆",
      title: "Workshops & Events",
      description: "Masterclasses, bootcamps, and networking events to accelerate your learning.",
      link: "/workshops",
      linkText: "Explore Events →"
    },
    {
      icon: "🎓",
      title: "Student Success Stories",
      description: "Read inspiring stories from students who transformed their careers with Elevox.",
      link: "/insights/stories",
      linkText: "Read Stories →"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "AI Engineer at Google",
      quote: "Elevox gave me the skills and confidence to transition from a non-tech background to AI engineering.",
      image: "👨‍💻"
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Microsoft",
      quote: "The hands-on projects and industry mentorship at Elevox were game-changing for my career.",
      image: "👩‍💻"
    },
    {
      name: "Amit Kumar",
      role: "ML Engineer at Amazon",
      quote: "I went from knowing nothing about AI to building production-ready models in just 3 months.",
      image: "🧑‍💻"
    }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>For <span style={highlightStyles}>Students</span></h1>
          <p style={subtitleStyles}>
            Your journey to AI expertise starts here. Learn, build, and get placed in top companies.
          </p>
          <div style={ctaGroupStyles}>
            <a href="/programmes" style={primaryBtnStyles}>Explore Programmes →</a>
            <a href="/admissions" style={secondaryBtnStyles}>Apply Now</a>
          </div>
        </div>
      </section>

      <section style={statsSectionStyles}>
        <div style={statsGridStyles}>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>500+</div>
            <div style={statLabelStyles}>Students Trained</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>95%</div>
            <div style={statLabelStyles}>Placement Rate</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>₹12L</div>
            <div style={statLabelStyles}>Average Package</div>
          </div>
          <div style={statCardStyles}>
            <div style={statNumberStyles}>100+</div>
            <div style={statLabelStyles}>Hiring Partners</div>
          </div>
        </div>
      </section>

      <section style={featuresSectionStyles}>
        <h2 style={headingStyles}>Everything You Need to Succeed</h2>
        <p style={subHeadingStyles}>Comprehensive support for your AI learning journey</p>
        <div style={featuresGridStyles}>
          {features.map((feature, i) => (
            <div key={i} style={featureCardStyles}>
              <div style={featureIconStyles}>{feature.icon}</div>
              <h3 style={featureTitleStyles}>{feature.title}</h3>
              <p style={featureDescStyles}>{feature.description}</p>
              <a href={feature.link} style={featureLinkStyles}>{feature.linkText}</a>
            </div>
          ))}
        </div>
      </section>

      <section style={testimonialsSectionStyles}>
        <h2 style={headingStyles}>Student Success Stories</h2>
        <p style={subHeadingStyles}>Real stories from students who transformed their careers</p>
        <div style={testimonialsGridStyles}>
          {testimonials.map((testimonial, i) => (
            <div key={i} style={testimonialCardStyles}>
              <div style={testimonialAvatarStyles}>{testimonial.image}</div>
              <p style={testimonialQuoteStyles}>"{testimonial.quote}"</p>
              <div style={testimonialNameStyles}>{testimonial.name}</div>
              <div style={testimonialRoleStyles}>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaSectionStyles}>
        <div style={ctaInnerStyles}>
          <h2 style={ctaTitleStyles}>Ready to Start Your AI Journey?</h2>
          <p style={ctaDescStyles}>
            Join a cohort built around employability — not just learning. Your AI career starts here.
          </p>
          <div style={ctaBtnGroupStyles}>
            <a href="/admissions" style={ctaPrimaryStyles}>Apply Now →</a>
            <a href="/tour" style={ctaSecondaryStyles}>Take a Tour</a>
          </div>
        </div>
      </section>

      <section style={resourcesSectionStyles}>
        <div style={resourcesInnerStyles}>
          <h2 style={resourcesTitleStyles}>Student Resources</h2>
          <div style={resourcesGridStyles}>
            <div style={resourceCardStyles}>
              <span style={resourceIconStyles}>📖</span>
              <h4 style={resourceNameStyles}>Student Handbook</h4>
              <p style={resourceDescStyles}>Everything you need to know about your learning journey</p>
              <a href="#" style={resourceLinkStyles}>Download →</a>
            </div>
            <div style={resourceCardStyles}>
              <span style={resourceIconStyles}>💻</span>
              <h4 style={resourceNameStyles}>Learning Portal</h4>
              <p style={resourceDescStyles}>Access your courses, assignments, and learning materials</p>
              <a href="#" style={resourceLinkStyles}>Access Portal →</a>
            </div>
            <div style={resourceCardStyles}>
              <span style={resourceIconStyles}>🤝</span>
              <h4 style={resourceNameStyles}>Community Forum</h4>
              <p style={resourceDescStyles}>Connect with peers, ask questions, and collaborate</p>
              <a href="#" style={resourceLinkStyles}>Join Community →</a>
            </div>
            <div style={resourceCardStyles}>
              <span style={resourceIconStyles}>🎓</span>
              <h4 style={resourceNameStyles}>Alumni Network</h4>
              <p style={resourceDescStyles}>Connect with successful alumni for mentorship and opportunities</p>
              <a href="#" style={resourceLinkStyles}>Connect →</a>
            </div>
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
  margin: "0 auto 32px",
  lineHeight: "1.6"
};

const ctaGroupStyles = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap"
};

const primaryBtnStyles = {
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

const secondaryBtnStyles = {
  display: "inline-block",
  padding: "12px 32px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#f0f2f5",
  fontWeight: 500,
  textDecoration: "none",
  fontSize: "15px",
  transition: "all 0.2s"
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
  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
  fontWeight: 700,
  color: "#00d4a8",
  marginBottom: "4px"
};

const statLabelStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.5)"
};

const featuresSectionStyles = {
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

const featuresGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const featureCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s"
};

const featureIconStyles = {
  fontSize: "36px",
  marginBottom: "12px"
};

const featureTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px"
};

const featureDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "12px"
};

const featureLinkStyles = {
  color: "#00d4a8",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "14px"
};

const testimonialsSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const testimonialsGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const testimonialCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
  textAlign: "center"
};

const testimonialAvatarStyles = {
  fontSize: "48px",
  marginBottom: "12px"
};

const testimonialQuoteStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.7)",
  lineHeight: "1.6",
  marginBottom: "16px",
  fontStyle: "italic"
};

const testimonialNameStyles = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "4px"
};

const testimonialRoleStyles = {
  fontSize: "13px",
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

const resourcesSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const resourcesInnerStyles = {
  backgroundColor: "rgba(255,255,255,0.02)",
  borderRadius: "16px",
  padding: "40px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const resourcesTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
  color: "#f0f2f5",
  marginBottom: "24px",
  textAlign: "center"
};

const resourcesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const resourceCardStyles = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const resourceIconStyles = {
  fontSize: "28px",
  display: "block",
  marginBottom: "8px"
};

const resourceNameStyles = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "4px"
};

const resourceDescStyles = {
  fontSize: "12px",
  color: "rgba(240,242,245,0.4)",
  marginBottom: "8px"
};

const resourceLinkStyles = {
  color: "#00d4a8",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 500
};

export default Students;