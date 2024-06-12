import { IColGroup } from '../types/scrollTable'

const ColGroup = ({ ratios }: IColGroup) => {
  return (
    <colgroup>
      {ratios.map((ratio, index) => (
        <col key={`${ratio}_${index}`} width={`${ratio}%`} />
      ))}
    </colgroup>
  )
}

export default ColGroup
