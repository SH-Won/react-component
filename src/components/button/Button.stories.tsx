import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}
export default meta
type Story = StoryObj<typeof Button>

export const Main: Story = {
  args: {
    color: Colors.main,
    size: 'big',
    width: '80px',
    border: 'white',
    children: '버튼',
    fontColor: 'white',
  },
}
