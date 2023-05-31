import type { Meta, StoryObj } from '@storybook/react'
import PageLoadingSpinner from '../PageLoadingSpinner'

const meta: Meta<typeof PageLoadingSpinner> = {
  title: 'LoadingSpinner',
  component: PageLoadingSpinner,
}
export default meta
type Story = StoryObj

export const PageLooadingSpinner: Story = {
  args: {
    text: '로드 중 입니다',
    customHeight: '200px',
  },
}
