import './styles/TextBox.scss'
interface TextBoxProps {
  type?: 'normal' | 'ridi'
  size: 'small' | 'medium' | 'big' | 'custom'
  backgroundColor?: string
  fontColor?: string
}
const TextBox = () => {
  return <span className="text-item">TextBox</span>
}

export default TextBox
