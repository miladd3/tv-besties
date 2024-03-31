import axios from 'axios'
import { apiUrl } from '@/conts.js'

export const initAxios = () => {
  // Set the base URL for API requests
  axios.defaults.baseURL = apiUrl

  // Set common headers, if needed
  // axios.defaults.headers.common['Authorization'] = 'Bearer your-token'

  // Set request timeout, if needed
  axios.defaults.timeout = 5000

  // Add request interceptors, if needed
  axios.interceptors.request.use(
    (config) => {
      // Add any request transformations or headers here
      return config
    },
    (error) => {
      // Handle request errors here
      return Promise.reject(error)
    }
  )

  // Add response interceptors, if needed
  axios.interceptors.response.use(
    (response) => {
      // Add any response transformations or error handling here
      return response
    },
    (error) => {
      // Handle response errors here
      return Promise.reject(error)
    }
  )
}
