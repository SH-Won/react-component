import { CalendarContainer, CalendarContainerProps } from 'react-datepicker'

const BasicCustomContainer = ({
  className,
  children,
}: CalendarContainerProps) => {
  return (
    <div className="calendar-container">
      <CalendarContainer className={className}>
        <div className="calendar-container__children-wrapper">{children}</div>
      </CalendarContainer>
    </div>
  )
}

export default BasicCustomContainer
