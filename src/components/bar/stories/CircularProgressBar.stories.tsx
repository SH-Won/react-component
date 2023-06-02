import type { Meta, StoryObj } from '@storybook/react'
import CircularProgressBar from '../CircularProgressBar'

const meta: Meta<typeof CircularProgressBar> = {
  title: 'Bar',
  component: CircularProgressBar,
}
export default meta
type Story = StoryObj<typeof CircularProgressBar>

export const CircularProgress: Story = {
  args: {
    size: 100,
    percent: 75,
  },
}
