import React from "react";

export default function MapHeader() {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        color: "white",
        zIndex: 999,
        position: "absolute",
        display: "flex",

        marginTop: "16px",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "32px", fontWeight: "bold" }}>GLOBAL CYBER THREAT MAP</div>
      <div style={{ fontSize: "24px", color: "#B3B3B3" }}>Navigating the Digital Battlefield</div>
    </div>
  );
}
