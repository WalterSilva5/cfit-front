export default function IsValidNumber (number: any): boolean {
  const year = new Date().getFullYear()
  return number >= year
}
