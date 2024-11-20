import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ini from './landingPage.module.css';
import { useParams } from 'react-router-dom';
// import Formulario1 from './Formulario1';
// import Formulario2 from './Formulario2';

function Landing(){
    let { nombreHotel } = useParams ();
    
    const handleClick = (url) => (event) => {
        event.preventDefault(); // Prevenir la navegación predeterminada
        window.open(url, '_blank', 'noopener,noreferrer'); // Abrir en nueva pestaña
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
                    <img src="https://www.nicepng.com/png/full/111-1117735_sello-de-gato-gato-logo.png" alt="" className={ini.img}/>

                    <div className={`${ini.links} ${ini[clase]}`}>
                        <img src="https://www.nicepng.com/png/full/111-1117735_sello-de-gato-gato-logo.png" alt=""/>
                        <a href="" >Inicio</a>
                        <a href="" >About us</a>
                        <a href="" >Contact</a>
                    </div>
                        
                    <div className={ini.login} id='links'>
                        <Link to={`/login`} className={ini.Link}>Ingresar</Link>
                        <Link to={`/registrarse`}><button className={ini.botonReserva}>Registrarse</button></Link>
                    </div>
                </nav>

                <div className={ini.portada}>
                    <div className={ini.wave}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path 
                                d="M-7.62,142.61 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                                className={ini.wave_path} 
                            />
                        </svg>
                    </div>
                    <div className={ini.cajas}>
                        <div className={ini.caja1}>
                            <div className={ini.text}>
                                <h1>Registra tu hotel fácilmente</h1>
                                <p>¡Bienvenido a [Nombre]! Registra tu hotel, alcanza a viajeros de todo el mundo y optimiza tu gestión.</p>
                                <Link to={`/registrarse`}><button className={ini.botonReserva}>Probar Ahora</button></Link>
                            </div>
                        </div>
                        <div className={ini.caja2}>
                            <img src="https://www.theflippedclassroom.es/wp-content/uploads/2021/01/imagen3-1.png" alt="" />
                        </div>
                    </div>
                </div>

            <div className={ini.container}>
                <section className={ini.section}>
                    <div className={ini.right}>
                        <img src="/src/components/img/img1.svg" />
                    </div>
                    <div className={ini.left}>
                        <div className={ini.text2}>
                            <h1>Nombre de la plataforma</h1>
                            <h2>Presentamos <span>Nombre de la Plataforma:</span>  la solución definitiva para la presencia online de tu hotel. En un mundo donde la primera impresión cuenta más que nunca, nuestro servicio especializado en creación de páginas web para hoteles.</h2>
                            <Link to={`/registrarse`}><button className={ini.botonReserva}>Probar Ahora</button></Link>
                        </div>
                    </div>
                </section>
            </div>

            <div className={ini.proyectos}>
                <h1>Nuestros Servicios</h1>
                <div className={ini.procontainer}>
                    <div className={ini.proyect}>
                        <img src="https://user-images.githubusercontent.com/99144223/181822433-7bc717d9-8297-46ee-91f1-c3f92473365d.png" alt="" />
                        <strong>Especialistas en diseño</strong>
                        <h3>Web Aap</h3>
                        <p>Somos grandes expertos en el desarrollo de aplicaciones web personalizadas que impulsan la eficiencia y potencian el crecimiento de tu negocio.</p>
                    </div>
                    <div className={ini.proyect}>
                        <img src="https://www.pragma.com.co/hs-fs/hubfs/ejj.png?width=512&name=ejj.png" alt="" />
                        <strong>Especialistas en diseño</strong>
                        <h3>Diseño Web</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet non consequatur atque excepturi impedit? Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className={ini.proyect}>
                        <img src="https://www.hubspot.com/hs-fs/hubfs/eCommerce-Nov-03-2023-08-53-17-7078-PM.png?width=595&height=400&name=eCommerce-Nov-03-2023-08-53-17-7078-PM.png" alt="" />
                        <strong>Especialistas en diseño</strong>
                        <h3>E-comerce</h3>
                        <p>lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet non consequatur atque excepturi impedit? Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                
                
            </div>

            <div className={ini.nuestroTrabajo}>
                <h1>Nuestros Trabajos</h1>
                <div className={ini.containerTrabajos}>
                    <Link to={`/hotel-dia`} onClick={handleClick('/hotel-dia')} className={ini.card}>
                        {/* <Link to={"/hotel-dia"} className={ini.card}> */}
                                <img src="https://image-tc.galaxy.tf/wijpeg-7bprglj25q1yswcz0qbfu8oea/portada-web.jpg?width=1920" alt="" />
                                <div className={ini.ver}>
                                    <p>Departamentos a su altura en la paz</p>
                                    <button>ver sitio..</button>
                                </div>
                        {/* </Link> */}
                    </Link>

                    <Link to={"/hotel-noche"} onClick={handleClick('/hotel-noche')} className={ini.card}>
                        
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/58/59/hotel-exterior.jpg?w=1200&h=-1&s=1" alt="" />
                            <div className={ini.ver}>
                                <p>Hotel Luna Bella</p>
                                <button>ver sitio..</button>
                            </div>
                        
                    </Link>
                    

                    <a href={"/hotel-dia"} onClick={handleClick} className={ini.card}>
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
        
            <footer className={ini.footer}>
                <div className={ini.foot}>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente laudantium consequatur assumenda exercitationem ipsa debitis sequi mollitia accusantium nisi?</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={ini.foot}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi perspiciatis libero, nemo pariatur repellendus?</p>
                </div>
                <div className={ini.foot}>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi perspiciatis libero, nemo pariatur repellendus?</p>
                    <div className={ini.redes}>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <i className='bx bxl-whatsapp'></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank">
                            <i className='bx bxl-tiktok'></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Landing;