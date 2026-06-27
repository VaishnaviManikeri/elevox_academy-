import BlueprintPage from "../components/BlueprintPage";

export default function Business() {
  return (
    <BlueprintPage
      eyebrow="For business and institutions"
      title="Two routes for AI transformation: organisations and campuses."
      summary="This page helps business visitors choose between corporate workforce transformation and college partnerships without mixing the two buying journeys."
      primaryCta={["Corporate training", "/corporate"]}
      secondaryCta={["College partnerships", "/colleges"]}
      proof={["For organisations", "For colleges", "Custom workshops"]}
      sections={[
        {
          eyebrow: "Choose path",
          title: "Bring AI to the people you are responsible for.",
          copy: "Whether you lead a company or an institution, Elevox helps translate AI urgency into practical capability.",
          items: [
            {
              icon: "building",
              label: "Organisations",
              title: "Bring AI to your organisation",
              copy: "For HR leaders, CIOs, CTOs, MSMEs, and enterprises that need team upskilling and transformation.",
              points: ["AI readiness", "Team upskilling", "Leadership sessions"],
              link: ["Explore corporate", "/corporate"],
            },
            {
              icon: "graduation",
              label: "Colleges",
              title: "Bring AI to your college",
              copy: "For engineering colleges, universities, MBA institutes, and polytechnic colleges.",
              points: ["Campus workshops", "Faculty development", "Placement readiness"],
              link: ["Explore colleges", "/colleges"],
            },
            {
              icon: "calendar",
              label: "Events",
              title: "Custom workshops and masterclasses",
              copy: "Use a focused session to introduce AI, generate leads, and start a larger partnership.",
              points: ["Open house", "Bootcamps", "Webinars"],
              link: ["View workshops", "/workshops"],
            },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Business CTA",
        title: "Not sure which route fits?",
        copy: "Start with a conversation and Elevox will map the right pathway for your team or institution.",
        label: "Book consultation",
        to: "/contact",
      }}
    />
  );
}
