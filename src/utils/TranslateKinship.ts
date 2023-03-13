export function TranslateKinship(value: any) {
  switch (value) {
    case "FATHER":
      return "Pai";
    case "MOTHER":
      return "Mãe";
    case "GRANDFATHER":
      return "Avô";
    case "GRANDMOTHER":
      return "Avó";
    case "SON":
      return "Filho"
    case "DAUGHTER":
      return "Filha"
    case "BROTHER":
      return "Irmão"
    case "SISTER":
      return "Irmã"
    case "UNCLE":
      return "Tio"
    case "AUNT":
      return "Tia"
    default:
      return value;
  }
}
