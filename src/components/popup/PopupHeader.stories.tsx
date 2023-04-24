import { OverLay } from '@/layout'
import colors from '@/styles/colors.module.scss'
import type { Meta, StoryObj } from '@storybook/react'
import { PopupBasicHeader } from '.'

const meta: Meta = {
  title: 'PopupHeader',
  component: (props) => {
    return (
      <OverLay isOpen={true} opacity={0.6}>
        <div
          style={{
            minWidth: '460px',
            background: colors.white,
            borderRadius: '8px',
          }}
        >
          <PopupBasicHeader {...props} />
        </div>
      </OverLay>
    )
  },
}

export default meta
type Story = StoryObj

export const PopupHeader: Story = {
  args: {
    title: '팝업',
    back: () => {},
    close: () => {},
    maxProgress: 5,
    progress: 2,
  },
}
