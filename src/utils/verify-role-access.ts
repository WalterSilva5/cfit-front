import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Role } from '@/enums/role.enum';

export function useRoleAccess(requiredRoles: Role[]) {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const authData = JSON.parse(localStorage.getItem('authData') || '{}');
      console.log('authData', authData);
      const user = authData.user;
      console.log('user', user);
      if (!user || !requiredRoles.includes(user?.role?.toUpperCase())) {
        navigate('/home');
      }
    } catch (e) {
        localStorage.removeItem('authData');
        navigate('/auth/login');
    }
  }, []);
}
