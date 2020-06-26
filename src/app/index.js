import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "redux/store";
import Posts from "app/screens/Posts";
import Users from "app/screens/Users";
import ROUTES from "constants/routes";
import 'config/i18n';

import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "scss/base/index.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.ROOT} component={Posts} exact />
          <Route path={ROUTES.POSTS} component={Posts} />
          <Route path={ROUTES.USER} component={Users} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
