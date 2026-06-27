// components/Footer.jsx
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    // Navigate to the path
    navigate(path);
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={gridStyles}>
          <div style={colStyles}>
            <h3 style={headingStyles}>Elevox AI Academy</h3>
            <p style={descStyles}>
              Empowering the next generation of AI leaders in Tier-2 cities.
              Where intelligence meets purpose.
            </p>
            <div style={socialStyles}>
              <a href="#" style={socialLinkStyles}>LinkedIn</a>
              <a href="#" style={socialLinkStyles}>Twitter</a>
              <a href="#" style={socialLinkStyles}>YouTube</a>
              <a href="#" style={socialLinkStyles}>Instagram</a>
            </div>
          </div>
          <div style={colStyles}>
            <h4 style={subHeadingStyles}>Programmes</h4>
            <span 
              onClick={() => handleLinkClick("/programmes/foundations")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Foundations
            </span>
            <span 
              onClick={() => handleLinkClick("/programmes/marketing")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              AI for Marketing
            </span>
            <span 
              onClick={() => handleLinkClick("/programmes/hr")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              AI for HR
            </span>
            <span 
              onClick={() => handleLinkClick("/programmes/upskilling")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Professional Upskilling
            </span>
          </div>
          <div style={colStyles}>
            <h4 style={subHeadingStyles}>Company</h4>
            <span 
              onClick={() => handleLinkClick("/aboutus")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              About Us
            </span>
            <span 
              onClick={() => handleLinkClick("/leadership")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Leadership
            </span>
            <span 
              onClick={() => handleLinkClick("/contact")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Contact
            </span>
            <span 
              onClick={() => handleLinkClick("/career")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Careers
            </span>
          </div>
          <div style={colStyles}>
            <h4 style={subHeadingStyles}>Support</h4>
            <span 
              onClick={() => handleLinkClick("/admissions")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Admissions
            </span>
            <span 
              onClick={() => handleLinkClick("/workshops")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Workshops
            </span>
            <span 
              onClick={() => handleLinkClick("/insights")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Insights
            </span>
            <span 
              onClick={() => handleLinkClick("/tour")} 
              style={{...linkStyles, cursor: "pointer"}}
            >
              Academy Tour
            </span>
          </div>
        </div>
        <div style={bottomStyles}>
          <p style={copyStyles}>© 2026 Elevox AI Academy. All rights reserved.</p>
          <div style={legalStyles}>
            <span 
              onClick={() => handleLinkClick("/privacy")} 
              style={{...legalLinkStyles, cursor: "pointer"}}
            >
              Privacy Policy
            </span>
            <span 
              onClick={() => handleLinkClick("/terms")} 
              style={{...legalLinkStyles, cursor: "pointer"}}
            >
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: "#08090d",
  color: "#f0f2f5",
  padding: "60px 0 30px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  marginTop: "auto",
};

const containerStyles = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 24px",
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "40px",
  marginBottom: "40px",
};

const colStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const headingStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "8px",
  color: "#f0f2f5",
};

const descStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  maxWidth: "300px",
};

const subHeadingStyles = {
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#00d4a8",
  marginBottom: "4px",
};

const linkStyles = {
  color: "rgba(240,242,245,0.6)",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.2s",
};

const socialStyles = {
  display: "flex",
  gap: "16px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const socialLinkStyles = {
  color: "rgba(240,242,245,0.5)",
  textDecoration: "none",
  fontSize: "13px",
  transition: "color 0.2s",
};

const bottomStyles = {
  borderTop: "1px solid rgba(255,255,255,0.06)",
  paddingTop: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
};

const copyStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.4)",
};

const legalStyles = {
  display: "flex",
  gap: "20px",
};

const legalLinkStyles = {
  color: "rgba(240,242,245,0.4)",
  textDecoration: "none",
  fontSize: "13px",
  transition: "color 0.2s",
};

export default Footer;