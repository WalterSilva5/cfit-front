export default function IsValidName(name: any) {
  return name && typeof name === 'string'
    && name.replace(/[\d ]/g, '').length >= 3;
}
