import type { Meta, StoryObj } from '@storybook/react'
import LoadingSpinner from '../LoadingSpinner'

const meta: Meta<typeof LoadingSpinner> = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
}
export default meta
type Story = StoryObj

export const RouterLoadingSpinner: Story = {
  args: {
    opacity: 0.5,
  },
}
