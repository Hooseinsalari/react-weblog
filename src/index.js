import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";

// mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cl8u9iglf5ea501t8adk19frs/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
