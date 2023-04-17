import { Colors } from '@/index'
import { Element } from '../elements'
import './GroupCard.scss'

interface GroupCardProps {
  isSub?: boolean
  label: string
  imageUrl: string
}
const GroupCard = (props: GroupCardProps) => {
  return (
    <div className="group-card">
      {props.isSub && (
        <Element name="Depth" size="medium" color={Colors.grey_111} />
      )}
      <div className="card">
        <img className="card-image" src={props.imageUrl} />
        <div className="card-explain">
          <span>{props.label}</span>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
