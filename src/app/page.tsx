import Hero from "@/components/HeroSection";
import styles from "./page.module.css";
import InfoCard from "@/components/InfoCard";
import { FaShieldAlt, FaAward } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import LogoCarousel from "@/components/LogoCarousel";
import ElfsightWidget from "@/components/ElfSightGoogle";
import MovieViewingComponent from "@/components/MovieComponent";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
      
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
        <div style={{padding: "10px", marginTop: "80px", marginBottom: "50px"}}>
        <ElfsightWidget />
        <FAQSection />
        </div>
      </main>
    </div>
  );
}
