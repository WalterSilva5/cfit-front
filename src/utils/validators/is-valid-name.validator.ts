export default function IsValidName (name: any): boolean {
  return name.replace(/[\d ]/g, '').length >= 3
}
