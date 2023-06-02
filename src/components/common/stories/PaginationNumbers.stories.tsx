import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import PaginationNumbers from '../PaginationNumbers'

const meta: Meta<typeof PaginationNumbers> = {
  title: 'Common',
  component: (props) => {
    const [currentPage, setCurrentPage] = useState<number>(props.currentPage)
    const onClick = (id: number) => {
      setCurrentPage(id)
    }
    return (
      <PaginationNumbers {...props} currentPage={currentPage} click={onClick} />
    )
  },
}
export default meta
type Story = StoryObj<typeof PaginationNumbers>

export const _PaginationNumbers: Story = {
  args: {
    currentPage: 1,
    totalPages: 500,
  },
}
