import React from "react";

export default ({ children, className }) => {
  return (
    <h2 className={`leading-relaxed tracking-widest font-primary ${className}`}>
      {children}
    </h2>
  );
};
