import './styles/SelectedItem.scss'
interface SelectedItemProps {
  type?: 'normal' | 'border' | 'background' | 'custom'
  size?: 'small' | 'medium' | 'big' | 'custom'
  selected: boolean
  text?: string
  children?: JSX.Element | JSX.Element[] | string
  click?: () => void
}

const SelectedItem = (props: SelectedItemProps) => {
  const type = props.type ?? 'normal'
  const size = props.size ?? 'medium'
  const selected = props.selected ? 'selected' : ''
  return (
    <div
      className={`selected-item ${type} ${size} ${selected}`}
      onClick={() => props.click?.()}
      onTouchStart={() => props.click?.()}
      onTouchEnd={(e) => e.preventDefault()}
    >
      {props.text ?? props.children}
    </div>
  )
}

export default SelectedItem
