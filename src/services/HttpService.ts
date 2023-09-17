// @ts-nocheck
import { CancelToken } from 'axios';

const TIMEOUT = 300000; // 5 minutos

export class HttpService {
  axios: any;
  constructor(axiosInstance: any) {
    if (!axiosInstance) {
      throw new Error('Setup do axios não fornecido');
    }

    this.axios = axiosInstance;
  }

  async makeHttpRequest(config: any) {
    try {
      const source = await CancelToken.source();
      setTimeout(() => {
        source.cancel();
      }, TIMEOUT + 10000);

      config.timeout = config.timeout || TIMEOUT;
      config.cancelToken = source.token;

      const httpResponse = await this.axios.request(config);

      return config.responseType === 'blob' ? httpResponse : httpResponse.data;
    } catch (e: any) {
      if (!e.response) {
        throw e;
      }

      this.handleRequestError(e, config);
    }
  }

  async makeHttpRequestOnce(config: any) {
    try {
      const source = await CancelToken.source();
      setTimeout(() => {
        source.cancel();
      }, TIMEOUT + 10000);

      config.timeout = config.timeout || TIMEOUT;
      config.cancelToken = source.token;

      const httpResponse = await this.axios.request(config);

      return config.responseType === 'blob' ? httpResponse : httpResponse.data;
    } catch (e: any) {
      if (!e.response) {
        throw e;
      }

      return (e) => {
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
        throw e;
      };
    }
  }

  handleRequestError(e, config) {
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

    throw e;
  }
}
