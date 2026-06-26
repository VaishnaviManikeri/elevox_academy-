// pages/Contact.jsx
const Contact = () => {
  const contactInfo = [
    { icon: "📍", label: "Address", value: "Nagpur, Maharashtra, India" },
    { icon: "📞", label: "Phone", value: "+91 98765 43210" },
    { icon: "📧", label: "Email", value: "info@elevox.ai" },
    { icon: "🕐", label: "Working Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM IST" }
  ];

  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroInnerStyles}>
          <h1 style={titleStyles}>Get in <span style={highlightStyles}>Touch</span></h1>
          <p style={subtitleStyles}>
            Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section style={contactSectionStyles}>
        <div style={contactGridStyles}>
          <div style={infoColumnStyles}>
            <h2 style={infoTitleStyles}>Contact Information</h2>
            <p style={infoDescStyles}>
              Our team is ready to assist you with any questions about our programs, admissions, or partnerships.
            </p>
            <div style={infoListStyles}>
              {contactInfo.map((item, i) => (
                <div key={i} style={infoItemStyles}>
                  <span style={infoIconStyles}>{item.icon}</span>
                  <div>
                    <div style={infoLabelStyles}>{item.label}</div>
                    <div style={infoValueStyles}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={socialStyles}>
              <a href="#" style={socialLinkStyles}>LinkedIn</a>
              <a href="#" style={socialLinkStyles}>Twitter</a>
              <a href="#" style={socialLinkStyles}>YouTube</a>
              <a href="#" style={socialLinkStyles}>Instagram</a>
            </div>
          </div>

          <div style={formColumnStyles}>
            <h2 style={formTitleStyles}>Send a Message</h2>
            <form style={formStyles}>
              <div style={formRowStyles}>
                <input type="text" placeholder="Full Name" style={inputStyles} />
                <input type="email" placeholder="Email Address" style={inputStyles} />
              </div>
              <input type="text" placeholder="Subject" style={inputFullStyles} />
              <select style={inputFullStyles}>
                <option value="">Select a Topic</option>
                <option value="admissions">Admissions</option>
                <option value="programs">Programs</option>
                <option value="partnerships">Partnerships</option>
                <option value="corporate">Corporate Training</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea placeholder="Your Message" rows="5" style={textareaStyles}></textarea>
              <button type="submit" style={submitBtnStyles}>Send Message →</button>
            </form>
          </div>
        </div>
      </section>

      <section style={mapSectionStyles}>
        <div style={mapPlaceholderStyles}>
          <div style={mapContentStyles}>
            <div style={mapIconStyles}>📍</div>
            <h3 style={mapTitleStyles}>Find Us in Nagpur</h3>
            <p style={mapDescStyles}>Visit our campus to experience Elevox Academy in person.</p>
            <a href="#" style={mapBtnStyles}>Get Directions →</a>
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

const contactSectionStyles = {
  padding: "40px 24px 60px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const contactGridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1.5fr",
  gap: "48px"
};

const infoColumnStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

const infoTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "24px",
  color: "#f0f2f5"
};

const infoDescStyles = {
  fontSize: "15px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6"
};

const infoListStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const infoItemStyles = {
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  padding: "12px 16px",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const infoIconStyles = {
  fontSize: "20px"
};

const infoLabelStyles = {
  fontSize: "12px",
  fontWeight: 600,
  color: "rgba(240,242,245,0.4)",
  textTransform: "uppercase",
  letterSpacing: "0.5px"
};

const infoValueStyles = {
  fontSize: "15px",
  color: "#f0f2f5"
};

const socialStyles = {
  display: "flex",
  gap: "12px",
  marginTop: "8px",
  flexWrap: "wrap"
};

const socialLinkStyles = {
  color: "rgba(240,242,245,0.4)",
  textDecoration: "none",
  fontSize: "14px",
  padding: "6px 16px",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.06)",
  transition: "all 0.2s"
};

const formColumnStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "32px",
  border: "1px solid rgba(255,255,255,0.06)"
};

const formTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "20px",
  color: "#f0f2f5",
  marginBottom: "20px"
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

const formRowStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px"
};

const inputStyles = {
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "#f0f2f5",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  width: "100%"
};

const inputFullStyles = {
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "#f0f2f5",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  width: "100%"
};

const textareaStyles = {
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "#f0f2f5",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif",
  width: "100%",
  resize: "vertical"
};

const submitBtnStyles = {
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

const mapSectionStyles = {
  padding: "0 24px 60px",
  maxWidth: "1024px",
  margin: "0 auto"
};

const mapPlaceholderStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.06)",
  minHeight: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const mapContentStyles = {
  textAlign: "center"
};

const mapIconStyles = {
  fontSize: "48px",
  marginBottom: "12px"
};

const mapTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "20px",
  color: "#f0f2f5",
  marginBottom: "8px"
};

const mapDescStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.5)",
  marginBottom: "16px"
};

const mapBtnStyles = {
  display: "inline-block",
  padding: "10px 24px",
  borderRadius: "8px",
  backgroundColor: "rgba(0,212,168,0.1)",
  color: "#00d4a8",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  transition: "all 0.2s"
};

export default Contact;