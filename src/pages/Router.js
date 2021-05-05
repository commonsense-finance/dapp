import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Fragment } from "react";
import Dashboard from "./Dashboard";
import Landing from "./Landing";

const RouteWithSidebar = ({ path, component }) => {
  return (
    <Fragment>
      <Sidebar />
      <Route path={path} exact={path === "/"} component={component}></Route>
    </Fragment>
  );
};

const SimpleRoute = ({ path, component }) => {
  return (
    <Fragment>
      <Navbar />
      <Route path={path} exact={path === "/"} component={component}></Route>
    </Fragment>
  );
};

const Routes = {
  sidebar: RouteWithSidebar,
  simple: SimpleRoute,
};

export default () => {
  return (
    <Switch>
      {/* {routes.map(({ component, path, type }) => {
        const Type = Routes[type];
        return <Type path={path} key={path} component={component} />;
      })} */}
      <RouteWithSidebar path="/dashboard" component={Dashboard} />
      <SimpleRoute path="/" component={Landing} />
    </Switch>
  );
};
