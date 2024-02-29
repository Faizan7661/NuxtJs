export default defineNuxtConfig({
  runtimeConfig:{
    foodApiKey: process.env.API_URL
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
  