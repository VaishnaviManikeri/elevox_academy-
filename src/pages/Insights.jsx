// pages/Insights.jsx
const Insights = () => {
  const articles = [
    {
      title: "The AI Skills Gap: Why Tier-2 Cities Are the Next Frontier",
      category: "Trends",
      readTime: "8 min read",
      excerpt: "As AI talent becomes more valuable, Tier-2 cities are emerging as untapped sources of potential.",
    },
    {
      title: "Building AI Systems That Actually Work",
      category: "Founder Articles",
      readTime: "12 min read",
      excerpt: "Lessons from building production AI systems at scale, and why most projects fail.",
    },
    {
      title: "From Classroom to Career: Student Success Stories",
      category: "Student Stories",
      readTime: "6 min read",
      excerpt: "How Elevox graduates are transforming their careers and making an impact in AI.",
    },
    {
      title: "AI Implementation in Manufacturing: A Case Study",
      category: "Case Studies",
      readTime: "10 min read",
      excerpt: "Real-world results from implementing AI in a manufacturing environment.",
    },
  ];

  return (
    <div style={containerStyles}>
      <section style={sectionStyles}>
        <h1 style={pageTitleStyles}>Insights</h1>
        <p style={pageSubtitleStyles}>
          Thought leadership, trends, and stories from the world of AI.
        </p>
      </section>

      <section style={gridStyles}>
        {articles.map((article, i) => (
          <div key={i} style={cardStyles}>
            <span style={categoryStyles}>{article.category}</span>
            <h3 style={titleStyles}>{article.title}</h3>
            <p style={excerptStyles}>{article.excerpt}</p>
            <div style={footerStyles}>
              <span style={readTimeStyles}>{article.readTime}</span>
              <a href="#" style={readMoreStyles}>Read More →</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const containerStyles = {
  minHeight: "100vh",
  backgroundColor: "#08090d",
  paddingTop: "72px",
};

const sectionStyles = {
  padding: "60px 24px 40px",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const pageTitleStyles = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 700,
  color: "#f0f2f5",
  marginBottom: "16px",
};

const pageSubtitleStyles = {
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  color: "rgba(240,242,245,0.6)",
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "32px",
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 24px 80px",
};

const cardStyles = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.06)",
};

const categoryStyles = {
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#00d4a8",
  marginBottom: "12px",
  display: "block",
};

const titleStyles = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#f0f2f5",
  marginBottom: "12px",
  lineHeight: "1.3",
};

const excerptStyles = {
  fontSize: "14px",
  color: "rgba(240,242,245,0.6)",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const footerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const readTimeStyles = {
  fontSize: "13px",
  color: "rgba(240,242,245,0.3)",
};

const readMoreStyles = {
  color: "#00d4a8",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 500,
};

export default Insights;