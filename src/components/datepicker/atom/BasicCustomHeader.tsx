import CalenderNext from '@/components/elements/icons/CalenderNext'
import CalenderPrev from '@/components/elements/icons/CalenderPrev'
import CalenderSelect from '@/components/elements/icons/CalenderSelect'
import { getMonth, getYear } from 'date-fns'
import React from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { basicConfig } from '../config/basic'

interface ISelectBoxProps<T> {
  value: number
  options: T[]
  renderFn: (option: T) => JSX.Element | JSX.Element[]
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children: JSX.Element | JSX.Element[]
}
type TElementType = 'CalendarPrev' | 'CalendarNext' | 'CalendarSelect'
interface IElementProps {
  type: TElementType
  handleClick?: () => void
}
const Element = ({ type, handleClick }: IElementProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'CalendarPrev':
        return <CalenderPrev />
      case 'CalendarNext':
        return <CalenderNext />
      case 'CalendarSelect':
        return <CalenderSelect />
      default:
        return null
    }
  }
  return <div onClick={() => handleClick?.()}>{renderIcon()}</div>
}
const SelectBoxWithIcon = <T,>({
  value,
  options,
  renderFn,
  handleChange,
  children,
}: ISelectBoxProps<T>) => {
  return (
    <div>
      <select value={value} onChange={handleChange}>
        {options.map(renderFn)}
      </select>
      {children}
    </div>
  )
}

const BasicCustomHeader = ({
  monthDate,
  date,
  changeYear,
  changeMonth,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  decreaseYear,
  increaseYear,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  const { years, months } = basicConfig.dateOptions
  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    changeMonth(parseInt(value))
  }
  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    changeYear(parseInt(value))
  }
  return (
    <div className="calendar-header">
      <Element type="CalendarPrev" handleClick={decreaseMonth} />
      <div className="calendar-select-container">
        <SelectBoxWithIcon
          value={getYear(date)}
          handleChange={handleChangeYear}
          options={years}
          renderFn={(option) => (
            <option key={option} value={option}>
              {option}
            </option>
          )}
        >
          <Element type="CalendarSelect" />
        </SelectBoxWithIcon>
        <span>년</span>
        <SelectBoxWithIcon
          value={getMonth(date)}
          handleChange={handleChangeMonth}
          options={months}
          renderFn={(option) => (
            <option key={option + '월'} value={parseInt(option) - 1}>
              {option + '월'}
            </option>
          )}
        >
          <Element type="CalendarSelect" />
        </SelectBoxWithIcon>
      </div>
      <Element type="CalendarNext" handleClick={increaseMonth} />
    </div>
  )
}

export default BasicCustomHeader
