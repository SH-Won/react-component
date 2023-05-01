import type { Meta, StoryObj } from '@storybook/react'
import PosterCard from './PosterCard'

const meta: Meta<typeof PosterCard> = {
  title: 'Card',
  component: (props) => {
    return (
      <div style={{ width: '150px' }}>
        <PosterCard {...props} />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof PosterCard>

export const _PosterCard: Story = {
  args: {
    imageUrl:
      'https://image.tmdb.org/t/p/w220_and_h330_face/lCUvpSvjAPU82HvJ8XfR74Chv5r.jpg',
    voteAverage: 95,
    title: '그레이 아나토미',
    releaseDate: '3월 27, 2005',
    ratio: 1.5,
  },
}
