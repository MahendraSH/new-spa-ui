import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const url = env.VITE_APP_API_URL;
  return {

    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      proxy: { "/api": url },

    },
  }
});
