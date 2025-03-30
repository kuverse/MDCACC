"use client"
import Hero3DHeart from "@/components/Hero3D/Hero3DHeart";
//import Hero from "@/components/HeroSection/HeroSection2";
import styles from "./page.module.css";
//import LogoCarousel from "@/components/LogoCarousel/LogoCarousel";
import FAQSection from "@/components/FAQWidget/FAQSection";
import AnimatedTitle from "@/components/Titles/TitleHoverAnimation";
import MeetTheExperts from "@/components/Bio/MeetExperts";
import AboutEducation from "@/components/Education/EducationPoints";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section id="home" style={{ position: "relative", height: "100vh"}}>
      <Hero3DHeart />
        </section>

        {/*<LogoCarousel />*/}
        <section id="about" >

        <AboutEducation />
        </section>


        <section id="faq" style={{ position: "relative",  marginTop: "-5px" }}>
        
        
        <FAQSection />
        <AnimatedTitle text="Doctors" />
        <MeetTheExperts />
        </section>
      </main>
    </div>
  );
}
