import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import Carousel from './Carousel'
import useCarouselController from './hook/useCarouselController'
interface CarouselProps<T> {
  items: T[]
  renderItems: (item: T, index: number) => React.ReactElement
  time: number
}
const AutoCarousel = <T,>(props: CarouselProps<T>) => {
  const itemLength = props.items.length
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()
  const [startTimer, setStartTimer] = useState(false)
  const itemWidth = useRef<number>()
  const {
    slide,
    currentIndex,
    clickLeft,
    clickRight,
    clickPoint,
    onTransitionEnd,
  } = useCarouselController(itemLength)

  useLayoutEffect(() => {
    const io = new IntersectionObserver(
      (entries, ob) => {
        if (entries[0].isIntersecting) {
          setStartTimer(true)
        } else {
          setStartTimer(false)
        }
      },
      {
        threshold: 0.1,
      },
    )
    itemWidth.current = slide.current!.children[0].clientWidth
    const carousel = slide.current!.parentElement as Element
    io.observe(carousel)
  }, [])
  const timerFunc = () => {
    return setTimeout(() => {
      clickRight()
    }, props.time)
  }
  useEffect(() => {
    if (startTimer) {
      setTimer(timerFunc())
    } else {
      clearTimeout(timer)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex, startTimer])

  const onMouseEnter = () => {
    console.log('mouse enter')
    setStartTimer(false)
  }

  const pageX = useRef<number>()
  const onMouseLeave = () => {
    console.log('mouse leave')
    setStartTimer(true)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    setStartTimer(false)
    pageX.current = e.changedTouches[0].pageX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const range = itemWidth.current! / 2.5
    const touchDistance = pageX.current! - e.changedTouches[0].pageX

    if (touchDistance < 0 && Math.abs(touchDistance) >= range) {
      clickLeft()
    } else if (touchDistance > 0 && Math.abs(touchDistance) >= range) {
      clickRight()
    }
    setTimeout(() => {
      setStartTimer(true)
    }, 3000)
  }

  return (
    <Carousel
      {...{
        slide,
        currentIndex,
        clickLeft,
        clickRight,
        clickPoint,
        onTransitionEnd,
        onMouseEnter,
        onMouseLeave,
        itemLength,
        onTouchStart,
        onTouchEnd,
      }}
    >
      <>
        {props.renderItems(
          props.items[props.items.length - 1],
          props.items.length,
        )}
        {props.items.map((item, index) => props.renderItems(item, index))}
        {props.renderItems(props.items[0], -1)}
      </>
    </Carousel>
  )
}

export default AutoCarousel
