import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import "./styles/index.css";
import "./styles/fonts.css";

// mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

// mui rtl
import { CacheProvider } from "@emotion/react";
import cacheRtl from "./mui/cache";

// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CacheProvider value={cacheRtl}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
  </CacheProvider>
);
