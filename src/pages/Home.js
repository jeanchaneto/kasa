import './Home.css';
import hero_banner from '../assets/hero_banner.jpg';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const Home = () => {

    const [accommodations, setAccommodations] = useState(null)

    useEffect(() => {
        fetch('/accommodations.json')
            .then(r => r.json())
            .then((data) => {
                setAccommodations(data)
            })
    }, [])

    if (!accommodations) {
        return null;
    }

    return (
        <div>
            <Banner picture={hero_banner}
                text="Chez vous, partout et ailleurs" />
            <div className="accommodations-gallery">
                {accommodations.map((accommodation) => (
                    <Link
                        to={`/accommodation/${accommodation.id}`}
                        key={accommodation.id}>
                        <Card
                            cover={accommodation.cover}
                            title={accommodation.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;