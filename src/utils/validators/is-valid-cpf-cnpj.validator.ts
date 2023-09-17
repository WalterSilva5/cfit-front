function verifyCpf (cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false

  let sum = 0
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i)

  let remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.charAt(9))) return false

  sum = 0
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i)

  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.charAt(10))) return false

  return true
}

function verifyCnpj (cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false

  const calculateDigit = (digits: string, pos: number): number => {
    let sum = 0
    for (let i = 0; i < digits.length; i++) sum += parseInt(digits.charAt(i), 10) * pos--
    const remainder = sum % 11
    return remainder < 2 ? 0 : 11 - remainder
  }

  if (calculateDigit(cnpj.substring(0, 12), 9) !== parseInt(cnpj.charAt(12))) return false
  if (calculateDigit(cnpj.substring(0, 13), 9) !== parseInt(cnpj.charAt(13))) return false

  return true
}

function formatCpfCnpj (value: string): string {
  value = value.replace(/\D/g, '')

  if (value.length === 14) {
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
  } else if (value.length === 11) {
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }

  return value
}

export default function verifyCpfCnpj (input: string): { isValid: boolean, error: string, cpfCnpjFormat: string, cpfCnpj: string } {
  input = `${input}`.replace(/[\D]/g, '')

  let isValid = true
  let error = ''

  if (input.length <= 11) {
    isValid = verifyCpf(input)
    if (!isValid) error = 'CPF Inválido'
  } else {
    isValid = verifyCnpj(input)
    if (!isValid) error = 'CNPJ Inválido'
  }

  if (input.length === 0) {
    error = ''
  }

  return {
    isValid,
    error,
    cpfCnpjFormat: formatCpfCnpj(input),
    cpfCnpj: input
  }
}
