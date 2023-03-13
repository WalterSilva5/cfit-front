export default function IsEqualPassword(password: any, confirmPassword: any) {

  if ((password && confirmPassword) && (password !== confirmPassword)) {
    return {
      isValid: false,
      error: "Senha e confirmação não conferem"
    }
  }

  return {
    isValid: true,
    error: ""
  };
}
