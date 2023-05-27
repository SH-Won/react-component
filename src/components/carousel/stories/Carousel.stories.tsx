import { RatioCardImage } from '@/components/card'
import type { Meta, StoryObj } from '@storybook/react'
import AutoCarousel from '../AutoCarousel'
import BasicCarousel from '../BasicCarousel'

const meta: Meta<typeof BasicCarousel> = {
  title: 'Carousel',
  component: (props) => {
    const items = [
      'https://image.tmdb.org/t/p/w220_and_h330_face/lCUvpSvjAPU82HvJ8XfR74Chv5r.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/3JT1oE0JIA6CQJaZDG00y3S0kP3.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/dlGyzCxbBQK1U2O5o31Z1hB6erc.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/usfDx1g1eN9eZ8kxfrbLRkKVjit.jpg',
    ]
    return (
      <div style={{ width: '80%' }}>
        <BasicCarousel<(typeof items)[0]>
          items={items}
          renderItems={(item, index) => (
            <RatioCardImage key={index + '_'} imageUrl={item} ratio={0.564} />
          )}
        />
        <br />
        <br />
        <AutoCarousel<(typeof items)[0]>
          time={2000}
          items={items}
          renderItems={(item, index) => (
            <RatioCardImage key={index + '_'} imageUrl={item} ratio={0.564} />
          )}
        />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof BasicCarousel>

export const _BasicCarousel: Story = {}
