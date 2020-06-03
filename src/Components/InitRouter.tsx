import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import route from "./route";
import Header from "./Header/Header";
import Layout from "./Layout/Layout";

const InitRouter: React.FC = () => (
  <Router basename={window.location.pathname || ""}>
    <Header />
    <Layout>
      <Switch>
        {route.map(({ path, page, exact }, i) => (
          <Route exact={exact} path={path} component={page} />
        ))}
        <Redirect path="*" to="/" />
      </Switch>
    </Layout>
  </Router>
);
export default InitRouter;
