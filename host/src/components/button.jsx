import React from "react";

const Button = ({ children, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {children}
  </button>
);

export default Button;