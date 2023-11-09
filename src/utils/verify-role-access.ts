import { Role } from '@/enums/role.enum';

export function useRoleAccess(requiredRoles: Role[]) {
  try {
    const authData = JSON.parse(localStorage.getItem('authData') || '{}');
    const user = authData.user;

    if (!authData || !user) {
      forceLogout();
    } else if (!!user && !requiredRoles.includes(user?.role?.toUpperCase())) {
      window.location.href = '/404';
    }
  } catch (e) {
    forceLogout();
  }
}

function forceLogout() {
  try{
    localStorage.removeItem('authData');
  } catch(e) {}
  window.location.href = '/auth/login';
}