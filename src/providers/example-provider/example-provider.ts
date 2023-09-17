import AxiosProvider from '../axios-provider';
//TODO set right types

export class ExampleProvider extends AxiosProvider {
  /*
    * esse exemplo utiliza como base a api do github
    * VITE_API_URL = https://api.github.com/
  */
  constructor() {
    super();
    this.axios.defaults.baseURL = (
      import.meta.env.VITE_API_URL || 'https://api.github.com/'
    )
  }
  getUserProfile(userName: string) {
    return this.get(`/users/${userName}`, {});
  }
} 
