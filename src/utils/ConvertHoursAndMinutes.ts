export const convertHourStringToMinutes = (hourString: string): number => {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = hours * 60 + minutes

  return minutesAmount
}

export const convertMinutesToHourString = (minutesAmount: number): string => {
  const hours = Math.floor(minutesAmount / 60)

  const minutes = minutesAmount % 60

  const safeHours = String(hours).padStart(2, '0')

  const safeMinutes = String(minutes).padStart(2, '0')

  return `${safeHours}:${safeMinutes}`
}
