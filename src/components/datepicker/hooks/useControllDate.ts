import { getDate, getMonth, getYear } from 'date-fns'
import { useState } from 'react'

interface TPickerDate {
  year: number
  month: number
  day: number
}

type TChangePicker = keyof Omit<TPickerDate, 'day'>
const useControllDate = (userSelectedDate: Date | null) => {
  const [pickerDate, setPickerDate] = useState<TPickerDate>({
    year: getYear(new Date()),
    month: getMonth(new Date()) + 1,
    day: getDate(new Date()),
  })

  const increasePickerDate = (type: TChangePicker) => {
    setPickerDate((prev) => ({ ...prev, [type]: prev[type] + 1 }))
  }
  const decreasePickerDate = (type: TChangePicker) => {
    setPickerDate((prev) => ({ ...prev, [type]: prev[type] - 1 }))
  }
  const changePickerDate = (date: Date) => {
    setPickerDate({
      year: getYear(date),
      month: getMonth(date) + 1,
      day: getDate(date),
    })
  }
  const getDayClassName = (date: Date) => {
    const isSelected =
      userSelectedDate &&
      getYear(userSelectedDate) === getYear(date) &&
      getMonth(userSelectedDate) === getMonth(date) &&
      getDate(userSelectedDate) === getDate(date)

    return isSelected
      ? 'selected-day'
      : 'normal-day'
  }

  return {
    pickerDate,
    increasePickerDate,
    decreasePickerDate,
    changePickerDate,
    getDayClassName
  }
}

export { useControllDate }
