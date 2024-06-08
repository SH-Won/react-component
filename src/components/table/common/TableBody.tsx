import { ITableBodyProps } from '../types/scrollTable'

const TableBody = <T,>({
  rowList,
  renderFn,
  emptyText,
}: ITableBodyProps<T>) => {
  if (!rowList.length)
    return (
      <tbody>
        <tr className="empty">
          <td>{emptyText || '조회된 정보가 없습니다'}</td>
        </tr>
      </tbody>
    )
  return <tbody>{rowList.map(renderFn)}</tbody>
}

export default TableBody
