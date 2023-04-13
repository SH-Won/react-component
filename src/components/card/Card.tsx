import './Card.scss';

interface CardProps {
  imageUrl? : string
  height? : string
  objectFit? : string
}
const Card = (props : CardProps) => {
  const computedStyle = () : { [key :string] : string} => {
    return {
      height: props.height ?? '280px',
      objectFit : props.objectFit ?? 'fill',
    }
  }
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.imageUrl} style={computedStyle()} />
      </div>
    </div>
  )
}

export default Card