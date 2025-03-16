import Image from "next/image";
import styles from "../styles/LogoCarousel.module.css";

const partnerLogos = [
  "/images/armorcoat-sheild.png",
  "/images/panorama.webp",
  "/images/solarguard.png",
  "/images/tuffskin-web.png",

];

const LogoCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselTrack}>
      {partnerLogos.concat(partnerLogos).map((logo, index) => {
  // Check if it's the Tuffskin logo
  const isTuffskin = logo.includes("tuffskin");

  return (
    <div className={styles.logoItem} key={index}>
      <Image 
        src={logo} 
        alt={`Partner ${index}`} 
        width={isTuffskin ? 80 : 120} // Reduce width just for Tuffskin
        height={isTuffskin ? 50 : 60}  // Reduce height
        style={{
          objectFit: "contain",
          maxHeight: isTuffskin ? "30px" : "60px",
          width: "auto"
        }}
      />
    </div>
  );
})}

      </div>
    </div>
  );
};

export default LogoCarousel;
