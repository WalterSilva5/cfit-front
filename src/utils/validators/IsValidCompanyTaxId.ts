export function IsValidCompanyTaxId(tin: any) {
  return tin && tin.toString().replace(/[\D]/g, '').length === 14;
}
