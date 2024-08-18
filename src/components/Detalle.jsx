import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Galeria from "./Galeria";

import './detalle.css'

function Detalle(){


    function cambiarColor(colores) {
        console.log("heyyyy 2");
        const nuevoColor = colores[0] ;
        const nuevoColor2 = colores[1] ;

        document.documentElement.style.setProperty('--primary-color', nuevoColor);
        document.documentElement.style.setProperty('--segundo-color', nuevoColor2);

    };

    // consumir datos
    let { nombreHotel } = useParams();
    let { habitacion } = useParams();

    const [dataHotel, setDataHotel] = useState();
    const [dataHabitacion,setDataHabitacion] = useState();

    useEffect(() => {
        consumirDatos()
        console.log("çççççç"+habitacion)
    }, [])


    async function consumirDatos() {
        const res = await fetch("./../data/hotel.json");
        const datos = await res.json();
        
        console.log(datos)
        console.log("me encontraste")
        console.log(habitacion)
        // console.log(nombreHotel)

        datos.map((x, pos) => {
            console.log(x.nombre);
            x.habitaciones.map((y,pos2)=>{
                console.log(y.slugHabitacion)

                if (nombreHotel == x.slug && habitacion == y.slugHabitacion) {
                    setDataHotel(x);
                    setDataHabitacion(y)
                    console.log("app: ",y)
                    cambiarColor(x.colores);
                    console.log("soy el "+y.slugHabitacion)
                }
            })
        })
    }
    return(
        <>
            {dataHotel &&
                <>
                    <Galeria colores={dataHotel.colores} habitacion={dataHabitacion}></Galeria>
                </>
            }
        </>
    )

}
export default Detalle;