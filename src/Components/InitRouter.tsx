import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import route from "./route";
import Header from "./Header/Header";

const InitRouter: React.FC = () => (
  <Router basename={window.location.pathname || ""}>
    <Header />
    {/* <MainFrame /> */}
    <Switch>
      {route.map(({ path, page, exact }, i) => (
        <Route exact={exact} path={path} component={page} />
      ))}
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);
export default InitRouter;
