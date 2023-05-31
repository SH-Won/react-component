import { useLayoutEffect, useRef, useState } from 'react'
import './styles/SettingBar.scss'

const items = [
  {
    id: 0,
    name: 'start',
  },
  {
    id: 1,
    name: 'middle',
  },
  {
    id: 2,
    name: 'end',
  },
  {
    id: 3,
    name: 'total',
  },
  {
    id: 4,
    name: 'ttoal',
  },
  {
    id: 5,
    name: 'totalll',
  },
  {
    id: 6,
    name: 'ttoalllll',
  },
  {
    id: 7,
    name: 'ttoaldasdf',
  },
  {
    id: 8,
    name: 'totallld',
  },
  {
    id: 9,
    name: 'ttoallllldd',
  },
]
interface SettingBarProps<T> {
  items: T[]
  onSelect: () => void
}
const SettingBar = () => {
  const [position, setPosition] = useState<(typeof items)[0]>(items[0])
  const onClickProgress = (item: (typeof items)[0]) => {
    setPosition(item)
  }
  const gap = useRef<number>()
  const bar = useRef<HTMLDivElement>(null)
  const calcWidth = () => {
    let width
    const itemLength = items.length - 1
    const barWidth = bar.current?.getBoundingClientRect().width as number
    const averagePercent = Math.floor(100 / itemLength)
    // const averageWidth = barWidth / itemLength
    width = `${averagePercent * position.id}%`
    if (position.id !== 0 && position.id !== itemLength) {
      if (position.id === Math.floor(items.length / 2)) {
      } else if (position.id < Math.floor(items.length / 2)) {
        width += ` + 7px`
      } else {
        width += ` - 7px`
      }
    }
    console.log(width)
    const middle = Math.floor(items.length / 2)
    // if (position.id !== 0 && position.id !== itemLength) {
    //   width +=
    //     position.id < middle
    //       ? ` + ${gap.current! * (middle - position.id - 1)}px`
    //       : ` - ${gap.current! * (position.id - middle)}px`
    //   console.log(width)
    // }
    return {
      width: `calc(${width})`,
      // width: `${averageWidth * position.id}px`,
    }
  }
  useLayoutEffect(() => {
    const barWidth = bar.current?.getBoundingClientRect().width as number
    gap.current = (barWidth - items.length * 30) / (items.length - 1)
  }, [bar])

  return (
    <div>
      <div className="setting-bar" ref={bar}>
        {items.map((item, index) => (
          <div
            className={`progress ${item.id === position.id ? 'selected' : ''}`}
            key={item.id + item.name}
            onClick={() => onClickProgress(item)}
          >
            <div
              className={`point ${item.id < position.id ? 'selected' : ''}`}
            ></div>
          </div>
        ))}
        <div
          className={`user-progress ${
            position.id === items.length - 1 ? 'end' : ''
          }`}
          style={calcWidth()}
        ></div>
      </div>
      <div className="setting-explain">
        {items.map((item, index) => (
          <span
            key={item.name}
            className={index === position.id ? 'selected' : ''}
          >
            {item.id}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SettingBar
