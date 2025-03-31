"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CalendlyInlineWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const queryString = searchParams.toString();

  useEffect(() => {
    if (!scriptLoaded) return;

    //const a1 = searchParams.get("a1") || "";
    //const a2 = searchParams.get("a2") || "";

    const calendlyUrl = ``;

    if (widgetRef.current && window.Calendly) {
      // Clear previous iframe if any (important!)
      widgetRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widgetRef.current,
      });
    }
  }, [scriptLoaded, queryString, searchParams]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={widgetRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "150vh", // 👈 Make sure height is defined
          minHeight: "700px", // 👈 Important fallback
        }}
      ></div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </div>
  );
};

export default CalendlyInlineWidget;
