import Nav from "../components/hotel/Nav.jsx";
import Portada from "../components/hotel/Portada.jsx";
import Habitacion from "../components/hotel/Habitacion.jsx";
import Servicio from "../components/hotel/Servicio.jsx";
import Ubicacion from "../components/hotel/Ubicacion.jsx"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './hotel.css';

import Explorar from "../components/hotel/Explorar.jsx";
import Footer from "../components/hotel/Footer.jsx";
import MapComponent from "../pruebas/Mapa.jsx";

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
                <div className="contHotel">

                    <Nav logo={dataHotel.logo} nombreHotel={dataHotel.nombre}></Nav>
                    <Portada fondo={dataHotel.portadas} nombre_hotel={dataHotel.nombre} descripcion={dataHotel.descripcion}></Portada>
                    <Habitacion habitaciones={dataHotel.habitaciones}></Habitacion>
                    <Servicio servicios={dataHotel.servicios} fotosServicios={dataHotel.fotosServicios}></Servicio>
                    <Explorar explorar={dataHotel.sitio}></Explorar>
                    {/* <Ubicacion></Ubicacion> */}
                    <MapComponent></MapComponent>
                    <Footer></Footer>
                    <div className="botonFijo"> 
                        <i className='bx bxl-whatsapp'></i>
                    </div>
                </div>
            }
        </>
    )
}
export default Hotel;