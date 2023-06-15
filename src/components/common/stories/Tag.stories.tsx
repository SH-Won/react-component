import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Tag from '../Tag'
import Element from '../../elements/Element'
import Colors from '../../../styles/colors.module.scss'

const meta: Meta<typeof Tag> = {
  title: 'Common',
  component: (props) => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <Tag {...props} />
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof Tag>

export const _Tag: Story = {
  args: {
    size: 'medium',
    backgroundColor: Colors.bg_indigo,
    fontColor: Colors.white,
    text: 'React',
  },
}
