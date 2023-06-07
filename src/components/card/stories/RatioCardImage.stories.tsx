import type { Meta, StoryObj } from '@storybook/react'
import RatioImage from '../RatioImage'

const meta: Meta<typeof RatioImage> = {
  title: 'Card',
  component: (props) => {
    return (
      <div style={{ maxWidth: '300px' }}>
        <RatioImage {...props} />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof RatioImage>

export const Ratio_Image: Story = {
  args: {
    imageUrl:
      'https://image.tmdb.org/t/p/w220_and_h330_face/lCUvpSvjAPU82HvJ8XfR74Chv5r.jpg',
    ratio: 9 / 16,
  },
}
