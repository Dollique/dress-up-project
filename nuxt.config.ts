// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_PATH: process.env.API_PATH,
      API_PARAMS: process.env.API_PARAMS,
      API_TOKEN: process.env.API_TOKEN,
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
