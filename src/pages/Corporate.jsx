import BlueprintPage from "../components/BlueprintPage";

export default function Corporate() {
  return (
    <BlueprintPage
      eyebrow="Bring AI to your organisation"
      title="Workforce AI transformation for HR leaders, CIOs, CTOs, MSMEs, and enterprises."
      summary="Elevox helps organisations move from AI curiosity to adoption through readiness audits, leadership sessions, team upskilling, workshops, and transformation consulting."
      primaryCta={["Schedule consultation", "/contact"]}
      secondaryCta={["View workshops", "/workshops"]}
      proof={["AI readiness programmes", "Team upskilling", "Leadership AI sessions"]}
      sections={[
        {
          eyebrow: "Services",
          title: "Corporate solutions built around measurable adoption.",
          copy: "Every engagement starts with business context, team capability, and the workflows where AI can create leverage.",
          items: [
            {
              icon: "chart",
              label: "Audit",
              title: "AI Readiness Programme",
              copy: "Assess current team capability, identify priority workflows, and build a practical adoption roadmap.",
              points: ["Skills assessment", "Use-case mapping", "30/60/90 day adoption plan"],
            },
            {
              icon: "users",
              label: "Teams",
              title: "Corporate workshops",
              copy: "Short, intensive sessions designed around your department, tools, market, and operating model.",
              points: ["HR, sales, ops, finance, tech", "Hands-on exercises", "Custom examples"],
            },
            {
              icon: "briefcase",
              label: "Capability",
              title: "Team upskilling",
              copy: "Role-based cohort training that helps people apply AI inside real daily work.",
              points: ["Role pathways", "Workflow labs", "Mentor review"],
            },
            {
              icon: "target",
              label: "Leadership",
              title: "Leadership AI sessions",
              copy: "Strategic sessions for leaders who need to understand opportunity, risk, talent, and transformation.",
              points: ["AI strategy", "Risk and governance", "Change management"],
            },
            {
              icon: "network",
              label: "Consulting",
              title: "AI transformation consulting",
              copy: "Support for organisations that need a deeper implementation partner after training.",
              points: ["Roadmap", "Pilot design", "Measurement system"],
            },
            {
              icon: "badge",
              label: "Outcome",
              title: "Business impact reporting",
              copy: "Track progress beyond attendance through workflow adoption, productivity, and confidence signals.",
              points: ["Baseline and progress", "Manager feedback", "Use-case outcomes"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Corporate CTA",
        title: "Help your team become AI-ready before your market forces the change.",
        copy: "Book a conversation to map your workforce, workflows, and first AI adoption opportunities.",
        label: "Bring AI to your organisation",
        to: "/contact",
      }}
    />
  );
}
