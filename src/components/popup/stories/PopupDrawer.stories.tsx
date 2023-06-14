import { Button } from '../../button'
import type { Meta, StoryObj } from '@storybook/react'
import { Popup as BasicPopup } from '..'
import { PopupBasicHeader } from '..'
import { RatioImage } from '../../common'
import Colors from '../../../styles/colors.module.scss'
import PopupDrawer from '../PopupDrawer'
import { useCallback, useState } from 'react'

const meta: Meta = {
  title: 'Popup',
  component: (props) => {
    const [open, setOpen] = useState<boolean>(false)
    const closeEvent = useCallback(() => {
      if (!open) return
      setOpen(false)
    }, [open])
    return (
      <>
        <Button
          color={Colors.main}
          fontColor={Colors.white}
          click={() => setOpen(true)}
        >
          드로어 오픈
        </Button>
        <PopupDrawer {...props} isOpen={open} close={closeEvent}>
          <PopupBasicHeader
            title={props.title}
            back={() => {}}
            close={closeEvent}
          />
          <div
            style={{ backgroundColor: '#111', width: '100%', height: '100%' }}
          ></div>
        </PopupDrawer>
      </>
    )
  },
}

export default meta
type Story = StoryObj

export const Popup_Drawer: Story = {
  args: {
    // isOpen: false,
    title: '팝업 드로어',
    type: 'right',
  },
}
