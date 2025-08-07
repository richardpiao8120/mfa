import React from "react";
import "../style/IconFont.scss";

export default function SharedComponent({ children }) {
  return (
    <span
      className="nds-icon directional-caret-up-f"
      style={{
        padding: 20,
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
