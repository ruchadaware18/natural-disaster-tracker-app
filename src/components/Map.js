//import GoogleMapReact from "google-map-react"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';
import EventMarker from './EventMarker';



const containerStyle = {
    width: '100vw',
    height: '100vh',

};

const center = {
    lat: 42.3265,
    lng: -122.8756
}


const Map = ({eventData, selectedCategory}) => {

    const [locationInfo, setLocationInfo] = useState(null);



    const markers = eventData
    .filter((ev) => ev.categories[0].id === selectedCategory)
    .map((ev, index) => (
        <EventMarker key={index} event={ev} setLocationInfo={setLocationInfo} />
    ));
    // ){
    //     if(ev.categories[0].id === 8){


    //         const [lng, lat] = ev.geometries[0].coordinates;

    //         return <Marker
    //             key = {index}
    //             position = {{lat, lng}}
    //             icon={{ url: 'https://api.iconify.design/mdi:fire-alert.svg?color=red',
    //                 scaledSize: {width: 20, height: 20},
    //              }}

    //             onClick={() => {
    //                 setlocationInfo({type: ev.categories[0].title, id: ev.id, title: ev.title, date: ev.geometries[0].date})
    //             }}
    //         />
    //     }
    //     return null;
    // })




  return (
    <div className="map">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center = {center}
            zoom = {6}
        >
            {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
            {markers}


        </GoogleMap>

        {locationInfo && <LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)} />}

      </LoadScript>
    </div>
  )
}



export default Map
