import './RatioImage.scss'
interface RatioImageProps {
  imageUrl: string
  ratio: number
}
const RatioImage = (props: RatioImageProps) => {
  const paddingTop = props.ratio * 100 + '%'
  return (
    <div className="image-wrapper" style={{ paddingTop }}>
      <img src={props.imageUrl} />
    </div>
  )
}

export default RatioImage
