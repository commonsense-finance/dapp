// =========================================================
// * Common Sense Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./scss/main.scss";

import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import Router from "./pages/Router";

import { Web3Provider } from "./store/web3";
import { ThemeProvider } from "./store/theme";

ReactDOM.render(
  <ThemeProvider>
    <Web3Provider>
      <HashRouter>
        <Router />
      </HashRouter>
    </Web3Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
