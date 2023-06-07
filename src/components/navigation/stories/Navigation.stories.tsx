import { Button } from '../../button'
import { RatioCardImage } from '@/components/card'
import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '../Navigation'
import Colors from '../../../styles/colors.module.scss'
const meta: Meta<typeof Navigation> = {
  title: 'Navigation',
  component: (props) => {
    return (
      <>
        <Navigation {...props}>
          <span style={{ cursor: 'pointer', padding: '16px' }}>Main</span>
          <span style={{ cursor: 'pointer', padding: '16px' }}>Sub</span>
          <span style={{ cursor: 'pointer', padding: '16px' }}>Recommend</span>
        </Navigation>

        <Button
          color={Colors.main}
          fontColor={Colors.white}
          click={() => console.log('clicked')}
        >
          click
        </Button>
      </>
    )
  },
}
export default meta
type Story = StoryObj<typeof Navigation>

export const _Navigation: Story = {
  args: {
    isMobile: true,
  },
}
