import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import './styles/SettingBar.scss'

interface Item {
  key: string
  value: number
  order: number
}
interface SettingBarProps {
  initialCount?: number
  width?: number // px % ??
  onSelect?: (item: Item) => void
  magnification?: number
  count?: number
}
const SettingBar = ({
  initialCount,
  width,
  onSelect,
  count,
  magnification,
}: SettingBarProps) => {
  const items = useMemo(() => {
    return Array(count! + 1)
      .fill(1)
      .map((_, order) => ({
        order,
        value: order * magnification!,
        key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
      }))
  }, [count])
  const itemLength = items.length
  const [size, setSize] = useState<number>(0)
  const [position, setPosition] = useState<Item>(items[initialCount ?? 0])
  const onClickProgress = (item: Item) => {
    setPosition(item)
    onSelect?.(item)
  }
  const bar = useRef<HTMLDivElement>(null)
  const calcWidth = () => {
    const barWidth = bar.current?.getBoundingClientRect().width as number
    const gap = (barWidth - items.length * size) / (items.length - 1)
    let calc = gap * position.order! + size * position.order!
    if (position.order !== 0) {
      calc += size / 2
    }
    return {
      width: `${calc}px`,
    }
  }
  useLayoutEffect(() => {
    const barWidth = bar.current!.getBoundingClientRect().width
    if (!width) {
      const size = barWidth / itemLength
      setSize(size >= 30 ? 30 : size)
    } else {
      const size = width / itemLength
      setSize(size >= 30 ? 30 : size)
    }
  }, [width])
  // console.log(convertedItems.map((el) => el.key))
  return (
    <div style={{ width, height: size * 2 }} className="setting-bar-wrapper">
      <div className="setting-bar" ref={bar}>
        {items.map((item, index) => (
          <div
            className={`progress ${
              item.order === position.order ? 'selected' : ''
            }`}
            key={item.key}
            style={{ width: size }}
            onClick={() => onClickProgress(item)}
          >
            <div
              className={`point ${
                item.order < position.order! ? 'selected' : ''
              }`}
            ></div>
          </div>
        ))}
        <div
          className={`user-progress ${
            position.order === itemLength - 1 ? 'end' : ''
          }`}
          style={calcWidth()}
        ></div>
      </div>
      <div className="setting-explain">
        {items.map((item, index) => (
          <span
            key={item.key}
            className={index === position.order ? 'selected' : ''}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SettingBar
