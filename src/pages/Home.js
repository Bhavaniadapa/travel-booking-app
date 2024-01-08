import React, { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import { Divider } from "primereact/divider";
import ListingCard from "../components/ListingCard";
import axios from "axios";
import { Card } from "primereact/card";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Home.css";
import MapComponent from "./MapComponent";
import { ScrollPanel } from "primereact/scrollpanel";

const Home = () => {
  const customCardStyle = {
    boxShadow: "10px 5px 5px gray",
  };
  const [ocurrentPage, setoCurrentPage] = useState(1);
  const [olistings, setoListings] = useState([]);
  const [first, setFirst] = useState(1);
  const onPageChangeEvt = (event) => {
    console.log(event);
    setFirst(event.page + 1);
    ofetchListings(event.page + 1);
    
  };
  const ofetchListings = async (page) => {
    try {
      //debugger;
      const response = await axios.get(
        `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${page}&limit=10`
      );
      // await Promise.all([axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${page}&limit=10`),axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${2}&limit=10`)])
      // .then(((response1,response2)=>{
      //   console.log(response1.data);
      //   console.log(response2.data);
      // }))
      setoListings(response.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };
  useEffect(() => {
    ofetchListings(ocurrentPage);
  }, [ocurrentPage]);

  return (
    <div>
      <div style={customCardStyle}>
        <Card title={"Trip Advisor"} />
      </div>
      <Divider />
      {/* Maps Area */}
      <div className="components">
        <div className="map">
          <MapComponent olistings={olistings} />
        </div>

        <div className="hotels">
          <div className="sc">
            {olistings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <Paginator
            first={first - 1}
            rows={1}
            totalRecords={olistings.length}
            // leftContent={onNeg}
            //rightContent={onPageChangeEvt}
            onPageChange={onPageChangeEvt}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
