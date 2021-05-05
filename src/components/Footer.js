import React from "react";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import H2 from "./H2";

export default () => {
  return (
    <footer className="bottom-0 flex items-center justify-between w-full px-8 py-8 bg-cadet-dark dark:bg-white">
      <div>
        <div className="w-1/2">
          <Logo inverted={true} />
        </div>
        <H2 className="mt-6 text-white dark:text-cadet font-secondary tracking-brand">
          Creating value for society rather than extract it.
        </H2>
        <H2 className="mt-2 text-white dark:text-cadet font-secondary tracking-brand">
          2021
        </H2>
      </div>
      <div>
        <SocialMedia />
      </div>
    </footer>
  );
};
