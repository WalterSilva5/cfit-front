import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import store from '../store/store';

const TIMEOUT = 300000; // 5 minutos

export class HttpService {
  private axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    if (!axiosInstance) {
      throw new Error('Setup do axios não fornecido');
    }

    this.axios = axiosInstance;
  }

  getAuthData(): any {
    const {
      auth: { authData }
    } = store.getState() as any;
    return authData;
  }

  async makeHttpRequest(config: AxiosRequestConfig) {
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
      if (e.response?.status === 401 && e.config.url.includes('refresh')) {
        // Tratamento específico para erros 401 relacionados a refresh pode ser adicionado aqui, se necessário.
        window.location.reload();
      }

      if (!e.response) {
        throw e;
      }

      return this.handleRequestError(e, config);
    }
  }

  handleRequestError(e: AxiosError, config: AxiosRequestConfig) {
    if (import.meta.env.VITE_DEBUG === 'true') {
      const responsePayload =
        typeof e.response?.data === 'string'
          ? e.response.data
          : JSON.stringify(e.response?.data);

      console.error(`
        Error: ${e.message},
        StatusCode: ${e.response?.status},
        Request Config: ${JSON.stringify(config)},
        Response Payload: ${responsePayload}
      `);
    }

    throw e;
  }
}
