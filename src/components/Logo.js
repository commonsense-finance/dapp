import React from "react";
import { useTheme } from "../store/theme";

export default ({ className, inverted }) => {
  const [{ mode }] = useTheme();

  let fill = mode === "dark" ? "fill-white" : "fill-cadet";
  if (inverted) {
    fill = mode === "dark" ? "fill-cadet" : "fill-white";
  }
  return (
    <div className="flex">
      <svg
        viewBox="0 0 316 209"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-1/4 mr-4"
      >
        <path
          d="M94.5339 0.599948C65.3339 4.79995 45.8339 14.2999 28.3339 32.7999C-14.1661 77.8999 -8.06609 150.5 41.3339 187.8C81.3339 217.9 138.434 215 174.834 181C192.734 164.3 203.434 144 207.034 120.3C207.834 114.9 208.534 109 208.534 107.2V104H183.534H158.534V108.2C158.434 122.3 149.034 139.3 136.034 148.5C123.734 157.3 107.234 161 93.2339 158C73.5339 153.9 56.2339 137.3 51.1339 117.4C43.0339 86.1999 66.1339 53.3999 98.3339 50.2999L104.534 49.6999V24.8999V-5.19361e-05L100.834 0.0999481C98.7339 0.199948 95.9339 0.399948 94.5339 0.599948Z"
          className={`${fill} ${className}`}
        />
        <path
          d="M221 207.975C250.2 203.775 269.7 194.275 287.2 175.775C329.7 130.675 323.6 58.075 274.2 20.775C234.2 -9.32499 177.1 -6.42499 140.7 27.575C122.8 44.275 112.1 64.575 108.5 88.275C107.7 93.675 107 99.575 107 101.375V104.575H132H157V100.375C157.1 86.275 166.5 69.275 179.5 60.075C191.8 51.275 208.3 47.575 222.3 50.575C242 54.675 259.3 71.275 264.4 91.175C272.5 122.375 249.4 155.175 217.2 158.275L211 158.875V183.675V208.575L214.7 208.475C216.8 208.375 219.6 208.175 221 207.975Z"
          fill="#75BFC0"
          className="fill-bluegreen"
        />
      </svg>
      <svg
        viewBox="0 0 666 66"
        fill="none"
        className={`hidden md:block ${fill} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.4 2.09998C16.1 3.59998 8.7 9.19998 5.3 14.3C-3.6 27.5 -0.799999 49.8 10.8 58.7C20 65.7 36.6 67.1 48.2 61.8L54 59.1L51.3 53.3C49.9 50.1 48.6 47.3 48.4 47.1C48.3 47 45.6 48 42.5 49.5C37.7 51.9 36.1 52.2 31.3 51.7C24.5 51 21.3 48.8 18.2 42.9C16.2 39.2 15.9 37.4 16.3 31.8C16.8 24.1 19 19.6 24 16.3C28.5 13.2 38 13.1 42.8 16C44.6 17.1 46.5 17.8 47 17.5C48.1 16.8 53 8.09998 53 6.79998C53 6.29998 50.6 4.79998 47.8 3.49998C43.3 1.39998 41.1 0.999979 33.5 1.09998C28.6 1.09998 23.1 1.59998 21.4 2.09998Z" />
        <path d="M73.2 3.5C61.4 9.5 55.3 23.4 57.7 38.9C60.4 56 70.5 65 87 65C104.4 65 115.5 54.3 116.7 36.3C117.7 21.3 113.3 10.5 103.6 4.5C99.2 1.8 97.8 1.5 88.6 1.2C79.3 0.899999 78.1 1.1 73.2 3.5ZM94.6 15.5C98.1 17.8 100.2 22.7 100.8 30C101.4 38.5 99.7 44.5 95.5 48.7C92.7 51.5 91.5 52 87.2 52C78.8 52 74.4 46.8 73.3 35.7C72.4 25.3 75.7 17.4 82.4 14.4C86 12.8 91.2 13.2 94.6 15.5Z" />
        <path d="M142.4 2.4C140.6 3.2 138.9 4.3 138.6 4.9C137.5 6.6 136.2 6.2 135.5 4C135 2.3 134 2 128.9 2H123V33V64H131H139V41.6V19.2L142.1 16.6C146.2 13.1 151.8 13.1 155.7 16.4L158.5 18.8L158.8 41.4L159.1 64H166.6H174V41.6V19.1L177.3 16.6C182.3 12.8 188 13 191.4 17.1L194 20.2V42.1V64H201.5H209V41.7C209 19.6 209 19.3 211.3 17.2C216.3 12.5 224.5 12.8 227.7 17.7C229.3 20 229.5 23.5 229.8 42.2L230.2 64H237.6H245.1L244.8 39.7C244.5 12.4 244 10.4 236.7 4.6C233.5 2 231.8 1.5 226 1.2C217.1 0.699999 213.1 1.4 208.6 4.5C206.4 6 204.8 6.5 204.4 5.8C204 5.3 201.9 3.9 199.6 2.9C193.4 0.099999 182 0.299999 175.3 3.4L170.2 5.8L165.4 3.4C161.6 1.5 159.2 0.999999 153.1 0.999999C148.9 1.1 144.1 1.7 142.4 2.4Z" />
        <path d="M267.3 3.50001C261.3 6.60001 256.6 11.5 253.6 17.9C250.8 24.2 250.7 39.1 253.4 46.9C256 54.4 263 61.3 270.1 63.4C282.2 67 294.5 64.6 302 57.1C316.1 43 313 12.5 296.5 4.00001C292.4 1.90001 289.9 1.40001 282 1.20001C273.4 0.900005 272 1.10001 267.3 3.50001ZM288.5 15.4C292.2 17.9 294.3 22.8 294.8 30.5C295.6 43.7 290.1 52 280.4 52C271.4 52 266.1 43 267.3 29.9C267.9 22.9 270.3 18.4 275.1 15.2C278.9 12.5 284.3 12.6 288.5 15.4Z" />
        <path d="M335.5 3.4C330.8 5.8 329.1 5.7 329 2.7C329 2.3 326.3 2 323 2H317V33V64H324.5H332V42.1C332 18.1 331.9 18.7 338.3 15.4C341.8 13.5 347.9 13.4 350.9 15C355.6 17.5 356.4 21.1 356.8 43.2L357.2 64H364.7H372.2L371.8 40.7C371.5 18 371.4 17.3 368.9 12.5C367.4 9.5 364.7 6.3 362.1 4.5C358.3 1.8 356.9 1.5 349.2 1.2C341.5 0.899999 339.9 1.2 335.5 3.4Z" />
        <path d="M388.5 2.9C379.9 6.8 376.2 15.4 379.5 23.8C381.7 29.2 386.4 33.2 394.8 37.1C398.5 38.7 402.5 41 403.7 42.2C406.4 44.7 406.7 49.2 404.4 51.1C401.9 53.2 394 52.7 388.7 50.1C386 48.8 383.7 47.9 383.5 48.2C382.8 48.8 379 58.1 379 59.1C379 59.6 380.9 61 383.3 62.2C386.9 64.2 389 64.5 397.5 64.5C406 64.5 408.2 64.1 412.2 62.2C418.8 58.9 421.3 55 421.8 47.4C422.5 37.1 419.3 33 405.5 26.5C400.5 24.2 395.9 21.5 395.1 20.6C393.2 18.3 395.1 14.3 398.5 13.4C401.9 12.6 408.9 13.7 411.8 15.6C413.1 16.5 414.3 17 414.5 16.8C415.4 15.9 418.9 5.6 418.5 4.9C418.2 4.5 415.9 3.5 413.3 2.6C406.8 0.399999 393.7 0.499999 388.5 2.9Z" />
        <path d="M447.5 2.2C431.3 8.3 423.5 26.9 429 46.2C430.7 52.2 436 58.2 442.5 61.5C447.9 64.3 449.1 64.5 458.9 64.5C466.7 64.5 470.7 64 474.2 62.7C481.2 60 481.6 59.1 478.4 52.8C477 49.9 475.7 47.4 475.6 47.3C475.5 47.2 473.2 48.2 470.5 49.6C459.6 55.2 446.5 50.7 443.5 40.2L442.9 38H464.8H486.8L487.4 34.9C489.9 22.3 484.8 10.5 474.2 4.3C470.2 1.9 468.3 1.5 460 1.3C454.7 1.2 449.2 1.5 447.5 2.2ZM466.9 15.9C468.1 16.6 470 19 471 21.3L472.9 25.5L458.8 25.8C451.1 25.9 444.5 25.9 444.3 25.6C443.4 24.7 447.4 17.8 449.7 16.3C454.5 13.1 461.3 13 466.9 15.9Z" />
        <path d="M512.5 3.5C507.8 5.8 506.1 5.6 506 2.7C506 2.3 503.3 2 500 2H494V33V64H502H510V41.7C510 20.8 510.1 19.2 511.9 17.6C517 13 526.1 12.6 530.2 16.8C533.2 19.8 534 25.1 534 45.2V64H541.6H549.1L548.8 40.2C548.5 18.2 548.3 16.2 546.3 12.5C541.9 4.2 535.9 0.999999 524.7 0.999999C518.9 0.999999 516.3 1.5 512.5 3.5Z" />
        <path d="M565.5 2.9C556.9 6.8 553.2 15.4 556.5 23.8C558.7 29.2 563.4 33.2 571.8 37.1C575.5 38.7 579.5 41 580.7 42.2C583.4 44.7 583.7 49.2 581.4 51.1C578.9 53.2 571 52.7 565.7 50.1C563 48.8 560.7 47.9 560.5 48.2C559.8 48.8 556 58.1 556 59.1C556 59.6 557.9 61 560.3 62.2C563.9 64.2 566 64.5 574.5 64.5C583 64.5 585.2 64.1 589.2 62.2C595.8 58.9 598.3 55.1 598.8 47.3C599.2 41.9 598.9 40.4 596.6 36.5C594.2 32.5 592.8 31.4 583.5 27C572.7 21.8 570.2 19.4 571.9 16.1C573.9 12.4 581.3 11.9 587.5 15C589.6 16.1 591.5 16.9 591.6 16.7C592.5 15.9 595.8 5.5 595.5 4.9C595.2 4.5 592.9 3.5 590.3 2.6C583.8 0.399999 570.7 0.499999 565.5 2.9Z" />
        <path d="M621.3 4C610 9.7 604.6 19.1 604.6 33C604.5 47.8 609.1 56.5 619.8 61.7C624.9 64.2 626.5 64.5 636 64.5C643.7 64.5 647.7 64 651.2 62.7C658.2 60 658.6 59.1 655.4 52.8C654 49.9 652.7 47.4 652.6 47.3C652.5 47.2 650.2 48.2 647.5 49.5C636.7 55 623.9 51 621 41.2L620.1 38H642C666.8 38 665 38.8 665 28.4C665 18.2 660 9.4 651.2 4.3C647.2 1.9 645.2 1.5 637 1.2C628 0.899999 627.2 0.999999 621.3 4ZM643.9 15.9C645.1 16.6 647 19 648 21.3L649.9 25.5L635.8 25.8C628.1 25.9 621.5 25.9 621.3 25.6C620.4 24.7 625.1 17 627.3 15.9C632.4 13.1 638.6 13.1 643.9 15.9Z" />
      </svg>
    </div>
  );
};
