import React from "react";
import { useTheme } from "../store/theme";

export default ({ children, onClick, variant = "default", className }) => {
  const [{ mode }] = useTheme();
  const classes = {
    outline: `flex items-center justify-center p-2 md:p-3 
       text-center transition-colors duration-500 
       rounded-md font-secondary font-bold radius-sm tracking-brand
       text-cadet hover:bg-cadet hover:text-white
       dark:text-white dark:hover:bg-white dark:hover:text-cadet`,
    highlight: `flex items-center justify-center p-2 md:p-3
      text-center transition-colors duration-500
      rounded-md font-secondary font-bold radius-sm
      text-white bg-bluegreen tracking-brand
      hover:bg-white hover:text-bluegreen
  `,
  };
  return (
    <button className={`${classes[variant]} ${className} ${mode === 'dark' ? 'shadow-sm-dark' : 'shadow-sm-light'}`} onClick={onClick}>
      {children}
    </button>
  );
};
