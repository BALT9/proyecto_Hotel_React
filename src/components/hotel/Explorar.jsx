import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';

import exp from './explorar.module.css'

function Explorar(props){
    const settings = {
        // arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return(
        <>
            <div className={exp.cont_exp}>
                <h1 className={exp.titulo}>Explora</h1>
                <div className={exp.sliderContainer}>
                    <Slider {...settings}>
                        {
                        props.explorar.map((x,pos)=>(
                                <div key={pos} className={exp.containerBox}>
                                    <img src={x.lugar} alt="" /> 
                                    <div className={exp.overlay}>
                                        <p>{x.desc}</p>
                                    </div>
                                </div>
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default Explorar;