"use client";

import React from "react";
import Image from "next/image";


const DecorativeFilms: React.FC = () => {
  return (
    <main style={{ padding: "100px", maxWidth: "1200px", margin: "0 auto", lineHeight: "1.8", marginTop: "50px" }}>
      <h1 style={{textAlign: "center", padding: "25px"}}>Learn About Our Professional Window Films</h1>
      <h2 style={{ color: "#27A7E0", marginBottom: "30px", textAlign: "center" }}>Decorative and Private Window Films</h2>

            <Image
              src={"/images/decorative.webp"}
              alt={"Window Tinting Services"}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />

      <p style={{ fontWeight: 100, fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
        Decorative window films are versatile solutions that enhance the aesthetics and functionality of residential and commercial spaces.<br /><br />
        With options ranging from frosted designs to intricate patterns, these films allow for endless customization, creating unique environments. They also provide benefits such as privacy, UV ray filtration, and glare reduction, improving comfort and energy efficiency.<br /><br />
        Solar Gards decorative window films are a great way to elevate any spaces ambiance while enhancing privacy. <br /><br />
        We offer a 5-year warranty on all decorative window films and their installation.<br /><br />
        </p>

        <h2 style={{ color: "#27A7E0", marginBottom: "30px", textAlign: "center" }}>Anti-Grafitti Films</h2>

        <Image
        src={"/images/decorative.webp"}
        alt={"Window Tinting Services"}
        width={400}
        height={300}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />

        <p style={{ fontWeight: 100, fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
        Graffiti and vandalism pose significant business challenges, disrupting operations and tarnishing reputations. The costs associated with removing or restoring the original appearance can be substantial and time-consuming. Solar Gard offers practical solutions to address these issues.<br /><br />
        Each moment that a train or escalator is out of service or stations and equipment are vandalized, businesses suffer from lost revenue and damage to their reputation. Solar Gards anti-vandalism films provide a swift and cost-effective way to seamlessly eliminate graffiti and vandalism, restoring surfaces to their original condition.<br /><br />
        Our range of anti-vandalism products, including Graffitigard, Graffitigard 4PLUS, and Armorcoat, offers comprehensive protection for various exposed surfaces. With Solar Gard, businesses can safeguard against graffiti and vandalism, quickly preserving their assets and reputation.</p><br /><br />

    </main>
  );
};

export default DecorativeFilms;
