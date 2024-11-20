import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cssServicio from './servicio.module.css'

function Servicio(props) {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

  return (
    <>
      <div className={cssServicio.container}>
        <h1 className={cssServicio.texto1}>Servicios</h1>
        <div className={cssServicio.containerItems}>
            
            <div className={cssServicio.item1}>
              <Slider {...settings} >
                {
                  props.fotosServicios.map((w,posi)=>(
                      <img src={w} alt="" key={posi}/>
                  ))
                }
              </Slider>
            </div>
          
            
            <div className={cssServicio.services}>
              <h2>Contamos con los siguentes servicios</h2>
              <div className={cssServicio.itemsService}>
              {
                props.servicios.map((x,pos) => (
                  <div className={cssServicio.serv} key={pos}>
                    <img src={x.servicio} alt="" />
                    <p>{x.desc}</p>
                  </div>
                ))
              }
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Servicio;
