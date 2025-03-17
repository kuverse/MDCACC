"use client";

import Script from "next/script";
import TitleSection from "./TitleSection";

const ElfsightWidget = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "20px",
          zIndex: -3,
        }}
      >
        <TitleSection
          title="What Our Customers Say"
          subtitle="Check out the word on the street."
        />
        {/* Load Elfsight platform script */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />

        {/* Widget Container */}
        <div
          className="elfsight-app-9a739ce6-aa6d-47ac-83b9-4952558ec03e"
          data-elfsight-app-lazy
        ></div>

        {/* Overlay to cover credit */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "70px", // Adjust if needed
            backgroundColor: "var(--background)", // Matches light/dark mode
            zIndex: 10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ElfsightWidget;
