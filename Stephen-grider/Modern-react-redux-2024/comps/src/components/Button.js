import React from "react";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick,
  ...rest
}) => {
  return (
    <button
      className="bg-blue-600 px-3 py-1.5 border border-blue-500 text-white"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
