import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import "./Card.css"
const ListingCard = ({ listing }) => {
  return (
   <div className='card' >
      <img  className="poster" src={listing.imageURL} alt={listing.name} />
      <div className="poster-details">
        <div className="Title">{listing.name}</div>
        <p className="description">{listing.description}</p>
      </div>
      <div>
        <Link to={`/listing/${listing.id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
