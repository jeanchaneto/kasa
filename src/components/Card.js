import './Card.css';

const Card = ({cover, title}) => {
  return (
    <div className="card">
        <img src={cover} 
        alt={title} 
        className="card-image"/>
        <h2 className="card-text">{title}</h2>
    </div>
  )
}

export default Card;