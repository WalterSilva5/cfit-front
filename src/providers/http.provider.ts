import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { Store } from 'redux'; // Ajuste esse import se estiver usando outra versão ou setup do Redux
import store from '../store/store';
import * as authReducer from '../store/reducers/auth.reducer'; // Ajuste esse import se estiver usando outro reducer para autenticação
import { HttpService } from './http.service';

interface AuthData {
  accessToken?: string;
  refreshToken?: string;
  [key: string]: any; // Para propriedades adicionais que não foram especificadas
}

interface AuthState {
  auth: {
    user: any; // Substitua 'any' pelo tipo apropriado do usuário, se disponível
  };
}

export class HttpProvider extends HttpService {
  private instance: AxiosInstance;

  constructor() {
    super(axios);
    this.instance = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
      headers: {
        'Content-type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });
  }

  async makeHttpRequest(config: AxiosRequestConfig) {
    const authData = this.getAuthData();
    if (authData?.accessToken) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${authData.accessToken}`
      };
    }
    return super.makeHttpRequest(config);
  }

  getAuthUser(): any {
    // Substitua 'any' pelo tipo apropriado do usuário, se disponível
    const {
      auth: { user }
    } = store.getState() as AuthState;
    return user;
  }

  // Função para obter dados de autenticação (por exemplo, do local storage)
  getAuthData(): AuthData | null {
    // Aqui, você precisa implementar a lógica para obter os dados de autenticação
    // Por exemplo, se estiver armazenando os tokens no local storage:
    const data = localStorage.getItem('authData');
    return data ? JSON.parse(data) : null;
  }

  async handleRequestError(e: AxiosError, config: AxiosRequestConfig) {
    console.log(`Error ${e} on ${config.url}`);
    if (e.response?.status !== 401) {
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
          authReducer.refreshTokenSuccess({
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
