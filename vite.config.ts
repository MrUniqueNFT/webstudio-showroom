import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Local geliştirme her zaman http://localhost:5173/ üzerinden çalışır.
  // GitHub Pages build'i için base, repo adıyla eşleşmelidir:
  // https://KULLANICI_ADI.github.io/webstudio-showroom/
  base: command === "build" ? "/webstudio-showroom/" : "/",
}));
