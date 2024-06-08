import './styles/table.scss'
import ColGroup from './common/ColGroup'
import TableBody from './common/TableBody'
import TableHeader from './common/TableHeader'
import { IScrollTableProps } from './types/scrollTable'
import InfiniteScrollTableLayout from './layout/InfiniteScrollTableLayout'

interface InfiniteScrollTableProps<T> extends IScrollTableProps<T> {
  isScrollable: boolean
  emptyText?: string
}
const InfiniteScrollTable = <T,>({
  column,
  ratios,
  headerNames,
  textAligns,
  scrollHeight,
  rowList,
  renderFn,
  isScrollable,
  emptyText,
}: InfiniteScrollTableProps<T>) => {
  const validTextAligns = textAligns || Array(column).fill('center')
  const isValid = [
    headerNames.length,
    ratios.length,
    validTextAligns.length,
  ].every((length) => length === column)
  if (!isValid) throw Error('column , headersName and ratios must be the same')

  if (!rowList.length)
    return (
      <InfiniteScrollTableLayout
        scrollHeight={scrollHeight}
        isScrollable={isScrollable}
      >
        <TableHeader
          headerNames={headerNames}
          textAligns={validTextAligns}
          ratios={ratios}
        />
        <TableBody
          rowList={rowList}
          renderFn={renderFn}
          emptyText={emptyText}
        />
      </InfiniteScrollTableLayout>
    )

  return (
    <InfiniteScrollTableLayout
      scrollHeight={scrollHeight}
      isScrollable={isScrollable}
    >
      <ColGroup ratios={ratios} />
      <TableHeader
        headerNames={headerNames}
        textAligns={validTextAligns}
        ratios={ratios}
      />
      <TableBody rowList={rowList} renderFn={renderFn} emptyText={emptyText} />
    </InfiniteScrollTableLayout>
  )
}

export default InfiniteScrollTable
