import './PageLoadingSpinner.scss'
interface Props {
  text?: string
  customHeight?: string
}
const PageLoadingSpinner = (props: Props) => {
  const loaders = Array(8)
    .fill(1)
    .map((v, i) => v + i)
  return (
    <div
      className="page-loading-container"
      style={{ height: props.customHeight }}
    >
      <div className="page-loading-wrapper">
        {loaders.map((value) => (
          <div key={`loaderKey${value}`} className="loader"></div>
        ))}
      </div>
      <div className="text">{props.text}</div>
    </div>
  )
}

export default PageLoadingSpinner
