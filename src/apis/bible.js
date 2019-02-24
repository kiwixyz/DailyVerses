import axios from 'axios'

// https://docs.api.bible/v1.0/reference#getpassage-1
export const bibleApi = bookID => {
  const instance = axios.create({
    baseURL: `https://api.scripture.api.bible/v1/bibles`,
    headers: { 'api-key': '2f76641fb29d30183069fc88a5ba4641' },
  })

  instance.interceptors.request.use(
    config => {
      if (config.url && bookID) {
        config.url = `/${bookID}${config.url}`
      }
      if (config.url && config.url.includes('passages')) {
        config.params = {
          'include-notes': true,
          // 'include-chapter-numbers': true,
          // 'include-verse-numbers': true,
        }
      }
      return config
    },
    error =>
      // Do something with request error
      Promise.reject(error)
  )

  return instance
}
