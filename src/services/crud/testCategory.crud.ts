import { type AppAPIService } from '../AppAPIService';
// const api = new AppAPIService();

export async function getTestCategory(id: number, api: AppAPIService) {
  const config = {
    url: '/test-category/' + id,
    method: 'GET'
  };

  return await api.makeHttpRequest(config);
}
