import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Application root missing");
createRoot(root).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
