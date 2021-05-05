import React from "react";
import { useTheme } from "../store/theme";

export default () => {
  const [{ mode }] = useTheme();
  const iconClass = `${mode === "dark" ? "fill-cadet" : "fill-white"} w-8 h-8`;
  return (
    <div className="flex justify-between">
      {/* Instagram */}
      <a
        className="p-4 rounded-sm cursor-pointer"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/commonsense_finance/"
      >
        <svg
          className={iconClass}
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M505,257c0,35.8,0.1,71.6,0,107.5c-0.2,52-24.4,90.5-67.6,117.7C412.1,498,384,505,354.2,505   c-65.2,0-130.3,0.3-195.5-0.1c-45.3-0.3-84.3-16.3-115.2-49.9c-19.1-20.8-30.5-45.3-33.8-73.6c-0.7-6-0.8-11.9-0.8-17.9   c0-71.3-0.1-142.6,0-213.9C9.2,97.5,33.4,59,76.6,31.8C102.1,15.9,130.3,9,160.3,9c65,0,130-0.3,195,0.1   c45.5,0.3,84.6,16.4,115.5,50.2c18.9,20.7,30.2,45.2,33.4,73.2c1.3,11,0.7,22,0.8,32.9C505.1,196,505,226.5,505,257z M46,257   c0,36.7-0.1,73.3,0,110c0.1,25.2,9.3,46.9,26.5,64.9c23.1,24.1,51.9,35.8,85,36c65.7,0.4,131.3,0.1,197,0.1   c21.2,0,41.4-4.6,59.8-15.2c34.4-19.7,53.8-48.7,53.8-89.3c0-72.2,0-144.3,0-216.5c0-25-9.1-46.6-26.2-64.5   c-22.9-24.2-51.8-36.1-84.8-36.3C290.7,45.7,224.4,46,158,46c-20.7,0-40.3,4.9-58.3,15.1C65.4,80.9,45.9,109.9,46,150.5   C46,186,46,221.5,46,257z" />
            <path d="M257.3,363c-64.6,0-116.4-51.6-116.3-116c0.1-62.7,52.6-114.1,116.7-114c64.4,0,116.4,51.7,116.3,115.5   C373.9,311.7,321.6,363,257.3,363z M257.3,326c43.9,0,79.7-34.9,79.7-77.8c0-43.1-35.5-78.2-79.3-78.2c-43.9,0-79.7,34.9-79.7,77.8   C178,290.9,213.5,326,257.3,326z" />
            <path d="M363,123.6c0-14.2,10.9-25.6,24.5-25.6c13.6,0,24.5,11.5,24.5,25.6c0,13.9-10.9,25.3-24.3,25.4   C374.1,149.1,363,137.8,363,123.6z" />
          </g>
        </svg>
      </a>
      {/* Twitter */}
      <a
        className="p-4 rounded-sm cursor-pointer"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/Commonsense_fin"
      >
        <svg
          className={iconClass}
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M3.5,421.4c56,5.1,106.1-8.9,151.5-42.9c-7-1.6-13.4-1.6-19.5-3.1c-35.7-8.5-60.4-30-74.9-63.5   c-0.7-1.7-2.5-3.8-0.9-5.5c1.2-1.3,3.5-0.2,5.2,0c12.6,1.3,25.2,0.9,37.6-2c0.2-2.2-1.4-2-2.6-2.4c-30.7-8.2-53-26.5-67.4-54.8   c-6.6-13-10.2-26.6-10.6-41.2c-0.2-5.7,0.1-5.8,5.4-3.3c12.6,6,25.8,9.4,40.9,10.1c-6.9-5.6-13.1-10.5-18.4-16.4   c-16.1-17.9-25.1-38.8-27-62.9c-1.5-19.6,2.6-37.9,11.1-55.5c1.9-3.9,3.6-3.6,6-0.7C56.6,97.7,76.1,115,97.6,130   c16,11.2,33,20.5,50.9,28.4c23.6,10.3,48.1,17.2,73.5,21.3c8,1.3,16.2,1.6,24.3,2.4c4.1,0.4,5.2-0.8,4.4-5   c-4.1-21.6-1.3-42.6,8.1-62.3c16.1-33.6,43.1-54,79.8-59.4c32.6-4.8,61.9,4.5,86.2,27.4c3.7,3.5,7,4.4,12,3.1   c19.6-5,38.3-12.1,55.9-22.1c0.5-0.3,1.1-0.4,2.9-1.1c-8.2,24.1-22.7,41.9-43,55.5c4.7,0.9,18.6-1.6,28.2-4.6   c9.2-2.9,18.4-5.5,27.2-9.4c1.2,1.3,0.1,2-0.4,2.7c-11.7,16.5-25.1,31.4-41.1,43.8c-2.2,1.7-4.3,3.6-6.6,5.2   c-1.7,1.2-1.8,2.7-1.7,4.4c0.7,18.2-0.6,36.3-3.2,54.2c-2.7,18.3-7.3,36.1-13.4,53.6c-5,14.3-10.9,28.2-17.9,41.7   c-17.3,33.2-39.8,62.4-67.9,87.3c-29.9,26.4-63.9,45.4-101.9,57.2c-23.7,7.4-48,11.7-72.9,13c-19.2,1-38.3,0.7-57.3-1.7   c-27.2-3.3-53.4-10.7-78.6-21.5c-12.9-5.5-25.1-12.1-37.3-19C6.1,424.4,4.4,423.6,3.5,421.4z" />
          </g>
        </svg>
      </a>

      {/* Github */}
      <a
        className="p-4 rounded-sm cursor-pointer"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/commonsense-finance"
      >
        <svg
          className={iconClass}
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M200,513c0-20.3,0-40.7,0-61c3.1,0.6,1.9,3.1,1.9,4.8c0.1,16.3,0.2,32.6,0,48.9c-0.1,4.1,1,5.4,5.2,5.4   c36.6-0.2,73.2-0.2,109.8,0c4.4,0,5.1-1.6,5.1-5.5c-0.2-25-0.1-49.9-0.1-74.9c0-9.3,0.2-18.6,0.2-27.9c2.8,1.2,1.6,3.8,1.6,5.7   c0.1,34.8,0.1,69.6,0.1,104.4C282.7,513,241.3,513,200,513z" />
            <path d="M322.2,402.8c-0.1,9.3-0.2,18.6-0.2,27.9c0,25-0.1,49.9,0.1,74.9c0,3.9-0.7,5.5-5.1,5.5   c-36.6-0.2-73.2-0.2-109.8,0c-4.2,0-5.3-1.3-5.2-5.4c0.2-16.3,0.1-32.6,0-48.9c0-1.7,1.2-4.2-1.9-4.8c-9.7,0.9-19.3,3.2-29.2,2.8   c-33.5-1.3-59.5-15.4-74.7-45.8c-8.2-16.4-17.8-31.7-29.1-46c-3.1-3.9-7.9-5.5-11.5-8.7c-1.1-1-2.4-1.8-3.3-3   c-2.3-3.3-1.2-5.8,2.8-6.2c18.5-1.9,33.8,4.2,46.2,18.1c6.3,7.1,10.2,15.8,16.3,23.1c12.3,14.7,28,22.7,47,24.9   c11.5,1.3,22.4-0.9,33.3-4.2c2.2-0.6,3.1-2,3.3-4.3c0.7-10.3,2.8-20.3,6.8-29.9c1.8-4.3,4.7-7.9,6.9-12.3   c-10.3-2.6-20.7-3.4-30.5-6.4c-27.1-8.2-50.9-21.6-68.2-44.7c-8.3-11-14.1-23.3-17.4-36.5c-1.8-7.2-3.9-14.4-3.8-22   c0.1-13.3-0.5-26.7,0.3-40c0.9-16.8,3.1-33.5,9.2-49.2c3.8-9.7,9.3-18.6,17.1-25.9c2.4-2.3,3.3-4.1,1.8-7.9   c-7.4-19.7-8.1-39.8-1.8-60c0.2-0.6,0.3-1.3,0.4-2c2.2-10.3,4.5-11.3,14.3-7.4c19.2,7.5,33.3,21,45.3,37.3c3.4,4.6,2.7,6.6,10,1.9   c9.7-6.2,21-8.1,32.2-9.3c20.1-2.1,40.3-1.5,60.4-1.1c14.3,0.3,28.5,2.2,42,7.2c3.1,1.1,6,2.8,8.7,4.8c2.1,1.6,3.6,1.6,5.6-1.1   c9.1-12.8,19.5-24.4,33-32.6c6.6-4,13.4-7.7,21.4-8.6c3.3-0.4,4.7,0.7,5.6,3.3c8.3,22.9,9.5,45.7-0.2,68.5   c-1.2,2.8-0.8,4.6,1.3,6.5c16,15,21.8,34.5,24.8,55.5c2.5,17.7,3.2,35.5,2.7,53.3c-0.8,31.2-11.4,58.4-34.4,80.1   c-13.5,12.7-29.7,21.1-47.1,27.5c-12.4,4.6-25.5,5.8-38.5,9c1.3,3.1,3.7,5.4,4.3,8.5c-0.3,1.3,0.4,2,1.6,2.3   c0.1,0.6,0.3,1.1,0.4,1.7c0.3,2.1,0.1,4.3,2.5,5.4c0.5,2.2,1,4.5,1.4,6.7c-0.1,1.7-0.7,3.5,1.6,4.3c0,0.6,0.1,1.2,0.1,1.9   c-1.5,2.3-0.1,4.1,1.1,6C322.1,398.9,322.2,400.9,322.2,402.8z" />
            <path d="M322,397c-1.1-1.9-2.6-3.7-1.1-6C322.1,392.9,323,394.8,322,397z" />
            <path d="M317.7,378.2c-2.4-1.1-2.2-3.3-2.5-5.4C317.4,374,317.7,376,317.7,378.2z" />
            <path d="M320.8,389.1c-2.3-0.8-1.7-2.6-1.6-4.3C321.5,385.6,321,387.5,320.8,389.1z" />
            <path d="M314.8,371.1c-1.2-0.3-1.9-1-1.6-2.3C314.5,369.1,315.1,369.8,314.8,371.1z" />
          </g>
        </svg>
      </a>
    </div>
  );
};
