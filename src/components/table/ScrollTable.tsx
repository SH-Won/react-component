import './styles/table.scss'
import ColGroup from './common/ColGroup'
import TableBody from './common/TableBody'
import TableHeader from './common/TableHeader'
import ScrollTableLayout from './layout/ScrollTableLayout'
import { IScrollTableProps } from './types/scrollTable'

const ScrollTable = <T,>({
  column,
  ratios,
  headerNames,
  textAligns,
  scrollHeight,
  rowList,
  renderFn,
}: IScrollTableProps<T>) => {
  const validTextAligns = textAligns || Array(column).fill('center')
  const isValid = [
    headerNames.length,
    ratios.length,
    validTextAligns.length,
  ].every((length) => length === column)
  if (!isValid) throw Error('column , headersName and ratios must be the same')

  if (!rowList.length)
    return (
      <ScrollTableLayout scrollHeight={scrollHeight}>
        <TableHeader
          headerNames={headerNames}
          textAligns={validTextAligns}
          ratios={ratios}
        />
        <TableBody rowList={rowList} renderFn={renderFn} />
      </ScrollTableLayout>
    )

  return (
    <ScrollTableLayout scrollHeight={scrollHeight}>
      <ColGroup ratios={ratios} />
      <TableHeader
        headerNames={headerNames}
        textAligns={validTextAligns}
        ratios={ratios}
      />
      <TableBody rowList={rowList} renderFn={renderFn} />
    </ScrollTableLayout>
  )
}

export default ScrollTable
