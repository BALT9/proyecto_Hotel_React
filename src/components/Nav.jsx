import { Link, Outlet } from "react-router-dom";
import './Nav.css'

function Nav(){
    return(
        <>
            <div className="nav-bar">
                <div className="img">
                    <img src="https://www.zarla.com/images/zarla-el-templo-1x1-2400x2400-20220106-683wpmjpp4b79j33vdp3.png?crop=1:1,smart&width=250&dpr=2" alt="" />
                </div>
                <div className="links">
                    <Link to={"/"} className="link">Inicio</Link>
                    <Link to={"/Habitacion"} className="link">Habitaciones</Link>
                    <Link to={"/app"} className="link">App</Link>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </>
    )
}
export default Nav;