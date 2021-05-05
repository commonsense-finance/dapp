import React from "react";

export default ({ children, className }) => {
  return (
    <h1
      className={`font-bold leading-relaxed tracking-wide font-primary ${className}`}
    >
      {children}
    </h1>
  );
};
