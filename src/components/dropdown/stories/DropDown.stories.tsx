import OptionList from '../../common/OptionList'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DropDown from '../DropDown'

const meta: Meta<typeof DropDown> = {
  title: 'DropDown',
  component: () => {
    const items = [
      {
        name: '1',
        value: '11',
      },
      {
        name: '2',
        value: '22',
      },
      {
        name: '3',
        value: '33',
      },
      {
        name: '4',
        value: '44',
      },
    ]
    const [selected, setSelected] = useState(items[0].name)
    const onClickOption = (item: any) => {
      setSelected(item.name)
    }
    return (
      <div style={{ maxWidth: '300px' }}>
        <DropDown selected={selected}>
          <OptionList items={items} click={onClickOption} itemSize="small" />
        </DropDown>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof DropDown>

export const BasicDropDown: Story = {
  args: {},
}
