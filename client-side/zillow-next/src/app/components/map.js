"use client";
import ImageCard from "./card"; // This import is unused, remove it.
import Link from 'next/link'; // This import is unused, remove it.
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useState, useEffect, useCallback, useMemo, memo } from "react"; // Combine imports
// dotenv is not needed here, remove it.

const Map = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        //{alert(window.innerWidth)}
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const containerStyle = {
      minWidth: '65rem !important',
      width: '65rem !important',
      height: '120%',
    };
  
    // Media Query Logic
    if (windowWidth <= 660) { 
      containerStyle.width = '350% !important';
      containerStyle.minWidth = '300% !important'; 
    }
  
    const locations = [
      { lat: 36.7783, lng: 119.4179 },
      { lat: 47.6062, lng: 122.3321 },
      { lat: 45.4215, lng: 75.6972 },
      { lat: 51.5074, lng: 0.1278 },
      { lat: 25.1972, lng: 50.2744 }
    ];
  
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 
    });
  
    const [map, setMap] = useState(null);
  
    const onLoad = useCallback((map) => {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach(location => bounds.extend(new window.google.maps.LatLng(location.lat, location.lng)));
      map.fitBounds(bounds);
      setMap(map);
    }, [locations]);
  
    const onUnmount = useCallback((map) => {
      setMap(null);
    }, []);
  
    const svgMarker = `data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="40" fill="red" />
    </svg>`;
  
    return (
      isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle} 
          zoom={2}
          center={{ lat: 40.7128, lng: -74.0060 }} 
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerClassName="testing"
        >
          {locations.map((location, index) => (
            <Marker key={index} position={location} icon={{ url: svgMarker, scaledSize: new window.google.maps.Size(30, 30) }} />
          ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )
    );
  };
  

export default memo(Map);
