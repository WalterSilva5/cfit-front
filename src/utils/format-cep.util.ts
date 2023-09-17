/* Máscaras ER */
export default function formatCEP(v: any): string {
  if (v.lenght > 10) return v;

  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '$1.$2'); // Coloca ponto em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{3})$/, '$1-$2'); // Coloca hífen
  return v;
}
