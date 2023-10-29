import { type AppAPIService } from '../app-api-service';
// const api = new AppAPIService();

export async function getTestCategory(id: number, api: AppAPIService) {
  const config = {
    url: '/test-category/' + id,
    method: 'GET'
  };

  return await api.makeHttpRequest(config);
}
