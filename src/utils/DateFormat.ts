import Moment from 'moment';

export const formataDatas = (calendarios: any) => {
    let result = ''
    if (calendarios && calendarios.length > 0) {
      calendarios.forEach((calendario: any) => {
        const dia = Moment(calendario.dataInicio).format('DD/MM/YYYY')
        const horarioInicio = Moment(calendario.dataInicio).format('HH:mm')
        const horarioFim = Moment(calendario.dataFim).format('HH:mm')

        result += dia + ' ' + horarioInicio + '-' + horarioFim + ' '
      })
    }

    if (result !== '') {
      result = result.substr(0, result.length - 1);
    }

    return result;
}

export const formataModificacoes = (iniciativa: any) => {
  let data;

  let dataModificacao = null;
  let dataExclusao = null;
  let dataCriacao: any = null;
  if (iniciativa.dataModificação) {
    dataModificacao = Date.parse(iniciativa.dataModificação)
  }
  if (iniciativa.dataExclusao) {
    dataExclusao = Date.parse(iniciativa.dataExclusao)
  }
  if (iniciativa.dataCriacao) {
    dataCriacao = Date.parse(iniciativa.dataCriacao)
  }
  if (dataModificacao && dataExclusao) {
    if (dataModificacao && dataModificacao > dataExclusao) {
      data = dataModificacao
    } else if (dataExclusao && dataExclusao > dataModificacao) {
      data = dataExclusao
    } else {
      data = dataCriacao;
    }
  } else if (dataModificacao) {
    data = dataModificacao
  } else if (dataExclusao) {
    data = dataExclusao
  } else {
    data = dataCriacao;
  }

  return Moment(data).format('DD/MM/YYYY');
}
