import { Button } from '@/components/button'
import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import BasicTable from '../BasicTable'
import { useCheckBoxTable } from '../hook'
import ScrollTable from '../ScrollTable'
import { ICheckBoxTableProps } from '../types/scrollTable'
import './table.stories.scss'

const meta: Meta<ICheckBoxTableProps<TLowItem>> = {
  title: 'Table',
  component: (props) => {
    const [count, setCount] = useState(0)
    const [itemList, setItemList] = useState(props.rowList)
    // const { itemListWithChecked, CheckBoxTable } =
    //   useCheckBoxTable<TLowItem>(props)
    const { itemListWithChecked, CheckBoxTable } = useCheckBoxTable<TLowItem>({
      column: props.column,
      headerNames: props.headerNames,
      ratios: props.ratios,
      rowList: itemList,
      renderFn: props.renderFn,
    })
    const onClick = () => {
      setCount((prev) => prev + 1)
      setItemList((prev) => prev.map((_, index) => ({ ...props.rowList[0] })))
    }
    console.log(itemListWithChecked.map((item) => item.isChecked))
    // console.log(
    //   'is all checked',
    //   itemListWithChecked.every((item) => item.isChecked),
    // )
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Button
          size="small"
          color={Colors.white}
          width="80px"
          border={Colors.grey_bbb}
          fontColor={Colors.grey_111}
          click={onClick}
        >
          Change List
        </Button>
        <CheckBoxTable />
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
]
type TLowItem = (typeof rowList)[0]
type Story = StoryObj<ICheckBoxTableProps<TLowItem>>

export const CheckBoxTable: Story = {
  args: {
    column: 3,
    ratios: [33.3, 33.3, 33.3],
    headerNames: ['한약재코드', '약재명', '가격'],
    // scrollHeight: 200,
    // textAligns: ['left', 'center', 'center'],
    rowList,
    renderFn: (item, index) => {
      return (
        <>
          <td>{item.CODE}</td>
          <td>{item.NAME}</td>
          <td>{item.PRICE}</td>
        </>
      )
    },
  },
}
