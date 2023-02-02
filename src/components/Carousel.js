import './Carousel.css';
import { useState } from "react";
import arrowBack from '../assets/arrow_back_ios-24px 1.png';
import arrowNext from '../assets/arrow_forward_ios-24px 1.png';


const Carousel = ({ pictures, title, }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="carousel">
      {pictures.map((picture, index, id) => index === currentIndex && (
        <div className="carousel-picture-container"
          key={id}>
          <img src={picture}
            alt={title} />
        </div>
      ))}
      {pictures.length > 1 && (
        <img src={arrowBack}
          alt="Previous arrow icon"
          onClick={handlePrev} 
          className='prev-arrow'/>
      )}
      {pictures.length > 1 && (
        <img src={arrowNext}
          alt="Next arrow icon"
          onClick={handleNext} 
          className='next-arrow'/>
      )}
    </div>
  )
}

export default Carousel;