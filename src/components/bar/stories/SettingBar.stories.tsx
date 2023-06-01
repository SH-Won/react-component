import Colors from '../../../styles/colors.module.scss'
import type { Meta, StoryObj } from '@storybook/react'
import SettingBar from '../SettingBar'
import Button from '../../button/Button'
const items = [
  {
    value: 'start',
  },
  {
    value: 'middle',
  },
  {
    value: 'end',
  },
  {
    value: 'total',
  },
  {
    value: 'ttoal',
  },
  {
    value: 'totalll',
  },
  {
    value: 'ttoalllll',
  },
  {
    value: 'ttoaldasdf',
  },
  {
    value: 'totallld',
  },
  {
    value: 'ttoallllldd',
  },
]
const meta: Meta<typeof SettingBar> = {
  title: 'Bar',
  component: SettingBar,
}
export default meta
type Story = StoryObj<typeof SettingBar>

export const Setting: Story = {
  args: {
    width: 236,
    magnification: 1,
    count: 10,
    initialCount: 0,
  },
}
