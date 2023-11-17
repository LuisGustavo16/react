import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gustavo-698c.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api