import BlueprintPage from "../components/BlueprintPage";

export default function Insights() {
  return (
    <BlueprintPage
      eyebrow="Insights and knowledge hub"
      title="A thought leadership hub for founders, trends, reports, stories, and case studies."
      summary="The insights section positions Elevox founders as credible voices in applied AI, employability, and business transformation."
      primaryCta={["Read founder articles", "/insights/articles"]}
      secondaryCta={["Meet founders", "/founders"]}
      proof={["AI trends", "Founder articles", "Case studies"]}
      sections={[
        {
          eyebrow: "Content categories",
          title: "Build authority before selling programmes.",
          copy: "The hub should educate prospects and help search engines understand Elevox as an applied AI authority.",
          items: [
            { icon: "chart", label: "Trends", title: "AI Trends", copy: "Market shifts, tools, job changes, and AI adoption patterns." },
            { icon: "book", label: "Reports", title: "Industry Reports", copy: "Deeper explainers around sectors, skills, and workforce transformation." },
            { icon: "users", label: "Founders", title: "Founder Articles", copy: "Operator perspectives that build credibility and trust." },
            { icon: "graduation", label: "Students", title: "Student Success Stories", copy: "Learner journeys from programme to portfolio and career confidence." },
            { icon: "briefcase", label: "Business", title: "Case Studies", copy: "Examples of transformation, training, and applied AI outcomes." },
            { icon: "play", label: "Media", title: "Webinars and podcasts", copy: "Recordings, conversations, and expert sessions for ongoing learning." },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Content CTA",
        title: "Use insight to build trust before the first counselling call.",
        copy: "The knowledge hub can grow into one of Elevox's strongest authority channels.",
        label: "Explore programmes",
        to: "/programmes",
      }}
    />
  );
}
