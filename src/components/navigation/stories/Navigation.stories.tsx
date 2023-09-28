import { Button } from '../../button'
import { RatioCardImage } from '@/components/card'
import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '../Navigation'
import Colors from '../../../styles/colors.module.scss'
import { useState } from 'react'
import  OptionList  from '../../common/OptionList'
import './HeaderItem.scss'
import Accordion from '@/components/accordion/Accordion'

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
    const isMobile = props.isMobile
    
    const HeaderItem = ({ items, click, title }: HeaderItemProps) => {
      const [open, setOpen] = useState<boolean>(false)
    
      return (
        <div
          className={`header-item ${isMobile ? 'mobile' : ''}`}
          onMouseEnter={() => !isMobile && setOpen(true)}
          onMouseLeave={() => !isMobile &&  setOpen(false)}
          onTouchStart={() => setOpen(prev => !prev)}
        >
          {/* <span className="title">{title}</span> */}
          {!isMobile ? 
          <>
          <span className="title">{title}</span>
          <div className="option-container">
            <OptionList items={items} click={click} open={open} itemSize="small" />
          </div>
          </> :
          <Accordion border={false} title={title}>
            <div style={{display:'flex', flexDirection:'column', padding:'inherit'}}>
             {items.map(item => <span key={item.value}>{item.name}</span>)}
            </div>
          </Accordion>
          }
        </div>
      )
    }
    return (
      <div>
        <Navigation {...props}>
          <div className={`header-items ${isMobile ? 'mobile' : ''}`}>
            <HeaderItem items={HEADER_MOVIE_OPTION} title='Main' click={() => console.log('1')}/>
            <span style={{ cursor: 'pointer', padding: '16px' }}>Sub</span>
            <span style={{ cursor: 'pointer', padding: '16px' }}>Recommend</span>
          </div>
          <div className={`user-button-container ${isMobile ? 'mobile' : ''}`}>
            <Button
            color={Colors.main}
            fontColor={Colors.white}
            click={() => console.log('clicked')}
          >
            click
          </Button>
          </div>
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
    title: 'Test Navi'
  },
}
