import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

export default ({ delay = 0, children }) => {
  const mainRef = useRef();
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, translateY: "-20px" },
    immediate: false,
    delay,
    config: {
      duration: 500,
    },
  }));
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          api.start({ to: { opacity: 1, translateY: "0px" }, delay });
          observer.unobserve(mainRef.current);
        }
      },
      { threshold: 1 }
    );
    if (mainRef.current) {
      observer.observe(mainRef.current);
    }
  }, []);

  const id = Math.floor(Math.random() * 100);
  return (
    <animated.div ref={mainRef} style={styles} className="h-full">
      {children}
    </animated.div>
  );
};
