import { HttpService } from './HttpService';
import axios from 'axios';
import { store } from '../redux/store';
import * as authDuck from '../redux/ducks/auth.duck';

export class MutantApiService extends HttpService {
	constructor() {
		const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
			headers: {
				'Content-type': 'application/json',
			},
			maxContentLength: Infinity,
			maxBodyLength: Infinity
		});

		super(instance);
	}

	async makeHttpRequest(config: any) {
		const authData = this.getAuthData();
		if (authData?.access_token) {
			config.headers = {
				...(config.headers || {}),
				Authorization: `Bearer ${authData.access_token}`,
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

		if (authData && authData.refresh_token) {
			const response = await super.makeHttpRequest({
				...config,
				url: 'auth/refresh',
				method: "GET",
				headers: {
					Authorization: `Bearer ${authData.refresh_token}`
				}
			});

			if (response) {
				store.dispatch(authDuck.actions.refresh({
					...authData,
					accessToken: response.accessToken,
					refreshToken: response.refreshToken
				}));

				return this.makeHttpRequest(config);
			}
		}
	}

}
