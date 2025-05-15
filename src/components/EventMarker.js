import React from 'react'
import {Marker} from '@react-google-maps/api';


const EventMarker = ({event, setLocationInfo}) => {

    const [lng, lat] = event.geometries[0].coordinates;

    return (
        <Marker
            position = {{lat, lng}}
            icon={{ 
                url: 'https://api.iconify.design/mdi:alert-circle.svg?color=red',
                scaledSize: {width: 20, height: 20},
                }}

            onClick={() => {
                setLocationInfo({
                    type: event.categories[0].title,
                     id: event.id, 
                     title: event.title, 
                     date: event.geometries[0].date
                    })
            }}
                />
    )
}

export default EventMarker
