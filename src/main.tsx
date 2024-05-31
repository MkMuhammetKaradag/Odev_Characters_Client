import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ApolloProvider } from "@apollo/client";
import { client } from "./appolo.ts";
import ReduxProvider from "./context/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
);
