import axios from 'axios';
import { AppAPIService } from 'providers';
import { settings as configSettings } from '../../../settings';
let api = new AppAPIService();

export async function getOne(id: number) {
  try {
    const apiSettings: any = configSettings;
    const baseUrl = api.axios.defaults.baseURL;
    let instance = api.axios;
    const userData = JSON.parse(localStorage.getItem('authData') || '{}');
    console.log('OS ID to get', id);
    console.log('userData', userData);
    if (!baseUrl) {
      console.log('axios base url is empty, setting it from localstorage');
      const settings = JSON.parse(localStorage.getItem('settings') || '{}');
      if (!settings.url) {
        settings.url = apiSettings[settings.environment].url;
        instance = axios.create({
          baseURL: settings.url
        });
        api = new AppAPIService();
        api.axios = instance;
      }
    }
    api.axios = instance;
    const config = {
      url: '/osweb/service-order/' + id,

      method: 'GET',
      // get user from localstorage and send userId
      params: {
        userId: userData.user_id
      }
    };
    return await api.makeHttpRequest(config);
  } catch (e) {
    console.log(e);
    window.location.href = '/';
    window.location.reload();
  }
}
