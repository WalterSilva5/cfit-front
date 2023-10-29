import { type AppAPIService } from '../app-api-service';
import Swal from 'sweetalert2';
export async function getOne(id: number, api: AppAPIService) {
  const config = {
    url: '/test-category/' + id,
    method: 'GET'
  };

  return await api.makeHttpRequest(config);
}

export async function getAll(
  page: number = 1,
  perPage: number = 100,
  api: AppAPIService
) {
  const config = {
    url: '/test-type/all',
    method: 'GET',
    params: { page, perPage, search: '' }
  };
  try {
    const result = await api.makeHttpRequest(config);
    return result;
  } catch (e: any) {
    console.log(`testType.crud getAll ${JSON.stringify(e.response)}`);
    Swal.fire({
      title: 'Erro interno no servidor tente novamente mais tarde',
      icon: 'error',
      confirmButtonText: 'Ok'
    }).then(() => {
      window.location.href = '/';
      window.location.reload();
    });
  }
}
