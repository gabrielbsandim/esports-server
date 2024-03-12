import { convertHourStringToMinutes, convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

const hourStringMock = '18:20'
const minutesMock = 1100

describe('ConvertHoursAndMinutes', () => {
  describe('ConvertHourStringToMinutes', () => {
    it('should convert to to minutes correctly', () => {
      const minutes = convertHourStringToMinutes(hourStringMock)

      expect(minutes).toBe(minutesMock)
    })
  })

  describe('ConvertMinutesToHourString', () => {
    it('should convert to hour string correctly', () => {
      const hourString = convertMinutesToHourString(minutesMock)

      expect(hourString).toBe(hourStringMock)
    })
  })
})
