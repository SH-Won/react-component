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
    itemWidth.current = slide.current!.getBoundingClientRect().width
    const carousel = slide.current!.parentElement as Element
    io.observe(carousel)
  }, [])
  const timerFunc = () => {
    return setInterval(() => {
      clickRight()
    }, props.time)
  }
  useEffect(() => {
    clearInterval(timer)
    if (startTimer && itemLength >= 2) {
      setTimer(timerFunc())
    }
  }, [currentIndex, startTimer])

  const onMouseEnter = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('mouse enter')
    setStartTimer(false)
  }

  const pageX = useRef<number>()
  const onMouseLeave = () => {
    console.log('mouse leave')
    setStartTimer(true)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    console.log('touch start')
    setStartTimer(false)
    pageX.current = e.changedTouches[0].pageX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    const moveX = e.changedTouches[0].pageX
    const diff = pageX.current! - moveX
    if (Math.abs(diff) > slide.current!.getBoundingClientRect().width / 1.5) {
      return
    }
    let x
    if (diff > 0) {
      x = `-${currentIndex * 100}% - ${Math.abs(diff)}px`
    } else {
      x = `-${currentIndex * 100}% + ${Math.abs(diff)}px`
    }
    slide.current!.style.transform = `translateX(calc(${x}))`
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    console.log('touch end')
    const range = itemWidth.current! / 2.5
    const touchDistance = pageX.current! - e.changedTouches[0].pageX

    if (Math.abs(touchDistance) >= range) {
      touchMove(touchDistance)
    } else {
      touchRecover()
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
        onTouchMove,
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
