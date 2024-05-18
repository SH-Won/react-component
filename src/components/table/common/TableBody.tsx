import { ITableBodyProps } from '../types/scrollTable'

const TableBody = <T,>({ rowList, renderFn }: ITableBodyProps<T>) => {
  if (!rowList.length)
    return (
      <div className="empty">
        <span>조회된 정보가 없습니다</span>
      </div>
    )
  return <tbody>{rowList.map(renderFn)}</tbody>
}

export default TableBody
