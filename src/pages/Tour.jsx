import BlueprintPage from "../components/BlueprintPage";

export default function Tour() {
  return (
    <BlueprintPage
      eyebrow="Academy tour"
      title="A highly visual experience."
      summary="This is where trust gets built. Explore our state-of-the-art learning environment through immersive visuals and interactive experiences."
      primaryCta={["Schedule a visit", "/contact"]}
      secondaryCta={["Explore admissions", "/admissions"]}
      proof={[
        "Classroom showcase",
        "Lab facilities",
        "Learning spaces",
        "Student areas",
        "Videos",
        "Photo gallery",
        "Future expansion plans"
      ]}
      sections={[
        {
          eyebrow: "Spaces",
          title: "Every space communicates premium, practical AI learning.",
          copy: "After completion of the office setup, our facilities will showcase the pinnacle of modern education technology.",
          items: [
            {
              icon: "book",
              label: "Classrooms",
              title: "Classroom showcase",
              copy: "Tech-enabled rooms for mentor-led sessions, discussions, and interactive learning experiences.",
              points: [
                "Live instruction with AI integration",
                "Interactive smart boards",
                "Recording-ready sessions",
                "Flexible seating arrangements"
              ],
            },
            {
              icon: "spark",
              label: "Labs",
              title: "Lab facilities",
              copy: "Hands-on spaces where learners build AI workflows, applications, and real-world projects.",
              points: [
                "High-performance computing stations",
                "AI/ML development tools",
                "Collaborative project areas",
                "Expert mentor supervision"
              ],
            },
            {
              icon: "users",
              label: "Learning",
              title: "Learning spaces",
              copy: "Dedicated collaboration zones designed for team projects, peer learning, and portfolio development.",
              points: [
                "Breakout meeting areas",
                "Interactive whiteboards",
                "Presentation practice zones",
                "Quiet study corners"
              ],
            },
            {
              icon: "graduation",
              label: "Students",
              title: "Student areas",
              copy: "Comfortable, inspiring spaces that support focused work, counseling, and community building.",
              points: [
                "Modern study zones",
                "Counselling and guidance desk",
                "Student lounge areas",
                "Community event spaces"
              ],
            },
            {
              icon: "play",
              label: "Media",
              title: "Videos and photo gallery",
              copy: "Engaging visual content featuring founder insights, course previews, campus life, and facility walkthroughs.",
              points: [
                "Founder introduction videos",
                "Course and program previews",
                "Classroom moments captured",
                "Facility walkthroughs"
              ],
            },
            {
              icon: "target",
              label: "Future",
              title: "Future expansion plans",
              copy: "A transparent roadmap for future growth after the initial office setup completion.",
              points: [
                "New AI research labs",
                "Larger cohort capacities",
                "Partner collaboration spaces",
                "Extended campus development"
              ],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Visit CTA",
        title: "Trust is easier when people can see the space.",
        copy: "Invite prospects, parents, colleges, and companies to schedule a visit or request a virtual walkthrough of our premium facilities.",
        label: "Schedule campus visit",
        to: "/contact",
      }}
    />
  );
}