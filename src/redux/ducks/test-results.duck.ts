export const actionTypes = {
  getTestResults: '[TestResults] Action',
  setTestResults: '[SetTestResults] Action',
  removeTestResults: '[RemoveTestResults] Action',
};

const testResultsInitialState = {
  testResults: [],
};

export const testResultsReducer = (
  statePart = testResultsInitialState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.getTestResults:
      const testResults = localStorage.getItem('testResults');
      return {
        ...statePart,
        testResults: testResults,
      };
    case actionTypes.setTestResults:
      localStorage.setItem('testResults', JSON.stringify(action.payload));
      return {
        ...statePart,
        testResults: action.payload.testResults,
      };
    case actionTypes.removeTestResults:
      localStorage.removeItem('testResults');
      return {
        ...statePart,
        testResults: [],
      };
    default:
      return statePart;
  }
}

export const actions = {
  getTestResults: (payload: any) => ({ payload, type: actionTypes.getTestResults }),
  setTestResults: (payload: any) => ({ payload, type: actionTypes.setTestResults }),
  removeTestResults: (payload: any) => ({ payload, type: actionTypes.removeTestResults }),
};
