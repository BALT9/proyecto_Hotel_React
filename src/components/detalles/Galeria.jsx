import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import gal from './Galeria.module.css'
import { useParams } from "react-router-dom";

function Galeria(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
    };

    let { nombreHotel } = useParams();
    let { habitacion } = useParams();



    return (
        <>
            {/* {JSON.stringify(props.colores)} */}
            {/* {JSON.stringify(props.habitacion[0].fotos)} */}
            {/* {
                props.habitacion.map((x,pos)=>(

                    
                ))
            } */}
            <div>
                {/* <h1>{nombreHotel}</h1>  */}
                {/* <p>{habitacion}</p> */}
                <div className={gal.cont}>
                    <div className={gal.container}>
                        <Slider {...settings}>
                            {
                                props.habitacion.fotos.map((x, pos) => (
                                    <img src={x} alt="" key={pos} />
                                ))
                            }
                        </Slider>
                    </div>
                    <div className={gal.textos}>
                        <h2>{props.habitacion.detalleHabitacion}</h2>
                        {/* <p>{props.habitacion[0].caracteristicas}</p> */}

                        {
                            props.habitacion.caracteristicas.map((a, p) => (
                                <ul key={p}>
                                    <li>{a}</li>
                                </ul>
                            ))
                        }
                        <button>Reservar</button>

                    </div>
                </div>
                <div className={gal.containerServ}>
                    <h2>Lo que este lugar ofrece</h2>
                    <div className={gal.servicios}>
                        {
                            props.habitacion.servicios.map((y, pos2) => (
                                <div className={gal.serv} key={pos2}>
                                    <p>- {y}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>




            </div>

        </>
    )
}
export default Galeria;