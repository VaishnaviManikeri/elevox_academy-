// pages/Founders.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Founders = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const founders = [
    {
      name: "Dr. Ananya Sharma",
      role: "CEO & Co-Founder",
      image: "👩‍🔬",
      professionalJourney:
        "Started as a research intern at Google Brain, worked on large language models for 6 years before leading the AI research division. Recognized globally for contributions to transformer architectures.",
      industryExpertise: [
        "Natural Language Processing",
        "Deep Learning",
        "AI Strategy",
        "Transformer Models",
      ],
      achievements: [
        "Top 100 Women in AI 2025",
        "Google Research Excellence Award",
        "3 Patents in AI",
        "Published 25+ Research Papers",
      ],
      thoughtLeadership:
        "Regular speaker at NeurIPS, ICML, and ICLR. Authored 'Transformers Unlocked' - a widely referenced book on NLP architectures.",
      videoIntro: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoCourses:
        "https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",
      linkedin: "https://linkedin.com/in/ananyasharma",
      mediaAppearances: [
        "Forbes 30 Under 30 Asia 2024",
        "TEDx Talk - 'Democratizing AI'",
        "CNN Tech Innovators",
        "Wired AI Summit Panelist",
      ],
      areasOfSpecialization: [
        "LLM Architecture",
        "AI Ethics",
        "Transformers",
        "Generative AI",
      ],
    },
    {
      name: "Vikram Mehta",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      professionalJourney:
        "15+ years in software engineering, starting at Microsoft Research, then Amazon AI, building and deploying production-scale ML systems used by millions.",
      industryExpertise: [
        "MLOps",
        "Computer Vision",
        "Cloud AI Architecture",
        "Scalable Systems",
      ],
      achievements: [
        "AWS AI Hero",
        "Microsoft Gold Star Award",
        "Tech Speaker at 50+ Conferences",
        "3 Open Source AI Projects",
      ],
      thoughtLeadership:
        "Keynote speaker at KubeCon, AWS re:Invent, and PyCon. Known for bridging the gap between research and production AI.",
      videoIntro: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoCourses:
        "https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",
      linkedin: "https://linkedin.com/in/vikrammehta",
      mediaAppearances: [
        "InfoQ Tech Interview",
        "O'Reilly Radar",
        "TechCrunch AI Feature",
        "CIO Magazine Interview",
      ],
      areasOfSpecialization: [
        "ML Infrastructure",
        "Cloud Architecture",
        "Computer Vision",
        "Edge AI",
      ],
    },
    {
      name: "Priya Patel",
      role: "Head of Education & Co-Founder",
      image: "👩‍🏫",
      professionalJourney:
        "Former Dean at IIT Delhi, transformed the computer science curriculum to focus on practical AI. Led multiple government initiatives for AI education in India.",
      industryExpertise: [
        "Curriculum Design",
        "Pedagogy",
        "Student Success",
        "Education Technology",
      ],
      achievements: [
        "Education Innovation Award 2024",
        "Published 5 Textbooks",
        "3000+ Students Mentored",
        "UNESCO AI Education Consultant",
      ],
      thoughtLeadership:
        "Regular contributor to education policy discussions. Authored 'Future-Proof Learning' - a framework for AI education.",
      videoIntro: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoCourses:
        "https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",
      linkedin: "https://linkedin.com/in/priyapatel",
      mediaAppearances: [
        "BBC Education Special",
        "Times of India Education Summit",
        "Harvard EdCast Interview",
        "The Hindu Education Feature",
      ],
      areasOfSpecialization: [
        "AI Curriculum Design",
        "Pedagogical Innovation",
        "EdTech Strategy",
        "Student Mentorship",
      ],
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Purpose-Driven",
      description:
        "We believe AI education should serve a purpose - creating opportunities and solving real problems.",
    },
    {
      icon: "🤝",
      title: "Industry-First",
      description:
        "Our curriculum is built by industry veterans who understand what it takes to succeed in AI.",
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description:
        "We foster a culture of continuous learning and encourage our students to push boundaries.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We embrace innovation in everything we do - from teaching methods to technology integration.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,212,168,0.1)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div style={containerStyles}>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={heroStyles}
      >
        <div style={heroInnerStyles}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            style={titleStyles}
          >
            Meet Our <span style={highlightStyles}>Founders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={subtitleStyles}
          >
            Industry veterans with decades of combined experience in AI,
            research, and education. Real experts who've built real AI systems.
          </motion.p>
        </div>
      </motion.section>

      {/* Founders Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        style={foundersSectionStyles}
      >
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            style={founderCardStyles}
          >
            <div style={founderContentStyles}>
              <motion.div
                variants={imageVariants}
                style={founderAvatarStyles}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span style={founderAvatarTextStyles}>{founder.image}</span>
              </motion.div>
              <div style={founderInfoStyles}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={founderNameStyles}
                >
                  {founder.name}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={founderRoleStyles}
                >
                  {founder.role}
                </motion.div>

                {/* Professional Journey */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Professional Journey</h3>
                  <p style={sectionTextStyles}>{founder.professionalJourney}</p>
                </motion.div>

                {/* Industry Expertise */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Industry Expertise</h3>
                  <div style={expertiseStyles}>
                    {founder.industryExpertise.map((skill, j) => (
                      <motion.span
                        key={j}
                        style={expertiseTagStyles}
                        whileHover={{ scale: 1.1, backgroundColor: "#00d4a8" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Achievements</h3>
                  <div style={achievementsStyles}>
                    {founder.achievements.map((achievement, j) => (
                      <motion.span
                        key={j}
                        style={achievementStyles}
                        whileHover={{ scale: 1.05 }}
                      >
                        🏆 {achievement}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Thought Leadership */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Thought Leadership</h3>
                  <p style={sectionTextStyles}>{founder.thoughtLeadership}</p>
                </motion.div>

                {/* Video Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Video Introduction</h3>
                  <div style={videoContainerStyles}>
                    <iframe
                      width="100%"
                      height="200"
                      src={founder.videoIntro}
                      title={`${founder.name} Introduction`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={videoFrameStyles}
                    ></iframe>
                  </div>
                </motion.div>

                {/* Video about Courses */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Course Overview ({founder.areasOfSpecialization[0]})</h3>
                  <div style={videoContainerStyles}>
                    <iframe
                      width="100%"
                      height="200"
                      src={founder.videoCourses}
                      title={`${founder.name} Course Details`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={videoFrameStyles}
                    ></iframe>
                  </div>
                </motion.div>

                {/* Areas of Specialization */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Areas of Specialization</h3>
                  <div style={specializationStyles}>
                    {founder.areasOfSpecialization.map((area, j) => (
                      <motion.span
                        key={j}
                        style={specializationTagStyles}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                      >
                        {area}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Media Appearances */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  style={sectionBlockStyles}
                >
                  <h3 style={sectionTitleStyles}>Media Appearances</h3>
                  <div style={mediaStyles}>
                    {founder.mediaAppearances.map((media, j) => (
                      <motion.span
                        key={j}
                        style={mediaTagStyles}
                        whileHover={{ scale: 1.05 }}
                      >
                        📺 {media}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* LinkedIn Integration */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  style={socialLinkStyles}
                >
                  <motion.a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialLink}
                    whileHover={{ scale: 1.05, backgroundColor: "#0077b5" }}
                  >
                    💼 Connect on LinkedIn
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
        style={valuesSectionStyles}
      >
        <motion.h2 variants={fadeInUp} style={headingStyles}>
          Our Core Values
        </motion.h2>
        <motion.p variants={fadeInUp} style={subHeadingStyles}>
          The principles that guide everything we do
        </motion.p>
        <div style={valuesGridStyles}>
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              style={valueCardStyles}
            >
              <motion.div
                style={valueIconStyles}
                whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
              >
                {value.icon}
              </motion.div>
              <h3 style={valueTitleStyles}>{value.title}</h3>
              <p style={valueDescStyles}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
        style={storySectionStyles}
      >
        <div style={storyInnerStyles}>
          <motion.h2 variants={fadeInUp} style={storyTitleStyles}>
            Our Story
          </motion.h2>
          <motion.p variants={fadeInUp} style={storyDescStyles}>
            Elevox AI Academy was born from a simple belief: exceptional AI
            talent exists everywhere, but opportunity doesn't. We're bridging
            that gap by bringing world-class AI education to Tier-2 cities.
          </motion.p>
          <motion.p variants={fadeInUp} style={storyDescStyles}>
            Founded in 2024, we've grown from a small cohort of 20 students to
            over 500 alumni, with a 95% placement rate. Our success comes from
            our commitment to practical, industry-aligned education that
            transforms careers.
          </motion.p>
          <motion.div
            variants={staggerChildren}
            style={storyStatsStyles}
          >
            {[
              { num: "2024", label: "Founded" },
              { num: "500+", label: "Alumni" },
              { num: "95%", label: "Placement" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                style={storyStatStyles}
              >
                <motion.span
                  style={storyStatNumStyles}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  {stat.num}
                </motion.span>
                <span style={storyStatLabelStyles}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
        style={ctaSectionStyles}
      >
        <div style={ctaInnerStyles}>
          <motion.h2 variants={fadeInUp} style={ctaTitleStyles}>
            Join Our Mission
          </motion.h2>
          <motion.p variants={fadeInUp} style={ctaDescStyles}>
            Be part of a community that's democratizing AI education and
            creating opportunities in Tier-2 cities. Start your AI journey
            today.
          </motion.p>
          <motion.div
            variants={staggerChildren}
            style={ctaBtnGroupStyles}
          >
            <motion.a
              href="/admissions"
              style={ctaPrimaryStyles}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,212,168,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now →
            </motion.a>
            <motion.a
              href="/aboutus"
              style={ctaSecondaryStyles}
              whileHover={{ scale: 1.05, borderColor: "#00d4a8" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Animation Elements */}
      <motion.div
        style={floatingCircle1}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={floatingCircle2}
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={floatingDot}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const containerStyles = {
  minHeight: "100vh",
  backgroundColor: "#08090d",
  paddingTop: "72px",
  position: "relative",
  overflow: "hidden",
};

const heroStyles = {
  padding: "60px 24px",
  textAlign: "center",
  background: "linear-gradient(180deg, rgba(0,212,168,0.05) 0%, transparent 100%)",
  position: "relative",
};

const heroInnerStyles = {
  maxWidth: "800px",
  margin: "0 auto",
};

const titleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  marginBottom: "16px",
  lineHeight: "1.1",
};

const highlightStyles = {
  color: "#00d4a8",
  background: "linear-gradient(135deg, #00d4a8, #00a884)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6",
};

const foundersSectionStyles = {
  padding: "40px 24px 60px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const founderCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "20px",
  padding: "40px",
  marginBottom: "40px",
  border: "1px solid rgba(255,255,255,0.06)",
  backdropFilter: "blur(10px)",
  position: "relative",
  overflow: "hidden",
};

const founderContentStyles = {
  display: "flex",
  gap: "40px",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

const founderAvatarStyles = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(0,212,168,0.1), rgba(0,212,168,0.2))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "3px solid rgba(0,212,168,0.3)",
  boxShadow: "0 10px 40px rgba(0,212,168,0.1)",
  position: "relative",
};

const founderAvatarTextStyles = {
  fontSize: "56px",
};

const founderInfoStyles = {
  flex: 1,
  minWidth: "280px",
};

const founderNameStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "4px",
};

const founderRoleStyles = {
  fontSize: "16px",
  color: "#00d4a8",
  fontWeight: 500,
  marginBottom: "20px",
};

const sectionBlockStyles = {
  marginBottom: "20px",
};

const sectionTitleStyles = {
  fontSize: "13px",
  fontWeight: 600,
  color: "rgba(240,242,245,0.4)",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "8px",
};

const sectionTextStyles = {
  fontSize: "15px",
  color: "rgba(240,242,245,0.7)",
  lineHeight: "1.7",
};

const expertiseStyles = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const expertiseTagStyles = {
  fontSize: "12px",
  padding: "6px 16px",
  borderRadius: "12px",
  backgroundColor: "rgba(0,212,168,0.1)",
  color: "#00d4a8",
  border: "1px solid rgba(0,212,168,0.15)",
  cursor: "default",
  transition: "all 0.3s",
};

const achievementsStyles = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const achievementStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.6)",
  padding: "6px 14px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.05)",
  cursor: "default",
  transition: "all 0.3s",
};

const videoContainerStyles = {
  borderRadius: "12px",
  overflow: "hidden",
  maxWidth: "560px",
  marginTop: "8px",
};

const videoFrameStyles = {
  borderRadius: "12px",
};

const specializationStyles = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const specializationTagStyles = {
  fontSize: "14px",
  padding: "6px 18px",
  borderRadius: "20px",
  backgroundColor: "rgba(0,212,168,0.08)",
  color: "#00d4a8",
  border: "1px solid rgba(0,212,168,0.2)",
  fontWeight: 500,
  cursor: "default",
  transition: "all 0.3s",
};

const mediaStyles = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const mediaTagStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.5)",
  padding: "4px 12px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.05)",
  cursor: "default",
  transition: "all 0.3s",
};

const socialLinkStyles = {
  marginTop: "20px",
};

const socialLink = {
  display: "inline-block",
  padding: "10px 24px",
  borderRadius: "8px",
  backgroundColor: "rgba(0,212,168,0.05)",
  color: "#f0f2f5",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  border: "1px solid rgba(0,212,168,0.1)",
  transition: "all 0.3s",
};

const valuesSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto",
};

const headingStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "8px",
  textAlign: "center",
};

const subHeadingStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.5)",
  textAlign: "center",
  marginBottom: "40px",
};

const valuesGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "24px",
};

const valueCardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "32px",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.3s",
};

const valueIconStyles = {
  fontSize: "40px",
  marginBottom: "12px",
};

const valueTitleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "8px",
};

const valueDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
};

const storySectionStyles = {
  padding: "60px 24px",
  background: "linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.02) 100%)",
};

const storyInnerStyles = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const storyTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "16px",
};

const storyDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.8",
  marginBottom: "16px",
};

const storyStatsStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "24px",
  marginTop: "32px",
};

const storyStatStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "12px",
  padding: "20px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.3s",
};

const storyStatNumStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "32px",
  fontWeight: 700,
  color: "#00d4a8",
  display: "block",
};

const storyStatLabelStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.4)",
  display: "block",
  marginTop: "4px",
};

const ctaSectionStyles = {
  padding: "60px 24px",
  maxWidth: "1024px",
  margin: "0 auto",
};

const ctaInnerStyles = {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center",
};

const ctaTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  color: "#f0f2f5",
  marginBottom: "12px",
};

const ctaDescStyles = {
  fontSize: "16px",
  color: "rgba(240,242,245,0.6)",
  marginBottom: "32px",
};

const ctaBtnGroupStyles = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
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
  transition: "all 0.3s",
  cursor: "pointer",
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
  transition: "all 0.3s",
  cursor: "pointer",
};

// Floating Animation Elements
const floatingCircle1 = {
  position: "fixed",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(0,212,168,0.05) 0%, transparent 70%)",
  top: "10%",
  right: "-100px",
  pointerEvents: "none",
  zIndex: 0,
};

const floatingCircle2 = {
  position: "fixed",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(0,212,168,0.03) 0%, transparent 70%)",
  bottom: "20%",
  left: "-50px",
  pointerEvents: "none",
  zIndex: 0,
};

const floatingDot = {
  position: "fixed",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#00d4a8",
  top: "50%",
  right: "10%",
  pointerEvents: "none",
  zIndex: 0,
  opacity: 0.3,
};

export default Founders;