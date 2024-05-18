import './datepicker.scss'
import React, { forwardRef, Ref, useRef, useState } from 'react'
import DatePicker, { CalendarContainer, registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko'
import { getDate, getMonth, getYear, Locale } from 'date-fns'
import CalenderPrev from '../elements/icons/CalenderPrev'
import CalenderNext from '../elements/icons/CalenderNext'
import CalenderSelect from '../elements/icons/CalenderSelect'
registerLocale('ko', ko as any)

interface IDatePickerProps {
  id: string
  calendarDate: Date | null
  handleChange: (date: Date) => void
}
const CustomInput = forwardRef((props: any, ref) => {
  return <input {...props} readOnly placeholder="검색시작" />
})
const BasicDatePicker = ({
  id,
  calendarDate,
  handleChange,
}: IDatePickerProps) => {
  // const [startDate, setStartDate] = useState<Date | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const years = Array.from(
    { length: getYear(new Date()) + 11 - 2014 },
    (_, i) => 2015 + i,
  )
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]
  return (
    <div>
      <DatePicker
        id={id}
        showIcon={false}
        selected={calendarDate}
        showPopperArrow={false}
        dateFormat={'yyyy-MM-dd'}
        dateFormatCalendar="yyyy년 MM월"
        className={`react-calendar-input`}
        customInput={<CustomInput ref={inputRef} onClick={() => {}} />}
        calendarContainer={({ className, children }) => {
          return (
            <div className="calendar-container">
              <CalendarContainer className={className}>
                <div style={{ position: 'relative' }}>{children}</div>
              </CalendarContainer>
            </div>
          )
        }}
        dayClassName={(date) => {
          return getDate(date) === getDate(calendarDate || new Date()) &&
            getMonth(date) === getMonth(calendarDate || new Date())
            ? 'selected-day'
            : getMonth(date) === getMonth(calendarDate || new Date())
            ? 'normal-day'
            : 'prev-month-day'
        }}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
        }) => {
          return (
            <>
              <div className="calendar-header">
                <div onClick={decreaseMonth}>
                  <CalenderPrev />
                </div>
                <div className="calendar-select-container">
                  <div>
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) =>
                        changeYear(parseInt(value))
                      }
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div>
                      <CalenderSelect />
                    </div>
                  </div>
                  <span>년</span>
                  <div>
                    <select
                      value={getMonth(date)}
                      onChange={({ target: { value } }) =>
                        changeMonth(parseInt(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div>
                      <CalenderSelect />
                    </div>
                  </div>
                </div>
                <div onClick={increaseMonth}>
                  <CalenderNext />
                </div>
              </div>
            </>
          )
        }}
        onChange={handleChange}
        locale="ko"
      />
    </div>
  )
}

export default BasicDatePicker
