import Colors from '../../styles/colors.module.scss';
import { useState } from 'react'
import { Element } from '../elements'
import './accordion.scss'
import { useCloseEvent } from '../../util/hook'
interface AccordionProps {
  title?: string
  children?: JSX.Element | JSX.Element[] | string
  border? : boolean | undefined
}

const Accordion = ({ title, children, border }: AccordionProps) => {
  const isBorder = border === undefined ? true : false
  const [open, isOpen] = useState<boolean>(false)
  const [overflow, setOverflow] = useState<string>('hidden')
  const { ref: accordion } = useCloseEvent(() => {
    isOpen(false)
    setOverflow('hidden')
  })
  const onTranstionEnd = () => {
    if (open) {
      setOverflow('unset')
    }
  }
  function onClickOpen() {
    isOpen((prev) => !prev)
    if (open) {
      setOverflow('hidden')
    }
  }
  return (
    <div
      className={`basic-accordion ${isBorder ? 'border' : ''}`}
      ref={accordion}
      style={{ overflow }}
      onTransitionEnd={onTranstionEnd}
    >
      <div className="header" onClick={onClickOpen}>
        <span className="title">{title}</span>
        <div className={`icon ${open ? 'slide' : ''}`}>
          <Element name="Right" size="medium" color={Colors.grey_111} />
        </div>
      </div>
      <div className={`children ${open ? 'slide' : ''}`}>{children}</div>
    </div>
  )
}
export default Accordion
