import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:8800", // your backend server
        target: "https://secure-user-authentication-system.onrender.com", // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
