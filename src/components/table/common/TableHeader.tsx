import { ITableHeaderProps } from '../types/scrollTable'

const TableHeader = ({
  headerNames,
  textAligns,
  ratios,
}: ITableHeaderProps) => {
  return (
    <thead>
      <tr>
        {headerNames.map((name, index) => (
          <th
            key={name}
            scope="col"
            style={{ width: `${ratios[index]}%` }}
            className={`${textAligns![index]}`}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
