import { useState, useRef, useCallback } from 'react';
const useCarouselController = (itemLength : number) => {
  const container = useRef<HTMLDivElement>(null)
  const slide = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [direction, setDirection] = useState(0)
  const [recover, setRecover] = useState(0)
  // 1 == right / -1 == left
  const clickLeft = () => {
    let index = currentIndex - 1
    setDirection(-1)
    slide.current!.style.transform = `translateX(-${index * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const clickRight = () => {
    if(!slide.current) return 
    let index = currentIndex + 1
    setDirection(1)
    slide.current!.style.transform = `translateX(-${index * 100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const clickPoint = (selectedIndex: number) => {
    if(selectedIndex === currentIndex) return 
    
    if(selectedIndex < currentIndex){
      slide.current!.style.transform = `translateX(+${(selectedIndex) * 100}%)`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(-1)
      setCurrentIndex(selectedIndex)
    }
    else{
      slide.current!.style.transform = `translateX(-${(selectedIndex) * 100}%)`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(1)
      setCurrentIndex(selectedIndex)
    }
    
  }
  const touchMove = (distance : number) => {
    if(distance > 0) {
      clickRight()
    }else{
      clickLeft()
    }
  }
  const touchRecover = () => {
    slide.current!.style.transform = `translateX(-${currentIndex * 100}%)`
    slide.current!.style.transition = `transform .15s linear`

  }
  const onTransitionEnd = () => {
    if (direction === 0) {
      return
    }
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
    container,
    slide,
    currentIndex,
    clickLeft,
    clickRight,
    clickPoint,
    touchMove,
    touchRecover,
    onTransitionEnd,
  }

}
export default useCarouselController

