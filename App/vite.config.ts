import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  //Host para rede local
  server: {
    host: "0.0.0.0",
    port: 3000,

    //proxy para uso em localhost
    proxy: {
      "/api": {
        target: "https://de1.api.radio-browser.info",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/json"),
      },
    },
  },
});
