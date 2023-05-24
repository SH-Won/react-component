import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import InputBox from '../InputBox'
import Element from '../../elements/Element'
import Colors from '../../../styles/colors.module.scss'

const meta: Meta<typeof InputBox> = {
  title: 'Input',
  component: (props) => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <InputBox {...props}>
          <Element name="Search" size="medium" color={Colors.grey_666} />
        </InputBox>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof InputBox>

export const BasicInputBox: Story = {
  args: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
    type: 'text',
    searchText: '',
    placeholder: '입력 하세요',
    screen: 'desktop',
  },
}
