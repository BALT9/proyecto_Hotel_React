import { useState} from 'react';

import DashAdmin from './dashboard/DashAdmin';
import DashApariencia from './dashboard/DashApariencia';
import DashRedes from './dashboard/DashRedes';

import GestorHabitaciones from './dashboard/GestorHabitaciones';

import dash from './dashboard.module.css';

function Dashboard() {
    const [clase, setClase] = useState('sidebar');
    const [isOverlayVisible, setOverlayVisible] = useState(true);


    const menuIcono = () => {
        setClase(clase === 'sidebar' ? 'close' : 'sidebar');
        setOverlayVisible(isOverlayVisible === true ? false: true);
    };

    const [activeTab, setActiveTab] = useState('admin');
    function tabcontent(){
        switch(activeTab){
            case 'admin':
                return <DashAdmin></DashAdmin>;
            case 'apariencia':
                return <DashApariencia />;
            case 'redes':
                return <DashRedes />;
            case 'gestorHabitaciones':
                return <GestorHabitaciones />
        }
    }

    return (
        <>
            <div className={dash.container}>
            {isOverlayVisible && <div className={dash.overlay} onClick={menuIcono}></div>}
                
                <nav className={`${dash.sidebar} ${dash[clase]}`}>
                    <header>
                        <div className={dash.image_text}>
                            <span className={dash.image}>
                                
                                <img src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-blank-circle-retro-logo-badges-vector-illustration-png-image_6132402.png" alt="" />
                            </span>
                            <div className={`${dash.text} ${dash.header_text}`}>
                                <span className={dash.name}>Baltimore</span>
                            </div>
                        </div>
                        <i className={`bx bxs-chevron-right ${dash.toggle}`} onClick={menuIcono}></i>
                    </header>

                    <div className={dash.menu_bar}>
                        <div className={dash.menu}>
                            <li className={dash.nav_link}>
                                <i className={`bx bxs-home ${dash.icon}`}></i>
                                <span className={`${dash.text} ${dash.nav_text}`}>Dashboard</span>
                            </li>
                            <li className={dash.nav_link} onClick={() => setActiveTab('admin')  }>
                                <a href="#" onClick={menuIcono}>
                                    <i className={`bx bxs-home ${dash.icon}`}></i>
                                    <span className={`${dash.text} ${dash.nav_text}`}>Inicio</span>
                                </a>
                            </li>
                            <li className={dash.nav_link} onClick={() => setActiveTab('apariencia')}>
                                <a href="#" onClick={menuIcono}>
                                    <i className={`bx bx-palette ${dash.icon}`}></i>
                                    <span className={`${dash.text} ${dash.nav_text}`}>Apariencia</span>
                                </a>
                            </li>
                            <li className={dash.nav_link} onClick={() => setActiveTab('redes')}>
                                <a href="#" onClick={menuIcono}>
                                    <i className={`bx bxs-planet ${dash.icon}`}></i>
                                    <span className={`${dash.text} ${dash.nav_text}`}>Redes Sociales</span>
                                </a>
                            </li>
                            <li className={dash.nav_link} onClick={() => setActiveTab('gestorHabitaciones')}>
                                <a href="#" onClick={menuIcono}>
                                    <i className={`bx bx-building-house ${dash.icon}`}></i>
                                    <span className={`${dash.text} ${dash.nav_text}`}>Habitaciones</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>
                <div className={dash.container_dashboard}>
                    <div className={dash.nav_movil}>
                        <div className={dash.iconoMenu} id="icono" onClick={menuIcono}>
                            <span>&#9776;</span>
                        </div>
                        <div className={dash.image_dash}>
                            <img src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-blank-circle-retro-logo-badges-vector-illustration-png-image_6132402.png" alt="" />
                        </div>
                    </div>
                    {/* <Admin /> */}
                    {tabcontent()}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
