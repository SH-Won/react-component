import { useState } from "react"

// interface IUseDatePickerProps {
//   initialDate
// }
const useDatePicker = (initialDate : Date | null) => {
  const [date, setDate] = useState(initialDate)
  const handleChange = (changeDate : Date | null) => {
    setDate(changeDate)
  }
  return {
    date,
    handleChange
  }
}



export {useDatePicker}