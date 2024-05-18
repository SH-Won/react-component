type TAlign = 'left' | 'right'

export interface IColGroup {
  ratios : number[]
}
export interface ITableHeaderProps extends IColGroup{
  headerNames : string []
  textAligns? : TAlign []
}
export interface ITableBodyProps<T extends unknown> {
  rowList: T[]
  renderFn: (item: T, index: number) => JSX.Element

}
export interface IScrollTableProps<T> extends ITableHeaderProps, ITableBodyProps<T> {
  column: number
  scrollHeight: number
}
