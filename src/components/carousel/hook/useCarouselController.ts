import { useState, useRef, useCallback } from 'react';
const useCarouselController = (itemLength : number) => {
  const slide = useRef<HTMLDivElement>(null)
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
  const clickPoint = (selectedIndex: number) => {
    slide.current!.style.transform = `translateX(-${selectedIndex * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
    setCurrentIndex(selectedIndex)
  }
  const onTransitionEnd = () => {
    if (direction === 0) return
    if (direction === 1) {
      if (currentIndex === itemLength) {
        setCurrentIndex(1)
        slide.current!.style.transform = `translateX(-100%)`
        slide.current!.style.transition = 'none'
      } else {
        setCurrentIndex((prev) => prev + 1)
      }
    } else {
      if (currentIndex === 1) {
        setCurrentIndex(itemLength)
        slide.current!.style.transform = `translateX(-${
          itemLength * 100
        }%)`
        slide.current!.style.transition = 'none'
      } else {
        setCurrentIndex((prev) => prev - 1)
      }
    }
    setDirection(0)
  }

  return {
    slide,
    currentIndex,
    clickLeft,
    clickRight,
    clickPoint,
    onTransitionEnd,
  }

}
export default useCarouselController

