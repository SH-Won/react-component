import { useMemo } from 'react'

interface IScrollTableLayoutProps {
  scrollHeight?: number
  children: JSX.Element | JSX.Element[]
}
const ScrollTableLayout = ({
  scrollHeight,
  children,
}: IScrollTableLayoutProps) => {
  const computedLayoutStyles = useMemo(() => {
    if (!scrollHeight) return {}
    return {
      maxHeight: `${scrollHeight}px`,
    }
  }, [scrollHeight])
  return (
    <div className="table-wrapper">
      <div className="table-box" style={computedLayoutStyles}>
        <table className="medichis-table scroll">{children}</table>
      </div>
    </div>
  )
}

export default ScrollTableLayout
