import { Button } from '../../button'
import { RatioCardImage } from '@/components/card'
import type { Meta, StoryObj } from '@storybook/react'
import AutoCarousel from '../AutoCarousel'
import Colors from '../../../styles/colors.module.scss'
import { images } from '../../card/stories/Card.stories'
const meta: Meta<typeof AutoCarousel> = {
  title: 'Carousel',
  component: (props) => {
    const items = [
      'https://image.tmdb.org/t/p/w220_and_h330_face/lCUvpSvjAPU82HvJ8XfR74Chv5r.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/3JT1oE0JIA6CQJaZDG00y3S0kP3.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/dlGyzCxbBQK1U2O5o31Z1hB6erc.jpg',
      'https://image.tmdb.org/t/p/w220_and_h330_face/usfDx1g1eN9eZ8kxfrbLRkKVjit.jpg',
    ]
    return (
      <div style={{ maxWidth: '350px' }}>
        <AutoCarousel<(typeof items)[0]>
          time={2000}
          items={items}
          renderItems={(item, index) => (
            <div key={index}>
              <RatioCardImage key={index + '_'} imageUrl={item} ratio={1} />
              {/* <Button
                width="auto"
                color={Colors.white}
                border={Colors.grey_bbb}
              >
                확인
              </Button> */}
            </div>
          )}
        />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof AutoCarousel>

export const Auto_Carousel: Story = {
  args: {
    time: 2000,
  },
}
