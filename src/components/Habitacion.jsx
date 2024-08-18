import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CssHabitacion from './Habitacion.module.css';
import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Next(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${CssHabitacion.flechaNext} ${className}`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function Prev(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${CssHabitacion.flechaPrev} ${className}`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
function Habitacion(props) {
    let { nombreHotel } = useParams ();

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Next className="slick-next"/>,
        prevArrow: <Prev className="slick-prev"/>,
    };
    
    
    
    function Reservar(){    
        alert("reservado");
    }

    return (
        <>
        {/* {JSON.stringify(props.habitaciones)} */}
            <div className={CssHabitacion.hotel}>
                <div className={CssHabitacion.habitacion}>
                    {
                        props.habitaciones.map((x, pos) => (

                            <Link to={`/${nombreHotel}/${x.slugHabitacion}`} key={pos} className={CssHabitacion.card}>

                                <div className={CssHabitacion.card_item}>
                                    <Slider {...settings}>
                                    {
                                        x.fotos.map((y,pos2)=>(
                                            <img key={pos2} src={y} alt="" />
                                        ))
                                    }
                                    </Slider>
                                    
                                    <div className={CssHabitacion.texto}>
                                        <h1>{x.detalleHabitacion}</h1>
                                        <p><strong>Cuenta con:</strong></p>{
                                            x.caracteristicas.map((m,n)=>(
                                                <ul key={n} className={CssHabitacion.lista}>
                                                    <li>{m}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                    <div className={CssHabitacion.info}>
                                        {
                                            (x.mostrarPrecio == true) && 
                                                <p>{x.precio}</p>

 
                                        }
        
                                        <button onClick={Reservar} className={CssHabitacion.btn}><i className='bx bxl-whatsapp'> WhatsAap</i></button>
                                    </div>
                                    
                                    

                                </div>

                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Habitacion;