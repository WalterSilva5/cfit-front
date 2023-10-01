interface PasswordErrorList {
  necessaryCharacter: string;
  hasNumeral: string;
  hasCases: string;
  hasSpecialCharacter: string;
  messageErrors: string;
}

type PasswordErrors = Record<string, boolean | string[]>;

const hasNecessaryCharacters = (text: string): boolean => {
  return text.length >= 8 && text.length <= 16;
};

const hasNumeral = (text: string): boolean => {
  return /\d/.test(text);
};

const hasUppercaseAndLowercase = (text: string): boolean => {
  return /[a-z]/.test(text) && /[A-Z]/.test(text);
};

const hasSpecialCharacter = (text: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const regexPattern = /[ `!@#$%^&*()_\-=\.?]/;
  return regexPattern.test(text);
};

export function isValidPassword(password: string): boolean | PasswordErrors {
  const errorList: PasswordErrorList = {
    necessaryCharacter: 'NECESSARY_CHARACTERS',
    hasNumeral: 'HAS_NUMERAL',
    hasCases: 'HAS_UPPERANDLOWERCASE',
    hasSpecialCharacter: 'HAS_ESPECIAL_CHAR',
    messageErrors: 'ERRORS_FOUND'
  };

  const errorsExpected: PasswordErrors = {
    [errorList.necessaryCharacter]: true,
    [errorList.hasNumeral]: true,
    [errorList.hasCases]: true,
    [errorList.hasSpecialCharacter]: true,
    [errorList.messageErrors]: []
  };

  let errorsActual = { ...errorsExpected };
  const messageErrorsActual: string[] = errorsActual[errorList.messageErrors] as string[];

  const setErrorIn = (key: string): void => {
    messageErrorsActual.push(key);
    errorsActual = {
      ...errorsActual,
      [key]: false,
      [errorList.messageErrors]: messageErrorsActual
    };
  };

  if (!hasNecessaryCharacters(password)) {
    setErrorIn(errorList.necessaryCharacter);
  }

  if (!hasNumeral(password)) {
    setErrorIn(errorList.hasNumeral);
  }

  if (!hasUppercaseAndLowercase(password)) {
    setErrorIn(errorList.hasCases);
  }

  if (!hasSpecialCharacter(password)) {
    setErrorIn(errorList.hasSpecialCharacter);
  }

  if (JSON.stringify(errorsExpected) === JSON.stringify(errorsActual)) {
    return true;
  } else {
    return errorsActual;
  }
}
