import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Port pair is per-client so two prototypes can run side by side.
// Santos 5199/5200 - Sudz 5299/5300 - Mainstream 5399/5400.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 5399, strictPort: true },
  preview: { port: 5400, strictPort: true },
});
