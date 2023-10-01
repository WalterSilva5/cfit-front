import { HttpService } from './HttpService';
import axios from 'axios';
import { store } from '../../redux/store';
import moment from 'moment';
import * as authDuck from '../../redux/ducks/auth.duck';
import { Config } from '../utils';
import { settings as configSettings } from '../../settings';
import Swal from 'sweetalert2';
import * as settingsDuck from '../../redux/ducks/settings.duck';
import { environmentOptions } from 'enums';

export class AppAPIService extends HttpService {
  static _instance: any;
  constructor() {
    const axiosInstance = AppAPIService.createInstance();
    const instance = super(axiosInstance);
  }

  static getInstance() {
    return this._instance || (this._instance = new this());
  }

  static createInstance() {
    let settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const apiSettings: any = configSettings;
    console.log('api settings', settings);
    if (!settings?.environment) {
      settings = apiSettings[environmentOptions.PROD];
    }
    if (!settings.url) {
      settings.url = apiSettings[settings.environment].url;
      localStorage.setItem('settings', JSON.stringify(settings));
    }

    return axios.create({
      // TODO liberar urls
      baseURL: settings.url
      // baseURL: 'http://localhost:5000/api',
    });
  }

  recreateAxiosInstance(this: any) {
    const authDataCopy = localStorage.getItem('authData');
    const rememberMeCopy = localStorage.getItem('rememberUser');
    const environmentCopy = localStorage.getItem('environment');
    const settingsCopy = localStorage.getItem('settings');
    const testResultsCopy = localStorage.getItem('testResults');
    localStorage.clear();
    localStorage.setItem('authData', `${authDataCopy}`);
    localStorage.setItem('rememberUser', `${rememberMeCopy}`);
    localStorage.setItem('environment', `${environmentCopy}`);
    localStorage.setItem('settings', `${settingsCopy}`);
    localStorage.setItem('testResults', `${testResultsCopy}`);
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    const instance = AppAPIService.createInstance();
    this.axios = instance;
    this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    const settingsObj = JSON.parse(localStorage.getItem('settings') || '{}');
    this.axios.defaults.baseURL = settingsObj.url;
  }

  async makeHttpRequest(config: any) {
    this.recreateAxiosInstance();
    const authData: any = await this.getAuthData();
    console.log('authData', authData);
    if (authData?.access_token) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${authData.access_token}`,
        'Access-Control-Expose-Headers': 'Content-Disposition',
        'Access-Control-Allow-Origin': '*',
        refreshToken: authData.refresh_token,
        origin_call: 'DESKTOP'
      };
    }

    return await super.makeHttpRequest(config);
  }

  async getAuthData() {
    const authData = localStorage.getItem('authData');
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

  async handleRequestError(e: any, config: any) {
    const authData = await this.getAuthData();

    if (e.response.status === 401 && !config.isLogin) {
      await Swal.fire({
        title: 'Oops...',
        text: 'Sua sessão expirou! Por favor efetue o login novamente.',
        icon: 'warning'
      }).then(() => {
        this.logout();
      });

      this.logout();
    }

    if (authData) {
      const settings = JSON.parse(localStorage.getItem('settings') || '{}');
      console.log('authData', authData);
      const newConfig = {
        ...config,
        baseURL: settings.url,
        url: '/osweb/refresh',
        method: 'POST',
        data: {
          token: authData.refreshToken
        }
      };
      try {
        const newAuthData = await axios.request(newConfig);
        store.dispatch(authDuck.actions.refresh(newAuthData));
        return await this.makeHttpRequest(config);
      } catch (error: any) {
        console.log('Error on refresh auth', error);
        console.log('Error on refresh auth', error?.response?.status);
        if (error?.response?.status == 500) {
          Swal.fire({
            title: 'Oops...',
            text: 'Ocorreu um erro interno no servidor, por favor tente novamente mais tarde.',
            icon: 'warning'
          }).then(() => {
            this.logout();
          });
        } else {
          Swal.fire({
            title: 'Oops...',
            text: 'Sua sessão expirou! Por favor efetue o login novamente.',
            icon: 'warning'
          }).then(() => {
            this.logout();
          });
        }
      }
    } else if (e.response.status !== 401) {
      super.handleRequestError(e, config);
    }
  }

  logout() {
    store.dispatch(authDuck.actions.logout());

    window.location.href = '/';
    window.location.reload();
  }

  async download(reqConfig: any, type: any) {
    const response = await this.makeHttpRequest({
      ...reqConfig,
      responseType: 'blob'
    });

    const blob = new Blob([response.data], { type });

    const extensions: any = {
      'application/pdf': 'pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx'
    };

    const contentDisposition = response.headers['content-disposition'];
    const extensionsType = `${type};`;
    let fileName = `${moment().format('YYYY-MM-DD-HH-mm-ss')}.${
      extensions[extensionsType]
    }`;
    if (contentDisposition?.split('filename=').length) {
      fileName = contentDisposition.split('filename=')[1];
      if (fileName) {
        fileName = fileName.trim().substr(0, fileName.indexOf(';'));
      }
    }
  }
}
