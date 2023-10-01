import formatCEP from '../format-cep.util';

export default function validateCep(value: string): any {
  value = value.replace(/[\D]/g, '');

  let error;
  let role;
  let roleIcon;

  if (value.length < 8) {
    error = 'Preenchimento incorreto';
    role = 'notOk';
    roleIcon = 'danger';
  } else {
    error = '';
    role = 'ok';
    roleIcon = 'ok';
  }

  return {
    error,
    cepFormat: formatCEP(value),
    cep: value,
    role,
    roleIcon
  };
}

export { validateCep };
