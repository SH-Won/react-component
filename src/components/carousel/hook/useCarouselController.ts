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
    slide.current!.style.transform = `translateX(+${100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const clickRight = () => {
    if(!slide.current) return 
    let index = currentIndex + 1
    setDirection(1)
    slide.current!.style.transform = `translateX(-${100}%)`
    slide.current!.style.transition = `transform .3s linear`
  }
  const clickPoint = (selectedIndex: number) => {
    if(selectedIndex === currentIndex) return 
    
    if(selectedIndex < currentIndex){
      slide.current!.style.transform = `translateX(+${(currentIndex- selectedIndex) * 100}%)`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(-1)
      setCurrentIndex(selectedIndex+1)
    }
    else{
      slide.current!.style.transform = `translateX(-${(selectedIndex- currentIndex) * 100}%)`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(1)
      setCurrentIndex(selectedIndex-1)
    }
    
  }
  const touchMove = (distance : number) => {
    const scrollLeft = container.current?.scrollLeft
    if(distance > 0) {
      const index = currentIndex + 1
      const x = `-${index * 100}% + ${scrollLeft}px`
      slide.current!.style.transform =`translateX(calc(${x}))`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(1)
    }else{
      const index = currentIndex - 1
      const width = slide.current?.getBoundingClientRect().width as number
      const x = `${width}px - ${Math.abs(distance)}px`
      slide.current!.style.transform =`translateX(calc(${x}))`
      slide.current!.style.transition = `transform .3s linear`
      setDirection(-1)
    }
  }
  const touchRecover = (distance : number) => {
    if(distance > 0){
      const scrollLeft = container.current?.scrollLeft
      const index = currentIndex 
      // slide.current!.style.transform = `translateX(${distance}px)`
      const x = `-${index * 100}% + ${scrollLeft}px`
      slide.current!.style.transform =`translateX(calc(${x}))`
      slide.current!.style.transition = `transform .1s linear`
      setRecover(1)
      // setDirection(1)
    }else{
      const index = currentIndex 
      
      const scrollLeft = container.current?.scrollLeft
      const width = slide.current?.getBoundingClientRect().width as number
      const x = `-${index * 100}% + ${scrollLeft}px`
      slide.current!.style.transform =`translateX(calc(${x}))`
      slide.current!.style.transition = `transform .1s linear`
      setRecover(-1)
      // setDirection(-1)
    }

  }
  const onTransitionEnd = () => {
    const width = slide.current?.getBoundingClientRect().width as number
    if (direction === 0) {
      if(recover === -1){
        slide.current!.style.transform = `translateX(0)`
        slide.current!.style.transition = 'none'
        if(container.current){
          container.current!.scrollLeft = width * (currentIndex)
        }
      }
      setRecover(0)
      return
    }
    // const width = slide.current?.getBoundingClientRect().width as number
    if (direction === 1) {
      if (currentIndex === itemLength) {
        setCurrentIndex(1)
        slide.current!.style.transform = `translateX(0)`
        slide.current!.style.transition = 'none'
        container.current!.scrollLeft = width
      } else {
        slide.current!.style.transform = `translateX(0)`
        slide.current!.style.transition = 'none'
        if(container.current){
          container.current!.scrollLeft = width * (currentIndex + 1)
        }
        setCurrentIndex((prev) => prev + 1)
      }
    } else {
      if (currentIndex === 1) {
        setCurrentIndex(itemLength)
        // slide.current!.style.transform = `translateX(-${
        //   (itemLength - 1) * 100
        // }%)`
        slide.current!.style.transform = `translateX(0)`
        slide.current!.style.transition = 'none'
        container.current!.scrollLeft = width * (itemLength )
      } else {
        // slide.current!.style.transform = `translateX(-${
        //   (itemLength - 1) * 100
        // }%)`
        slide.current!.style.transform = `translateX(0)`
        slide.current!.style.transition = 'none'
        if(container.current){
          container.current!.scrollLeft = width * (currentIndex -1)
        }
        setCurrentIndex((prev) => prev - 1)
        // container.current!.scroll
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

