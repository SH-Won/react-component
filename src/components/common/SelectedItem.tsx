import './styles/SelectedItem.scss'
interface SelectedItemProps {
  size?: 'small' | 'medium' | 'big'
  selected: boolean
  text: string
  click?: () => void
}

const SelectedItem = (props: SelectedItemProps) => {
  const size = props.size ?? 'medium'
  const selected = props.selected ? 'selected' : ''
  return (
    <div className={`selected-item ${size} ${selected}`} onClick={props.click}>
      {props.text}
    </div>
  )
}

export default SelectedItem
