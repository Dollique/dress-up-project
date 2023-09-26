// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_PATH: process.env.API_PATH,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt", // Vue Store
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
