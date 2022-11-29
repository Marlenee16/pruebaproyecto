import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./contexts/UserContext";
import { ConfigProvider} from "./contexts/ConfigContext";


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
axios.defaults.baseURL = import.meta.env.VITE_APIENDROINT || "http://localhost:3000/api"
root.render(
  <BrowserRouter>
  <ConfigProvider>
  <UserContextProvider>
    <App />
    </UserContextProvider>
    </ConfigProvider>
  </BrowserRouter>
);