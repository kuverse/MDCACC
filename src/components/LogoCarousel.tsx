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
          const isTuffskin = logo.includes("tuffskin");

          const width = isTuffskin ? 80 : 120;
          const height = isTuffskin ? 50 : 60;

          return (
            <div className={styles.logoItem} key={index}>
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={width}
                height={height}
                style={{
                  objectFit: "contain",
                  height: "auto", // Maintain aspect ratio
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
