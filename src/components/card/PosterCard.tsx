import CircularProgressBar from '../bar/CircularProgressBar'
import './PosterCard.scss'
import RatioImage from './RatioImage'
interface PosterCardProps {
  width?: string
  imageUrl: string
  voteAverage: number
  ratio?: number
  title?: string
  releaseDate?: string
  click?: () => void
}
const PosterCard = (props: PosterCardProps) => {
  const ratio = !props.ratio ? 1 : props.ratio
  // const width = props.width ?? '150px'
  return (
    <div className="poster-card-container">
      <RatioImage ratio={ratio} imageUrl={props.imageUrl} />
      {/* <div className="poster-card-explain"> */}

      <div className="poster-card-info">
        <div className="progress-bar">
          <CircularProgressBar percent={props.voteAverage} size={34} />
        </div>
        <span className="title">{props.title}</span>
        <span className="release-date">{props.releaseDate}</span>
      </div>
      {/* </div> */}
    </div>
  )
}

export default PosterCard
