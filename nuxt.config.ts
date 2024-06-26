// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Open Sans": {
        wght: [400, 500, 600, 700],
      },
    },
    subsets: ["latin"],
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
