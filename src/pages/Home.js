import React, { useEffect, useState } from 'react';
import { Paginator } from 'primereact/paginator';
import { Divider } from 'primereact/divider';
import ListingCard from '../components/ListingCard';
import axios from 'axios';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Home = () => {
    const customCardStyle = {
        boxShadow: '10px 5px 5px gray',
      };
      const [ocurrentPage, setoCurrentPage] = useState(1);
      const [olistings, setoListings] = useState([]);
    const [first, setFirst] = useState(0);

    const onPageChangeEvt = (event) => {
        debugger;
        setFirst(event.first+1);
        ofetchListings(event.first+1);
    };

  const ofetchListings = async (page) => {
    try {
      //using the GET endpoint as the POST ENDPOINT  https://65841ac24d1ee97c6bcefd4e.mockapi.io/listings?completed=false&page=1&limit=10
      //not working due to maximum api calls exceded error which i mentioned in mail...
      // writtern code in such a way that it should work for pagination as well..
      const response = await axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/listings`);
      setoListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };
  useEffect(() => {
    ofetchListings(ocurrentPage);
  }, [ocurrentPage]);

  return (
    <div className="dataview-demo">
        <div style={customCardStyle}>
         <Card title={'Trip Advisor'} />
         </div>
         <Divider />
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection :'row'}}>
      {olistings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
      </div>
      <Paginator first={first} rows={10} totalRecords={olistings.length} onPageChange={onPageChangeEvt} />
    
    </div>
  );
};

export default Home;
