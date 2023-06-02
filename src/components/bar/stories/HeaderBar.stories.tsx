import Colors from '../../../styles/colors.module.scss'
import type { Meta, StoryObj } from '@storybook/react'
import HeaderBar from '../HeaderBar'
import Button from '../../button/Button'

const meta: Meta<typeof HeaderBar> = {
  title: 'Bar',
  component: HeaderBar,
}
export default meta
type Story = StoryObj<typeof HeaderBar>

export const Header: Story = {
  args: {
    title: '헤더',
    back: () => {},
    children: (
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Button color={Colors.main} fontColor={Colors.white}>
          로그인
        </Button>
        <Button
          color={Colors.white}
          border={Colors.grey_bbb}
          fontColor={Colors.grey_111}
        >
          회원가입
        </Button>
      </div>
    ),
  },
}
