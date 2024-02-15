import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        clientId:
          "Ad5s7WLYPMLmuADWj0MvG_g2TvLWE6Eayn9QYNV-wIGgHhByyVGgXiXtcrBW3PSnXZHdJ8KEnS61leZB",
        currency: "EUR",
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
