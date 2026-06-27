import BlueprintPage from "../components/BlueprintPage";

export default function WhyAI() {
  return (
    <BlueprintPage
      eyebrow="Why every industry needs AI"
      title="AI is no longer an IT skill. It is a business skill."
      summary="This page positions Elevox as an authority builder by showing how AI changes healthcare, manufacturing, banking, HR, marketing, retail, education, logistics, and pharma."
      primaryCta={["Find my industry pathway", "/programmes"]}
      secondaryCta={["Bring AI to my team", "/corporate"]}
      proof={["SEO authority hub", "Industry-specific AI", "Business skill positioning"]}
      sections={[
        {
          eyebrow: "Industries",
          title: "Where AI is creating leverage now.",
          copy: "Each industry section can expand into dedicated SEO pages as the content library grows.",
          items: [
            { icon: "spark", label: "Healthcare", title: "AI in Healthcare", copy: "Diagnosis support, patient operations, documentation, triage, and care coordination." },
            { icon: "building", label: "Manufacturing", title: "AI in Manufacturing", copy: "Quality inspection, predictive maintenance, safety monitoring, and supply-chain intelligence." },
            { icon: "chart", label: "Finance", title: "AI in Banking", copy: "Fraud detection, risk analysis, customer intelligence, reporting, and compliance workflows." },
            { icon: "users", label: "People", title: "AI in HR", copy: "Recruitment support, workforce planning, onboarding, people analytics, and employee experience." },
            { icon: "target", label: "Growth", title: "AI in Marketing", copy: "Customer segmentation, content systems, campaign testing, personalization, and sales enablement." },
            { icon: "briefcase", label: "Retail", title: "AI in Retail", copy: "Demand planning, inventory insights, customer service, merchandising, and store operations." },
            { icon: "graduation", label: "Education", title: "AI in Education", copy: "Personalized learning, assessment support, tutoring systems, and institutional operations." },
            { icon: "network", label: "Logistics", title: "AI in Logistics", copy: "Routing, fleet planning, exception management, forecasting, and warehouse intelligence." },
            { icon: "badge", label: "Pharma", title: "AI in Pharma", copy: "Research workflows, compliance support, documentation, market analysis, and trial operations." },
          ],
        },
      ]}
      finalCta={{
        eyebrow: "Industry CTA",
        title: "The question is not whether AI matters. It is where it matters first.",
        copy: "Elevox helps learners and organisations identify the practical workflows where AI creates value.",
        label: "Explore AI programmes",
        to: "/programmes",
      }}
    />
  );
}
