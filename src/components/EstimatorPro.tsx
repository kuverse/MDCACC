"use client";
import React, { useState } from "react";
import Image from "next/image";
import InfoTooltip from "./InfoTool";

const filmTypes = [
  { type: "None", pricePerSqFt: 0 },
  { type: "Interior", pricePerSqFt: 12 },
  { type: "Interior Premium", pricePerSqFt: 14 },
  { type: "Exterior", pricePerSqFt: 20 },
  { type: "Exterior Premium", pricePerSqFt: 23 },
  { type: "Decorative", pricePerSqFt: 12 },
  { type: "Tuffskin", pricePerSqFt: 45 },
];

const equipmentOptions = [
  { type: "None", price: 0 },
  { type: "Ladder", price: 150 },
  { type: "Scaffold", price: 450 },
  { type: "Lift", price: 1000 },
];

interface WindowData {
  numWindows: number;
  length: number;
  width: number;
  film: { type: string; pricePerSqFt: number };
}

const EstimatorPro: React.FC = () => {
  const [windowData, setWindowData] = useState<WindowData[]>([
    { numWindows: 1, length: 100, width: 55, film: filmTypes[1] },
    { numWindows: 0, length: 0, width: 0, film: filmTypes[0] },
    { numWindows: 0, length: 0, width: 0, film: filmTypes[0] },
  ]);

  const [selectedEquipment, setSelectedEquipment] = useState(equipmentOptions[0]);

  const handleInputChange = (index: number, field: keyof WindowData, value: string) => {
    const updated = [...windowData];
    if (field === "film") {
      updated[index][field] = filmTypes.find((f) => f.type === value)!;
    } else {
      updated[index][field] = parseInt(value) || 0;
    }
    setWindowData(updated);
  };

  const totalCost = Math.max(
    349,
    windowData.reduce((acc, row) => {
      const areaSqInches = row.length * row.width;
      const areaSqFeet = areaSqInches / 144;
      return acc + areaSqFeet * row.numWindows * row.film.pricePerSqFt;
    }, 0) + selectedEquipment.price
  ).toFixed(2);

  return (
    <>
      {/* Wrapper for scaling */}
      <div className="estimator-wrapper">
        <section
          style={{
            position: "relative",
            minWidth: "650px",
            height: "840px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/estimator-pro.png"
            alt="Estimator Pro Background"
            layout="fill"
            objectFit="cover"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />

          {/* Overlay Content */}
          <div
            style={{
              position: "absolute",
              marginTop: "130px",
              width: "95%",
              padding: "35px",
              borderRadius: "8px",
              marginLeft: "35px",
            }}
          >
            {/* Total Cost */}
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "52px",
                color: "#27A7E0",
                textAlign: "center",
                padding: "45px",
                marginRight: "50px",
                maxWidth: "750px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Estimated Cost: ${totalCost}
            </h2>

            {/* Input Rows */}
            {windowData.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "22px",
                  marginBottom: "20px",
                  marginRight: "27px",
                  justifyContent: "center",
                }}
              >
                {/* Number of Windows */}
                <input
                  type="number"
                  min={1}
                  value={row.numWindows}
                  onChange={(e) => handleInputChange(index, "numWindows", e.target.value)}
                  style={{
                    border: "transparent",
                    width: "48px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#3D4143",
                    fontWeight: "bold",
                    backgroundColor: "white",
                  }}
                />

                {/* Length */}
                <input
                  type="number"
                  value={row.length}
                  onChange={(e) => handleInputChange(index, "length", e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "transparent",
                    width: "89px",
                    color: "#3D4143",
                    fontWeight: "bold",
                    backgroundColor: "white",
                  }}
                />

                {/* Width */}
                <input
                  type="number"
                  value={row.width}
                  onChange={(e) => handleInputChange(index, "width", e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "transparent",
                    width: "89px",
                    marginLeft: "4px",
                    color: "#3D4143",
                    fontWeight: "bold",
                    backgroundColor: "white",
                  }}
                />

                {/* Film Type */}
                <select
                  value={row.film.type}
                  onChange={(e) => handleInputChange(index, "film", e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "transparent",
                    width: "130px",
                    marginRight: "29px",
                    color: "#3D4143",
                    fontWeight: "bold",
                    backgroundColor: "white",
                  }}
                >
                  {filmTypes.map((f) => (
                    <option key={f.type} value={f.type}>
                      {f.type}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div style={{ textAlign: "left", marginTop: "31px", marginLeft: "35px", position: "relative" }}>
              <select
                value={selectedEquipment.type}
                onChange={(e) =>
                  setSelectedEquipment(
                    equipmentOptions.find((eq) => eq.type === e.target.value)!
                  )
                }
                style={{
                  padding: "5px",
                  borderRadius: "4px",
                  border: "transparent",
                  width: "77px",
                  backgroundColor: "white",
                  color: "#3D4143",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {equipmentOptions.map((eq) => (
                  <option key={eq.type} value={eq.type}>
                    {eq.type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <button
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-50px",
            transform: "translateX(-50%)",
            background: "transparent",
            border: "none",
            padding: "0",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={() => {
            console.log("Schedule button clicked");
          }}
        >
          <Image src="/images/schedule.png" alt="Estimator Pro Schedule" width={290} height={110} />
        </button>
      </div>

      <InfoTooltip />

      {/* Scaling styles */}
      <style jsx>{`
        .estimator-wrapper {
          transform: scale(1);
          transform-origin: top center;
           display: flex;                
          justify-content: center;     
          align-items: center;
        }

        @media (max-width: 768px) {
          .estimator-wrapper {
            transform: scale(0.75);
             display: flex;           
            justify-content: center;       
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default EstimatorPro;
