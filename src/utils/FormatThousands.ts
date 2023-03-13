/* Máscaras de Milhar */
export default function formatThousands(v: any){
  v=v.replace(/\D/g,"");//Remove tudo o que não é dígito
  v=v.replace(/(\d)(\d{3})$/,"$1.$2");//coloca o ponto dos milhares

  return v;
}
