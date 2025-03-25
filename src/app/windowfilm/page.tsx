"use client";

import React from "react";
import Image from "next/image";


const WindowFilms: React.FC = () => {
  return (
    <main style={{ padding: "100px", maxWidth: "1200px", margin: "0 auto", lineHeight: "1.8", marginTop: "50px" }}>
      <h1 style={{ color: "#27A7E0", marginBottom: "30px", textAlign: "center" }}>Residential & Commercial Window Tinting</h1>

    <Image
        src={"/images/window-tinting.webp"}
        alt={"Window Tinting"}
        width={400}
        height={300}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <p style={{ fontWeight: 100, fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
        Welcome to our window film service. We specialize in residential and commercial solutions that enhance comfort, style, and energy efficiency.<br /><br />
        Our solar privacy window film provides increased daytime privacy and security while blocking 99% of harmful UV rays. This helps protect your loved ones and furnishings from sun damage.<br /><br />
        Our architectural window films allow you to maintain a much cooler, more comfortable indoor environment year-round. Our films can reduce heat transmission by up to 82% and minimize glare by 90%, eliminating the need to adjust blinds constantly.<br /><br />
        In addition to improving your space, our window films contribute to energy efficiency, lowering cooling costs in summer and helping retain warmth in winter.<br /><br />
        Trust our certified professionals for precise application and long-lasting performance.<br /><br />
        Schedule a consultation and experience the benefits of window films!<br /><br />
      </p>
    </main>
  );
};

export default WindowFilms;
