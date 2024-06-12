import './datepicker.scss'
import { useRef } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko'
import { getDate, getMonth, getYear } from 'date-fns'
import BasicCustomHeader from './atom/BasicCustomHeader'
import BasicCustomContainer from './atom/BasicCustomContainer'
import { basicConfig } from './config/basic'
import BasicCustomInput from './atom/BasicCustomInput'
registerLocale('ko', ko as any)

interface IDatePickerProps {
  id: string
  calendarDate: Date | null
  excludeDates?: Date[]
  handleChange: (date: Date) => void
}

const pickerOptions = basicConfig.pickerOptions
const BasicDatePicker = ({
  id,
  calendarDate,
  excludeDates,
  handleChange,
}: IDatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const getDayClassName = (date: Date) => {
    const isSelected =
      calendarDate &&
      getYear(calendarDate) === getYear(date) &&
      getMonth(calendarDate) === getMonth(date) &&
      getDate(calendarDate) === getDate(date)

    return isSelected ? 'selected-day' : 'normal-day'
  }

  return (
    <div>
      <DatePicker
        id={id}
        selected={calendarDate}
        {...pickerOptions}
        customInput={<BasicCustomInput placeHolder="검색시작" ref={inputRef} />}
        calendarContainer={BasicCustomContainer}
        excludeDates={excludeDates}
        dayClassName={getDayClassName}
        renderCustomHeader={BasicCustomHeader}
        onChange={handleChange}
      />
    </div>
  )
}

export default BasicDatePicker
