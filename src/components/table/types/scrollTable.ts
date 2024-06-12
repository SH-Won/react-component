type TAlign = 'left' | 'right'

export interface IColGroup {
  ratios : number[]
}
export interface ITableHeaderProps extends IColGroup{
  headerNames : string []
  textAligns? : TAlign []
  children? : JSX.Element | JSX.Element[]
}
export interface ITableBodyProps<T extends unknown> {
  emptyText? : string
  rowList: T[]
  renderFn: (item: T, index: number) => JSX.Element
}
export interface IScrollTableProps<T> extends ITableHeaderProps, ITableBodyProps<T> {
  column: number
  scrollHeight?: number
}
export interface ICheckBoxTableProps<T> extends IScrollTableProps<T>{}

export interface IBasicTableProps<T> extends ITableHeaderProps, ITableBodyProps<T> {
  column : number
}
