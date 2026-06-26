// pages/NotFound.jsx
const NotFound = () => {
  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <div style={codeStyles}>404</div>
        <h1 style={titleStyles}>Page Not Found</h1>
        <p style={descStyles}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p style={subDescStyles}>
          Let's get you back on track.
        </p>
        <div style={btnGroupStyles}>
          <a href="/" style={primaryBtnStyles}>Go Home →</a>
          <a href="/programmes" style={secondaryBtnStyles}>Browse Programs</a>
        </div>
        <div style={helpStyles}>
          <p style={helpTextStyles}>Need help? <a href="/contact" style={helpLinkStyles}>Contact our support team</a></p>
        </div>
      </div>
    </div>
  );
};

const containerStyles = {
  minHeight: "100vh",
  backgroundColor: "#08090d",
  paddingTop: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const contentStyles = {
  textAlign: "center",
  padding: "40px 24px",
  maxWidth: "600px"
};

const codeStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(6rem, 15vw, 10rem)",
  fontWeight: 700,
  color: "#00d4a8",
  opacity: 0.2,
  lineHeight: "1",
  marginBottom: "16px"
};

const titleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(1.8rem, 4vw, 3rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  marginBottom: "16px"
};

const descStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "8px"
};

const subDescStyles = {
  fontSize: "15px",
  color: "rgba(240,242,245,0.4)",
  marginBottom: "32px"
};

const btnGroupStyles = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "32px"
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

const helpStyles = {
  borderTop: "1px solid rgba(255,255,255,0.06)",
  paddingTop: "24px"
};

const helpTextStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.4)"
};

const helpLinkStyles = {
  color: "#00d4a8",
  textDecoration: "none"
};

export default NotFound;