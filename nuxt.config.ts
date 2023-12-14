// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  routeRules: {
    "/static": { static: true },
    "/prerendered": { prerender: true },
    "/ssr": { ssr: true },
    "/spa": { ssr: false },
  },
});
