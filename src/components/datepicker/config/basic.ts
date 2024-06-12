import { getYear } from 'date-fns'

export const basicConfig = {
  pickerOptions: {
    showIcon: false,
    showPopperArrow: false,
    dateFormat: 'yyyy-MM-dd',
    dateFormatCalendar: 'yyyy년 MM월',
    className: 'react-calendar-input',
    locale : 'ko',
  },
  dateOptions: {
    years: Array.from(
      { length: getYear(new Date()) + 11 - 2014 },
      (_, i) => 2015 + i,
    ),
    months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
}
