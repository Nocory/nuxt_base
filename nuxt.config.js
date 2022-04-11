import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  ssr: false,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt"
  ],
  experimental: {
    reactivityTransform: true
  }
})
