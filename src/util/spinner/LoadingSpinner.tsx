import { OverLay } from '@/layout'
import './LoadingSpinner.scss'
interface LoadingSpinnerProps {
  opacity: number
}
const LoadingSpinner = ({ opacity }: LoadingSpinnerProps) => {
  return (
    <OverLay isOpen={true} opacity={opacity}>
      <div className="loading-content">
        <div className="loading"></div>
      </div>
    </OverLay>
  )
}

export default LoadingSpinner
