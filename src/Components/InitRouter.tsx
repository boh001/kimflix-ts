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
  <Router>
    <Header />
    <Layout>
      <Switch>
        {route.map(({ path, page, exact }, key) => (
          <Route key={key} exact={exact} path={path} component={page} />
        ))}
        <Redirect path="*" to="/" />
      </Switch>
    </Layout>
  </Router>
);
export default InitRouter;
