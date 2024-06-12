interface IBasicTableLayoutProps {
  children: JSX.Element | JSX.Element[]
}
const BasicTableLayout = ({ children }: IBasicTableLayoutProps) => {
  return <table className="medichis-table">{children}</table>
}

export default BasicTableLayout
