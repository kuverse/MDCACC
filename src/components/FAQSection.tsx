import FAQItem from "./FAQ";
import TitleSection from "./TitleSection";

export default function FAQSection() {
  return (
    <section style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px" }}>
      <TitleSection title="Frequently Asked Questions" subtitle="Have a Question?"/>
      
      <FAQItem 
        question="What services do you offer?" 
        answer="We offer professional SolarGard® window tinting and Tuffskin® marble protection services, decorative film, anti-graffiti films & more.." 
      />

      <FAQItem 
        question="Where are you located?" 
        answer="Calgary, Alberta and souroundings." 
      />

      <FAQItem 
        question="Which window film manufacturer do you use?" 
        answer="Our customers deserve the absolute best, so we use Solar Gard Films by Saint-Gobain, backed by an eight-year warranty. Solar Gard is a global leader in patent-protected film technologies for solar control and surface protection across the residential and commercial industries as the Specialty Films Division of the worldwide glass and building technology icon Saint-Gobain. Solar Gard builds upon decades of work to offer proprietary solar control and safety film solutions. The company’s product portfolio delivers unmatched results in enhancing and protecting homes, buildings, and, most importantly, the residents and tenants inside." 
      />

    <FAQItem 
        question="What is the cost for an estimate? " 
        answer="Price estimate are quick and FREE with our built in Estimator Pro app!"
            />
    </section>
  );
}
