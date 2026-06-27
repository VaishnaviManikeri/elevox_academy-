import BlueprintPage from "../components/BlueprintPage";

export default function About() {
  return (
    <BlueprintPage
      eyebrow="About Elevox"
      title="The academy built to turn intelligence into employability."
      summary="Elevox is not a traditional about-us story. It is the response to a clear market gap: AI is becoming a business skill, but practical AI infrastructure is still missing for many students, professionals, and Tier-2 cities."
      primaryCta={["Explore programmes", "/programmes"]}
      secondaryCta={["Meet leadership", "/leadership"]}
      proof={["Why Elevox was created", "AI skills gap in India", "Tier-2 AI infrastructure"]}
      sections={[
        {
          eyebrow: "Origin",
          title: "Why Elevox was created",
          copy: "Most training institutes sell courses. Elevox was created to build AI-ready professionals who can show proof of capability.",
          items: [
            {
              icon: "target",
              label: "Problem",
              title: "Learning is disconnected from employability.",
              copy: "Students and professionals often collect certificates without building role-ready proof, portfolios, or practical fluency.",
              points: ["Outcome-first curriculum", "Project-led learning", "Career and business application"],
            },
            {
              icon: "chart",
              label: "Market gap",
              title: "AI demand is moving faster than education.",
              copy: "Companies need people who can apply AI inside business workflows, not only understand tools at a surface level.",
              points: ["AI as a business skill", "Workflow transformation", "Industry-relevant projects"],
            },
            {
              icon: "map",
              label: "Nagpur and beyond",
              title: "Tier-2 cities need serious AI infrastructure.",
              copy: "Elevox brings premium AI learning, founder-led credibility, and career pathways closer to emerging talent markets.",
              points: ["Campus partnerships", "Local access", "National ambition"],
            },
          ],
        },
        {
          eyebrow: "Identity",
          title: "The meaning behind Elevox",
          copy: "Elevox combines the idea of elevating human capability with voice, purpose, and intelligence.",
          tone: "dark",
          items: [
            {
              icon: "spark",
              label: "Elevate",
              title: "Raise capability, not just confidence.",
              copy: "The goal is to help learners become credible in the market through visible work.",
            },
            {
              icon: "users",
              label: "Vox",
              title: "Give talent a stronger voice.",
              copy: "Elevox helps students, professionals, and teams communicate what they can build with AI.",
            },
            {
              icon: "badge",
              label: "Purpose",
              title: "Where Intelligence Meets Purpose.",
              copy: "AI education should serve careers, organisations, communities, and meaningful transformation.",
            },
          ],
        },
        {
          eyebrow: "Difference",
          title: "What makes Elevox different",
          copy: "The brand must feel like a technology company with founder-led trust, not another coaching institute.",
          items: [
            {
              icon: "briefcase",
              label: "Industry first",
              title: "Built by operators, not only trainers.",
              copy: "Founder experience and applied industry context shape the learning journey before a course is sold.",
            },
            {
              icon: "network",
              label: "Transformation",
              title: "Courses become pathways.",
              copy: "Programmes connect skill diagnosis, tools, projects, portfolio, interviews, and adoption support.",
            },
            {
              icon: "graduation",
              label: "Trust",
              title: "Premium but practical.",
              copy: "The experience is futuristic, but the promise stays grounded: build AI-ready professionals.",
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Next step",
        title: "See how the Elevox philosophy becomes a learning pathway.",
        copy: "Explore the programme hub and choose a track based on career, role, or organisation need.",
        label: "View programme hub",
        to: "/programmes",
      }}
    />
  );
}
