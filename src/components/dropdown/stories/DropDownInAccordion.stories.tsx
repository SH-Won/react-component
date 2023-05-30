import OptionList from '../../common/OptionList'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import DropDown from '../DropDown'
import Accordion from '../../accordion/Accordion'

const meta: Meta<typeof DropDown> = {
  title: 'DropDown',
  component: () => {
    const title = 'Dropdown In Accordion'
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
      if (item.name === selected) return
      setSelected(item.name)
    }
    return (
      <div style={{ maxWidth: '300px' }}>
        <Accordion title={title}>
          <div style={{ padding: '20px' }}>
            <h3>Drop Down</h3>
            <DropDown selected={selected}>
              <OptionList
                items={items}
                click={onClickOption}
                itemSize="small"
              />
            </DropDown>
          </div>
        </Accordion>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof DropDown>

export const DropDown_In_Accordion: Story = {}
