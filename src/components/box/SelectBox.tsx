import React, { useMemo } from 'react'

interface ISelectBoxProps<T> {
  name: string
  value: string
  valueKey: string
  nameKey: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: T[]
}

const SelectBox = <T extends { [key: string]: string }>({
  name,
  value,
  valueKey,
  nameKey,
  handleChange,
  options,
}: ISelectBoxProps<T>) => {
  const memoOptions = useMemo(
    () =>
      options.map((option) =>
        Object.assign(option, { key: crypto.randomUUID() }),
      ),
    [options],
  )
  return (
    <select className="medichis-selectBox" name={name} onChange={handleChange}>
      {memoOptions.map((option) => (
        <option
          key={option.key}
          value={option[valueKey]}
          selected={value === option[valueKey]}
        >
          {option[nameKey]}
        </option>
      ))}
    </select>
  )
}

export default SelectBox
