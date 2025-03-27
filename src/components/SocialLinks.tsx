"use client";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "../styles/SocialLinks.module.css";

interface SocialLinksProps {
  size?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 20 }) => {
  const socialLinks = [
    {
      href: "https://www.youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw",
      label: "Visit our YouTube channel",
      icon: <FaYoutube size={size} />,
    },
    {
      href: "https://instagram.com/tintitpro",
      label: "Visit our Instagram profile",
      icon: <FaInstagram size={size} />,
    },
    {
      href: "https://facebook.com/tintitpro",
      label: "Visit our Facebook page",
      icon: <FaFacebookF size={size} />,
    },
    {
      href: "https://x.com/tintitpro",
      label: "Visit our X (Twitter) profile",
      icon: <FaXTwitter size={size} />,
    },
  ];

  return (
    <div className={styles.socialIcons}>
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={styles.iconLink}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
