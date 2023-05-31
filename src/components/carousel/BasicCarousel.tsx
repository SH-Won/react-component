import Colors from '../../styles/colors.module.scss'
import { Element } from '../elements'
import Carousel from './Carousel'
import './Carousel.scss'
import useCarouselController from './hook/useCarouselController'
interface CarouselProps<T> {
  items: T[]
  renderItems: (item: T, index: number) => React.ReactElement
}
const BasicCarousel = <T,>(props: CarouselProps<T>) => {
  const itemLength = props.items.length
  const {
    container,
    slide,
    currentIndex,
    clickLeft,
    clickRight,
    clickPoint,
    onTransitionEnd,
  } = useCarouselController(itemLength)

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

export default BasicCarousel
