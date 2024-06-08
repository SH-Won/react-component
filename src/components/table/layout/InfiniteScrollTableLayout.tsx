import { useLayoutEffect, useMemo, useRef } from 'react'

interface IScrollTableLayoutProps {
  scrollHeight?: number
  children: JSX.Element | JSX.Element[]
  isScrollable: boolean
}

const InfiniteScrollTableLayout = ({
  scrollHeight,
  children,
  isScrollable,
}: IScrollTableLayoutProps) => {
  const scrollElement = useRef<HTMLDivElement>(null)
  const computedLayoutStyles = useMemo(() => {
    if (!scrollHeight) return {}
    return {
      maxHeight: `${scrollHeight}px`,
    }
  }, [scrollHeight])
  useLayoutEffect(() => {
    if (!isScrollable) {
      scrollElement.current?.scrollTo(0, 0)
    }
  }, [scrollElement.current])
  return (
    <div className="table-wrapper">
      <div
        className="table-box"
        style={computedLayoutStyles}
        ref={scrollElement}
      >
        <table className="medichis-table scroll">{children}</table>
      </div>
    </div>
  )
}

export default InfiniteScrollTableLayout
