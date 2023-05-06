import type { Meta, StoryObj } from '@storybook/react'
import RatioImage from '../RatioImage'

const meta: Meta<typeof RatioImage> = {
  title: 'RatioImage',
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
      'https://res.cloudinary.com/dhjegsbqv/image/upload/v1639887022/gallery/9B3BDAC4-F061-41F9-836D-5E68ECC4E511_amhqsc.jpg',
    ratio: 9 / 16,
  },
}
