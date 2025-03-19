import Hero from "@/components/HeroSection";
import styles from "./page.module.css";
import InfoCard from "@/components/InfoCard";
import { FaShieldAlt, FaAward } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import LogoCarousel from "@/components/LogoCarousel";
import ElfsightWidget from "@/components/ElfSightGoogle";
import MovieViewingComponent from "@/components/MovieComponent";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import EstimatorPro from "@/components/EstimatorPro";
import StreamBackground from "@/components/BackgroundDesign";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section id="home">
        <Hero />
        </section>

        <LogoCarousel />
        <MovieViewingComponent videoId="ZsGwmoubqqE" title="Watch Our Promo" />
        <div className={styles.cardContainer}>
          <InfoCard
            icon={<FaShieldAlt size={40} color="var(--secondary)" />}
            title="Solar Guard® 10 Year Warranty"
            subtitle="Our interior Solar Guard® window films are backed by an 10-Year Warranty on the film and installation."
          />
          <InfoCard
            icon={<FaAward size={40} color="var(--secondary)" />}
            title="TuffSkin® 10 Year Warranty"
            subtitle="100% Stain & Etch Proof with a 10-Year Warranty. 400,000+ Surfaces Protected Since 2006."
          />
          <InfoCard
            icon={<MdWbSunny size={40} color="var(--secondary)" />}
            title="The Solar  Film Advantage"
            subtitle="Solar Gard® window films ensure superior quality and offer up to 82% heat rejection, 99% UV ray blocking, 90% glare reduction, interior fade control, and up to 30% energy cost savings."
          />
        </div>

        <section id="solutions">
     

        <ServicesSection />
        </section>

        <section id="reviews">
        <ElfsightWidget />
        </section>

        <section id="estimator" style={{ position: "relative"}}>
          <StreamBackground position="bottom" height="1000px"/>

          <EstimatorPro />
        </section>
        <section id="faq" style={{ position: "relative",  marginTop: "-5px" }}>
        <StreamBackground position="top" height="100px"/>

        <FAQSection />
        </section>
      </main>
    </div>
  );
}
