import { useEffect, useState } from 'react'
import './Habitacion.css'

function Habitacion() {

    const [listaHabitaciones, setListaHabitaciones] = useState([]);

    useEffect(() => {
        consumirDatos()
    }, [])

    function consumirDatos() {
        fetch("./data/habitaciones.json")
            .then(response => response.json())
            .then(json => setListaHabitaciones(json))

    }
    
    function Reservar(){
        alert("reservado");
    }

    return (
        <>
            <div className="hotel">
                <div className="habitacion">
                    {
                        listaHabitaciones.map((x, pos) => (
                            <div key={pos} className='card'>
                                <div className="card-item">
                                    <img src={x.foto} alt="" />
                                    <div className="texto">
                                        <h1> Nro de Habitacion: {x.nroHabitacion}</h1>
                                        <p>Tamaño {x.tamano}</p>
                                        <p>Camas {x.camas}</p>
                                    </div>
                                    <button onClick={Reservar}>Reservar</button>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Habitacion;