import React from "react";
import Logo from "../components/Logo";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Link from "../components/Link";

const SidebarLink = ({ to, children }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      variant={location.pathname === to ? 'outline' : 'default'}
    >
      {children}
    </Link>
  );
};

export default () => {
  return (
    <aside className="fixed inset-0 w-1/4 h-full p-4 shadow-sm bg-cadet-light">
      <RouterLink className="w-full p-1" to="/">
        <Logo className="w-full" />
      </RouterLink>
      <ul>
        <li>
          <SidebarLink to="/dashboard">Index</SidebarLink>
        </li>
      </ul>
    </aside>
  );
};
