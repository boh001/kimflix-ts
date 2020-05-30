import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Routes/Home";

export default () => (
  <Router basename={window.location.pathname || ""}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    {/* <Header />
    <MainFrame>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route path="/myContents" component={MyContents} />
    </Switch>
    </MainFrame> */}
  </Router>
);
