import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Carousel from './Carousel'
import useCarouselController from './hook/useCarouselController'

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}
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
    container,
    slide,
    currentIndex,
    clickLeft,
    clickRight,
    clickPoint,
    touchMove,
    touchRecover,
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
    container.current!.scrollLeft = itemWidth.current as number
    io.observe(carousel)
  }, [])
  // const timerFunc = () => {
  //   return setTimeout(() => {
  //     clickRight()
  //   }, props.time)
  // }
  const timerFunc = () => {
    return setInterval(() => {
      clickRight()
    }, props.time)
  }
  useEffect(() => {
    // let currentTimer: any
    // if (startTimer) {
    //   clearTimeout(timer)
    //   currentTimer = setTimeout(() => {
    //     clickRight()
    //   }, props.time)
    //   setTimer(currentTimer)
    // } else {
    //   clearTimeout(timer)
    // }
    // return () => {
    //   clearTimeout(timer)
    // }
    clearInterval(timer)
    if (startTimer) {
      setTimer(timerFunc())
    }
  }, [currentIndex, startTimer])

  const onMouseEnter = () => {
    // if (isMobile()) {
    //   clearTimeout(timer)
    //   return
    // }
    // clearInterval(timer)

    setStartTimer(false)
  }

  const pageX = useRef<number>()
  const onMouseLeave = () => {
    setStartTimer(true)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    // clearTimeout(timer)
    console.log('touch start')
    if (container.current) {
      container.current!.style.overflow = 'auto'
    }
    setStartTimer(false)
    pageX.current = e.changedTouches[0].pageX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (container.current) {
      // container.current!.style.overflow = 'hidden'
    }
    const range = itemWidth.current! / 2.5
    const touchDistance = pageX.current! - e.changedTouches[0].pageX

    if (Math.abs(touchDistance) >= range) {
      touchMove(touchDistance)
    } else {
      const radiusX = e.changedTouches[0]
      touchRecover(touchDistance)
    }
    setTimeout(() => {
      if (timer) {
        clearTimeout(timer)
      }
      setStartTimer(true)
    }, 2000)
  }

  return (
    <Carousel
      {...{
        container,
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
