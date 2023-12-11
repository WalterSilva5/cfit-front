import { HttpProvider } from './http.provider';
import axios from 'axios';
import { store } from '../store/store';
import * as authDuck from '../store/reducers/auth.duck';

export class AppApiProvider extends HttpProvider {
  constructor() {
    const instance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
      headers: {
        'Content-type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    super(instance);
  }

  async makeHttpRequest(config: any) {
    const auth = this.getAuthData();
    console.log('auth', auth);
    const authData = auth?.auth?.authData;
    console.log('authData', authData);

    if (authData?.accessToken) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${authData.accessToken}`
      };
    }
    return super.makeHttpRequest(config);
  }

  getAuthUser() {
    const { user } = store.getState();
    return user;
  }

  async handleRequestError(e: any, config: any) {
    console.log(`Error ${e} on ${config.url}`);
    if (e.response.status !== 401) {
      return super.handleRequestError(e, config);
    }

    const authData = this.getAuthData();

    if (authData && authData.refreshToken) {
      const response = await super.makeHttpRequest({
        ...config,
        url: 'auth/refresh',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authData.refreshToken}`
        }
      });

      if (response) {
        store.dispatch(
          authDuck.actions.refresh({
            ...authData,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
          })
        );

        return this.makeHttpRequest(config);
      }
    }
  }
}
