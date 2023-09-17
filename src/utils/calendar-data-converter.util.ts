import moment from 'moment-timezone'

export const convertInitiativeDateToBrTimezone = (initialDateStr: string): Date => {
  const startDate = moment(initialDateStr)
  const utcTimestamp = startDate.utc().valueOf()
  const calendarDate = new Date(utcTimestamp)
  const timezoneOffsetBrazil = 180 * 60000
  const timezoneOffsetLocal = calendarDate.getTimezoneOffset() * 60000
  const offsetDiff = timezoneOffsetLocal - timezoneOffsetBrazil
  calendarDate.setTime(utcTimestamp + offsetDiff)

  return calendarDate
}
