import { forwardRef, Ref } from 'react'

interface IBasicCustomInputProps {
  ref: Ref<HTMLInputElement>
  placeHolder: string
}
const BasicCustomInput = forwardRef((props: IBasicCustomInputProps, ref) => {
  return <input {...props} readOnly />
})

export default BasicCustomInput
