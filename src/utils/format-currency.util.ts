/* Máscaras ER */
export default function formatCurrency (v: string): string {
  v = v.replace(/\D/g, '')// Remove tudo o que não é dígito
  v = v.replace(/(\d)(\d{8})$/, '$1.$2')// coloca o ponto dos milhões
  v = v.replace(/(\d)(\d{5})$/, '$1.$2')// coloca o ponto dos milhares

  v = v.replace(/(\d)(\d{2})$/, '$1,$2')// coloca a virgula antes dos 2 últimos dígitos
  return v
}
