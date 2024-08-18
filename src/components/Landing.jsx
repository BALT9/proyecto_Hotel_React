import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ini from './landingPage.module.css';
import { useParams } from 'react-router-dom';


function Landing(){
    let { nombreHotel } = useParams ();
    
    const handleClick = (event) => {
        event.preventDefault(); // Prevenir la navegación predeterminada
        window.open('/hotel-noche', '_blank', 'noopener,noreferrer'); // Abrir en nueva pestaña
      };


    const [clase,setClase] = useState('uno');
    
    function menuIcono(){
        setClase(clase === 'uno' ? 'dos' : 'uno');
    };

    return(
        <>
            
                <nav className={ini.nav_bar}>
                    <div className={ini.icono}  id="icono" onClick={menuIcono}>
                        <span>&#9776;</span>
                    </div>

                    <div className={ini.logo}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gdZhAfPs1YlJmTEDi89nt8rplBTTx3I2kQ&s" alt="" />
                    </div>
                        
                    <div className={`${ini.links} ${ini[clase]}`} id='links'>
                        <a href="" >Inicio</a>
                        <a href="" >About us</a>
                        <a href="" >Contact</a>
                        <button className={ini.botonReserva}>Registrarse</button>
                    </div>
                </nav>

                <div className={ini.portada}>
                        <div className={ini.texto}>
                            <h1>Bienvenido registra tu pagina en nuestro sitio</h1>
                            <button>Registrarse</button>
                        </div>
                </div>

            <div className={ini.container}>
                <section className={ini.section}>
                    <div className={ini.left}>
                        <h1>Nombre de la plataforma</h1>
                        <h2>Presentamos <span>Nombre de la Plataforma:</span>  la solución definitiva para la presencia online de tu hotel. En un mundo donde la primera impresión cuenta más que nunca, nuestro servicio especializado en creación de páginas web para hoteles asegura que tu establecimiento destaque con elegancia y eficacia.</h2>
                    </div>
                    <div className={ini.right}>
                        <img src="https://static-assets.pixelied.com/conversions/png-to-svg/step2-graphic.png" alt="" />
                    </div>
                </section>
            </div>

            <div className={ini.nuestroTrabajo}>
                <h1>Nuestros Trabajos</h1>
                <div className={ini.containerTrabajos}>
                    <Link to={`/hotel-dia`} className={ini.card}>
                        {/* <Link to={"/hotel-dia"} className={ini.card}> */}
                                <img src="https://image-tc.galaxy.tf/wijpeg-7bprglj25q1yswcz0qbfu8oea/portada-web.jpg?width=1920" alt="" />
                                <div className={ini.ver}>
                                    <p>nombre del sitio</p>
                                    <button>ver sitio..</button>
                                </div>
                        {/* </Link> */}
                    </Link>

                    <Link to={"/hotel-noche"} onClick={handleClick} className={ini.card}>
                        
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/58/59/hotel-exterior.jpg?w=1200&h=-1&s=1" alt="" />
                            <div className={ini.ver}>
                                <p>nombre del sitio</p>
                                <button>ver sitio..</button>
                            </div>
                        
                    </Link>
                    

                    <a href={"/hotel-dia"} className={ini.card}>
                    {/* <Link to={"/hotel-ayer"} className={ini.card}> */}
                        
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/58/59/hotel-exterior.jpg?w=1200&h=-1&s=1" alt="" />
                            <div className={ini.ver}>
                                <p>nombre del sitio</p>
                                <button>ver sitio..</button>
                            </div>
                        
                    {/* </Link> */}
                    </a>


                </div>
            </div>
        </>
    )
}
export default Landing;