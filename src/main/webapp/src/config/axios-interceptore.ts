import axios from 'axios'


// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem("token")
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)