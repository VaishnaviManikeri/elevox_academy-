import BlueprintPage from "../components/BlueprintPage";

export default function Colleges() {
  return (
    <BlueprintPage
      eyebrow="Bring AI to your college"
      title="Campus AI programmes for engineering colleges, universities, MBA institutes, and polytechnic colleges."
      summary="Elevox helps institutions make students more employable through AI awareness, workshops, faculty enablement, curriculum partnerships, and placement readiness."
      primaryCta={["Invite Elevox to your campus", "/contact"]}
      secondaryCta={["View student pathways", "/students"]}
      proof={["Campus workshops", "Faculty development", "Placement readiness"]}
      sections={[
        {
          eyebrow: "B2B2C model",
          title: "Turn AI from a guest lecture into a placement pipeline.",
          copy: "The college section is designed for decision-makers who need credible AI infrastructure without rebuilding everything from scratch.",
          items: [
            {
              icon: "graduation",
              label: "Students",
              title: "Campus workshops",
              copy: "High-energy AI sessions that help students understand where AI is changing jobs and how to begin.",
              points: ["AI awareness", "Hands-on demos", "Career direction"],
            },
            {
              icon: "spark",
              label: "Awareness",
              title: "AI awareness sessions",
              copy: "Seminars and masterclasses for large student groups, management bodies, and department heads.",
              points: ["Industry examples", "Responsible AI", "Skill roadmap"],
            },
            {
              icon: "book",
              label: "Faculty",
              title: "Faculty development programmes",
              copy: "Enable faculty to understand AI tools, learning design, and how to support student projects.",
              points: ["Teaching resources", "Tool fluency", "Assessment support"],
            },
            {
              icon: "briefcase",
              label: "Careers",
              title: "Placement readiness programmes",
              copy: "Make students interview-ready with resumes, LinkedIn, portfolio projects, and employer-facing proof.",
              points: ["Mock interviews", "Portfolio building", "Hiring signals"],
            },
            {
              icon: "network",
              label: "Curriculum",
              title: "AI curriculum partnerships",
              copy: "Embed AI modules into existing academic calendars with mentor support and practical assessments.",
              points: ["Module design", "Projects", "Certification"],
            },
            {
              icon: "target",
              label: "Outcome",
              title: "Institutional differentiation",
              copy: "Help your campus stand out as a place that prepares students for AI-shaped industries.",
              points: ["Employability", "Brand credibility", "Industry alignment"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "College CTA",
        title: "Invite Elevox to your campus.",
        copy: "Start with a workshop, awareness session, or a full placement-readiness partnership.",
        label: "Request campus proposal",
        to: "/contact",
      }}
    />
  );
}
