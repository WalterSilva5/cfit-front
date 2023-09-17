interface PasswordValidationResult {
  isValid: boolean
  error: string
}

export default function isEqualPassword (password: string, confirmPassword: string): PasswordValidationResult {
  if ((password !== '' && confirmPassword !== '') && (password !== confirmPassword)) {
    return {
      isValid: false,
      error: 'Senha e confirmação não conferem'
    }
  }

  return {
    isValid: true,
    error: ''
  }
}
