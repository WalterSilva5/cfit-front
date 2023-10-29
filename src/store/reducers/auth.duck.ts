export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Refresh: '[Refresh] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  setAuthData: '[Set Auth Data] Action'
};
const authInitialState = {
  authData: null,
  user: null
};

export const authReducer = (statePart = authInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.Login:
      console.log('action.payload', action.payload);
      console.log('action.login');
      const { accessToken, refreshToken, user } = action.payload;
      localStorage.setItem(
        'authData',
        JSON.stringify({ accessToken, refreshToken, user })
      );

      return {
        ...statePart,
        authData: action.payload
      };
    case actionTypes.Logout:
      localStorage.removeItem('authData');
      localStorage.removeItem('environment');
      let tmpRememberUser = '';
      let tmpTestResults = '';
      if (localStorage.getItem('rememberUser')) {
        tmpRememberUser = localStorage.getItem('rememberUser') || '';
      }
      if (localStorage.getItem('testResults')) {
        tmpTestResults = localStorage.getItem('testResults') || '';
      }
      localStorage.clear();
      if (tmpRememberUser) {
        localStorage.setItem('rememberUser', tmpRememberUser);
      }
      if (tmpTestResults) {
        localStorage.setItem('testResults', tmpTestResults);
      }
      return {
        ...statePart,
        authData: null
      };
    case actionTypes.Refresh:
      localStorage.setItem('authData', JSON.stringify(action.payload));
      return {
        ...statePart,
        authData: action.payload
      };
    case actionTypes.Register:
      return {
        ...statePart,
        authData: action.payload
      };
    case actionTypes.UserRequested:
      return {
        ...statePart,
        authData: action.payload
      };
    case actionTypes.UserLoaded:
      return {
        ...statePart,
        authData: action.payload
      };
    case actionTypes.setAuthData:
      return {
        ...statePart,
        authData: action.payload
      };
    default:
      return statePart;
  }
};

export const actions = {
  login: (payload: any) => ({ payload, type: actionTypes.Login }),
  logout: () => ({ type: actionTypes.Logout }),
  refresh: (payload: any) => ({ payload, type: actionTypes.Refresh }),
  register: (payload: any) => ({ payload, type: actionTypes.Register }),
  userRequested: (payload: any) => ({
    payload,
    type: actionTypes.UserRequested
  }),
  userLoaded: (payload: any) => ({ payload, type: actionTypes.UserLoaded }),
  setAuthData: (payload: any) => ({ payload, type: actionTypes.setAuthData })
};
