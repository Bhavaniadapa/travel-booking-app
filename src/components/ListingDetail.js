import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "./ListingDetail.css";
import { Divider } from "primereact/divider";
import { Card } from "primereact/card";
const ListingDetail = ({ listing }) => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Your Booking has been Done",
      life: 3000,
    });
  };
  const customCardStyle = {
    boxShadow: "10px 5px 5px gray",
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <Toast ref={toast} />
      <div className="image">
        <img src={listing.imageURL} alt={listing.name} />
      </div>
      <Divider />
      <div style={customCardStyle}>
        <Card>
          <div>
            <h2>{listing.name}</h2>
            <p>{listing.description}</p>
            <p>Listed by: {listing.listedBy}</p>
            <p>Listed on: {new Date(listing.listedOn).toDateString()}</p>
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "justify-content": "space-between",
              }}
            >
              <p>
                <i>{"Price: "}</i>
                <b>${listing.price}</b>
              </p>
              <Button
                label="Reserve"
                className="p-button-success"
                onClick={showSuccess}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ListingDetail;
