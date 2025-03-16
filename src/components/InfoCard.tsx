import React from "react";
import styles from "../styles/InfoCard.module.css";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default InfoCard;
