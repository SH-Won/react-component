import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import BasicDatePicker from '../BasicDatePicker'
import { useDatePicker } from '../hooks'
import { getYear, getMonth, getDate } from 'date-fns'

const meta: Meta<typeof BasicDatePicker> = {
  title: 'DatePicker',
  component: () => {
    const { date: startDate, handleChange: handleChangeStartDate } =
      useDatePicker(null)
    const { date: endDate, handleChange: handleChangeEndDate } =
      useDatePicker(null)
    const convertedDate = (date: Date) => {
      if (!date) return
      const year = getYear(date).toString()
      const month = ('0' + (getMonth(date) + 1).toString()).slice(-2)
      const day = ('0' + getDate(date).toString()).slice(-2)
      return year + month + day
    }
    // console.log(convertedDate(startDate), convertedDate(endDate))
    return (
      <div style={{ display: 'flex' }}>
        <BasicDatePicker
          id="1234"
          calendarDate={startDate}
          handleChange={handleChangeStartDate}
        />
        <BasicDatePicker
          id="3456"
          calendarDate={endDate}
          handleChange={handleChangeEndDate}
        />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof BasicDatePicker>

export const DatePicker: Story = {}
