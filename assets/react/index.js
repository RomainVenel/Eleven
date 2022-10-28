import React from "react";
import * as ReactDom from "react-dom";
import {createRoot} from "react-dom/client";
import App from "./components/app";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <App/>
);