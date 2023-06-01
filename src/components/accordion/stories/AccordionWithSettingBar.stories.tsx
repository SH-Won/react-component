import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Accordion from '../Accordion'
import { SettingBar } from '../../bar'
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
const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: (props) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ width: '300px' }}>
        <Accordion {...props}>
          <SettingBar magnification={5} count={5} />
        </Accordion>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof Accordion>

export const Accordion_SettingBar: Story = {
  args: {
    title: 'SettingBar in Accordion',
  },
}
