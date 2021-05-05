import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../store/theme";

export default ({ children, variant = "default", to, icon, className }) => {
  const [{ mode }] = useTheme();
  const classes = {
    outline: `flex items-center justify-center p-2 md:p-3 mx-2
       text-center transition-colors duration-500
       rounded-md font-secondary font-bold radius-sm tracking-brand
       text-cadet hover:bg-cadet hover:text-white
       dark:text-white dark:hover:bg-white dark:hover:text-cadet`,
    highlight: `flex items-center justify-center p-3 mx-2
       text-center transition-colors duration-500
       rounded-md font-secondary font-bold radius-sm
       text-white bg-bluegreen tracking-brand
       hover:bg-white hover:text-bluegreen 
    `,
    default:
      "flex items-center justify-center p-2 md:p-3 mx-2 tracking-brand text-white transform transition-colors duration-500 font-secondary hover:text-cadet-lighter",
  };
  return (
    <Link
      to={to}
      className={classes[variant]}
      className={`${classes[variant]} ${className} ${
        mode === "dark" ? "shadow-sm-dark" : "shadow-sm-light"
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mx-2" />}
      {children}
    </Link>
  );
};
