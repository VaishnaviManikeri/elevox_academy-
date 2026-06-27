import BlueprintPage from "../components/BlueprintPage";

export default function Admissions() {
  return (
    <BlueprintPage
      eyebrow="Admissions"
      title="Enrollment designed around clarity, counselling, and the right AI pathway."
      summary="The admissions page brings together batch calendar, fees, scholarships, financing options, application process, and counselling booking so learners can make a confident decision."
      primaryCta={["Book counselling", "/contact"]}
      secondaryCta={["Compare programmes", "/programmes"]}
      proof={["Batch calendar", "Fees and financing", "Counselling booking"]}
      sections={[
        {
          eyebrow: "Upcoming batches",
          title: "Choose a cohort based on your goal and schedule.",
          copy: "Dates are presented as planning placeholders and can be updated as final batches are announced.",
          items: [
            {
              icon: "calendar",
              label: "July 2026",
              title: "Elevox Foundations",
              copy: "AI literacy for students, graduates, and non-technical professionals.",
              points: ["8 weeks", "Hybrid cohort", "Best first step"],
              link: ["View programme", "/programmes/foundations"],
            },
            {
              icon: "briefcase",
              label: "August 2026",
              title: "Professional Upskilling",
              copy: "Role-based AI capability for working professionals.",
              points: ["12-24 weeks", "Role intensive", "Portfolio outcome"],
              link: ["View programme", "/programmes/upskilling"],
            },
            {
              icon: "book",
              label: "August 2026",
              title: "AI for Developers",
              copy: "Build AI-native apps, agents, and retrieval workflows.",
              points: ["12 weeks", "Code labs", "Capstone project"],
              link: ["View programme", "/programmes/developers"],
            },
          ],
        },
        {
          eyebrow: "Support",
          title: "Financial options that reduce decision friction.",
          copy: "Admissions should make the next step easier for students, parents, and professionals.",
          tone: "dark",
          items: [
            {
              icon: "badge",
              label: "Scholarships",
              title: "Merit and need-based support",
              copy: "Scholarship categories can support strong applicants, women in AI, and high-intent learners.",
            },
            {
              icon: "chart",
              label: "Fees",
              title: "Transparent programme pricing",
              copy: "Each programme detail page carries duration, fees, format, certification, and outcomes.",
            },
            {
              icon: "users",
              label: "Counselling",
              title: "Pathway recommendation call",
              copy: "Prospects can book counselling to decide between student, professional, or corporate routes.",
            },
          ],
        },
        {
          eyebrow: "Process",
          title: "Application process",
          type: "steps",
          items: [
            { title: "Tell us your goal", copy: "Share background, current role, timeline, and intended outcome." },
            { title: "Get pathway mapped", copy: "Counsellors recommend the right programme, workshop, or B2B route." },
            { title: "Confirm batch and fees", copy: "Review schedule, pricing, scholarships, and payment options." },
            { title: "Begin onboarding", copy: "Join orientation, baseline assessment, and mentor-led learning." },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Admissions CTA",
        title: "Not sure which AI pathway fits you?",
        copy: "Start with counselling. Elevox can map the right route before you commit to a programme.",
        label: "Book counselling",
        to: "/contact",
      }}
    />
  );
}
