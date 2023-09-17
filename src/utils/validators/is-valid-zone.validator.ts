export default function IsValidZone (number: any): boolean {
  return number.match('^[0-9]{0,2}.{0,1}[0-9]{0,3}$')
}
