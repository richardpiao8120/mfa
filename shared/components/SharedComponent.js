import React from "react";
import "../style/IconFont.css";

export default function SharedComponent({ children }) {
  return (
    <span
      className="nds-icon directional-step-backward-f"
      style={{
        padding: 10,
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: 4,
      }}
    >
      {children}
    </span>
  );
}
