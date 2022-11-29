import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "http://localhost:3000/api/recetas"

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);