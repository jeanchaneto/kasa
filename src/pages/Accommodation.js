import "./Accommodation.css";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";

const Accommodation = () => {
    const { id } = useParams();
    const [accommodationData, setAccommodationData] = useState(null)

    useEffect(() => {
        fetch('/accommodations.json')
            .then(r => r.json())
            .then((data) => {
                setAccommodationData(data.find((accommodation) => accommodation.id === id))
            })
    }, [])

    if (!accommodationData) {
        return null;
    }


    const { title, pictures, description, host, rating, location, equipments, tags } = accommodationData;

    return (
        <div className="accomodation-main">
            <Carousel pictures={pictures} />
            <div className="location-details-container">
                <div className="title-tags-container">
                    <div className="title-container">
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                    <Tags tags={tags} />
                </div>
                <div className= "host-rating-container">                  
                    <div className="host-container">
                        <h2>{host.name}</h2>
                        <img src={host.picture}
                            alt={host.name} />
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="description-equipments-container">
                <Collapse
                    title="Description"
                    content={description} />
                <Collapse
                    title="Équipements"
                    content={
                        equipments
                    } />
            </div>
        </div>
    )
}

export default Accommodation;