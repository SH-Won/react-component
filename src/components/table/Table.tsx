import { createContext } from 'react'
// import { IScrollTableProps } from './types/scrollTable'

// interface ITableContext<T> extends IScrollTableProps<T> {
//   children: JSX.Element[] | JSX.Element
// }
// function createGenericContext<T>() {
//   return createContext<IScrollTableProps<T> | null>(null)
// }
// const TableContenxt = createGenericContext<object>()

// export const Table = <T, S>({ children, ...rest }: ITableContext<S>) => {
//   return (
//     <TableContenxt.Provider value={rest}>{children}</TableContenxt.Provider>
//   )
// }

// const A = () => {
//   return (
//     <Table
//       headerNames={['1', '2', '3']}
//       rowList={[{ code: 1 }]}
//       ratios={[33, 33, 33]}
//       renderFn={(item :)}
//     >
//       <div></div>
//     </Table>
//   )
// }
