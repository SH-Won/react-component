import { Button } from '../../button'
import { RatioCardImage } from '@/components/card'
import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '../Navigation'
import Colors from '../../../styles/colors.module.scss'
import { useState } from 'react'
import  OptionList  from '../../common/OptionList'
import './HeaderItem.scss'

interface HeaderItemProps {
  title: string
  items: {
    name: string
    value: string
  }[]
  click?: (item: any) => void
}
const HEADER_MOVIE_OPTION = [
  {
    name: '인기',
    value: '/overall/movie/popular',
  },
  {
    name: '현재 상영중',
    value: '/overall/movie/now_playing',
  },
  {
    name: '개봉 예정',
    value: '/overall/movie/upcomming',
  },
  {
    name: '높은 평점',
    value: '/overall/movie/top_rated',
  },
]
const meta: Meta<typeof Navigation> = {
  title: 'Navigation',
  component: (props) => {
    
    
    const HeaderItem = ({ items, click, title }: HeaderItemProps) => {
      const [open, setOpen] = useState<boolean>(false)
    
      return (
        <div
          className='header-item'
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onTouchStart={() => setOpen(true)}
          onTouchEnd={() => setOpen(false)}
        >
          <span className="title">{title}</span>
          <div style={{ position: 'absolute', width: '90px', top: '100%' }}>
            <OptionList items={items} click={click} open={open} itemSize="small" />
          </div>
        </div>
      )
    }
    return (
      <div>
        <Navigation {...props}>
          <HeaderItem items={HEADER_MOVIE_OPTION} title='Main' click={() => console.log('1')}/>
          <span style={{ cursor: 'pointer', padding: '16px' }}>Sub</span>
          <span style={{ cursor: 'pointer', padding: '16px' }}>Recommend</span>
        </Navigation>

        <Button
          color={Colors.main}
          fontColor={Colors.white}
          click={() => console.log('clicked')}
        >
          click
        </Button>
        <div style={{ height: '300vh' }}></div>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof Navigation>

export const _Navigation: Story = {
  args: {
    isMobile: true,
    fixed: false,
    iconColor: Colors.bg_black,
    backgroundColor: Colors.white,
  },
}
