import "../fake-db";
import "../styles/_app.scss";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import MatxTheme from "./Layout/MatxTheme/MatxTheme";
import AppContext from "./appContext";
import history from "history.js";

import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import Auth from "./auth/Auth";
import Layout from "./Layout/Layout";
import AuthGuard from "./auth/AuthGuard";

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <MatxTheme>
          <Auth>
            <Router history={history}>
              <AuthGuard>
                <Layout />
              </AuthGuard>
            </Router>
          </Auth>
        </MatxTheme>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
