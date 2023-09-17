import Moment from 'moment'

interface Calendario {
  dataInicio: Date | string
  dataFim: Date | string
}

interface Iniciativa {
  dataModificação?: Date | string
  dataExclusao?: Date | string
  dataCriacao?: Date | string
}

export const formataDatas = (calendarios: Calendario[]): string => {
  if (calendarios.length === 0) {
    return ''
  }

  const formattedDates = calendarios.map(calendario => {
    const dia = Moment(calendario.dataInicio).format('DD/MM/YYYY')
    const horarioInicio = Moment(calendario.dataInicio).format('HH:mm')
    const horarioFim = Moment(calendario.dataFim).format('HH:mm')

    return `${dia} ${horarioInicio}-${horarioFim}`
  })

  return formattedDates.join(' ')
}

export const formataModificacoes = (iniciativa: Iniciativa): string => {
  const { dataModificação, dataExclusao, dataCriacao } = iniciativa

  const parsedDates = {
    dataModificacao: dataModificação !== undefined ? Date.parse(dataModificação.toString()) : null,
    dataExclusao: dataExclusao !== undefined ? Date.parse(dataExclusao.toString()) : null,
    dataCriacao: dataCriacao !== undefined ? Date.parse(dataCriacao.toString()) : null
  }

  const latestDate = Math.max(
    parsedDates.dataModificacao ?? 0,
    parsedDates.dataExclusao ?? 0,
    parsedDates.dataCriacao ?? 0
  )

  // ensure latestDate is a valid date (not NaN)
  if (!Number.isFinite(latestDate)) {
    throw new Error('Invalid date provided.')
  }

  return Moment(latestDate).format('DD/MM/YYYY')
}
