import cssServicio from './servicio.module.css'

function Servicio(props) {
  return (
    <>
      <div className={cssServicio.container}>
        <h1 className={cssServicio.texto1}>Servicios</h1>
        <div className={cssServicio.servicios}>

          <div className={cssServicio.servicio}>
            {
              props.servicios.map((x, pos) => (
                <div key={pos} className={cssServicio.serv}>
                  <img src={x.servicio} alt="" />
                  <div className={cssServicio.texto}>
                    <p>{x.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Servicio;
