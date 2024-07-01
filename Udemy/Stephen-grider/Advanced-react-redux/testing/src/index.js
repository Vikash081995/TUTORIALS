import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root>
    <BrowserRouter>
    <Route path="/" component={App}/>
    </BrowserRouter>
  </Root>
);
