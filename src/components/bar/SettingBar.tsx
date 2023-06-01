import { useLayoutEffect, useRef, useState } from 'react'
import './styles/SettingBar.scss'

interface Item {
  key?: string
  value: string
  order?: number
}
interface SettingBarProps {
  items: Item[]
  width?: number // px % ??
  onSelect?: (item: Item) => void
}
const SettingBar = ({ items, width, onSelect }: SettingBarProps) => {
  const convertedItems = items?.map((item, order) => ({
    ...item,
    order,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
  }))
  const itemLength = items.length
  const [size, setSize] = useState<number>(0)
  const [position, setPosition] = useState<Item>(convertedItems[0])
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
      setSize(barWidth / itemLength)
    } else {
      setSize(width / itemLength)
    }
  }, [width])

  return (
    <div style={{ width, height: size }}>
      <div className="setting-bar" ref={bar}>
        {convertedItems.map((item, index) => (
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
        {convertedItems.map((item, index) => (
          <span
            key={item.key}
            className={index === position.order ? 'selected' : ''}
          >
            {item.order + 1}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SettingBar
