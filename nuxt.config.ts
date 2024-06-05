// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "shadcn-nuxt"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Open Sans": {
        wght: [400, 600, 700],
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
