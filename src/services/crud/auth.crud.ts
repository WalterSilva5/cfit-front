import { AppAPIService } from '../AppAPIService'
import Swal from 'sweetalert2'
const api = new AppAPIService()
export async function login (
  login: string,
  password: string,
  api: AppAPIService
) {
  const config = {
    url: '/osweb/auth',
    method: 'POST',
    data: { login, password },
    isLogin: true
  }

  return await api.makeHttpRequest(config)
}

export async function getUserData (token: string, api: AppAPIService) {
  try {
    const config = {
      url: '/osweb/user-info',
      method: 'GET',
      params: { token }
    }

    return await api.makeHttpRequest(config)
  } catch (e) {
    console.log(e)
    window.location.href = '/'
    window.location.reload()
  }
}

export async function logout (api: AppAPIService) {
  const config = {
    url: '/osweb/logout',
    method: 'POST'
  }

  return await api.makeHttpRequest(config)
}

export async function getMe () {
  const authData = localStorage.getItem('authData')
  if (!authData) return null
  const userData = JSON.parse(authData)
  console.log('userData', userData)
  if (!userData?.refresh_token) return null

  const config = {
    url: '/osweb/user-info',
    method: 'GET',
    params: { token: userData.refresh_token }
  }
  let result
  try {
    result = await api.makeHttpRequest(config)
  } catch (e) {
    console.log(e)
  }
  if (!result?.user_id) {
    showLogoutMessage()
  }
}

export function showLogoutMessage () {
  Swal.fire({
    title: 'Oops...',
    text: 'Você deve fazer login para acessar essa página',
    icon: 'warning',
    showCancelButton: true
  }).then((result) => {
    try {
      api.logout()
    } catch (e) {
      console.log(e)
      localStorage.clear()
      window.location.href = '/'
      window.location.reload()
    }
  })
}
