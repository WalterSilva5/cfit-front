/* Máscaras ER */
export default function formatTel(v: any) {
  if (v.lenght > 15) return v;

  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  
  /* if (v.length > 15) {
    v=v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v=v.replace(/(\d{1,2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4"); //Coloca o mais na frente dos primeiros digitos;
  } */

  return v;
}
