// import { useBreakPoints } from '@/hooks'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './styles/ToggleBar.scss'
// popular toprated trending
// api endpoint 가 각각 달라서
// 카테고리로 분류해야할지 아니면 movie/tv 등으로 분류해야할지
// 일단 영화/TV/트렌딩 으로 크게 분류하고
// 각각 인기/탑레이팅/현재상영중 따위로 분류한다.

interface BaseProps {
  id: string
  order: number
  name: string
  value: string
}
// interface Temp<T> extends BaseProps{
//   [Properties in keyof T] :
// }
// type MappedTypeWithNewProperties<T extends BaseProps> = {
//   // [Properties in keyof U] : U[Properties]
//   [Properties in keyof T]: T[Properties]
// }
interface ToggleBarProps<T> {
  screen: string
  items: T[]
  onSelect: (item: T) => void
  backGroundColor?: string
  fontColor?: string
}
const ToggleBar = <T extends BaseProps>({
  items,
  onSelect,
  screen,
}: ToggleBarProps<T>) => {
  const bar = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<number>(0)
  const [backgroundStyle, setBackgroundStyle] = useState<{
    width: string
    transform?: string
    transition: string
  }>({ width: '', transform: '', transition: '' })

  const onSelelctItem = (item: T) => {
    if (selected === item.order) return
    const left = bar.current?.getBoundingClientRect().left as number
    const width = bar.current?.children[item.order].clientWidth as number
    const moveLeft =
      (bar.current?.children[item.order].getBoundingClientRect()
        .left as number) - left
    setSelected(item.order)
    onSelect?.(item)
    setBackgroundStyle((prev) => ({
      width: `${width}px`,
      transform: `translate(${moveLeft - 1}px)`,
      transition: 'transform 0.5s ease',
    }))
  }
  useLayoutEffect(() => {
    const width = bar.current?.children[selected].clientWidth as number
    const left = bar.current?.getBoundingClientRect().left as number
    const moveLeft =
      (bar.current?.children[selected].getBoundingClientRect().left as number) -
      left
    setBackgroundStyle({
      width: `${width}px`,
      transform: `translate(${moveLeft - 1}px)`,
      transition: '',
    })
  }, [screen, bar.current?.children])
  return (
    <div className="toggle-bar" ref={bar}>
      {items.map((item) => (
        <div
          className={`toggle-item ${screen} ${
            selected === item.order ? 'selected' : ''
          }`}
          style={{}}
          key={item.id}
          onClick={() => onSelelctItem(item)}
        >
          <span>{item.name}</span>
        </div>
      ))}
      <div className="item-background" style={backgroundStyle}></div>
    </div>
  )
}

export default ToggleBar
