import ImageCard from "./card"; 
import Link from 'next/link'; 

const Cards = ({ images }) => {
    return (
        <div>
            <h1>Cards</h1>
            <div className="cards-container">
                {images.map((image, index) => (
                    <Link href={`/image/${image.id}`} key={index}>
                        <a>
                            <ImageCard image={image} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const Map = () => {
    return (
        <div>
            <h1>Map</h1>

        </div>
    );
}

export default Map;