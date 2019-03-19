import axios from 'axios'

const API_URL = 'http://localhost:5000/contacts'

const http = axios.create({
  baseURL: API_URL
})

const list = () => { http.get(`/`) }

const create = (contact) => { http.post(`/`), contact }

const getOne = (id) => { http.get(`/${id}`) }

const deleteOne = (id) => { http.delete(`/${id}`) }

const update = (id) => { http.put(`/${id}`) }

export { list, create, getOne, deleteOne, update };