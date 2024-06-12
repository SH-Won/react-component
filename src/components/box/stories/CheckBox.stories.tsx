import type { Meta, StoryObj } from '@storybook/react'
import CheckBox from '../CheckBox'
import './styles.scss'

type TCheckBoxProps = Parameters<typeof CheckBox>[0]
const meta: Meta<typeof CheckBox> = {
  title: 'Box',
  component: (args) => {
    const smallCheckBoxProps: TCheckBoxProps[] = Array(10)
      .fill(0)
      .map((_, index) => ({
        id: `small_${index}`,
        text: `테스트-${index}`,
        size: 'small',
        isChecked: Math.random() < 0.5 ? true : false,
      }))
    const mediumCheckBoxProps: TCheckBoxProps[] = Array(10)
      .fill(0)
      .map((_, index) => ({
        id: `medium_${index}`,
        text: `테스트-${index}`,
        size: 'medium',
        isChecked: Math.random() < 0.5 ? true : false,
      }))
    const bigCheckBoxProps: TCheckBoxProps[] = Array(10)
      .fill(0)
      .map((_, index) => ({
        id: `big_${index}`,
        text: `테스트-${index}`,
        size: 'big',
        isChecked: Math.random() < 0.5 ? true : false,
      }))

    return (
      <div className="checkbox-stories-container">
        {[smallCheckBoxProps, mediumCheckBoxProps, bigCheckBoxProps].map(
          (propsArr) => {
            return (
              <div className="checkbox-wrapper">
                {propsArr.map((props) => (
                  <CheckBox {...props} />
                ))}
              </div>
            )
          },
        )}
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof CheckBox>

export const _CheckBox: Story = {
  args: {
    id: '1234',
    text: '테스트',
    // wrapped: true,
  },
}
