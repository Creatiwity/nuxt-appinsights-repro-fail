export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
  
    return config.test.replace('world', 'earth')
  })