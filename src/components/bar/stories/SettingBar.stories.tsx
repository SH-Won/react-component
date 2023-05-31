import Colors from '../../../styles/colors.module.scss'
import type { Meta, StoryObj } from '@storybook/react'
import SettingBar from '../SettingBar'
import Button from '../../button/Button'

const meta: Meta<typeof SettingBar> = {
  title: 'Bar',
  component: SettingBar,
}
export default meta
type Story = StoryObj<typeof SettingBar>

export const Setting: Story = {}
