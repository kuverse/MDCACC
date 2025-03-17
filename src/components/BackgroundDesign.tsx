"use client";

import React from "react";

const StreamBackground: React.FC = () => {
  return (
    
    <div
    style={{
      position: "absolute", // Fixed to viewport
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      pointerEvents: "none", // So it doesn't block clicks
      zIndex: -1, // Put above section background but behind content
    }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z"
        fill="#27A7E0"
        >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
            M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z;
            M0,180 C400,300 1040,20 1440,180 L1440,320 L0,320 Z;
            M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z
          "
        />
      </path>
    </svg>
  </div>
  )  
};

export default StreamBackground;
