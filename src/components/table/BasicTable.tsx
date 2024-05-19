import './styles/table.scss'
import ColGroup from './common/ColGroup'
import TableBody from './common/TableBody'
import TableHeader from './common/TableHeader'
import { IBasicTableProps } from './types/scrollTable'
import BasicTableLayout from './layout/BasicTableLayout'

const BasicTable = <T,>({
  column,
  ratios,
  headerNames,
  textAligns,
  rowList,
  renderFn,
}: IBasicTableProps<T>) => {
  const validTextAligns = textAligns || Array(column).fill('center')
  const isValid = [
    headerNames.length,
    ratios.length,
    validTextAligns.length,
  ].every((length) => length === column)
  if (!isValid) throw Error('column , headersName and ratios must be the same')

  if (!rowList.length)
    return (
      <BasicTableLayout>
        <TableHeader
          headerNames={headerNames}
          textAligns={validTextAligns}
          ratios={ratios}
        />
        <TableBody rowList={rowList} renderFn={renderFn} />
      </BasicTableLayout>
    )

  return (
    <BasicTableLayout>
      <ColGroup ratios={ratios} />
      <TableHeader
        headerNames={headerNames}
        textAligns={validTextAligns}
        ratios={ratios}
      />
      <TableBody rowList={rowList} renderFn={renderFn} />
    </BasicTableLayout>
  )
}

export default BasicTable
