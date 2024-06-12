import './styles/checkbox.scss'

interface ICheckBoxProps {
  id: string
  text?: string
  isChecked: boolean
  handleChange?: () => void
  wrapped?: boolean
  size?: 'small' | 'medium' | 'big' | undefined
}
const CheckBox = ({
  id,
  text,
  isChecked,
  handleChange,
  wrapped,
  size,
}: ICheckBoxProps) => {
  return wrapped ? (
    <div className="medhichis-checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        className="medichis-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className={size}>
        <span>{text || ''}</span>
        {/* {text || ''} */}
      </label>
    </div>
  ) : (
    <>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        className="medichis-checkbox"
        onChange={handleChange}
      />
      <label htmlFor={id} className={size}>
        {/* {text || ''} */}
        <span>{text || ''}</span>
      </label>
    </>
  )
}

export default CheckBox
