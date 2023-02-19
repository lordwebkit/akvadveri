// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "initial-scale=1",
      title: "АкваДверь",
      meta: [
        {
          name: "description",
          content:
            "Двери оптом купить от официального производителя АкваДверь в России. Доставка по всем регионам.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/styles/main.scss"],
});
