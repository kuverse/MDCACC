"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        zIndex: 1000,

      }}
    >
      {/* Info Icon */}
      <FaInfoCircle
        style={{
          color: "#fff",
          fontSize: "35px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo(!showInfo)}
      />

      {/* Tooltip Bubble */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "35px",
          backgroundColor: "#E3000A",
          color: "#fff",
          padding: "12px",
          borderRadius: "8px",
          maxWidth: "480px",
          fontSize: "14px",
          fontWeight: "bold",
          opacity: showInfo ? 1 : 0,
          transform: showInfo ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: showInfo ? "auto" : "none", // Prevent bubble from blocking clicks when hidden
          zIndex: 1000,
        }}
      >
        1. Enter the number of windows or stone counters tops.<br></br>
        2. Add the dimensions in inches.<br></br>
        3. Select the film type.<br></br>
        4. Select if equipment is required to reach your windows.<br></br>
        5. Estimator Pro will send your requirements automatically when you schedule an in person assessment.<br></br>
      </div>
    </div>
  );
};

export default InfoTooltip;
