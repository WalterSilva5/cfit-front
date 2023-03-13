export default function IsValidNumber(number: any) {
  // return number.match("^[0-9]{0,2}.{0,1}[0-9]{0,3}$")
  return number.match("^[0-9]{0,14}$")
}
