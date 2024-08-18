import Nav from "./Nav";
import Portada from "./Portada";
import Habitacion from "./Habitacion";
import Servicio from "./Servicio";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './hotel.css';

import Detalle from './Detalle.jsx';

function Hotel() {

    // cambiar color
    // const [primaryColor, setPrimaryColor] = useState();

    function cambiarColor(colores) {
        console.log("heyyyy");
        const nuevoColor = colores[0] ;
        const nuevoColor2 = colores[1] ;

        document.documentElement.style.setProperty('--primary-color', nuevoColor);
        document.documentElement.style.setProperty('--segundo-color', nuevoColor2);
        // setPrimaryColor(nuevoColor);
        // setPrimaryColor(nuevoColor2);
    };


    // consumir datos
    let { nombreHotel } = useParams();
    const [dataHotel, setDataHotel] = useState();
    useEffect(() => {
        consumirDatos()
    }, [])


    async function consumirDatos() {
        const res = await fetch("./data/hotel.json");
        const datos = await res.json();

        console.log(datos)

        datos.map((x, pos) => {
            console.log(x.slug);
            if (nombreHotel == x.slug) {
                setDataHotel(x);
                cambiarColor(x.colores);
            }
        })
    }

    return (
        <>
            {/* {dataHotel && JSON.stringify(dataHotel.color)} */}      
            {dataHotel &&
                <>

                    <Nav logo={dataHotel.logo} ></Nav>
                    <Portada fondo={dataHotel.portadas} nombre_hotel={dataHotel.nombre} descripcion={dataHotel.descripcion}></Portada>
                    <Habitacion habitaciones={dataHotel.habitaciones}></Habitacion>
                    <Servicio servicios={dataHotel.servicios}></Servicio>
                    
                </>
            },
        </>
    )
}
export default Hotel;