"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CalendlyInlineWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const a1 = searchParams.get("a1") || "";
    const a2 = searchParams.get("a2") || "";

    const calendlyUrl = `https://calendly.com/tinterpro/45min?a1=${encodeURIComponent(a1)}&a2=${encodeURIComponent(a2)}`;

    if (widgetRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widgetRef.current,
      });
    }
  }, [searchParams]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={widgetRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "100vh",
          minHeight: "800px",
        }}
      ></div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default CalendlyInlineWidget;
