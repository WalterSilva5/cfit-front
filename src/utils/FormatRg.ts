export default function formatRg(v: any) {
  if (v.lenght > 9) return v;

  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "$1.$2"); //Coloca um ponto entre o segundo e o terceiro dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

  return v;
}
