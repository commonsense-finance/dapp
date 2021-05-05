import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

export const routes = [
  { path: "/", component: Landing, sidebar: false, type: "simple" },
  { path: "/dashboard", component: Dashboard, sidebar: true, type: "sidebar" },
];
