import filledStar from "../assets/filled_star.png";
import emptyStar from "../assets/empty_star.png";

const Rating = ({ rating }) => {
  const ratingStars = [];

  for (let i = 0; i < rating; i++) {
    ratingStars.push(<img src={filledStar} alt="Filled star" key={i + "filled"} />);
  }

  for (let j = 0; j < 5 - rating; j++) {
    ratingStars.push(<img src={emptyStar} alt="Filled star" key={j + "empty"} />);
  }

  return (
    <div className="rating">
      {ratingStars}
    </div>
  )
}

export default Rating;
