"use client";

import ImageCard from "./image"; 

const Card = ({ beds, description, images, location, name, price, slug, id }) => {
    const imgs = document.querySelectorAll("img");
    return (

        <div className="card">
            {
 
                (()=> console.log(`${imgs}`.length))()
            }   <a href={`/property/${slug}`}>
                <h2>Property: {name}</h2>
            </a>
            <h3>Beds: {beds} beds</h3>
            <h3>
                <strong>Description: </strong>
                {description}
            </h3>
            <h3>
                <strong>Slug: </strong>
                {slug}
            </h3>

            {/* Conditional rendering for the first image with a placeholder */}
       
            {/* Conditional rendering for additional images */}
           

            <div className="price">${price}</div>
            
            <hr />
        </div>
    );
};

export default Card;