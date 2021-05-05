import React from "react";

export default ({ children, className }) => {
  return (
    <p className={`tracking-brand leading-snug font-secondary ${className}`}>
      {children}
    </p>
  );
};
