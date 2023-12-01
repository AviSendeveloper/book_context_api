import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./Context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
);
