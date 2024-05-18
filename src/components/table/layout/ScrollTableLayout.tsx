interface IScrollTableLayoutProps {
  scrollHeight?: number
  children: JSX.Element | JSX.Element[]
}
const ScrollTableLayout = ({
  scrollHeight,
  children,
}: IScrollTableLayoutProps) => {
  return (
    <div className="table-wrapper">
      <div className="table-box" style={{ maxHeight: `${scrollHeight}px` }}>
        <table className="medichis-table scroll">{children}</table>
      </div>
    </div>
  )
}

export default ScrollTableLayout
