import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
const MapComponent = ({olistings}) => {
    const markers = olistings.map((oli) => {
        const temp ={lat: Number(oli.latitude) ,lng: Number(oli.longitude), title: `$${oli.price}`};
        return temp;
    })
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: markers[0]?.lat, lng: markers[0]?.lng },
      zoom: 3,
    });

    // Add markers or other map features as needed
    markers.forEach((marker) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: marker.title,
          });
          const googleMarker = new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map: map,
          title: marker.title,
        });
        infoWindow.open(map, googleMarker);
    
      });
    }, [markers]);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}
export default MapComponent;

MapComponent.propTypes = {
    olistings: PropTypes.object
}