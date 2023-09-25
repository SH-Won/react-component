import { PageLoadingSpinner } from '../../util'
import { useState } from 'react'
import './RatioImage.scss'
interface RatioImageProps {
  imageUrl: string
  ratio: number
  eager?: boolean
  click?: () => void
}
const RatioImage = (props: RatioImageProps) => {
  const [loading, setLoading] = useState(true)
  const paddingTop = props.ratio * 100 + '%'
  return (
    <div
      className="image-wrapper"
      style={{ paddingTop }}
      onClick={() => props.click?.()}
    >
      <img
        src={props.imageUrl}
        loading={props.eager ? 'eager' : 'lazy'}
        onLoad={() => {
          setLoading(false)
        }}
      />
      {loading && (
        <div className="skeletonImg">
          {/* <PageLoadingSpinner customHeight="100%" /> */}
        </div>
      )}
    </div>
  )
}

export default RatioImage
