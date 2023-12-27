import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDetail from '../components/ListingDetail';

const ListingDetailPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  const fetchListingDetail = async () => {
    try {
      const response = await axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`);
      setListing(response.data);
    } catch (error) {
      console.error('Error fetching listing detail:', error);
    }
  };

  useEffect(() => {
    fetchListingDetail();
  }, [id]);

  return (
    <div className="flex justify-center">
      {listing ? <ListingDetail listing={listing} /> : <p>Loading...</p>}
    </div>
  );
};

export default ListingDetailPage;
