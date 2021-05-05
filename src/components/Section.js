import React from "react";

export default ({ children, className = "" }) => {
  return (
    <section className={`max-w-screen-xl p-4 ${className}`}>{children}</section>
  );
};
