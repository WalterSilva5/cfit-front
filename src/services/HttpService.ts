import store from '../store/store';
import * as authDuck from '../redux/ducks/auth.duck';
import axios from 'axios';

const TIMEOUT = 300000; // 5 minutos

export class HttpService {
  axios: any;
  constructor(axiosInstance: any) {
    if (!axiosInstance) {
      throw new Error('Setup do axios não fornecido');
    }

    this.axios = axiosInstance;
  }

  getAuthData() {
    const { auth } = store.getState();
    return auth;
  }

  async makeHttpRequest(config: any) {
    const source = axios.CancelToken.source();
    config.timeout = config?.timeout ?? TIMEOUT;

    setTimeout(() => {
      source.cancel();
    }, config.timeout - 1000);

    config.cancelToken = source.token;

    try {
      const httpResponse = await this.axios.request(config);
      return config.responseType === 'blob' ? httpResponse : httpResponse.data;
    } catch (e: any) {
      console.log(`Error on makeHttpRequest ${e} on ${config.url}`);
      if (e?.response?.status === 401 && e.config.url.includes('refresh')) {
        store.dispatch(authDuck.actions.logout());
        window.location.reload();
      }

      if (!e?.response) {
        throw e;
      }

      return this.handleRequestError(e, config);
    }
  }

  handleRequestError(e: any, config: any) {
      if (import.meta.env.VITE_DEBUG === 'true') {
      const reponsePayload =
        typeof e.response.data === 'string'
          ? e.response.data
          : JSON.stringify(e.response.data);

      console.error(`
        Error: ${e.message},
        StatusCode: ${e.response.status},
        Request Config: ${JSON.stringify(config)},
        Response Payload: ${reponsePayload}
      `);
    }

    throw e;
  }
}
