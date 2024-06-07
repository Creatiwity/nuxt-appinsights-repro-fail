// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
    strict: true,
  },
  modules: ['nuxt-applicationinsights'],
  runtimeConfig: {
    test: 'hello world',
    public: {
      applicationinsights: {
        connectionString: ''
      }
    }
  },
})
