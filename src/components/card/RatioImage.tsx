import './RatioImage.scss'
interface RatioImageProps {
  imageUrl: string
  ratio: number
  click?: () => void
}
const RatioImage = (props: RatioImageProps) => {
  const paddingTop = props.ratio * 100 + '%'
  return (
    <div
      className="image-wrapper"
      style={{ paddingTop }}
      onClick={() => props.click?.()}
    >
      <img src={props.imageUrl} loading="lazy" />
    </div>
  )
}

export default RatioImage
