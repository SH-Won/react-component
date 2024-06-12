import { ITableHeaderProps } from '../types/scrollTable'

const TableHeader = ({
  headerNames,
  textAligns,
  ratios,
  children,
}: ITableHeaderProps) => {
  // console.log(headerNames)
  const Children = children ? (
    <th style={{ width: `${ratios[0]}%` }}>{children || null}</th>
  ) : null
  return (
    <thead>
      <tr>
        {Children}
        {headerNames.map((name, index) => (
          <th
            key={name}
            scope="col"
            style={{ width: `${ratios[children ? index + 1 : index]}%` }}
            // className={`${textAligns![index]}`}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
