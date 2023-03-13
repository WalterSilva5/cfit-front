import { AppAPIService } from '../../services/AppAPIService';

export default async function (login: any, email: any) {
  const api = AppAPIService.getInstance();
  return await api.makeHttpRequest({
    url: `/usuario/verificar-email-login?login=${login}&email=${email}`
  }).then((e: any) => {
    return e;
  }).catch(() => {
    return false;
  });
}
