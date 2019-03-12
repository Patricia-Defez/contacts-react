import axios from 'axios'

const API_URL = 'https://ironbeer-api.herokuapp.com/beers/'

const http = axios.create({
  baseURL: API_URL
})

const list = () => {
  return http.get(`/`)
}

const create = () => {
  return http.post(`/`)
}

const get = () => {
  return http.get(`/${id}`)
}

const delete = () => {
  return http.delete(`/${id}`)
}

const update = () => {
  return http.put(`/${id}`)
}

export { list, create, get, delete, update };