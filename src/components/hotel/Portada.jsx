import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cssPortada from './Portada.module.css';


function Portada(props){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    return(
        <>  
                <div className={cssPortada.portada} >
                    <Slider {...settings}>
                        {
                            props.fondo.map((x, pos) => (
                                <div key={pos}>
                                  <img src={x} alt="" />
                                </div>
                              ))
                        }
                    </Slider>
                        <div className={cssPortada.textos}>
                            <h1>{props.nombre_hotel}</h1>
                            <p>{props.descripcion}</p>
                        </div>
                    
                </div>
            
            
        </>
    )
}
export default Portada;