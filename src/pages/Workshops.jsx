import BlueprintPage from "../components/BlueprintPage";

export default function Workshops() {
  return (
    <BlueprintPage
      eyebrow="Workshops and events"
      title="Lead-generation sessions that let people experience Elevox before a full programme."
      summary="Workshops, masterclasses, bootcamps, webinars, and open house events give students, professionals, colleges, and teams a practical first step into AI."
      primaryCta={["Register interest", "/contact"]}
      secondaryCta={["Custom workshop", "/corporate/workshops"]}
      proof={["Masterclasses", "Bootcamps", "Open house events"]}
      sections={[
        {
          eyebrow: "Event types",
          title: "Short formats for fast trust building.",
          copy: "Each event should feel hands-on and outcome-focused, not like a generic lecture.",
          items: [
            {
              icon: "spark",
              label: "Students",
              title: "AI Career Launchpad",
              copy: "A practical introduction to AI careers, portfolios, and employability signals.",
              points: ["Career roadmap", "Project ideas", "Q&A"],
            },
            {
              icon: "briefcase",
              label: "Professionals",
              title: "AI for Managers",
              copy: "A business-focused session on AI workflows, decision support, and productivity.",
              points: ["Workflow examples", "Prompt systems", "Risk awareness"],
            },
            {
              icon: "book",
              label: "Builders",
              title: "Build With Agents",
              copy: "A hands-on workshop for developers and product builders exploring AI agents.",
              points: ["Agent concepts", "Prototype lab", "Use-case design"],
            },
            {
              icon: "building",
              label: "Campuses",
              title: "AI Awareness Session",
              copy: "A high-impact campus session for colleges that want to introduce AI at scale.",
              points: ["Industry context", "Skill roadmap", "Placement relevance"],
            },
            {
              icon: "users",
              label: "Teams",
              title: "Corporate AI Sprint",
              copy: "A custom workshop for teams to identify and prototype AI workflow opportunities.",
              points: ["Readiness scan", "Workflow mapping", "Pilot ideas"],
            },
            {
              icon: "play",
              label: "Open house",
              title: "Academy preview",
              copy: "A visit or live preview for prospects to meet mentors and understand the pathway.",
              points: ["Tour", "Founder talk", "Admissions guidance"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Workshop CTA",
        title: "Use a workshop as the first step into the Elevox ecosystem.",
        copy: "Register for an upcoming event or request a custom session for your campus or organisation.",
        label: "Register interest",
        to: "/contact",
      }}
    />
  );
}
