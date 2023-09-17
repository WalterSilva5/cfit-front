export function ConverterTitle (value: string): string {
  switch (value) {
    case 'isOpen':
      return 'Em Aberto'
    case 'inProgress':
      return 'Em Progresso'
    case 'isDone':
      return 'Concluídos'
    default:
      return value
  }
}
