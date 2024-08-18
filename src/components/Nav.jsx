import { Link, Outlet } from "react-router-dom";
import nav from './Nav.module.css';
import { useState } from "react";

function Nav(props) {

    // const [logo,setLogo] = useState([]);

    // useEffect(() => {
    //     consumirDatos()
    // }, [])

    // function consumirDatos() {
    //     fetch("./data/habitaciones.json")
    //     .then(response => response.json())
    //     .then(json => setLogo(json))

    // }

    const [clase,setClase] = useState('uno');
    
    function menuIcono(){
        setClase(clase === 'uno' ? 'dos' : 'uno');
    };

    return (
        <>

            <div className={nav.nav_bar}>
                <div className={nav.icono} id="icono" onClick={menuIcono}>
                    <span>&#9776;</span>
                </div>
                <div className={nav.img}>
                    <img src={props.logo} alt="" />
                </div>

                <div className={`${nav.links} ${nav[clase]}`} id="links">
                    <Link to={"/"} className={nav.link} onClick={menuIcono}>Inicio</Link>
                    <Link to={"/Habitacion"} className={nav.link} onClick={menuIcono}>Habitaciones</Link>
                    <Link to={"/app"} className={nav.link} onClick={menuIcono}>Servicios</Link>
                    <button className={nav.botonReserva}>Reservar Ahora</button>
                </div>
            </div>
                    <Outlet></Outlet>

        </>
    )
}
export default Nav;