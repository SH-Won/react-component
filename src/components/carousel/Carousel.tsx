import Colors from '../../styles/colors.module.scss'
import { Ref } from 'react'
import { Element } from '../elements'
import './Carousel.scss'
interface CarouselProps {
  itemLength: number
  slide: Ref<HTMLDivElement>
  currentIndex: number
  clickLeft: () => void
  clickRight: () => void
  clickPoint: (selectedNumber: number) => void
  onTransitionEnd: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onTouchStart?: (e: React.TouchEvent) => void
  onTouchEnd?: (e: React.TouchEvent) => void
  children: JSX.Element[] | JSX.Element | string
}
const Carousel = ({
  itemLength,
  slide,
  currentIndex,
  clickLeft,
  clickRight,
  clickPoint,
  onTransitionEnd,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  children,
}: CarouselProps) => {
  return (
    <div
      className="carousel"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="slide-container"
        ref={slide}
        onTransitionEnd={onTransitionEnd}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <div className="left" onClick={clickLeft}>
        <Element name="Right" size="small" color={Colors.white} />
      </div>
      <div className="right" onClick={clickRight}>
        <Element name="Right" size="small" color={Colors.white} />
      </div>
      <div className="progress">
        {Array(itemLength)
          .fill(1)
          .map((item, index) => (
            <div
              className={`progress-point ${
                currentIndex === index + 1 ? 'selected' : ''
              }`}
              key={index}
              onClick={() => clickPoint(index + 1)}
            ></div>
          ))}
      </div>
    </div>
  )
}

export default Carousel
