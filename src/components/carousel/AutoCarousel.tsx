import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
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
    setStartTimer(false)
  }
  const onMouseLeave = () => {
    setTimer(timerFunc())
    setStartTimer(true)
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
