import { useBreakPoints } from '@/util'
import type { Meta, StoryObj } from '@storybook/react'
import ToggleBar from '../ToggleBar'

const MOVIE_CATEGORY = {
  prefix: 'movie',
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  TRENDING: 'trending',
  UPCOMMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
  LATEST: 'latest',
  DISCOVER: 'discover',
  DETAIL: '',
}
interface ItemType {
  id: string
  name: string
  order: number
  value: string
}
const meta: Meta<typeof ToggleBar> = {
  title: 'Bar',
  component: (props) => {
    const { breakPointsClass } = useBreakPoints()

    return <ToggleBar<ItemType> {...props} screen={breakPointsClass} />
  },
}
export default meta
type Story = StoryObj<typeof ToggleBar>

export const _ToggleBar: Story = {
  args: {
    screen: 'mobile',
    items: [
      {
        id: MOVIE_CATEGORY.prefix + '_' + MOVIE_CATEGORY.POPULAR,
        name: '인기',
        order: 0,
        value: '/' + MOVIE_CATEGORY.prefix + '/' + MOVIE_CATEGORY.POPULAR,
      },
      {
        id: MOVIE_CATEGORY.prefix + '_' + MOVIE_CATEGORY.TOP_RATED,
        name: '순위',
        order: 1,
        value: '/' + MOVIE_CATEGORY.prefix + '/' + MOVIE_CATEGORY.TOP_RATED,
      },
      {
        id: MOVIE_CATEGORY.prefix + '_' + MOVIE_CATEGORY.NOW_PLAYING,
        name: '상영중',
        order: 2,
        value: '/' + MOVIE_CATEGORY.prefix + '/' + MOVIE_CATEGORY.NOW_PLAYING,
      },
      {
        id: MOVIE_CATEGORY.prefix + '_' + MOVIE_CATEGORY.UPCOMMING,
        name: '예정',
        order: 3,
        value: '/' + MOVIE_CATEGORY.prefix + '/' + MOVIE_CATEGORY.UPCOMMING,
      },
    ],
  },
}
