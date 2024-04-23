import React from "react";
import "./Button.css";

const Button = ({
  color = "blue",
  name = "name",
  size = "medium",
  type = null,
  onClick,
  disabled = false,
  styleOverrides,
  ...props
}) => {
  return (
    <div class="button-container">
      <button
        style={styleOverrides}
        {...props}
        class={`custom-button ${color} ${size} ${type} `}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
