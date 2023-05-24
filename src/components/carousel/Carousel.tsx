import Colors from '../../styles/colors.module.scss'
import { useRef, useState } from 'react'
import { Element } from '../elements'
import './Carousel.scss'
interface CarouselProps<T> {
  items: T[]
  renderItems: (item: T, index: number) => React.ReactElement
}
const Carousel = <T,>(props: CarouselProps<T>) => {
  const slide = useRef<HTMLDivElement>(null)
  const mapper = props.items.map((item, index) => ({
    index: index + 1,
    item,
  }))
  const [currentItem, setCurrentItem] = useState(mapper[0])
  const [currentIndex, setCurrentIndex] = useState(1)
  const [direction, setDirection] = useState(0)
  // 1 == right / -1 == left
  const clickLeft = () => {
    let index = currentIndex - 1
    setDirection(-1)
    slide.current!.style.transform = `translateX(-${index * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const clickRight = () => {
    let index = currentIndex + 1
    setDirection(1)
    slide.current!.style.transform = `translateX(-${index * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const onClickMove = (selectedIndex: number) => {
    slide.current!.style.transform = `translateX(-${selectedIndex * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
    setCurrentIndex(selectedIndex)
  }
  const onTransitionEnd = () => {
    if (direction === 0) return
    if (direction === 1) {
      if (currentIndex === props.items.length) {
        setCurrentIndex(1)
        slide.current!.style.transform = `translateX(-100%)`
        slide.current!.style.transition = 'none'
      } else {
        setCurrentIndex((prev) => prev + 1)
      }
    } else {
      if (currentIndex === 1) {
        setCurrentIndex(props.items.length)
        slide.current!.style.transform = `translateX(-${
          props.items.length * 100
        }%)`
        slide.current!.style.transition = 'none'
      } else {
        setCurrentIndex((prev) => prev - 1)
      }
    }
  }

  return (
    <div className="carousel">
      <div
        className="slide-container"
        ref={slide}
        onTransitionEnd={onTransitionEnd}
      >
        {props.renderItems(
          props.items[props.items.length - 1],
          props.items.length,
        )}
        {props.items.map((item, index) => props.renderItems(item, index))}
        {props.renderItems(props.items[0], -1)}
      </div>
      <div className="left" onClick={clickLeft}>
        <Element name="Right" size="medium" color={Colors.white} />
      </div>
      <div className="right" onClick={clickRight}>
        <Element name="Right" size="medium" color={Colors.white} />
      </div>
      <div className="progress">
        {Array(props.items.length)
          .fill(1)
          .map((item, index) => (
            <div
              className={`progress-point ${
                currentIndex === index + 1 ? 'selected' : ''
              }`}
              key={index}
              onClick={() => onClickMove(index + 1)}
            ></div>
          ))}
      </div>
    </div>
  )
}

export default Carousel
