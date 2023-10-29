export const actionTypes = {
  setLoginData: '[Remember] Action',
  clearLoginData: '[RememberClear] Action'
};

const rememberInitialState = {
  user: {
    name: '',
    password: '',
    rememberMe: false
  }
};

export const rememberReducer = (statePart = rememberInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.setLoginData:
      localStorage.setItem('rememberUser', JSON.stringify(action.payload));
      return {
        ...statePart,
        remember: action.payload
      };
    case actionTypes.clearLoginData:
      localStorage.removeItem('rememberUser');
      return {
        ...statePart,
        remember: null
      };
    default:
      return statePart;
  }
};

export const actions = {
  setLoginData: (payload: any) => ({ payload, type: actionTypes.setLoginData }),
  clearLoginData: () => ({ type: actionTypes.clearLoginData })
};
