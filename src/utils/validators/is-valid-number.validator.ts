export default function IsValidNumber (number: any): boolean {
  return number.match('^[0-9]{0,14}$')
}
