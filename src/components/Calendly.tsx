"use client";

import React, { useRef } from "react";
import Script from "next/script";

const CalendlyInlineWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px 0",
      boxSizing: "border-box"
    }}>
      {/* Calendly Embed Container */}
      <div
        ref={widgetRef}
        className="calendly-inline-widget"
        data-url="https://calendly.com/tinterpro/45min"
        style={{
          width: "100%",
          maxWidth: "900px", // Limit max width for readability
          height: "100vh", // Full viewport height
          minHeight: "800px",
        }}
      ></div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default CalendlyInlineWidget;
