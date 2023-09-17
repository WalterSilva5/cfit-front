export const actionTypes = {
  getSettings: '[Settings] Action',
  setSettings: '[SetSettings] Action'
};

const settingsInitialState = {
  url: '',
  environment: '',
  version: ''
};

export const settingsReducer = (statePart = settingsInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.getSettings:
      const settings = localStorage.getItem('settings');
      return {
        ...statePart,
        url: action.payload.url,
        environment: action.payload.environment,
        version: action.payload.version
      };
    case actionTypes.setSettings:
      localStorage.setItem('settings', JSON.stringify(action.payload));
      return {
        ...statePart,
        url: action.payload.url,
        environment: action.payload.environment,
        version: action.payload.version
      };
    default:
      return statePart;
  }
};

export const actions = {
  getSettings: (payload: any) => ({ payload, type: actionTypes.getSettings }),
  setSettings: (payload: any) => ({ payload, type: actionTypes.setSettings })
};
