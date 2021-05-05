import React, { useCallback } from "react";
import { useTheme } from "../store/theme";
import Logo from "../components/Logo";
// import Link from "../components/Link";
// import { Link as RouterLink, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useSpring, animated } from "react-spring";

const typeformUrl = "https://ilzunxk6buh.typeform.com/to/vsX0wzkJ";

export default () => {
  // const location = useLocation();
  const [{ mode }, setTheme] = useTheme();
  const toggleNightMode = useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    setTheme({ mode: next });
    document.documentElement.classList.replace(mode, next);
  }, [mode]);
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    // immediate: false,
    config: {
      duration: 500,
    },
  }));
  const onClick = () => {
    window.open(typeformUrl);
  };
  return (
    <animated.div
      className={`sticky inset-0 z-10 ${
        mode === "dark" ? "bg-cadet-dark" : "bg-white"
      } flex justify-center`}
      style={styles}
    >
      <nav
        className={`flex justify-between w-full p-2 md:py-4 md:px-8 max-w-screen-3xl transparent`}
      >
        {/* <RouterLink className="flex items-center w-1/4" to="/">
          <Logo />
        </RouterLink> */}
        <div className="flex items-center w-1/4">
          <Logo />
        </div>
        <ul className="flex items-center justify-end">
          {/* {location.pathname !== "/dashboard" && ( */}
          <>
            <li className="hidden md:block">
              <Button variant="highlight" onClick={onClick}>
                JOIN THE PRIVATE BETA
              </Button>
            </li>
            <li>
              <Button to="/contact" variant="outline">
                CONTACT
              </Button>
            </li>
          </>
          {/* )} */}
          <li>
            <Button
              variant="outline"
              className="w-16"
              onClick={toggleNightMode}
            >
              <FontAwesomeIcon
                icon={mode === "light" ? faSun : faMoon}
                className="w-16 h-6"
                size="lg"
              />
            </Button>
          </li>
        </ul>
      </nav>
    </animated.div>
  );
};
