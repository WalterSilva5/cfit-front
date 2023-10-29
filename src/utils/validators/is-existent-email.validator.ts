import { AppAPIService } from '../../services/app-api-service';

export default async function verifyEmailLogin(
  login: string,
  email: string
): Promise<any> {
  const api = AppAPIService.getInstance();

  try {
    const response = await api.makeHttpRequest({
      url: `/usuario/verificar-email-login?login=${encodeURIComponent(
        login
      )}&email=${encodeURIComponent(email)}`
    });
    return response;
  } catch (error) {
    return false;
  }
}
