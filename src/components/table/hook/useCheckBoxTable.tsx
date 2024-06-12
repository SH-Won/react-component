import CheckBox from '@/components/box/CheckBox'
import { useCallback, useEffect, useState } from 'react'
import ColGroup from '../common/ColGroup'
import TableBody from '../common/TableBody'
import TableHeader from '../common/TableHeader'
import ScrollTableLayout from '../layout/ScrollTableLayout'
import { ICheckBoxTableProps } from '../types/scrollTable'
import '../styles/table.scss'
type TReturnItem<T> = T & { isChecked: boolean; id: string }
interface ICheckBoxHookReturn<T> {
  itemListWithChecked: TReturnItem<T>[]
  CheckBoxTable: () => JSX.Element
}

type TUseCheckBoxTable<T> = <T>(
  props: ICheckBoxTableProps<T>,
) => ICheckBoxHookReturn<T>
const useCheckBoxTable = <T extends { [key: string]: string }>({
  column,
  headerNames,
  ratios,
  rowList,
  renderFn,
}: ICheckBoxTableProps<T>): ICheckBoxHookReturn<T> => {
  const [itemListWithChecked, setItemListWithChecked] = useState<
    TReturnItem<T>[]
  >([])

  useEffect(() => {
    console.log('useEffect')
    const listWithChecked = rowList.map((item) =>
      Object.assign(item, { isChecked: false, id: crypto.randomUUID() }),
    )
    setItemListWithChecked(listWithChecked)
  }, [rowList])
  const handleChangeAll = () => {
    const isAllChecked = itemListWithChecked.every((item) => item.isChecked)

    setItemListWithChecked((prev) =>
      prev.map((item) => Object.assign(item, { isChecked: !isAllChecked })),
    )
  }
  const handleChangeOne = (index: number) => {
    const copyItemList = [...itemListWithChecked]
    const isChecked = !copyItemList[index].isChecked
    copyItemList[index].isChecked = isChecked
    setItemListWithChecked(copyItemList)
  }
  const CheckBoxTable = useCallback(() => {
    console.log('render', itemListWithChecked)
    const isAllChecked = itemListWithChecked.every((item) => item.isChecked)
    return (
      <ScrollTableLayout>
        <ColGroup ratios={[5].concat(ratios)} />
        <TableHeader headerNames={headerNames} ratios={[5].concat(ratios)}>
          <CheckBox
            id="all"
            handleChange={handleChangeAll}
            isChecked={isAllChecked}
          />
        </TableHeader>
        <TableBody
          rowList={itemListWithChecked}
          renderFn={(item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <CheckBox
                    id={`${item.id}_${index}`}
                    handleChange={() => handleChangeOne(index)}
                    isChecked={item.isChecked}
                  />
                </td>
                {renderFn(item, index)}
              </tr>
            )
          }}
        />
      </ScrollTableLayout>
    )
  }, [itemListWithChecked])
  return {
    itemListWithChecked,
    CheckBoxTable,
  }
}

export { useCheckBoxTable }
