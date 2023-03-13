export function FormatMoney(value: any) {
  if (typeof value !== 'string') {
    value = value.toString();
  }

  const valueWithoutLetters = value.replace(/\D/g, '');
  if (!valueWithoutLetters || Number(valueWithoutLetters) === 0) {
    return valueWithoutLetters;
  }
  const valueDecimal = Number(valueWithoutLetters) / 100;
  const valueMoneyMask = valueDecimal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return valueMoneyMask;
}
