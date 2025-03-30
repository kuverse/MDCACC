// components/ElfsightLazy.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ElfsightWidget = dynamic(() => import("./ElfSightGoogle"), {
  ssr: false,
});

const ElfsightLazy = () => {
  const [showWidget, setShowWidget] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWidget(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {showWidget ? (
        <ElfsightWidget />
      ) : (
        <div style={{ height: "600px", textAlign: "center", padding: "40px" }}>
          Loading reviews...
        </div>
      )}
    </div>
  );
};

export default ElfsightLazy;
