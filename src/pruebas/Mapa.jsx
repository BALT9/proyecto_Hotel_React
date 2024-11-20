// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Asegúrate de importar el CSS de Leaflet
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [51.505, -0.09]; // Coordenadas del centro del mapa
  const center = {
    lat: -16.611701,
    lng: -68.166638,
};
const posicion1 = [-16.611701,-68.166638]
  return (
    <>
      <h1>Nuestra Ubicacion</h1>
      <MapContainer center={posicion1} zoom={13} style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={posicion1}>
          <Popup>
            Un marcador en el mapa.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapComponent;
