import BlueprintPage from "../components/BlueprintPage";

export default function Career() {
  return (
    <BlueprintPage
      eyebrow="Career Accelerator"
      title="The employability layer that turns AI learning into career confidence."
      summary="Parents, students, and professionals need proof that learning leads somewhere. The Career Accelerator focuses on resumes, LinkedIn, mock interviews, portfolios, coaching, and employer connections."
      primaryCta={["Apply for accelerator", "/admissions"]}
      secondaryCta={["Explore programmes", "/programmes"]}
      proof={["Resume building", "Portfolio proof", "Employer connections"]}
      sections={[
        {
          eyebrow: "Services",
          title: "Everything learners need after the classroom.",
          copy: "Elevox positions employability as part of the learning experience, not an afterthought.",
          items: [
            {
              icon: "book",
              label: "Profile",
              title: "Resume building",
              copy: "Convert learning, projects, internships, and skills into clear employer-ready resumes.",
              points: ["ATS-ready structure", "Project framing", "Role-specific positioning"],
            },
            {
              icon: "network",
              label: "Presence",
              title: "LinkedIn optimization",
              copy: "Shape a stronger professional identity around AI skills, projects, and career direction.",
              points: ["Headline and about", "Project posts", "Recruiter visibility"],
            },
            {
              icon: "users",
              label: "Interviews",
              title: "Mock interviews",
              copy: "Practice technical, business, and behavioral interviews with mentor feedback.",
              points: ["Confidence building", "Role narratives", "Feedback loops"],
            },
            {
              icon: "briefcase",
              label: "Proof",
              title: "Portfolio building",
              copy: "Turn class projects into demos, case studies, dashboards, repositories, and presentations.",
              points: ["Capstone story", "Demo review", "Hiring proof"],
            },
            {
              icon: "target",
              label: "Guidance",
              title: "Career coaching",
              copy: "Help learners choose realistic roles and prepare for the next step with clarity.",
              points: ["Pathway mapping", "Application strategy", "Confidence support"],
            },
            {
              icon: "building",
              label: "Market",
              title: "Employer connections",
              copy: "Create warm bridges between learner proof and companies looking for AI-ready talent.",
              points: ["Hiring partner intros", "Demo days", "Placement support"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Career CTA",
        title: "Build proof that survives outside the classroom.",
        copy: "Start with the pathway that matches your background, timeline, and career goal.",
        label: "Start admissions",
        to: "/admissions",
      }}
    />
  );
}
