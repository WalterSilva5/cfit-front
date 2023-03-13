//Conter entre 8 e 16 caracteres;
//Conter numerais;
//Conter letras minúsculas e maiúsculas;
//Caracteres especiais ?=.*[]#$ ^+=!()+@-%&

const hasNecessaryCharacters = (text: any) => {
  return text.length >= 8 && text.length <= 16;
};

const hasNumeral = (text: any) => {
  return /\d/.test(text);
};

const hasUppercaseAndLowercase = (text: any) => {
  return /[a-z]/.test(text) && /[A-Z]/.test(text);
};

const hasSpecialCharacter = (text: any) => {
  // eslint-disable-next-line
  const regexPattern = /[ `!@#$%^&*()_\-=\.?]/;
  return regexPattern.test(text);
};

export function IsValidPassword(password: any) {
  const errorList = {
    necessaryCharacter: 'NECESSARY_CHARACTERS',
    hasNumeral: 'HAS_NUMERAL',
    hasCases: 'HAS_UPPERANDLOWERCASE',
    hasSpecialCharacter: 'HAS_ESPECIAL_CHAR',
    mensageErros: 'ERROS_FOUND'
  }
  const errorsExpected = {
    [errorList.necessaryCharacter]: true,
    [errorList.hasNumeral]: true,
    [errorList.hasCases]: true,
    [errorList.hasSpecialCharacter]: true,
    [errorList.mensageErros]:[]
  }

  let errorsActual = errorsExpected;
  var mensageErrosActual: any = errorsActual.ERROS_FOUND
  const setErrorIn = (key: any) => {
    mensageErrosActual.push(key)
      errorsActual = {
      ...errorsActual,
      [key]: false,
      'ERROS_FOUND': mensageErrosActual
    }
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

  if (errorsExpected === errorsActual) {
    return true;
  } else {
    return errorsActual;
  }
};
