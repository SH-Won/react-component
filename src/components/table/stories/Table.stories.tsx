import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import BasicTable from '../BasicTable'
import ScrollTable from '../ScrollTable'
import './table.stories.scss'

const meta: Meta<typeof ScrollTable> = {
  title: 'Table',
  component: (props) => {
    return (
      <div className="stories__table__container">
        <div className="stories__table__wrapper">
          <ScrollTable {...props} />
          <ScrollTable {...props} />
          <ScrollTable {...props} />
          <ScrollTable {...props} />
        </div>
        <div className="stories__table__test-warpper">
          <BasicTable {...props} />
          <BasicTable {...props} />
          <BasicTable {...props} />
        </div>
      </div>
    )
  },
}
export default meta

const rowList = [
  {
    CODE: '42895928192',
    NAME: '가자1',
    PRICE: '12,000',
  },
  {
    CODE: '65895928192',
    NAME: '가자2',
    PRICE: '15,000',
  },
  {
    CODE: '4282341928192',
    NAME: '갈근1',
    PRICE: '26,000',
  },
  {
    CODE: '992895928192',
    NAME: '갈근2',
    PRICE: '2,000',
  },
  {
    CODE: '001295928192',
    NAME: '녹용3',
    PRICE: '120,000',
  },
  {
    CODE: '428959281921241',
    NAME: '가자1',
    PRICE: '12,000',
  },
  {
    CODE: '65895928192124552',
    NAME: '가자2',
    PRICE: '15,000',
  },
  {
    CODE: '42823419281926124234',
    NAME: '갈근1',
    PRICE: '26,000',
  },
  {
    CODE: '9928959281921234441',
    NAME: '갈근2',
    PRICE: '2,000',
  },
  {
    CODE: '001295928192125123',
    NAME: '녹용3',
    PRICE: '120,000',
  },
]
type TLowItem = (typeof rowList)[0]
type Story = StoryObj<typeof ScrollTable<TLowItem>>

export const _ComplicateTable: Story = {
  args: {
    column: 3,
    ratios: [33.3, 33.3, 33.3],
    headerNames: ['한약재코드', '약재명', '가격'],
    // scrollHeight: 200,
    // textAligns: ['left', 'center', 'center'],
    rowList,
    renderFn: (item, index) => {
      return (
        <tr key={item.CODE}>
          <td>{item.CODE}</td>
          <td>{item.NAME}</td>
          <td>{item.PRICE}</td>
        </tr>
      )
    },
  },
}
