export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    foodApiKey: process.env.API_KEY
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
