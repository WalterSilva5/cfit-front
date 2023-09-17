export function IsValidCompanyTaxId (tin: any): boolean {
  return tin.toString().replace(/[\D]/g, '').length === 14
}
