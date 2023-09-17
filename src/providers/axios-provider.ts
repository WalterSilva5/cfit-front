import axios from 'axios'
// TODO set right types
export default class AxiosProvider {
  public axios: any
  constructor () {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }

  get (url: any, params: any) {
    return this.axios.get(url, { params })
  }

  post (url: any, data: any) {
    return this.axios.post(url, data)
  }

  put (url: any, data: any) {
    return this.axios.put(url, data)
  }

  delete (url: any, data: any) {
    return this.axios.delete(url, data)
  }
}
