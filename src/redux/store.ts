import { configureStore } from '@reduxjs/toolkit';
import * as authDuck from './ducks/auth.duck';
import * as rememberDuck from './ducks/remember.duck';
import * as settingsDuck from './ducks/settings.duck';
import * as testResultsDuck from './ducks/test-results.duck';

export { authDuck, rememberDuck, settingsDuck, testResultsDuck };

export const store = configureStore({
  reducer: {
    user: authDuck.authReducer,
    remember: rememberDuck.rememberReducer,
    settings: settingsDuck.settingsReducer,
    testResults: testResultsDuck.testResultsReducer,
  },
});
