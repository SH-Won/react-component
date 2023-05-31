import { Button } from '../../button'
import type { Meta, StoryObj } from '@storybook/react'
import { Popup as BasicPopup } from '..'
import { PopupBasicHeader } from '..'
import { RatioImage } from '../../common'
import Colors from '../../../styles/colors.module.scss'

const meta: Meta = {
  title: 'Popup',
  component: (props) => {
    return (
      <BasicPopup isOpen={props.isOpen} isMobile={props.isMobile}>
        <PopupBasicHeader
          title={props.title}
          back={props.back}
          close={props.close}
          maxProgress={props.maxProgress}
          progress={props.progress}
        />
        <RatioImage imageUrl={props.imageUrl} ratio={props.ratio} />
        <div style={{ display: 'flex', gap: '10px', padding: '0 10px 10px' }}>
          <Button color={Colors.main} width="100%" fontColor={Colors.white}>
            확인
          </Button>
          <Button border={Colors.grey_bbb} color={Colors.white} width="100%">
            취소
          </Button>
        </div>
      </BasicPopup>
    )
  },
}

export default meta
type Story = StoryObj

export const PopupBasic: Story = {
  args: {
    title: '팝업',
    back: () => {},
    close: () => {},
    maxProgress: 5,
    progress: 2,
    isOpen: true,
    isMobile: false,
    imageUrl:
      'https://image.tmdb.org/t/p/w220_and_h330_face/lCUvpSvjAPU82HvJ8XfR74Chv5r.jpg',
    ratio: 1,
  },
}
