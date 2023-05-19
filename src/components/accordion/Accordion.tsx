import Colors from '@/styles/colors.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Element } from '../elements'
import './accordion.scss'
interface AccordionProps {
  title?: string
  children?: JSX.Element | JSX.Element[] | string
}

const useCloseEvent = (closeEvent: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  const onClick = (e: any) => {
    const element = e.target.closest(`.${ref.current!.className}`)
    if (!element) {
      closeEvent()
    }
  }
  useEffect(() => {
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])
  return {
    ref,
  }
}
const Accordion = ({ title, children }: AccordionProps) => {
  const [open, isOpen] = useState<boolean>(false)
  const [overflow, setOverflow] = useState<string>('hidden')
  const { ref: container } = useCloseEvent(() => onClickOpen)
  const onTranstionEnd = () => {
    if (open) {
      setOverflow('unset')
    }
  }
  const onClickOpen = () => {
    isOpen((prev) => !prev)
    if (open) {
      setOverflow('hidden')
    }
  }
  return (
    <div
      className="basic-accordion"
      ref={container}
      style={{ overflow }}
      onTransitionEnd={onTranstionEnd}
    >
      <div className="header">
        <span className="title">{title}</span>
        <div
          // onClick={() => isOpen((prev) => !prev)}
          onClick={onClickOpen}
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
