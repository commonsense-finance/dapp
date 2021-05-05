import React from "react";
import P from "./P";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../store/theme";

export default ({ title, children, icon }) => {
  const [{ mode }] = useTheme();
  return (
    <div
      className={`p-4 rounded-md dark:text-white h-full ${
        mode === "dark" ? "shadow-sm-dark" : "shadow-sm-light"
      }`}
    >
      <div className="flex flex-col items-center">
        {icon && <FontAwesomeIcon icon={icons[icon]} size="lg" />}
        <h4 className="mt-4 text-xl font-bold text-center uppercase font-secondary tracking-brand dark:text-gold text-orange">
          {title}
        </h4>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};
