import './styles/OptionList.scss'
import SelectedItem from './SelectedItem'
interface OptionListProps {
  items: {
    name: string
    value: string
  }[]
  itemSize?: 'small' | 'medium' | 'big'
  open?: boolean
  selected?: string
  click?: (item: any) => void
}
const OptionList = ({
  items,
  selected,
  click,
  open,
  itemSize,
}: OptionListProps) => {
  const size = itemSize ?? 'medium'
  return (
    <div className={`option-list ${open ? 'slide' : ''}`}>
      <div className="option-items">
        {items.map((item) => (
          <SelectedItem
            size={size}
            key={item.name}
            text={item.name}
            selected={item.name === selected}
            click={() => click?.(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default OptionList
