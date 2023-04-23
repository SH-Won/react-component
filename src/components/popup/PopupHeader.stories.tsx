import type { Meta, StoryObj } from '@storybook/react'
import { PopupBasicHeader } from '.'

const meta: Meta = {
  title: 'PopupHeader',
  component: (props) => {
    return (
      <div style={{ maxWidth: '600px', backgroundColor: 'white' }}>
        <PopupBasicHeader {...props} />
      </div>
    )
  },
}

export default meta
type Story = StoryObj

export const PopupHeader: Story = {
  args: {
    title: '팝업',
    back: () => {},
    close: () => {},
    maxProgress: 5,
    progress: 2,
  },
}
