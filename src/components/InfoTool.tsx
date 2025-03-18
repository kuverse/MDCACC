"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        position: "fixed", // keeps it static on screen
        right: "5%",
        bottom: "50px",
        zIndex: 1000,
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Info Icon */}
      <FaInfoCircle
        style={{
          color: "#E3000A",
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
          bottom: "80px",
          right: "30px", // slight tweak for spacing
          backgroundColor: "#E3000A",
          color: "#fff",
          padding: "12px",
          borderRadius: "8px",
          maxWidth: "580px",
          width: "300px",
          fontSize: "1.4rem",
          fontWeight: "bold",
          opacity: showInfo ? 1 : 0,
          transform: showInfo ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: showInfo ? "auto" : "none",
          zIndex: 1001, // one level above
        }}
      >
        1. Enter the number of windows or stone counters tops.<br /><br></br>
        2. Add the dimensions in inches.<br /><br></br>
        3. Select the film type.<br /><br></br>
        4. Select if equipment is required to reach your windows.<br /><br></br>
        5. Schedule an in person assessment and Estimator Pro will send your requirements automatically.<br />
      </div>
    </div>
  );
};

export default InfoTooltip;
