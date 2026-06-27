import BlueprintPage from "../components/BlueprintPage";

export default function Contact() {
  return (
    <BlueprintPage
      eyebrow="Contact and visit"
      title="Book a counselling call, campus visit, college session, or corporate consultation."
      summary="The contact page should support every major conversion path: location, maps, WhatsApp, appointment booking, campus visit scheduling, and directions."
      primaryCta={["Book appointment", "/contact"]}
      secondaryCta={["View admissions", "/admissions"]}
      proof={["Campus visit scheduling", "WhatsApp and calls", "Directions and maps"]}
      sections={[
        {
          eyebrow: "Contact paths",
          title: "Route every visitor to the right next step.",
          copy: "Students, parents, professionals, colleges, and organisations should immediately know how to contact Elevox.",
          items: [
            {
              icon: "graduation",
              label: "Students",
              title: "Admissions counselling",
              copy: "Get help choosing the right programme, batch, fees, scholarships, and career pathway.",
              points: ["Programme fit", "Batch calendar", "Application process"],
            },
            {
              icon: "building",
              label: "Colleges",
              title: "Campus partnership call",
              copy: "Discuss workshops, awareness sessions, faculty development, or curriculum partnerships.",
              points: ["Invite Elevox", "Proposal request", "Placement readiness"],
            },
            {
              icon: "briefcase",
              label: "Corporate",
              title: "Organisation consultation",
              copy: "Map workforce readiness, team training needs, and AI transformation opportunities.",
              points: ["Readiness audit", "Leadership session", "Custom workshop"],
            },
            {
              icon: "map",
              label: "Visit",
              title: "Campus visit scheduling",
              copy: "Plan a visit to the Nagpur academy and see learning spaces, labs, and counselling support.",
              points: ["Location", "Directions", "Appointment slot"],
            },
            {
              icon: "users",
              label: "Community",
              title: "WhatsApp and quick support",
              copy: "Offer fast answers for workshop registrations, open house events, and admissions questions.",
              points: ["Quick query", "Event help", "Follow-up"],
            },
            {
              icon: "play",
              label: "Media",
              title: "Founder and media enquiries",
              copy: "Route thought leadership, webinar, podcast, and media appearance requests cleanly.",
              points: ["Founder articles", "Webinars", "Media requests"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Contact CTA",
        title: "Start with a conversation.",
        copy: "Whether you are a student, parent, college leader, or organisation, Elevox can map the right AI pathway.",
        label: "Book a conversation",
        to: "/admissions",
      }}
    />
  );
}
