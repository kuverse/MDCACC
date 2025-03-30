"use client";
import FAQItem from "./FAQ";
import TitleSection from "../Titles/TitleSection";
import { LazyMotion, domAnimation, m } from "framer-motion";
import styles from "./FAQSection.module.css";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "Anything cardiac anesthesia or critical care related as well as botox consultations and treatments. ",
  },
  {
    question: "Where are you located?",
    answer: "We are based in University of Florida Health.",
  },
  {
    question: "Why should I choose you?",
    answer:
      "We offer the highest professional calliber of services and truly care about our patients.",
  },
  {
    question: "Can I get botox?",
    answer: "Yes, contact us through the services section.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className={styles.faqSection}>
      <TitleSection title="Frequently Asked Questions" subtitle="Have a Question?" />
      <LazyMotion features={domAnimation}>
        {faqItems.map((faq, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </m.div>
        ))}
      </LazyMotion>
    </section>
  );
};

export default FAQSection;
