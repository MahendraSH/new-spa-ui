import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "./app/store.js";
import "./index.css";

import ScrollTop from "./hooks/scroll-to-top";
import CustomThemeProvider from "./theme/custom-theme-provider.jsx";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Loader from "./components/Loader.jsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

export const RootComponent = () => {
  const { isLoading } = useAuth0();

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter basename="/">
          <CustomThemeProvider>
            <ScrollTop>
              {isLoading ? <Loader /> : <App />}
              <Toaster
                position="bottom-center"
                gutter={5}
                toastOptions={{ duration: 4000 }}
              />
            </ScrollTop>
          </CustomThemeProvider>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
