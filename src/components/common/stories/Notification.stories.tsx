import type { Meta, StoryObj } from '@storybook/react'
import NotifiCation from '../Notification'

const meta: Meta<typeof NotifiCation> = {
  title: 'Common',
  component: (props) => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <NotifiCation {...props} />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof NotifiCation>

export const Notification: Story = {
  args: {
    children: '',
    text: '알 수 없는 이유로 데이터를 불러 올 수 없습니다.',
    title: '',
    height: '',
  },
}
