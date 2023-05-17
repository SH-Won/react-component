import Colors from '@/styles/colors.module.scss'
import { useState } from 'react'
import { Element } from '../elements'
import './accordion.scss'
interface AccordionProps {
  title?: string
  children?: JSX.Element | JSX.Element[] | string
}
const Accordion = ({ title, children }: AccordionProps) => {
  const [open, isOpen] = useState<boolean>(false)

  return (
    <div className="basic-accordion">
      <div className="header">
        <span className="title">{title}</span>
        <div
          onClick={() => isOpen((prev) => !prev)}
          className={`icon ${open ? 'slide' : ''}`}
        >
          <Element name="Right" size="medium" color={Colors.grey_111} />
        </div>
      </div>
      <div className={`children ${open ? 'slide' : ''}`}>{children}</div>
    </div>
  )
}
export default Accordion
