export default function IsValidNumber(number: any) {
  let year = new Date().getFullYear();
  return number >= year;
}
