import type { Meta, StoryObj } from '@storybook/react'
import SelectedItem from '../SelectedItem'

const meta: Meta<typeof SelectedItem> = {
  title: 'Common',
  component: (props) => {
    return (
      <div style={{ maxWidth: '100px' }}>
        <SelectedItem {...props} />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof SelectedItem>

export const Selected_Item: Story = {
  args: {
    type: 'normal',
    text: '아이템',
    size: 'medium',
  },
}
