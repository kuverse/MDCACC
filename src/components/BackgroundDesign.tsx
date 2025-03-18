"use client";

import React from "react";

interface StreamBackgroundProps {
  position: "top" | "bottom";
  height?: string;
}

const StreamBackground: React.FC<StreamBackgroundProps> = ({ position, height = "800px" }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: height,
        top: position === "top" ? "0px" : "unset",
        bottom: position === "bottom" ? "0px" : "unset",
        left: 0,
        transform: position === "top" ? "scaleY(-1)" : "none",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,400 
            C360,200 1080,600 1440,400
            L1440,800 
            L0,800 
            Z
          "
          fill="#27A7E0"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,400 C360,200 1080,600 1440,400 L1440,800 L0,800 Z;
              M0,420 C400,220 1040,620 1440,420 L1440,800 L0,800 Z;
              M0,380 C340,180 1100,580 1440,380 L1440,800 L0,800 Z;
              M0,400 C360,200 1080,600 1440,400 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default StreamBackground;
