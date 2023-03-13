function verifyCpf(strCPF) {
  strCPF = strCPF.replace(/[^\d]+/g, "");
  let Soma;
  let Resto;
  let i;
  let verificacao;
  Soma = 0;

  if (strCPF.length !== 11) {
    return false;
  }

  if (
    strCPF === "00000000000" ||
    strCPF === "11111111111" ||
    strCPF === "22222222222" ||
    strCPF === "33333333333" ||
    strCPF === "44444444444" ||
    strCPF === "55555555555" ||
    strCPF === "66666666666" ||
    strCPF === "77777777777" ||
    strCPF === "88888888888" ||
    strCPF === "99999999999"
  ) {
    verificacao = false;
  }

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10))) {
    verificacao = false;
  }
  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11))) {
    verificacao = false;
  }
  if (verificacao !== false) {
    verificacao = true;
  }

  return verificacao;
}

function verifyCnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj === "") return false;

  if (cnpj.length !== 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj === "00000000000000" ||
    cnpj === "11111111111111" ||
    cnpj === "22222222222222" ||
    cnpj === "33333333333333" ||
    cnpj === "44444444444444" ||
    cnpj === "55555555555555" ||
    cnpj === "66666666666666" ||
    cnpj === "77777777777777" ||
    cnpj === "88888888888888" ||
    cnpj === "99999999999999"
  )
    return false;

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (parseInt(resultado) !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (parseInt(resultado) !== parseInt(digitos.charAt(1))) return false;

  return true;
}

export const formatCPF = cpfCnpj => {
  cpfCnpj = cpfCnpj.replace(/\D/g, "");
  if (cpfCnpj.length === 14) {
    cpfCnpj = cpfCnpj.replace(/(\d{2})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    cpfCnpj = cpfCnpj.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    cpfCnpj = cpfCnpj.replace(/(\d{3})(\d)/, "$1/$2"); //Coloca uma barra entre o terceiro e o quarto dígitos
    cpfCnpj = cpfCnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
  } else if (cpfCnpj.length === 11) {
    cpfCnpj = cpfCnpj.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    cpfCnpj = cpfCnpj.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    cpfCnpj = cpfCnpj.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
  }
  return cpfCnpj;
};

export default function verifyCpfCnpj(str) {
  let isValid;
  let error;
  let cpfCnpj;

  str = (str || "").replace(/[\D]/g, "");

  if (str.length <= 11) {
    if (!verifyCpf(str)) {
      error = "CPF Inválido";
    } else {
      error = "";
    }
    isValid = verifyCpf(str);
  } else if (str.length > 11) {
    if (!verifyCnpj(str)) {
      error = "CNPJ Inválido";
    } else {
      error = "";
    }
    isValid = verifyCnpj(str);
  }

  if (str.length === 0) {
    error = "";
    isValid = true;
  }
  cpfCnpj = formatCPF(str);

  return {
    isValid: isValid,
    error: error,
    cpfCnpjFormat: cpfCnpj,
    cpfCnpj: str
  };
}
