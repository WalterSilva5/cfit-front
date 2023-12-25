import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export function Page404() {
  const authUser = useSelector((state: any) => state?.user);
  const authData = authUser?.authData
	const history = useNavigate();
  useEffect(() => {
    if (!authData) {
			history('/auth/login');
		}
  }, [authData, history]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        width: '100%'
      }}
    >
      <h1>404 - Not Found!</h1>
    </div>
  );
}
