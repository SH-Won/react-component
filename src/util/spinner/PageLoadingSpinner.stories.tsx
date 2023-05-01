import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import PageLoadingSpinner from './PageLoadingSpinner'

const meta: Meta<typeof PageLoadingSpinner> = {
  title: 'PageLoadingSpinner',
  component: PageLoadingSpinner,
}
export default meta
type Story = StoryObj

export const loadingSpinner: Story = {
  args: {
    text: '로드 중 입니다',
    customHeight: '200px',
  },
}
