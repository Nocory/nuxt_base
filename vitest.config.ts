import { defineConfig } from "vitest/config"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    deps: {
      // necessary to avoid "Vitest was initialized with native Node instead of Vite Node" error when running tests
      inline: ["@nuxt/test-utils-edge"],
    }
  },
})