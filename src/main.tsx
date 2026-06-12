import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";

// StrictMode kapalı: @react-three/fiber 9.6.1'in render loop'u StrictMode'un
// çift mount/unmount'unda duruyor (useFrame hiç çalışmıyor). Fiber düzeltene kadar kapalı.
createRoot(document.getElementById("root")!).render(<App />);
