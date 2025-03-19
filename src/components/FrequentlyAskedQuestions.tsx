import FAQItem from "./FAQ";
import TitleSection from "./TitleSection";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  title: string;
  subtitle?: string;
  faqItems: FAQItemProps[];
}

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({
  title,
  subtitle,
  faqItems,
}) => {
  return (
    <section style={{ maxWidth: "800px", margin: "50px auto", padding: "80px" }}>
      <TitleSection title={title} subtitle={subtitle} />

      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default FrequentlyAskedQuestions;
