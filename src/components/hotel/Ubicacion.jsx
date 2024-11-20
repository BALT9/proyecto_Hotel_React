import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ubi from './ubicacion.module.css';

const containerStyle = {
    width: '80%',
    height: '400px',
};

const center = {
    lat: -16.611701,
    lng: -68.166638,
};

// Definición de ubicaciones
const locations = [
    { name: 'Lugar 1', lat: -16.500000, lng: -68.100000 },
    { name: 'Lugar 2', lat: -16.600000, lng: -68.200000 },
    { name: 'Lugar 3', lat: -16.700000, lng: -68.300000 },
];

function Ubicacion() {
    const [markerPosition, setMarkerPosition] = useState(center); // Estado para la posición del marcador

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarkerPosition({ lat, lng }); // Actualiza la posición del marcador
        console.log(`Latitud: ${lat}, Longitud: ${lng}`); // Muestra la latitud y longitud en la consola
    };

    const handleSelectChange = (event) => {
        const selected = locations.find(loc => loc.name === event.target.value);
        if (selected) {
            setMarkerPosition({ lat: selected.lat, lng: selected.lng }); // Actualiza la posición del marcador
        }
    };

    return (
        <>
            <h1 className={ubi.titulo}>Nuestra Ubicacion</h1>
            <select onChange={handleSelectChange} style={{ margin: '10px' }}>
                <option value="">Seleccione un lugar</option>
                {locations.map((loc) => (
                    <option key={loc.name} value={loc.name}>
                        {loc.name}
                    </option>
                ))}
            </select>
            <div className={ubi.container_ubi}>
                <LoadScript googleMapsApiKey="AIzaSyC5Jl7QLg29bpg9O384Xeaw3iy2bqo_jOQ">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={markerPosition}
                        zoom={10}
                        onClick={handleMapClick} // Manejador de clics en el mapa
                    >
                        <Marker position={markerPosition} /> {/* Marcador en la posición actual */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </>
    );
}

export default Ubicacion;
