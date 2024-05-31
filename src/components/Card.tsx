import React from "react";
interface CardProps {
  image: string | undefined | null;
  species: string | undefined | null;
  name: string | undefined | null;
  location: string | undefined | null;
}
const Card: React.FC<CardProps> = ({ image, species, name, location }) => {
  const defaultImage = "https://via.placeholder.com/150";
  return (
    <div>
      <div className="card">
        <img
          src={image || defaultImage}
          alt={name || ""}
          className="card-image"
        />
        <div className="card-body">
          <p className="card-species">{species}</p>
          <h3 className="card-name">{name}</h3>
          <p className="card-location">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
