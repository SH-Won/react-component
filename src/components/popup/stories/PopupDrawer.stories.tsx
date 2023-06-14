import { Button } from '../../button'
import type { Meta, StoryObj } from '@storybook/react'
import { Popup as BasicPopup } from '..'
import { PopupBasicHeader } from '..'
import { RatioImage } from '../../common'
import Colors from '../../../styles/colors.module.scss'
import PopupDrawer from '../PopupDrawer'

const meta: Meta = {
  title: 'Popup',
  component: (props) => {
    return (
      <PopupDrawer {...props}>
        <PopupBasicHeader
          title={props.title}
          back={() => {}}
          close={() => {}}
        />
        <div
          style={{ backgroundColor: '#111', width: '100%', height: '100%' }}
        ></div>
      </PopupDrawer>
    )
  },
}

export default meta
type Story = StoryObj

export const Popup_Drawer: Story = {
  args: {
    isOpen: false,
    title: '팝업 드로어',
    type: 'right',
  },
}
