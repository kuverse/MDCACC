import Image from "next/image";
import styles from "./LogoCarousel.module.css";
import TitleSection from "../Titles/TitleSection";

const partnerLogos = [
  "/images/youtubePlay.png",
  "/images/youtubePlay.png",
  "/images/youtubePlay.png",
  "/images/youtubePlay.png",
];

const LogoCarousel: React.FC = () => {
  // Duplicate the logos for a seamless scrolling effect.
  const logos = [...partnerLogos, ...partnerLogos];

  // Define a consistent size for all images.
  const imageWidth = 120;
  const imageHeight = 60;

  return (
    <div className={styles.carouselWrapper}>
      <TitleSection title="Certified by the Best" />
      <div className={styles.carouselTrack}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={styles.logoItem}
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          >
            <Image
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes={`${imageWidth}px`}
              priority={index < partnerLogos.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
